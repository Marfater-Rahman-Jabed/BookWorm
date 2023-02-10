import React from 'react';
import Banner from '../Banner/Banner';
import BookCategory from '../BookCategory/BookCategory';

const Home = () => {
    return (
        <div>
            {/* <h1>this is home</h1> */}
            <Banner></Banner>
            <BookCategory></BookCategory>
        </div>
    );
};

export default Home;