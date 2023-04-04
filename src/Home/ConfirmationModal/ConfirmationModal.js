import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContexts } from '../../Contexts/AuthContext';

const ConfirmationModal = ({ modalName, setModalName }) => {
    const { name: BookName, OrginalPrice, picture } = modalName;
    const { user } = useContext(AuthContexts);


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        console.log(name, email, price, phone, location);
        // toast.success('successfully booked')

        const booking = {
            name, email, price, phone, location, BookName, picture, currency: 'BDT'
        }


        fetch(' http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

                authorization: `bearer ${localStorage.getItem('accessToken')}`

            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // if (data.acknowledged) {
                //     toast.success('successfully booked');
                //     setModalName(null)
                // }
                toast.success('Please GO to payment')
                setModalName(null)

                window.location.replace(data.url)
            })

    }
    return (
        <div>
            <input name='' type="checkbox" id="ConfirmModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="ConfirmModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-boldname ">Hellow !!! <br /> You want to buy <span className='text-orange-500 font-semibold'>"{BookName}" </span> book</h3>
                    <form onSubmit={handleSubmit}>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder='name' readOnly defaultValue={user?.displayName} className="input input-bordered  w-full bg-slate-300 text-orange-500 font-semibold" />
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="text" placeholder='name' readOnly defaultValue={user?.email} className="input input-bordered text-orange-500 w-full bg-slate-300 font-semibold" />

                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input name='price' type="text" placeholder='name' readOnly defaultValue={OrginalPrice} className="input input-bordered mb-2 w-full  bg-slate-300  text-orange-500 font-semibold" />
                        <label className="label">
                            <span className="label-text">Phone Number*</span>
                        </label>
                        <input name='phone' type="tel" placeholder='Please Enter Your Phone Number' className="input input-bordered mb-2 w-full  text-orange-500 bg-slate-300 font-semibold" required />
                        <label className="label">
                            <span className="label-text">Location*</span>
                        </label>
                        <input name='location' type="text" placeholder='Please enter your meeting location ' className="input input-bordered mb-6 w-full bg-slate-300  text-orange-500 font-semibold " required />
                        <input type="submit" className='btn btn-primary input-bordered mb-0  w-full' value="Pay" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;