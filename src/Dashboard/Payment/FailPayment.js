import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const FailPayment = () => {
    const location = useLocation()
    console.log(location.search);
    const query = new URLSearchParams(location.search);
    const transectionId = query.get('transectionId');
    console.log(transectionId);
    return (
        <div className='mt-24 bg-emerald-400 py-7'>
            <h2 className='text-center text-5xl text-red-600'>Oppss!!!</h2> <br />
            <p className='text-center text-3xl'>Something went wrong !!..</p><br />
            <p className='text-center text-red-700 text-3xl'>Check your internet Connection or techincal issue</p><br />

            <p className='text-center text-blue-700 font-bold'><Link to='/' >Go to Home</Link></p>
            {/* <p className='text-center'><small >Email service is still now free package service. So it is work some specific email address...</small></p> */}
        </div>
    );
};

export default FailPayment;