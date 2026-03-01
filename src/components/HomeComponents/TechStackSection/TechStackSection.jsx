import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Monitor, Server, Wrench } from "lucide-react";

import reactIcon from "@iconify/icons-logos/react";
import routerIcon from "@iconify/icons-logos/react-router";
import tailwindIcon from "@iconify/icons-logos/tailwindcss-icon";
import framerIcon from "@iconify/icons-logos/framer";
import typescriptIcon from "@iconify/icons-logos/typescript-icon";
import reduxIcon from "@iconify/icons-logos/redux";
import javascriptIcon from "@iconify/icons-logos/javascript";

import nodejsIcon from "@iconify/icons-logos/nodejs-icon";
import expressIcon from "@iconify/icons-logos/express";
import mongodbIcon from "@iconify/icons-logos/mongodb-icon";
import firebaseIcon from "@iconify/icons-logos/firebase";

import gitIcon from "@iconify/icons-logos/git-icon";
import githubIcon from "@iconify/icons-logos/github-icon";
import netlifyIcon from "@iconify/icons-logos/netlify";
import vercelIcon from "@iconify/icons-logos/vercel-icon";
import vsCodeIcon from "@iconify/icons-logos/visual-studio-code";
import stripeIcon from "@iconify/icons-logos/stripe";

const categories = [
    {
        title: "Frontend",
        icon: <Monitor size={20} />,
        skills: [
            { name: "React", icon: reactIcon },
            { name: "TypeScript", icon: typescriptIcon },
            { name: "Redux", icon: reduxIcon },
            { name: "JavaScript", icon: javascriptIcon },
            { name: "Tailwind CSS", icon: tailwindIcon },
            { name: "Framer Motion", icon: framerIcon },
            { name: "React Router", icon: routerIcon },
        ],
    },
    {
        title: "Backend",
        icon: <Server size={20} />,
        skills: [
            { name: "Node.js", icon: nodejsIcon },
            { name: "Express.js", icon: expressIcon, needsBg: true },
            { name: "MongoDB", icon: mongodbIcon },
            { name: "Firebase", icon: firebaseIcon },
        ],
    },
    {
        title: "Tools & Platforms",
        icon: <Wrench size={20} />,
        skills: [
            { name: "Git", icon: gitIcon },
            { name: "GitHub", icon: githubIcon },
            { name: "VS Code", icon: vsCodeIcon },
            { name: "Netlify", icon: netlifyIcon },
            { name: "Vercel", icon: vercelIcon },
            { name: "Stripe", icon: stripeIcon },
        ],
    },
];

const TechnologySection = () => {
    return (
        <section id="technology" className="section-container">
            <div className="text-center mb-16">
                <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-widest uppercase">
                    Skills
                </span>
                <h2 className="section-heading mt-2">Tech Stack & Tools</h2>
                <div className="heading-accent mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {categories.map((cat, catIdx) => (
                    <motion.div
                        key={catIdx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: catIdx * 0.15 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-cyan-600 dark:text-cyan-400">{cat.icon}</span>
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                {cat.title}
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            {cat.skills.map((skill, skillIdx) => (
                                <div
                                    key={skillIdx}
                                    className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-lg p-4 flex flex-col items-center gap-2 hover:border-cyan-400/50 dark:hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 group"
                                >
                                    <Icon
                                        icon={skill.icon}
                                        width="32"
                                        height="32"
                                        className={`group-hover:scale-110 transition-transform duration-300 ${skill.needsBg ? "bg-white/80 dark:bg-white/90 rounded-md p-1 shadow-sm shadow-white/20" : ""}`}
                                    />
                                    <span className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TechnologySection;
