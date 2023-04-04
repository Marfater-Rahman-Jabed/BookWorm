import { async } from '@firebase/util';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { AuthContexts } from '../../../Contexts/AuthContext';

const MyProduct = () => {
    const { user } = useContext(AuthContexts);
    const [isAdvertise, setIsAdvertise] = useState(false)
    const { data: myProducts = [] } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproduct?email=${user?.email}`);
            const data = res.json();
            return data;

        }
    })

    const handleAdvertise = (id, product) => {
        console.log(product);
        toast.success('Successfully add Advertisement Section. You get 30 days Free advertise.. Then you have to pay for Show Advertise.')
        setIsAdvertise(true)
        const productDetail = {
            productId: product._id,
            picture: product.picture,
            OrginalPrice: product.OrginalPrice,
            name: product.name,
            email: product.email,
            location: product.location,
            yearOfUses: product.yearOfUses,
        }

        fetch(`http://localhost:5000/advertise`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

                authorization: `bearer ${localStorage.getItem('accessToken')}`

            },
            body: JSON.stringify(productDetail)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })

    }
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
                            <th>Make Advertise</th>


                        </tr>
                    </thead>
                    <tbody>

                        {
                            myProducts.map((product, i) => <tr className='hover' key={i}>
                                <th>{i + 1}</th>
                                <td><img src={product.picture} alt="" className='w-12 h-12' /></td>
                                <td>{product.name}</td>
                                <td>{product.OrginalPrice}</td>
                                <td>{product.postedTime.slice(0, 10)}</td>
                                <td>

                                    <button className='btn btn-success btn-sm' onClick={() => handleAdvertise(product._id, product)}>Advertise</button>

                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyProduct;