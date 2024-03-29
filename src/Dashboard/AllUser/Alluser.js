import { async } from '@firebase/util';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { TiTick } from 'react-icons/ti';
import { AuthContexts } from '../../Contexts/AuthContext';

const Alluser = () => {
    const { deleteUsers } = useContext(AuthContexts)

    const { data: Alluser = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/alluser`, {
                method: 'GET',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = res.json();
            return data;
        }
    })

    const handleAdmin = (id) => {
        fetch(`http://localhost:5000/alluser/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()

            })
    }
    const handleDelete = (id, email) => {
        fetch(`http://localhost:5000/alluser/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
            })


        // deleteUsers(email)
        //     .then(() => {

        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
    }

    const handleVerify = (id) => {
        fetch(`http://localhost:5000/alluser/verify/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()

            })
    }

    return (
        <div>
            <div className="">

                <table className="table w-full">

                    <thead>
                        <tr className='text-center'>
                            <th>Sl No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th >Admin Panel</th>
                            <th >Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>

                        {
                            Alluser.map((user, i) => <tr key={user._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{user.userName}</td>
                                <td>{user.email}</td>

                                {user?.role !== 'admin' ? <td><button className='btn btn-sm btn-success text-xs' onClick={() => handleAdmin(user._id)}>Make Admin</button></td> : <td className='text-center text-success font-bold'>Admin</td>}

                                {user?.role === 'admin' ? <td> </td>
                                    : <td>{user?.role === 'seller' ? <td className='text-blue-500 font-bold' >{user?.verifyed === 'verifyed' ? <TiTick className='text-3xl'></TiTick> : <button className='btn btn-sm btn-success text-xs' onClick={() => handleVerify(user._id)}>Make verifyed seller</button>} </td>
                                        :
                                        <td className='text-blue-500 font-bold'>Buyer</td>} </td>
                                }

                                {user?.role !== 'admin' ? <td><button className='btn btn-sm btn-error text-xs' onClick={() => handleDelete(user._id, user.email)}>Delete</button></td> : <td></td>}

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alluser;