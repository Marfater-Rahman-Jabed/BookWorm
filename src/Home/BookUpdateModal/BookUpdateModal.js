import React from 'react';
import { toast } from 'react-hot-toast';


const BookUpdateModal = ({ quantityModal, setQuantityModal }) => {

    // const { refetch } = useQuery({});
    const handleSubmit = (event) => {
        event.preventDefault();

        let id = quantityModal;
        // setQuantityModal(null)

        const bookQuantityData = event.target.quantity.value;
        console.log(quantityModal, bookQuantityData)
        const bookdata = {
            Qunatity: bookQuantityData
        }
        fetch(`http://localhost:5000/updatebookquantity/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',

                authorization: `bearer ${localStorage.getItem('accessToken')}`

            },
            body: JSON.stringify(bookdata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                setQuantityModal(null);

                toast.success('Successfully Added Books... ');

                window.location.reload(true)

            })

    }

    return (
        <div>
            <input name='' type="checkbox" id="UpdateModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="UpdateModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleSubmit}>
                        <label className="label">
                            <span className="label-text">Book Quantity</span>
                        </label>
                        <input name='quantity' type="number" placeholder='How many Book you want to add' className="input input-bordered  w-full bg-slate-300 text-orange-500 font-semibold mb-3" required />

                        <input type="submit" className='btn btn-primary input-bordered mb-0  w-full' value="Upload" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookUpdateModal;