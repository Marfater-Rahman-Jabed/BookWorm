import React from 'react';
import { useQuery } from 'react-query';
import { TiTick } from 'react-icons/ti';


const AllBuyer = () => {
    const { data: AllBuyer = [], refetch } = useQuery({
        queryKey: ['buyer'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allBuyer`)
            const data = res.json();
            return data;
        }
    })

    const handleDelete = (id) => {

        // console.log('delete')
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
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            AllBuyer.map((seller, i) => <tr className="hover" key={i}>
                                <th>{i + 1}</th>
                                <td>{seller.userName}</td>
                                <td>{seller.email}</td>
                                <td><button className='btn btn-error' onClick={() => handleDelete(seller._id)}>Delete</button></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;