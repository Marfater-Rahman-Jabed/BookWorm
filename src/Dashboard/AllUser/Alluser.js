import { async } from '@firebase/util';
import React from 'react';
import { useQuery } from 'react-query';

const Alluser = () => {

    const { data: Alluser = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/alluser`)
            const data = res.json();
            return data;
        }
    })

    const handleAdmin = (id) => {
        fetch(`http://localhost:5000/alluser/admin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()

            })
    }
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/alluser/${id}`, {
            method: 'DELETE'
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>

                        {
                            Alluser.map((user, i) => <tr key={user._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{user.userName}</td>
                                <td>{user.email}</td>
                                {user?.role !== 'admin' ? <td><button className='btn btn-sm btn-success' onClick={() => handleAdmin(user._id)}>Make Admin</button></td> : <td className='text-center text-success font-bold'>Admin</td>}
                                {user?.role !== 'admin' ? <td><button className='btn btn-sm btn-error' onClick={() => handleDelete(user._id)}>Delete</button></td> : <td></td>}
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alluser;