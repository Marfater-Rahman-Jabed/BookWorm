import React from 'react';
import { useQuery } from 'react-query';
import { TiTick } from 'react-icons/ti';

const Allseller = () => {

    const { data: AllSeller = [], refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch(`https://used-book-server.vercel.app/allseller`, {
                method: 'GET',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = res.json();
            return data;
        }
    })
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            AllSeller.map((seller, i) => <tr className="hover" key={i}>
                                <th>{i + 1}</th>
                                <td>{seller.userName}</td>
                                <td>{seller.email}</td>
                                <td>{seller?.verifyed ? <TiTick className='text-3xl text-blue-500'></TiTick> : <p className='text-error font-semibold'>Not verifyed</p>}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allseller;