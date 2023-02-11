import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCategoryDeyails from './BookCategoryDeyailsCard';

const BookCategoryDetails = () => {
    const books = useLoaderData();
    const BookList = books[0].friends
    // console.log(BookList)
    return (
        <div>
            <div>
                <h1 className='text-center text-blue-600 text-5xl my-12 shadow-2xl font-bold'>Books are Available Here</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-6'>
                {
                    BookList.map((book, i) => <BookCategoryDeyails
                        key={i}
                        book={book}
                    ></BookCategoryDeyails>)
                }
            </div>
        </div>
    );
};

export default BookCategoryDetails;