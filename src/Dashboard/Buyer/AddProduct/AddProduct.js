import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContexts } from '../../../Contexts/AuthContext';

const AddProduct = () => {

    const { user } = useContext(AuthContexts)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageKey = process.env.REACT_APP_imageKey;
    const navigate = useNavigate();
    // console.log(imageKey)

    const handleAddProduct = (data) => {
        // console.log(data);
        const formData = new FormData();
        const image = data.image[0];
        // const CatId = data.category;

        formData.append('image', image)

        fetch(`https://api.imgbb.com/1/upload?key=${imageKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(image => {
                // console.log(image.success)
                if (image.success) {

                    const CategoryIds = data.category.split(' ')[0];
                    const NaviCat = data.category.split(' ')[1]
                    console.log(CategoryIds)

                    const productDetails = {

                        CategoryId: CategoryIds,
                        picture: image.data.url,
                        name: data.productName,
                        email: user?.email,
                        Author: user.displayName,
                        location: data.location,
                        yearOfUses: data.yearOfUse,
                        postedTime: new Date(),
                        resalePrice: data.resalePrice,
                        OrginalPrice: data.originalPrice

                    }
                    console.log(productDetails)
                    fetch('https://used-book-server.vercel.app/book', {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',

                            authorization: `bearer ${localStorage.getItem('accessToken')}`

                        },
                        body: JSON.stringify(productDetails)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                toast.success('Your Book is successfully added')
                                navigate(`/Book/${NaviCat}`)
                            }
                        })


                    fetch('https://used-book-server.vercel.app/sellerbook', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`

                        },
                        body: JSON.stringify(productDetails)

                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                        })
                }
            })

    }

    return (
        <div>
            <h1 className='mt-5 text-center text-orange-500 font-semibold text-3xl'>Add Your Products here</h1>
            <form className='grid grid-cols-1 w-1/2 mx-auto  gap-3 mt-4  border-4 rounded-lg bg-slate-400' onSubmit={handleSubmit(handleAddProduct)}>


                <select className="select input-bordered input-primary w-full" {...register('category')}>

                    <option disabled selected defaultValue={' '}>Select Category</option>
                    <option value='63ef13d8e95db09c76ca4bd2 63e63c0c1e93df93066df547'>Religious</option>
                    <option value='63ef13d8e95db09c76ca4bd3 63e63c0c1e93df93066df548'>Novel</option>
                    <option value='63ef13d8e95db09c76ca4bd4 63e63c0c1e93df93066df549'>Science Fiction</option>
                    <option value='63ef13d8e95db09c76ca4bd5 63e63c0c1e93df93066df54a'>Academic</option>
                    <option value='63ef13d8e95db09c76ca4bd6 63e63c0c1e93df93066df54b'>Kids Book</option>
                    <option value='63ef13d8e95db09c76ca4bd7 63e63c0c1e93df93066df54c'>Magazine</option>
                </select>
                <input type="text" placeholder="Enter Product Name" className="input input-bordered input-primary w-full "  {...register('productName')} />
                <input type="tel" placeholder="Product Original Price" className="input input-bordered input-primary w-full "  {...register('resalePrice')} />
                <input type="tel" placeholder="Mobile Number" className="input input-bordered input-primary w-full " {...register('phoneNumber')} />
                <input type="text" placeholder="Location" className="input input-bordered input-primary w-full " {...register('location')} />
                <input type="tel" placeholder="Selling Price" className="input input-bordered input-primary w-full " {...register('originalPrice')} />
                <input type="tel" placeholder="Year of Purchase" className="input input-bordered input-primary w-full " {...register('yearOfUse')} />

                <input type="file" placeholder="image" className="input input-bordered input-primary input-sm w-full align-middle " {...register('image')} />
                <input type="submit" value="submit" className="btn btn-primary mb-2 w-full " />
            </form>
        </div>
    );
};

export default AddProduct;