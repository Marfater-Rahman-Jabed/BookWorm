import React from 'react';
import { useQuery } from 'react-query';

const Advertise = () => {

    const { data: Advertise = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/advertise`);
            const data = res.json();
            return data;
        }
    })

    return (
        <div className='mb-5 bg-slate-500 rounded-b-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {
                Advertise.map((add, i) => <div key={i} className="card  bg-base-100 shadow-xl mb-3 ">
                    <figure><img src={add.picture} alt="Shoes" className='w-full h-60' /></figure>
                    <div className="card-body bg-orange-500 rounded-b-md mb-0">
                        <h2 className="card-title text-blue-900 text-4xl">{add.name.toUpperCase()}</h2>
                        <div className='flex justify-between'>
                            <p className='font-semibold text-white'>Price: $ {add.price}</p>
                            <p className='font-semibold text-white'>Year of Uses : {add.yearOfUses} year</p>
                        </div>
                        <div className="card-actions justify-end ">
                            <button className="btn btn-primary ">Buy Now</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Advertise;