import React from 'react';

const Icon = () => {
    return (
        <div className='bg-[#ECEAE3]'>
            <div className='w-11/12 mx-auto py-8 grid grid-cols-4 gap-4'>
                <div>
                    <img src="https://i.postimg.cc/639H8sZD/1.png" alt="" />
                    <h1 className='text-2xl md:text-3xl lg:text-4xl text-[#1B1A1A] font-rancho'>Awesome Aroma</h1>
                    <p className='text-[#1B1A1A]'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div>
                    <img src="https://i.postimg.cc/Dz7QgrzG/2.png" alt="" />
                    <h1 className='text-2xl md:text-3xl lg:text-4xl text-[#1B1A1A] font-rancho'>High Quality</h1>
                    <p className='text-[#1B1A1A] '>We served the coffee to you maintaining the best quality</p>
                </div>
                <div>
                    <img src="https://i.postimg.cc/s2KY0MBN/3.png" alt="" />
                    <h1 className='text-2xl md:text-3xl lg:text-4xl text-[#1B1A1A] font-rancho'>Pure Grades</h1>
                    <p className='text-[#1B1A1A] '>The coffee is made of the green coffee beans which you will love </p>
                </div>
                <div>
                    <img src="https://i.postimg.cc/FRRyth3s/4.png" alt="" />
                    <h1 className='text-2xl md:text-3xl lg:text-4xl text-[#1B1A1A] font-rancho'>Proper Roasting</h1>
                    <p className='text-[#1B1A1A] '>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default Icon;