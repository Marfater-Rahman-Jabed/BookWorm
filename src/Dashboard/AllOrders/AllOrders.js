import { async } from '@firebase/util';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const AllOrders = () => {
    const { data: allOrders = [], refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allorders`, {
                method: 'GET',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = res.json();
            return data;
        }

    })
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/allorders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Successfully Deleted')
                    refetch()
                }

            })
    }
    return (
        <div>
            <div className="overflow-x-auto ">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Sl No/ <br />Total : <span className='text-orange-700 font-bold'>{allOrders.length}</span></th>
                            <th>Book <br /> Photo</th>
                            <th>Book <br /> Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Transection <br /> id</th>
                            <th>Payment <br /> Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allOrders.map((order, i) => <tr key={i} className='hover'>
                                <th>{i + 1}</th>
                                <td >
                                    <div className="avatar">
                                        <div className="mask mask-squircle lg:w-8 lg:h-8 md:w-8 md:h-8 sm:w-4 sm:h-4">
                                            <img src={order.picture} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td className='lg:text-sm md:text-xs sm:text-xs '>{order.BookName}</td>
                                <td className='lg:text-sm md:text-xs sm:text-xs ' title={order.email}>{order.email.split("@")[0]}...</td>
                                <td className='lg:text-sm md:text-xs sm:text-xs ' title={order.phone}>01***{order.phone.slice(-3)}</td>
                                <td className='lg:text-sm md:text-xs sm:text-xs '>{order.location}</td>
                                <td className='lg:text-sm md:text-xs sm:text-xs ' title={order.transectionId}>{order.transectionId.slice(0, 9)}...</td>
                                <td className='lg:text-sm md:text-xs sm:text-xs '>{order.paid === true ? <span className='text-green-700 font-bold'>Paid</span> : <span className='text-red-700 font-bold'>Not Paid</span>}</td>
                                <td className='lg:text-sm md:text-xs sm:text-xs '><button className='btn btn-sm bg-red-700' title='Delete' onClick={
                                    () => handleDelete(order._id)}>X</button></td>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllOrders;