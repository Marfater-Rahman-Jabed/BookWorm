import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { AuthContexts } from '../../Contexts/AuthContext';
import useAdmin from '../../Hooks/useAdmin';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

const Advertise = () => {
    const [modalName, setModalName] = useState(null);
    const [times, setTimes] = useState(24 * 60 * 60 * 1000)

    const { data: Advertise = [], refetch } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/advertise`);
            const data = res.json();
            return data;
        }
    });
    const { user } = useContext(AuthContexts);
    const [Admin] = useAdmin(user?.email);
    const handleDelete = (id, time) => {
        let date1 = new Date(time);
        let date2 = new Date()
        const diff = date1.getDate() - date2.getDate();
        console.log(diff)
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
        // 
        // <div className='mb-5 bg-slate-400 rounded-b-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12' >
        //     {
        //         Advertise.map((add, i) => <div key={i} className="card  bg-base-100 shadow-xl mb-3 ">
        //             <figure><img src={add.picture} alt="Shoes" className='w-full h-60' /></figure>
        //             <div className="card-body bg-orange-500 rounded-b-md mb-0">
        //                 <h2 className="card-title text-blue-900 text-4xl">{add.name.toUpperCase()}</h2>
        //                 <div className='flex justify-between'>
        //                     <p className='font-semibold text-white'>Price: $ {add.OrginalPrice}</p>
        //                     <p className='font-semibold text-white'>Year of Uses : {add.yearOfUses} year</p>
        //                 </div>
        //                 <div className="card-actions flex justify-between ">
        //                     {user && <label htmlFor="ConfirmModal" className="btn btn-primary  mb-0" onClick={() => { setModalName(add) }}  >Book Now  </label>}
        //                     {Admin && <button className="btn btn-primary " onClick={() => handleDelete(add._id, add.validTime)}>Delete</button>}



        //                 </div>
        //             </div>
        //         </div>)
        //         // <div className="carousel w-full">
        //         //     {

        //         //         Advertise.map((add, i) => <div key={i}>
        //         //             <div id={`#slide${i}`} className="carousel-item relative w-full">
        //         //                 <img src={add.picture} alt='' className="w-full" />
        //         //                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //         //                     <a href={`#slide${i - 1}`} className="btn btn-circle">❮</a>
        //         //                     <a href={`#slide${i}`} className="btn btn-circle">❯</a>
        //         //                 </div>
        //         //             </div>

        //         //         </div>)
        //         //     }
        //         // </div>

        //     }

        //     {
        //         modalName && <ConfirmationModal
        //             modalName={modalName}
        //             setModalName={setModalName}

        //         ></ConfirmationModal>
        //     }

        // </div >



        <div className='bg-slate-400 pb-8'>
            <div className="carousel w-5/6 h-[450px] mx-auto">
                {
                    Advertise.map((add, i) => <div id={`slideadd${i + 1}`} className="carousel-item relative w-full block mb-8">
                        <img src={`${add.picture}`} alt="" className="w-full h-1/2 rounded-t-md" />
                        <div className="card-body bg-orange-500 rounded-b-md mb-0 h-1/2">
                            <h2 className="card-title text-blue-900 text-4xl">{add.name.toUpperCase()}</h2>
                            <div className=''>
                                <p className='font-semibold text-white'>Price: $ {add.OrginalPrice}</p>
                                <p className='font-semibold text-white'>Year of Uses : {add.yearOfUses} year</p>
                            </div>
                            <div className="card-actions flex justify-between ">
                                {user && <label htmlFor="ConfirmModal" className="btn btn-primary  mb-0" onClick={() => { setModalName(add) }}  >Book Now  </label>}
                                {Admin && <button className="btn btn-primary " onClick={() => handleDelete(add._id, add.validTime)}>Delete</button>}



                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href={i + 1 === 1 ? `#slideadd${Advertise.length}` : `#slideadd${i}`} className="btn btn-circle">❮</a>
                            <a href={i + 1 === Advertise.length ? `#slideadd1` : `#slideadd${i + 2}`} className="btn btn-circle">❯</a>
                        </div>
                    </div>)
                }
                {
                    modalName && <ConfirmationModal
                        modalName={modalName}
                        setModalName={setModalName}

                    ></ConfirmationModal>
                }

            </div>
        </div>
    );
};

export default Advertise;