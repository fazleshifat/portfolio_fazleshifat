import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <section>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </section>
    );
};

export default MainLayout;