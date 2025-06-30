import React from "react";
import { Icon } from "@iconify/react";
// import toolsIcon from "@iconify/icons-fluent/apps-24-filled";

// Stack Icons
import reactIcon from "@iconify/icons-logos/react";
import routerIcon from "@iconify/icons-logos/react-router";
import tailwindIcon from "@iconify/icons-logos/tailwindcss";
import framerIcon from "@iconify/icons-logos/framer";
import daisyuiIcon from "@iconify/icons-logos/tailwindcss";

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
import javascriptIcon from "@iconify/icons-logos/javascript";

const allStacks = [
    { name: "React", icon: reactIcon },
    { name: "React Router", icon: routerIcon },
    { name: "TailwindCSS", icon: tailwindIcon },
    { name: "DaisyUI", icon: daisyuiIcon },
    { name: "Framer Motion", icon: framerIcon },
    { name: "Node.js", icon: nodejsIcon },
    { name: "Express.js", icon: expressIcon },
    { name: "MongoDB", icon: mongodbIcon },
    { name: "Firebase", icon: firebaseIcon },
    { name: "Git", icon: gitIcon },
    { name: "GitHub", icon: githubIcon },
    { name: "Netlify", icon: netlifyIcon },
    { name: "Vercel", icon: vercelIcon },
    { name: "VS Code", icon: vsCodeIcon },
    { name: "Stripe", icon: stripeIcon },
    { name: "DSA (JavaScript)", icon: javascriptIcon },
];

const TechnologySection = () => {
    return (
        <section
            id="technology"
            className="max-w-3xl mx-auto px-4 py-20"
        >
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2 text-gray-black dark:text-white">
                {/* <Icon icon={toolsIcon} width={28} /> */}
                {"Technology/>"}
            </h2>

            {/* Stack Cards */}
            <div className="flex flex-wrap gap-4 justify-center">
                {allStacks.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 border border-indigo-300 bg-base-100 dark:bg-[#1e1e26] rounded-xl px-4 py-2 min-w-[160px] h-[50px] shadow-sm text-gray-800 dark:text-gray-200"
                    >
                        <Icon icon={item.icon} width="24" height="24" />
                        <span className="text-sm font-medium">{item.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnologySection;
