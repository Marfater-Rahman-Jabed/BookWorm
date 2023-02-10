import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCategoryDeyails from './BookCategoryDeyailsCard';

const BookCategoryDetails = () => {
    const books = useLoaderData();
    const BookList = books[0].friends
    // console.log(BookList)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6'>
            {
                BookList.map((book, i) => <BookCategoryDeyails
                    key={i}
                    book={book}
                ></BookCategoryDeyails>)
            }
        </div>
    );
};

export default BookCategoryDetails;