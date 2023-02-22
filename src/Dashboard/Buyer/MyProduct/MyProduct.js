import { async } from '@firebase/util';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContexts } from '../../../Contexts/AuthContext';

const MyProduct = () => {
    const { user } = useContext(AuthContexts)
    const { data: myProducts = [] } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproduct?email=${user?.email}`);
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
                            <th>Posted Time</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            myProducts.map((product, i) => <tr className='hover' key={i}>
                                <th>{i + 1}</th>
                                <td><img src={product.picture} alt="" className='w-12 h-12' /></td>
                                <td>{product.name}</td>
                                <td>{product.OrginalPrice}</td>
                                <td>{product.postedTime}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyProduct;