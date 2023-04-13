import React, { useContext } from 'react';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

import { AuthContexts } from '../../Contexts/AuthContext';
import { TiTick } from 'react-icons/ti';
import useVerifyed from '../../Hooks/useVerifyed';

const BookCategoryDeyails = ({ book, setModalName }) => {
    // console.log(book)
    const { user } = useContext(AuthContexts)
    const { picture, name, price, rating, Author, location, yearOfUses, postedTime, resalePrice, OrginalPrice } = book;
    const [verifyed] = useVerifyed(user?.email)
    // console.log(verifyed)
    // here original price is really resaleprice. it is my data update mistake
    // console.log(BookList)
    return (

        <div className="card card-compact bg-slate-300 shadow-xl">
            <figure><img src={picture} alt={name ? name : 'Book'} className='w-full h-80' /></figure>
            <div className="card-body bg-slate-300 rounded-md ">
                <h2 className="card-title font-bold text-3xl">{name}</h2>
                <div className='flex justify-between'>
                    <div className='w-1/2'>

                        <p>Uses year: {yearOfUses} year</p>
                        <p className='text-blue-500 font-semibold '>Original price: ${resalePrice}</p>
                        <p className='text-orange-500 font-semibold '>Resale Price: ${OrginalPrice}</p>

                    </div>
                    <div className='w-1/2'>
                        <span>
                            <p className='font-semibold flex'>Author :{Author}</p>
                            <>Location:{location}</>
                        </span>
                        <p>Posted time: {postedTime?.slice(0, 10)}</p>

                    </div>
                </div>
            </div>
            <div className="card-actions justify-end mt-3 mb-0">
                <label htmlFor="ConfirmModal" className="btn btn-primary w-full mb-0" onClick={() => setModalName(book)}>Book Now</label>

            </div>


        </div>

    );
};

export default BookCategoryDeyails;