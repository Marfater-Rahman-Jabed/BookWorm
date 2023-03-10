import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { AuthContexts } from '../Contexts/AuthContext';

const Dashboard = () => {
    const { user } = useContext(AuthContexts)
    const { data: Orders = [] } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(`https://used-book-server.vercel.app/orders?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = res.json();
            return data;
        }
    })
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
                                {order?.paid ? <td className='text-success font-bold'>Paid</td> : <td><Link to={`/dashboard/payment/${order._id}`} className='btn btn-error success btn-sm' >Make Pay</Link></td>}


                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;