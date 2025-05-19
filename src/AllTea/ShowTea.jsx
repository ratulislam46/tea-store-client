import React from 'react';
import SigleTea from './SigleTea';
import { BsCupHot } from 'react-icons/bs';

const ShowTea = ({ allTea, setAllTea }) => {

    // console.log(allTea);

    return (
        <div>
            <div className='text-black text-center mt-16 space-y-2'>
                <p>--- Sip & Savor ---</p>
                <h1 className='text-4xl text-[#331A15] font-serif'>Our Popular Products</h1>
                <button className='flex mx-auto items-center border border-amber-900 px-4 py-1 text-white bg-[#E3B577]'><span className='mr-2'>Add Tea</span> <BsCupHot className='text-black'/></button>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 pb-24'>
            {
                allTea.map(tea => <SigleTea key={tea._id} allTea={allTea} setAllTea={setAllTea} tea={tea}></SigleTea>)
            }
        </div>
        </div>
    );
};

export default ShowTea;