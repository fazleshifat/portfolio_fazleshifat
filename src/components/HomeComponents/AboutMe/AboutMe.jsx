import React from "react";
import { motion } from "framer-motion";
import { Zap, Maximize, Rocket, Bot } from "lucide-react";

const highlights = [
    { icon: <Bot size={22} />, label: "AI-Native Dev" },
    { icon: <Zap size={22} />, label: "Fast Delivery", desc: "Scratch to deploy" },
    { icon: <Maximize size={22} />, label: "Easy, Clean & Fast UX", desc: "Grows with users" },
    { icon: <Rocket size={22} />, label: "3+ Projects", desc: "Delivered" },
];

const AboutMe = () => {
    return (
        <section id="aboutMe" className="section-container">
            <div className="text-center mb-16">
                <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-widest uppercase">
                    About Me
                </span>
                <h2 className="section-heading mt-2">Who I Am</h2>
                <div className="heading-accent mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-2xl blur-lg opacity-15 dark:opacity-20" />
                        <img
                            src="/assets/aboutme.jpg"
                            alt="About MD AL FAZLE SHIFAT"
                            className="relative rounded-2xl object-cover w-full max-w-md shadow-2xl shadow-black/10 dark:shadow-black/30"
                        />
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                        AI-Native Full Stack Developer
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-6">
                        I'm <span className="text-cyan-600 dark:text-cyan-400 font-semibold">MD AL FAZLE SHIFAT</span>,
                        an AI-native Full Stack Developer from Bangladesh, currently working at
                        Potential Inc. in South Korea. I build projects from scratch to delivery
                        using Cursor and Claude leveraging AI agents, custom commands, and
                        smart workflows to compress multi-step processes into single actions
                        and dramatically reduce development timelines.
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8">
                        Experienced in working with AI-native tools to solve problems fast and
                        ship quality products. From React frontends to Node.js backends I use
                        the MERN stack alongside modern AI tooling to build scalable, user-friendly
                        applications with clean code and optimized performance.
                    </p>

                    {/* Highlight Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        {highlights.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl p-4 hover:border-cyan-400/50 dark:hover:border-cyan-500/30 transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-lg bg-cyan-100 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-slate-800 dark:text-white font-semibold text-sm">{item.label}</p>
                                    <p className="text-slate-400 dark:text-slate-500 text-xs">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
