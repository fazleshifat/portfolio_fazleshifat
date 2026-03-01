import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Jr. Full Stack Developer",
        company: "Potential Inc.",
        location: "South Korea",
        period: "Aug 2025 - Present",
        type: "Full-time",
        description:
            "Developing and maintaining full-stack web applications using React, Node.js, and MongoDB. Collaborating with cross-functional teams to deliver scalable, production-ready solutions.",
        technologies: ["React", "Node.js", "MongoDB", "Express.js", "TypeScript", "Tailwind CSS"],
        current: true,
    },
    {
        role: "Customer Relationship Officer",
        company: "Synergy Solutions",
        location: "Dhaka, Bangladesh",
        period: "Jul 2024 - Dec 2024",
        type: "Full-time",
        description:
            "Managed client relationships and supported digital transformation initiatives. Bridged communication between technical teams and clients to ensure project alignment and satisfaction.",
        technologies: [],
        current: false,
    },
    {
        role: "Script Writer",
        company: "Maya Film's",
        location: "Feni, Bangladesh",
        period: "Jul 2022 - Jul 2023",
        type: "Freelance",
        description:
            "Created engaging scripts for digital content, marketing campaigns, and video productions. Developed compelling narratives and collaborated with creative teams to deliver impactful storytelling.",
        technologies: [],
        current: false,
    },
];

const ExperienceSection = () => {
    return (
        <section id="experience" className="section-container">
            <div className="text-center mb-16">
                <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-widest uppercase">
                    Experience
                </span>
                <h2 className="section-heading mt-2">Work Experience</h2>
                <div className="heading-accent mx-auto mt-4"></div>
            </div>

            <div className="relative max-w-3xl mx-auto">
                {/* Timeline Line */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 to-purple-500" />

                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        className={`relative flex flex-col md:flex-row items-start mb-12 ${
                            i % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 dark:bg-cyan-400 border-4 border-slate-50 dark:border-slate-900 z-10 mt-6" />

                        {/* Card */}
                        <div
                            className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                                i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                            }`}
                        >
                            <div
                                className={`bg-white dark:bg-slate-800/50 border rounded-xl p-6 hover:border-cyan-400/50 dark:hover:border-cyan-500/30 transition-all duration-300 shadow-sm dark:shadow-none ${
                                    exp.current
                                        ? "border-cyan-400/50 dark:border-cyan-500/30 shadow-md shadow-cyan-500/5 dark:shadow-lg dark:shadow-cyan-500/5"
                                        : "border-slate-200 dark:border-slate-700/50"
                                }`}
                            >
                                <div className="flex flex-wrap items-center gap-2 mb-3">
                                    <Briefcase size={18} className="text-cyan-600 dark:text-cyan-400" />
                                    <span className="text-slate-500 dark:text-slate-400 text-sm">{exp.period}</span>
                                    {exp.current && (
                                        <span className="bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">
                                            Present
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                                    {exp.role}
                                </h3>
                                <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-1">
                                    {exp.company}
                                </p>
                                <p className="text-slate-400 dark:text-slate-500 text-sm mb-4">{exp.location}</p>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                    {exp.description}
                                </p>
                                {exp.technologies.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, j) => (
                                            <span
                                                key={j}
                                                className="bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs px-2.5 py-1 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;
