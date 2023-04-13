import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const AllAdvertise = () => {
    const { data: allAdvertise = [], refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/alladvertise`, {
                method: 'GET',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = res.json();
            return data;
        }

    })
    const handleDelete = (id, time) => {
        // console.log(id, time, new Date().toGMTString());
        let date1 = new Date(time);
        let date2 = new Date()
        const diff = date1.getDate() - date2.getDate();
        let localDate1 = date1.toString()
        // console.log(localDate1.slice(16, 25))
        if (date1 <= date2) {
            fetch(`http://localhost:5000/alladvertise/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Successfully removed from Advertisement section')
                    console.log(data)
                    refetch();
                })
        }
        else {
            console.log('no');
            if (diff > 0) {
                toast.error(`This item still have 0${diff} ${diff === 1 ? 'day' : 'days'} Valid Time . Last valid Date is ${time.slice(5, 16)} and Time is ${time.slice(16, 26)}(GMT)`)
            }
            else {
                toast.error(`This item still have Valid Time . Today is the last Day and Last Time is ${time.slice(16, 26)}(GMT)`)
            }
        }
    }
    return (
        <div>
            <div className="overflow-x-auto ">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL No</th>
                            <th>Book Photo</th>
                            <th>Book Name</th>
                            <th>Email</th>
                            <th>Expired Day</th>
                            <th>Expired Date</th>
                            <th className="text-center">Expired Time </th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allAdvertise.map((advertised, i) => <tr key={i} className="hover">
                                <td>{i + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={advertised.picture} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {advertised.name}
                                </td>
                                <td title={advertised.email}>{advertised?.email?.split("@")[0]}...</td>
                                <th>
                                    {new Date(advertised?.validTime)?.toString()?.slice(0, 3)}
                                </th>
                                <th>
                                    {new Date(advertised?.validTime)?.toString()?.slice(7, 10)} {new Date(advertised?.validTime)?.toString()?.slice(4, 8)} {new Date(advertised?.validTime)?.toString()?.slice(10, 16)}
                                </th>
                                <th>
                                    {new Date(advertised?.validTime)?.toString()?.slice(16, 25)}
                                </th>
                                <th><button className={`btn btn-sm ${(new Date(advertised?.validTime) <= new Date()) ? 'bg-red-900' : 'bg-orange-500'} hover:bg-red-700 px-4`} title='Delete' onClick={() => handleDelete(advertised._id, advertised.validTime)}>X</button></th>
                            </tr>)

                        }

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default AllAdvertise;