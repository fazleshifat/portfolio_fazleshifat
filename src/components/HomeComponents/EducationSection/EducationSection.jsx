import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
    {
        title: "Diploma in Engineering",
        subject: "Computer Science & Technology",
        institution: "Feni Govt. Computer Institute",
        duration: "2024",
        cgpa: "3.41",
        description:
            "Focused on web development, algorithms, and system design. Participated in programming contests and contributed to open-source projects.",
    },
    {
        title: "Secondary School Certificate (SSC)",
        institution: "Maruf Model Primary & High School",
        duration: "2019",
        cgpa: "5.00",
        description:
            "Completed SSC, focused on science and computer studies.",
    },
];

const EducationSection = () => {
    return (
        <section id="education" className="section-container">
            <div className="text-center mb-16">
                <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-widest uppercase">
                    Education
                </span>
                <h2 className="section-heading mt-2">Academic Background</h2>
                <div className="heading-accent mx-auto mt-4"></div>
            </div>

            <div className="relative max-w-2xl mx-auto">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 to-purple-500" />

                {educationData.map((item, i) => (
                    <motion.div
                        key={i}
                        className="relative flex items-start mb-10 last:mb-0"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-6 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 dark:bg-cyan-400 border-4 border-slate-50 dark:border-slate-900 z-10 mt-6" />

                        {/* Card */}
                        <div className="ml-14 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/50 dark:hover:border-cyan-500/30 transition-all duration-300 w-full shadow-sm dark:shadow-none">
                            <div className="flex items-center gap-2 mb-3">
                                <GraduationCap size={18} className="text-cyan-600 dark:text-cyan-400" />
                                <span className="text-slate-500 dark:text-slate-400 text-sm">{item.duration}</span>
                                {item.cgpa && (
                                    <span className="bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-xs font-medium px-3 py-1 rounded-full ml-auto">
                                        CGPA: {item.cgpa}
                                    </span>
                                )}
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                                {item.title}
                            </h3>
                            {item.subject && (
                                <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-1">
                                    {item.subject}
                                </p>
                            )}
                            <p className="text-slate-400 dark:text-slate-500 text-sm mb-3">{item.institution}</p>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default EducationSection;
