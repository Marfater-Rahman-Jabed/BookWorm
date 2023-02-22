import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContexts } from '../Contexts/AuthContext';

const Dashboard = () => {
    const { user } = useContext(AuthContexts)
    const { data: Orders = [] } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/orders?email=${user?.email}`);
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
                                <td>{order.price}</td>
                                <td><button className='btn btn-success btn-sm'>Pay</button></td>


                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;