import React from "react";
import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";

const experiences = [
    {
        role: "Jr. Full Stack Developer",
        company: "Potential Inc.",
        location: "South Korea",
        period: "Aug 2025 - Present",
        type: "Full-time",
        description:
            "Delivered 2 production-ready projects collaborating closely with project managers, backend engineers, and designers. Built and maintained full-stack web applications from concept to deployment.",
        companyLink: "https://potentialai.com/",
        current: true,
    },
    {
        role: "Intern Frontend Developer",
        company: "Potential Inc.",
        location: "South Korea",
        period: "May 2025 - Aug 2025",
        type: "Internship",
        description:
            "Completed 2 client-facing projects collaborating with project managers, backend developers, and designers. Focused on meeting tight deadlines and client requirements through smooth planning, from PRD to delivery.",
        companyLink: "https://potentialai.com/",
        current: false,
    },
    {
        role: "Customer Relationship Officer",
        company: "Synergy Solutions BD",
        location: "Dhaka, Bangladesh",
        period: "Jul 2024 - Dec 2024",
        type: "Full-time",
        description:
            "Managed client relationships and supported digital transformation initiatives. Bridged communication between technical teams and clients to ensure project alignment and satisfaction.",
        companyLink: "https://web.facebook.com/synergysolutionsbd?_rdc=1&_rdr#",
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
        companyLink: "https://web.facebook.com/mayafilmsbd",
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
                                {exp.companyLink && (
                                    <a
                                        href={exp.companyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 text-sm font-medium hover:underline"
                                    >
                                        Visit Company <ExternalLink size={14} />
                                    </a>
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
