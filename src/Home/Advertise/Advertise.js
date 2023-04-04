import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { AuthContexts } from '../../Contexts/AuthContext';
import useAdmin from '../../Hooks/useAdmin';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

const Advertise = () => {
    const [modalName, setModalName] = useState(null)

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
    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/advertise/${id}`, {
            method: 'DELETE'
        })
            .then(result => {
                refetch()
            })
            .then(error => {
                // console.log(error)
            })


    }



    return (
        // 
        <div className='mb-5 bg-slate-400 rounded-b-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12' >
            {
                Advertise.map((add, i) => <div key={i} className="card  bg-base-100 shadow-xl mb-3 ">
                    <figure><img src={add.picture} alt="Shoes" className='w-full h-60' /></figure>
                    <div className="card-body bg-orange-500 rounded-b-md mb-0">
                        <h2 className="card-title text-blue-900 text-4xl">{add.name.toUpperCase()}</h2>
                        <div className='flex justify-between'>
                            <p className='font-semibold text-white'>Price: $ {add.OrginalPrice}</p>
                            <p className='font-semibold text-white'>Year of Uses : {add.yearOfUses} year</p>
                        </div>
                        <div className="card-actions flex justify-between ">
                            {user && <label htmlFor="ConfirmModal" className="btn btn-primary  mb-0" onClick={() => { setModalName(add) }} >Book Now</label>}
                            {Admin && <button className="btn btn-primary " onClick={() => handleDelete(add._id)}>Delete</button>}
                        </div>
                    </div>
                </div>)
                // <div className="carousel w-full">
                //     {

                //         Advertise.map((add, i) => <div key={i}>
                //             <div id={`#slide${i}`} className="carousel-item relative w-full">
                //                 <img src={add.picture} alt='' className="w-full" />
                //                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                //                     <a href={`#slide${i - 1}`} className="btn btn-circle">❮</a>
                //                     <a href={`#slide${i}`} className="btn btn-circle">❯</a>
                //                 </div>
                //             </div>

                //         </div>)
                //     }
                // </div>

            }

            {
                modalName && <ConfirmationModal
                    modalName={modalName}
                    setModalName={setModalName}

                ></ConfirmationModal>
            }

        </div >
    );
};

export default Advertise;