import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOut from './CheckOut';

const stripePromise = loadStripe('pk_test_51MXk7BEyUetrllCJ7hbDQv7vkTzBRBYGFACsV7chRpc1A74ic6ap5ydyrUAMYk29K14dthf5hpRbXGqd6LVRxVcw00wQid0SOX');
console.log(stripePromise)
const Payment = () => {
    const data = useLoaderData();
    console.log(data)
    const { BookName, price, } = data
    return (
        <div>
            <h1 className="text-3xl">Payment for <strong>{BookName}</strong> books </h1>
            <h2>Please pay <strong> $ {price}</strong> on  at </h2>
            <div >
                <Elements stripe={stripePromise} >
                    <CheckOut
                        data={data}

                    />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;