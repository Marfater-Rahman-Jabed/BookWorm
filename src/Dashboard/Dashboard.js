import React, { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { AuthContexts } from '../Contexts/AuthContext';

const Dashboard = () => {
    const { user } = useContext(AuthContexts)
    const { data: Orders = [] } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/orders?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = res.json();
            return data;
        }
    })

    // const handlePay = () => {

    //     fetch(`http://localhost:5000/init`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })

    // }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Picture</th>
                            <th>Book Name</th>
                            <th>Price</th>
                            <th>Make Payment</th>


                        </tr>
                    </thead>
                    <tbody>

                        {
                            Orders.map((order, i) => <tr className='hover' key={i}>
                                <th>{i + 1}</th>
                                <td><img src={order.picture} alt="" className='w-12 h-12' /></td>
                                <td>{order.BookName}</td>
                                <td> $ {order.price}</td>
                                {order?.paid === true ? <td className='text-success font-bold'>Paid</td> : <td><Link to={`/dashboard/payment/${order?._id}`}>
                                    <button className='btn bg-orange-600 btn-sm'>Pay</button>
                                </Link></td>}


                            </tr>)
                        }
                    </tbody>
                </table>

            </div>
            {Orders.length > 0 ? <div className='flex justify-end'>
                {
                    <button className='btn btn-primary mb-3 print:hidden' onClick={() => window.print()}>Print Your Order</button>
                }
            </div> :
                <div className='text-center text-5xl text-orange-700 mt-20'>
                    <p>No Order Confirm Yet...</p>
                </div>
            }
        </div>
    );
};

export default Dashboard;