import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContexts } from '../../../Contexts/AuthContext';

const AddProduct = () => {

    const { user } = useContext(AuthContexts)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageKey = process.env.REACT_APP_imageKey;
    // console.log(imageKey)

    const handleAddProduct = (data) => {
        // console.log(data);
        const formData = new FormData();
        const image = data.image[0];

        formData.append('image', image)

        fetch(`https://api.imgbb.com/1/upload?key=${imageKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(image => {
                // console.log(image.success)
                if (image.success) {

                    const productDetails = {

                        CategoryId: data.category,
                        picture: image.data.url,
                        name: data.productName,
                        Author: user.displayName,
                        location: data.location,
                        yearOfUses: data.yearOfUse,
                        postedTime: new Date(),
                        resalePrice: data.originalPrice,
                        OrginalPrice: data.resalePrice

                    }
                    fetch('http://localhost:5000/book', {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(productDetails)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                        })
                }
            })

    }

    return (
        <div>
            <h1 className='mt-5 text-center text-orange-500 font-semibold text-3xl'>Add Your Products here</h1>
            <form className='grid grid-cols-1 w-1/2 mx-auto  gap-3 mt-4  border-4 rounded-lg bg-slate-400' onSubmit={handleSubmit(handleAddProduct)}>


                <select className="select input-bordered input-primary w-full" {...register('category')}>

                    <option disabled selected>Select Category</option>
                    <option value='63ef13d8e95db09c76ca4bd2'>Religious</option>
                    <option value='63ef13d8e95db09c76ca4bd3'>Novel</option>
                    <option value='63ef13d8e95db09c76ca4bd4'>Science Fiction</option>
                    <option value='63ef13d8e95db09c76ca4bd5'>Academic</option>
                    <option value='63ef13d8e95db09c76ca4bd6'>Kids Book</option>
                    <option value='63ef13d8e95db09c76ca4bd7'>Magazine</option>
                </select>
                <input type="text" placeholder="Enter Product Name" className="input input-bordered input-primary w-full "  {...register('productName')} />
                <input type="tel" placeholder="Product Original Price" className="input input-bordered input-primary w-full "  {...register('resalePrice')} />
                <input type="tel" placeholder="Mobile Number" className="input input-bordered input-primary w-full " {...register('phoneNumber')} />
                <input type="text" placeholder="Location" className="input input-bordered input-primary w-full " {...register('location')} />
                <input type="tel" placeholder="Selling Price" className="input input-bordered input-primary w-full " {...register('originalPrice')} />
                <input type="tel" placeholder="Year of Purchase" className="input input-bordered input-primary w-full " {...register('yearOfUse')} />
                <input type="file" placeholder="image" className="input input-bordered input-primary w-full align-middle " {...register('image')} />
                <input type="submit" value="submit" className="btn btn-primary mb-2 w-full " />
            </form>
        </div>
    );
};

export default AddProduct;