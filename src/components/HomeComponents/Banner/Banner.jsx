import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Banner = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
            {/* Background glow effects */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-[1200px] mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12 w-full">
                {/* Text Content */}
                <motion.div
                    className="w-full md:w-3/5 space-y-6"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-widest uppercase">
                        Welcome to my portfolio
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
                        Hi, I'm{" "}
                        <span className="gradient-text">Al Fazle Shifat</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl text-cyan-600 dark:text-cyan-400 font-medium">
                        <Typewriter
                            words={[
                                "Full Stack Developer",
                                "React Developer",
                                "MERN Stack Developer",
                                "Frontend Specialist",
                            ]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={40}
                            delaySpeed={1500}
                        />
                    </h2>
                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed">
                        I build responsive, high-performance web applications with clean
                        UI and modern technologies. Currently working as a Jr. Full Stack
                        Developer at Potential Inc., South Korea.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 pt-2">
                        <HashLink
                            smooth
                            to="/#projects"
                            className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                        >
                            View My Work
                        </HashLink>
                        <a
                            href="https://drive.google.com/file/d/1FJHmHs7UcL7b-8ixhwQ5RIGJiI-mya2l/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold transition-all duration-300"
                        >
                            Download Resume
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-5 pt-4">
                        <a href="https://github.com/fazleshifat" target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 text-xl transition-colors duration-300">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/fazle-shifat-5490a8270/" target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 text-xl transition-colors duration-300">
                            <FaLinkedin />
                        </a>
                        <a href="https://web.facebook.com/al.fazle.shifat/" target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 text-xl transition-colors duration-300">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 text-xl transition-colors duration-300">
                            <FaTwitter />
                        </a>
                    </div>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    className="w-full md:w-2/5 pt-15 md:pt-0 flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-full blur-2xl opacity-15 dark:opacity-20" />
                        <div className="relative rounded-full p-1 bg-gradient-to-tr from-cyan-500 to-purple-500">
                            <img
                                src="/assets/profile2.png"
                                alt="Al Fazle Shifat"
                                className="rounded-full object-cover w-62 h-62 md:w-80 md:h-80"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <ChevronDown className="text-slate-400 dark:text-slate-500" size={28} />
            </motion.div>
        </section>
    );
};

export default Banner;
