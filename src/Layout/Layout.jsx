import React from 'react';
import Navbar from '../Components/Header/Navbar'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='bg-white min-h-[calc(100vh-500px)]' style={{
                backgroundImage: "url('https://i.postimg.cc/G2WxvZTL/1.png')"
            }}>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Layout;