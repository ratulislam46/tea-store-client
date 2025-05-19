import React from 'react';
import Swal from 'sweetalert2';

const AddTea = () => {

    const handleAddTea = (e) => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form);
        const newTeaData = Object.fromEntries(formData.entries());
        console.log(newTeaData);


        fetch('https://tea-store-server-tawny.vercel.app/addtea', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTeaData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "New tea added successfully",
                        icon: "success",
                        draggable: true
                    });
                }
                console.log(data);
            })
            
            e.target.reset()
    }

    return (
        <div className="card bg-[#F4F3F0] w-full max-w-sm mx-auto px-2">
            <div className="card-body">
                <form onSubmit={handleAddTea} className="fieldset">
                    <h1 className='text-center text-4xl text-black font-serif'>Add New Coffee</h1>
                    <p className='text-gray-600 text-center'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input hover:input-info " placeholder="Name" />
                    <label className="label">Price</label>
                    <input type="Price" name='price' className="input hover:input-info" placeholder="Price" />
                    <label className="label">Quantity</label>
                    <input type="text" name='quantity' className="input hover:input-info" placeholder="Quantity" />
                    <label className="label">Taste</label>
                    <input type="text" name='taste' className="input hover:input-info" placeholder="Taste" />
                    <label className="label">Tea URL</label>
                    <input type="text" name='photo' className="input hover:input-info" placeholder="Taste" required />
                    <button className="btn bg-[#D2B48C] text-[#331A15] font-sans border border-[#D2B48C] mt-4">Add New Tea</button>
                </form>
            </div>
        </div>
    );
};

export default AddTea;