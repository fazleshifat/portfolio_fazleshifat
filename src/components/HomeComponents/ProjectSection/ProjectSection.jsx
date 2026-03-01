import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
    {
        name: "Venmart",
        image: "/assets/venmart.png",
        slug: "venmart",
        shortDescription: "E-commerce marketplace with Stripe payments, vendor management, and seamless shopping experience.",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        live: "https://venmart.netlify.app",
    },
    {
        name: "Trustix",
        image: "https://picsum.photos/seed/trustix/600/400",
        slug: "Trustix",
        shortDescription: "B2B football league ticket management platform for organizers, venues, and ticket distributors.",
        tech: ["React", "Node.js", "MongoDB", "Express.js"],
        live: "#",
    },
    {
        name: "Ivorymade",
        image: "https://picsum.photos/seed/ivorymade/600/400",
        slug: "ivorymade",
        shortDescription: "B2B dental exercise equipment marketplace connecting dentists with sellers and managing orders.",
        tech: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
        live: "#",
    },
    {
        name: "Coaching Record",
        image: "https://picsum.photos/seed/coaching/600/400",
        slug: "coaching-record",
        shortDescription: "Athletic sports tracking app for coaches, students, and guardians to monitor progress and generate reports.",
        tech: ["React", "Node.js", "MongoDB", "Firebase"],
        live: "#",
    },
    {
        name: "Cryppo",
        image: "https://picsum.photos/seed/cryppo/600/400",
        slug: "cryppo",
        shortDescription: "Cryptocurrency platform with live market updates, portfolio tracking, and investment insights.",
        tech: ["React", "Redux", "Node.js", "MongoDB"],
        live: "#",
    },
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="section-container">
            <div className="text-center mb-16">
                <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-widest uppercase">
                    Projects
                </span>
                <h2 className="section-heading mt-2">Featured Work</h2>
                <div className="heading-accent mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl overflow-hidden group hover:border-cyan-400/50 dark:hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-500"
                    >
                        {/* Image */}
                        <div className="h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                                {project.name}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                                {project.shortDescription}
                            </p>

                            {/* Tech Tags */}
                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs px-2.5 py-1 rounded"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Action Links */}
                            <div className="flex items-center justify-between">
                                <Link
                                    to={`/projects/${project.slug}`}
                                    className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 text-sm font-medium inline-flex items-center gap-1 transition-colors"
                                >
                                    View Details <ArrowRight size={14} />
                                </Link>
                                {project.live !== "#" && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-slate-700 dark:hover:text-white text-sm inline-flex items-center gap-1 transition-colors"
                                    >
                                        Live Site <ExternalLink size={14} />
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

export default ProjectsSection;
