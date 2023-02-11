import React from 'react';
import { Link } from 'react-router-dom';

const BookCategoryCard = ({ category }) => {


    const { picture, name, _id } = category;
    // console.log(category.name)
    return (
        <div>
            <div className="card card-compact bg-slate-300 shadow-xl">
                <figure><img src={picture} alt="Shoes" className='w-full h-48' /></figure>
                <div className="card-body bg-slate-300 rounded-lg">
                    <h2 className="card-title text-3xl text-orange-600">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={`/Book/${_id}`}><button className="btn btn-primary" >SEE DETAILS</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCategoryCard;