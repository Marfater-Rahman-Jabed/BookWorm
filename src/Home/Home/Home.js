import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import BookCategory from '../BookCategory/BookCategory';
import { BsWhatsapp } from "react-icons/bs";
import './Home.css'
import CountUped from '../Countup/CountUped';

const Home = () => {
    return (
        <div>
            {/* <h1>this is home</h1> */}
            <Banner></Banner>
            <BookCategory></BookCategory>
            <div className=' mt-12 shadow-2xl '>
                <div className="divider mb-0 rounded-t-md font-bold text-5xl pb-24 text-red-600 bg-slate-400 ">Advertisement</div>
            </div>
            <Advertise></Advertise>
            <div className=' mt-12 shadow-2xl '>
                <div className="divider h-8 mb-2 rounded-md font-bold text-5xl  text-red-600  ">About Us</div>
            </div>
            <CountUped></CountUped>

        </div>
    );
};

export default Home;