import React from 'react';
import { useQuery } from 'react-query';

const Allseller = () => {

    const { data: AllSeller = [], refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allseller`)
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
                            AllSeller.map((seller, i) => <tr className="hover">
                                <th>{i + 1}</th>
                                <td>{seller.userName}</td>
                                <td>{seller.email}</td>
                                <td>{seller?.verifyed ? seller.verifyed : <p className='text-error font-semibold'>Not verifyed</p>}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allseller;