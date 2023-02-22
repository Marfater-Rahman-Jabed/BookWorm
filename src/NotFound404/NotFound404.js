import React from 'react';
import { Link } from 'react-router-dom';
import Notfound from '../Assets/NotFound.png'

const NotFound404 = () => {
    return (
        <div>
            <img src={Notfound} className='h-[500px] w-full' alt="" />
            <Link className='flex justify-center' to='/'><button className='btn btn-primary px-16 rounded-lg '>Go to Home</button></Link>
        </div>
    );
};

export default NotFound404;