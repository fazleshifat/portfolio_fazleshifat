import React from "react";
import { Link } from "react-router"; // From react-router only
import {
    FaHome,
    FaUserAlt,
    FaProjectDiagram,
    FaGraduationCap,
    FaBriefcase,
    FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content border-t border-indigo-300 py-6">
            <div className="max-w-[1300px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Navigation Icons */}
                <div className="flex gap-6 text-xl">
                    <Link to="/" className="hover:text-indigo-400" title="Home">
                        <FaHome />
                    </Link>
                    <Link to="/about-me" className="hover:text-indigo-400" title="About Me">
                        <FaUserAlt />
                    </Link>
                    <Link to="/projects" className="hover:text-indigo-400" title="Projects">
                        <FaProjectDiagram />
                    </Link>
                    <Link to="/education" className="hover:text-indigo-400" title="Education">
                        <FaGraduationCap />
                    </Link>
                    <Link to="/experience" className="hover:text-indigo-400" title="Experience">
                        <FaBriefcase />
                    </Link>
                    <Link to="/contact" className="hover:text-indigo-400" title="Contact">
                        <FaEnvelope />
                    </Link>
                </div>

                {/* Footer Name and Copy Info */}
                <div className="text-sm text-center md:text-right text-gray-400">
                    &copy; {new Date().getFullYear()} Al Fazle Shifat. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
