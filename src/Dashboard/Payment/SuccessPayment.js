import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SuccessPayment = () => {
    const location = useLocation()
    console.log(location.search);
    const query = new URLSearchParams(location.search);
    const transectionId = query.get('transectionId');
    console.log(transectionId);
    return (
        <div className='mt-24 bg-emerald-400 py-5'>
            <h2 className='text-center text-5xl text-orange-600'>Congratulationsss !!!</h2> <br />
            <p className='text-center text-3xl'>Your Payment is successfully done..</p><br />
            <p className='text-center text-red-700 text-3xl'>Check your Email for Transection Id</p><br />

            <p className='text-center text-blue-700 font-bold'><Link to='/dashboard' >See Your Order</Link></p>
        </div>
    );
};

export default SuccessPayment;