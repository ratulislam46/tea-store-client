import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import ShowTea from '../AllTea/ShowTea'
import { useLoaderData } from 'react-router';
import Icon from '../Components/Header/Icon';
import CoffeeList from './CoffeeList';

const Home = () => {

    const initialTea = useLoaderData();
    const [allTea, setAllTea] = useState(initialTea);

    return (
        <div>
            <header>
                <Header></Header>
                <Icon></Icon>
            </header>
            <section className='w-11/12 mx-auto'>
                <ShowTea setAllTea={setAllTea} allTea={allTea}></ShowTea>
            </section>
            <section className='w-11/12 mx-auto'>
                <CoffeeList></CoffeeList>
            </section>
        </div>
    );
};

export default Home;