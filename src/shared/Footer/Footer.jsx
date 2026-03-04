import React from "react";
import { HashLink } from "react-router-hash-link";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const quickLinks = [
    { label: "Home", to: "/#" },
    { label: "About", to: "/#aboutMe" },
    { label: "Experience", to: "/#experience" },
    { label: "Projects", to: "/#projects" },
    { label: "Contact", to: "/#contact" },
];

const Footer = () => {
    return (
        <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            {/* Gradient top line */}
            <div className="h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500" />

            <div className="max-w-[1200px] mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-10">
                    {/* Branding */}
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-[var(--font-heading)]">
                            MD AL FAZLE SHIFAT
                        </h3>
                        <p className="text-slate-500 text-sm mb-5 leading-relaxed">
                            Full Stack Developer specializing in building modern web
                            applications with the MERN stack.
                        </p>
                        <div className="flex gap-3">
                            <a href="https://github.com/fazleshifat" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-500/10 transition-all">
                                <FaGithub size={16} />
                            </a>
                            <a href="https://www.linkedin.com/in/fazle-shifat-5490a8270/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-500/10 transition-all">
                                <FaLinkedin size={16} />
                            </a>
                            <a href="https://web.facebook.com/al.fazle.shifat/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-500/10 transition-all">
                                <FaFacebook size={16} />
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-500/10 transition-all">
                                <FaTwitter size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-slate-800 dark:text-white uppercase tracking-wider mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <HashLink
                                        smooth
                                        to={link.to}
                                        className="text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 text-sm transition-colors"
                                    >
                                        {link.label}
                                    </HashLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-semibold text-slate-800 dark:text-white uppercase tracking-wider mb-4">
                            Contact
                        </h4>
                        <div className="space-y-2 text-slate-500 text-sm">
                            <p>
                                <a href="mailto:mailbox.shifat@gmail.com" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                    mailbox.shifat@gmail.com
                                </a>
                            </p>
                            <p>
                                <a href="tel:+8801600872442" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                    +8801600872442
                                </a>
                            </p>
                            <p>Chattogram, Bangladesh, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-200 dark:border-slate-800 py-5">
                <p className="text-center text-slate-400 dark:text-slate-600 text-sm">
                    &copy; {new Date().getFullYear()} MD AL FAZLE SHIFAT. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
