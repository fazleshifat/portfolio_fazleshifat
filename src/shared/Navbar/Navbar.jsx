import React from 'react';
import ThemeToggle from '../../components/ThemeToggle';
import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {

    const links = <>
        <li><HashLink smooth to="/#">Home</HashLink></li>
        <li><HashLink smooth to="/#aboutMe">About Me</HashLink></li>
        <li><HashLink smooth to="/#technology">Technology</HashLink></li>
        <li><HashLink smooth to="/#projects">Projects</HashLink></li>
        <li><HashLink smooth to="/#education">Education</HashLink></li>
        <li><HashLink smooth to="/#experience">Experience</HashLink></li>
        <li><HashLink smooth to="/#contact">Contact</HashLink></li>

    </>

    return (
        <div className="sticky top-0 z-50 navbar bg-base-100 dark:bg-indigo-900 dark:border-b-2 border-indigo-900 flex items-center justify-between shadow-sm">
            <div className="flex items-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/#'>
                    <div>
                        <img src="/assets/logo.png" className='w-14 rounded-full bg-white dark:bg-indigo-400' alt="logo" />
                    </div>
                </Link>
            </div>
            <div className="flex items-center gap-3">
                <ul className="hidden md:flex text-md font-semibold text-indigo-800 dark:text-indigo-300 gap-5">
                    {links}
                </ul>

                <ThemeToggle></ThemeToggle>
                <Link target='_blank' to='https://drive.google.com/file/d/1FJHmHs7UcL7b-8ixhwQ5RIGJiI-mya2l/view?usp=sharing' className="btn rounded-full btn-outline">Resume</Link>
            </div>
        </div>
    );
};

export default Navbar;