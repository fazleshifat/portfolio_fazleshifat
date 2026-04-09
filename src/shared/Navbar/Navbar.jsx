import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../../components/ThemeToggle';

const navItems = [
    { label: 'Home', to: '/#' },
    { label: 'About', to: '/#aboutMe' },
    { label: 'Experience', to: '/#experience' },
    { label: 'Skills', to: '/#technology' },
    { label: 'Projects', to: '/#projects' },
    { label: 'Education', to: '/#education' },
    { label: 'Contact', to: '/#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                    scrolled
                        ? 'glass-effect shadow-lg shadow-cyan-500/5 dark:shadow-cyan-500/5 py-3'
                        : 'bg-transparent py-5'
                }`}
            >
                <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
                    <HashLink smooth to="/#" className="flex items-center gap-3">
                        <img
                            src="/assets/logo.png"
                            className="w-10 h-10 rounded-full bg-white"
                            alt="logo"
                        />
                        <span className="text-xl font-bold text-slate-800 dark:text-white font-[var(--font-heading)]">
                            SHIFAT
                        </span>
                    </HashLink>

                    <div className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <HashLink
                                key={item.label}
                                smooth
                                to={item.to}
                                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-cyan-500 dark:after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {item.label}
                            </HashLink>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <Link
                            target="_blank"
                            to="https://drive.google.com/file/d/1ezF-sOLehhfV4EY-lvlkvHBcXvw1smuL/view?usp=drive_link"
                            className="hidden sm:inline-flex px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                        >
                            Resume
                        </Link>
                        <Link
                            target="_blank"
                            to="https://drive.google.com/file/d/1Kkj7FX8ge3sbxFXNBi32kLz0o3Nx5QZG/view?usp=sharing"
                            className="hidden sm:inline-flex px-5 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 text-sm font-semibold transition-all duration-300"
                        >
                            CV
                        </Link>

                        <button
                            className="lg:hidden text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
                    mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                {navItems.map((item) => (
                    <HashLink
                        key={item.label}
                        smooth
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className="text-2xl font-semibold text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                    >
                        {item.label}
                    </HashLink>
                ))}
                <Link
                    target="_blank"
                    to="https://drive.google.com/file/d/1ezF-sOLehhfV4EY-lvlkvHBcXvw1smuL/view?usp=drive_link"
                    className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    onClick={() => setMobileOpen(false)}
                >
                    Resume
                </Link>
                <Link
                    target="_blank"
                    to="https://drive.google.com/file/d/1Kkj7FX8ge3sbxFXNBi32kLz0o3Nx5QZG/view?usp=sharing"
                    className="px-8 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold transition-all duration-300"
                    onClick={() => setMobileOpen(false)}
                >
                    CV
                </Link>
            </div>
        </>
    );
};

export default Navbar;
