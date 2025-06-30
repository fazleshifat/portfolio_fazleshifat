import React from "react";

const AboutMe = () => {
    return (
        <section
            id="aboutMe"
            className="relative max-w-[1300px] mx-auto min-h-[600px] flex items-center px-12 py-20 text-white"
            style={{
                backgroundImage: "url('/assets/aboutme.png')",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            {/* Gradient overlay: dark on left, transparent on right */}
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)",
                }}
            ></div>

            {/* Content container aligned left */}
            <div className="relative max-w-4xl w-full sm:w-3/4 md:w-2/5 pr-12 z-10 text-left">
                <h2 className="text-6xl font-bold mb-8 text-white">About Me</h2>

                <p className="text-xl max-w-full mb-10 leading-relaxed text-white">
                    I’m <span className="font-semibold text-indigo-400">Al Fazle Shifat</span>, a Full Stack Web Developer from Bangladesh, passionate about building clean, responsive, and high-performing web applications. I primarily work with the MERN stack and continuously sharpen my skills to stay industry-ready.
                </p>

                <ul className="list-disc text-gray-300 space-y-5 text-lg">
                    <li>Develop frontend with React, Navigate with React Router, Authenctication with Firebase,Tailwind and Daisy,Material UI</li>
                    <li>Develop secure backend APIs with Node.js, Express, MongoDB & Firebase</li>
                    <li>Deploy projects on Netlify & Vercel, emphasizing UI/UX and accessibility</li>
                </ul>
            </div>
        </section>
    );
};

export default AboutMe;
