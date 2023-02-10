import React from 'react';

const BookCategoryDeyails = ({ book }) => {
    console.log(book)
    const { picture, name, price, rating, Author } = book
    return (

        <div className="card card-compact bg-base-500 shadow-xl">
            <figure><img src={picture} alt="Shoes" className='w-full h-80' /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <div className='flex justify-between'>
                    <p className='text-orange-500 font-semibold'>Price: {price}</p>
                    <p className='text-orange-500 font-semibold'>Rating : {rating}</p>

                </div>
                <p>Author : {Author}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default BookCategoryDeyails;