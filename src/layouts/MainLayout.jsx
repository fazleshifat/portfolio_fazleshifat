import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';

const MainLayout = () => {
    return (
        <section>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </section>
    );
};

export default MainLayout;