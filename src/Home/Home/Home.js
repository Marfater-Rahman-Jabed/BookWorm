import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import BookCategory from '../BookCategory/BookCategory';

const Home = () => {
    return (
        <div>
            {/* <h1>this is home</h1> */}
            <Banner></Banner>
            <BookCategory></BookCategory>
            <div className=' mt-12 shadow-2xl'>
                <div className="divider font-bold text-5xl">Advertisement</div>
            </div>
            <Advertise></Advertise>
        </div>
    );
};

export default Home;