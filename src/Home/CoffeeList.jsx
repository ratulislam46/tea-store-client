import React, { useEffect, useState } from 'react';


const CoffeeList = () => {
    const [coffeeData, setCoffeeData] = useState([])

    useEffect(() => {
        fetch('/CoffeeData.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setCoffeeData(data)
            })
    }, [])

    return (
        <div className='pb-20'>
            <p className='text-black text-center lgtext-xl'>Follow Us Now</p>
            <h1 className='text-black text-center font-serif lg:text-6xl md:text-4xl text-2xl mb-12'> Follow on Instagram</h1>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    coffeeData.map(coffee =>
                        <div key={coffee.id}>
                            <div className="card bg-base-100 shadow-sm h-80">
                                <figure className="px-10 pt-10">
                                    <img
                                        src={coffee.image}
                                        alt="Shoes"
                                        className="rounded-xl" />
                                </figure>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CoffeeList;