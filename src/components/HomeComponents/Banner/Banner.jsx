import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Banner.css";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Banner = () => {
    return (
        <section className="min-h-[500px] text-white flex items-center justify-center px-4 md:px-16">
            <div className="md:max-w-[1300px]  flex flex-col-reverse md:flex-row items-center gap-10 w-full">
                {/* Left Side */}
                <div className="w-full md:w-1/2 space-y-5">
                    <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-400 via-purple-800 to-gray-500 text-transparent bg-clip-text">
                        Hello, I am <br />Al Fazle Shifat
                    </h1>
                    <h2 className="text-xl md:text-4xl text-gray-600 dark:text-indigo-300">
                        <Typewriter
                            words={["Web Developer", "Frontend Developer", "Jr. FullStack Developer", "MERN Stack Developer", "UI/UX Designer", "React Developer"]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={40}
                            delaySpeed={1500}
                        />
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
                        I build responsive and interactive web applications with a focus on clean UI, optimized performance, and user-centric design.
                    </p>
                    {/* Social Links */}
                    <div className="flex gap-5 mt-4">
                        <a href="https://github.com/fazleshifat" target="_blank" className="text-indigo-950 dark:text-indigo-200 hover:text-indigo-400 text-xl">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/fazle-shifat-5490a8270/" target="_blank" className="text-indigo-950 dark:text-indigo-200 hover:text-indigo-400 text-xl">
                            <FaLinkedin />
                        </a>
                        <a href="https://web.facebook.com/al.fazle.shifat/" target="_blank" className="text-indigo-950 dark:text-indigo-200 hover:text-indigo-400 text-xl">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com/" target="_blank" className="text-indigo-950 dark:text-indigo-200 hover:text-indigo-400 text-xl">
                            <FaTwitter />
                        </a>
                    </div>
                    {/* Extra Element */}
                    <div className="inline-block px-4 py-2 mt-4 rounded-full bg-indigo-600 text-sm shadow-md animate-pulse">
                        Open for Freelance & Remote Jobs
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full md:w-1/2 flex justify-center relative">
                    <div className="rounded-full border-4 border-indigo-300 p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 banner-img">
                        <img
                            src="/assets/profile.png" // replace with your image path
                            alt="Al Fazle Shifat"
                            className="rounded-full object-cover w-96"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
