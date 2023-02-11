import React from 'react';

const BookCategoryDeyails = ({ book }) => {
    console.log(book)
    const { picture, name, price, rating, Author } = book
    return (

        <div className="card card-compact bg-slate-300 shadow-xl">
            <figure><img src={picture} alt="Shoes" className='w-full h-80' /></figure>
            <div className="card-body bg-slate-300 rounded-md">
                <h2 className="card-title font-bold text-3xl">{name}</h2>
                <div className='flex justify-between'>
                    <div><p className='text-orange-500 font-semibold text-3xl'>Price: {price}</p></div>
                    <div><p className='text-blue-500 font-semibold text-3xl'>Rating : {rating}</p></div>

                </div>
                <p className='font-semibold '>Author : {Author}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default BookCategoryDeyails;