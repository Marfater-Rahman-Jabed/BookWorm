import React from 'react';
import { useQuery } from 'react-query';
import BookCategoryCard from './BookCategoryCard';

const BookCategory = () => {

    const { data: Categorys = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/category`);
            const data = res.json();
            return data
        }
    })


    return (
        <div className='my-5 '>

            <div>

                <h1 className='text-sky-500 text-5xl text-center font-bold my-6 shadow-2xl'>We Provide Several  Types <br /> of Books in Here</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    Categorys.map(category => <BookCategoryCard

                        key={category._id}
                        category={category}

                    ></BookCategoryCard>)
                }
            </div>
        </div>
    );
};

export default BookCategory;