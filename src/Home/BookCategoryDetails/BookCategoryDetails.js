import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import BookCategoryDeyails from './BookCategoryDeyailsCard';

const BookCategoryDetails = () => {
    const books = useLoaderData();
    const BookList = books[0]?.friends;
    const [modalName, setModalName] = useState(null)
    // console.log(books[0].name)
    return (
        <div>
            <div>
                <h1 className='text-center text-blue-600 text-5xl my-12 shadow-2xl font-bold'>{books[0].name.split(' ')[0]} items  are Available Here</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-6'>
                {
                    BookList.map((book, i) => <BookCategoryDeyails
                        key={i}
                        book={book}
                        setModalName={setModalName}
                    ></BookCategoryDeyails>)
                }
            </div>
            {
                modalName && <ConfirmationModal
                    modalName={modalName}
                    setModalName={setModalName}

                ></ConfirmationModal>
            }
        </div>
    );
};

export default BookCategoryDetails;