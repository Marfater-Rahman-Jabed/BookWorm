import { async } from '@firebase/util';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { AuthContexts } from '../../../Contexts/AuthContext';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,

} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import BookUpdateModal from '../../../Home/BookUpdateModal/BookUpdateModal';


const MyProduct = () => {
    const { user } = useContext(AuthContexts);
    const [quantityModal, setQuantityModal] = useState(null)
    const [isAdvertise, setIsAdvertise] = useState(false)
    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproduct?email=${user?.email}`);
            const data = res.json();
            return data;

        }

    })
    // {
    console.log(myProducts)
    // let filterproduct = myProducts.filter(prod => prod.friends.email === user?.email)
    // console.log(filterproduct)
    // }
    const handleAdvertise = (id, product) => {
        console.log(product);
        toast.success('Successfully add Advertisement Section. You get 2 days Free advertise.. Then you have to pay for Show Advertise.')
        setIsAdvertise(true)
        const productDetail = {
            productId: product._id,
            BookId: product.BookId,
            Qunatity: product.Qunatity,
            picture: product.picture,
            OrginalPrice: product.OrginalPrice,
            name: product.name,
            email: product.email,
            location: product.location,
            yearOfUses: product.yearOfUses,
            validTime: new Date(new Date().getTime() + 48 * 60 * 60 * 1000).toGMTString()
        }
        console.log(productDetail)

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
    const handleProductDelete = (id) => {
        fetch(`http://localhost:5000/myproductdelete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Successfully Deleted')
                refetch()
            })

    }
    // const handleBookUpdate = (id) => {
    //     // console.log(id)
    //     fetch(`http://localhost:5000/updatebookquantity/${id}`, {
    //         method: "PUT",
    //     })
    // }
    return (
        <div>
            <div >
                <p className='text-2xl text-center pb-4 pt-4 bg-blue-500 text-white'>Welcome to your profile MR. <span className=''>{user?.displayName}</span></p>

                <h1 className='text-2xl  pb-2 text-orange-500 '><i><u>Lets see Your sells progress Report : </u></i></h1>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  my-3 pl-16 mx-auto'>
                {
                    myProducts.map((prod, i) => <div className='w-40 h-40' key={i}>
                        <CircularProgressbarWithChildren value={(prod.initialQuantity - prod.Qunatity) * 100 / prod.initialQuantity} className=''>

                            <img style={{ width: 55, height: 55, marginTop: -5 }} src={prod.picture} alt={prod.name} className='rounded-full' />
                            <div style={{ fontSize: 14, marginTop: -2 }}>
                                <strong className='text-center mx-8 font-bold text-3xl'>{((prod.initialQuantity - prod.Qunatity) * 100 / prod.initialQuantity).toString().split(".")[0]}%</strong>
                                <p className='mx-7'>Success rate</p>
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>)
                }

            </div>
            <h1 className='text-2xl  pt-6 pb-2  text-orange-500'><i><u>Lets see Your Product details Report : </u></i></h1>
            <div className="overflow-x-auto pb-10">
                <table className="table w-full">

                    <thead >
                        <tr >
                            <th className='bg-blue-600 text-white'>Sl No</th>
                            <th className='bg-blue-600 text-white'>Picture</th>
                            <th className='bg-blue-600 text-white'>Book Name</th>
                            <th className='bg-blue-600 text-white'>Price</th>
                            <th className='bg-blue-600 text-white'>Posted Time</th>
                            <th className='bg-blue-600 text-white'>Available</th>
                            <th className='bg-blue-600 text-white'>Profit</th>
                            <th className='bg-blue-600 text-white'>Make Advertise</th>
                            <th className='bg-blue-600 text-white'>Delete</th>


                        </tr>
                    </thead>
                    <tbody>

                        {
                            myProducts.map((product, i) => <tr className='hover' key={i}>
                                <th>{i + 1}</th>
                                <td><img src={product.picture} alt="" className='w-12 h-12' /></td>
                                <td>{product.name}</td>
                                <td>{product.OrginalPrice}</td>
                                <td>{product?.postedTime?.slice(8, 10)}{product?.postedTime?.slice(4, 7)}-{product?.postedTime?.slice(0, 4)}</td>
                                <td className='text-center'><span className='font-bold'>{product?.Qunatity}</span> <small>items</small></td>
                                <td className='font-bold'>$ {(product?.OrginalPrice) * (product.initialQuantity - product.Qunatity)} </td>
                                <td>

                                    {product?.Qunatity > 0 ? <button className='btn btn-success btn-sm' onClick={() => handleAdvertise(product._id, product)}>Advertise</button> : <label htmlFor="UpdateModal" className='btn bg-red-600 hover:bg-red-700 btn-sm animate-pulse' onClick={() => setQuantityModal(product?.BookId)}>UnAvailable</label>}

                                </td>
                                <td >
                                    <button className='btn btn-sm bg-orange-700 px-6 hover:bg-red-700' title="Delete"
                                        onClick={() => handleProductDelete(product._id)}>X</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {quantityModal && <BookUpdateModal

                quantityModal={quantityModal}
                setQuantityModal={setQuantityModal}

            ></BookUpdateModal>}

        </div>
    );
};

export default MyProduct;