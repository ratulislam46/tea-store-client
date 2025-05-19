import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateTeaData = () => {

    const tea = useLoaderData();
    const { _id, name, photo, price, quantity, taste, } = tea;

    const handleUpdateData = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const updatedTea = Object.fromEntries(formData.entries());
        console.log(updatedTea);

        // update data in database 
        fetch(`https://tea-store-server-tawny.vercel.app/addtea/${_id}`,
            {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedTea)
            })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log('after update', data);
            })
    }



    return (
        <div className="card bg-[#F4F3F0] w-full max-w-sm mx-auto border px-2">
            <div className="card-body">
                <form onSubmit={handleUpdateData} className="fieldset">
                    <h1 className='text-center text-black font-serif text-4xl mb-8'>Update information</h1>
                    <p className='text-gray-600 text-center'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <label className="label">Name</label>
                    <input type="text" name='name' defaultValue={name} className="input hover:input-info" placeholder="Name" />
                    <label className="label">Price</label>
                    <input type="Price" name='price' defaultValue={price} className="input hover:input-info" placeholder="Price" />
                    <label className="label">Quantity</label>
                    <input type="text" name='quantity' defaultValue={quantity} className="input hover:input-info" placeholder="Quantity" />
                    <label className="label">Taste</label>
                    <input type="text" name='taste' defaultValue={taste} className="input hover:input-info" placeholder="Taste" />
                    <label className="label">Tea URL</label>
                    <input type="text" name='photo' defaultValue={photo} className="input hover:input-info" placeholder="Taste" required />
                    <input type='submit' value='Submit' className="btn font-sans border border-[#D2B48C] bg-[#D2B48C] text-[#331A15] mt-4" />
                </form>
            </div>
        </div>
    );
};

export default UpdateTeaData;