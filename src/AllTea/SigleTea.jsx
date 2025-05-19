import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const SigleTea = ({ tea, allTea, setAllTea }) => {

    // console.log(tea);
    const { _id, name, price, quantity, taste, photo, details } = tea;

    const handleDelete = (_id) => {

        // sweet aleart 
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"

        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tea-store-server-tawny.vercel.app/addtea/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Delete successfully.",
                                icon: "success"
                            });

                            const remainingTea = allTea.filter(teaaa => teaaa._id !== _id);
                            setAllTea(remainingTea);
                        }
                    })
            }
        });

    }


    return (
        <div className="hero bg-[#F5F4F1] rounded-xl mt-12">
            <div className="hero-content flex-col lg:flex-row justify-around">
                <img
                    src={photo}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className='lg:ml-36'>
                    <h1 className="text-3xl font-bold text-black">{name}</h1>
                    <p className="py-6 text-black"> {details} </p>
                    <p className='text-black'>Price: {price}</p>
                    <p className='text-black'>{quantity}</p>
                    <p>Taste: {taste}</p>
                    <div className='mt-12 space-x-6'>
                        <Link className="btn btn-info"><GrView size={24} /></Link>
                        <Link to={`/updateTeaData/${_id}`} className="btn btn-success"><FaEdit size={24} /></Link>
                        <Link onClick={() => handleDelete(_id)} className="btn btn-warning"><RiDeleteBin6Line size={24} /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SigleTea;