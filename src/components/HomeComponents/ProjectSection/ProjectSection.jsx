import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Briefcase, Code } from "lucide-react";

const clientProjects = [
    {
        name: "Trustix",
        image: "/assets/trustix.png",
        slug: "Trustix",
        role: "Frontend Developer",
        shortDescription: "B2B football league ticket management platform for organizers, venues, and ticket distributors.",
        tech: ["React", "TailwindCSS", "Redux", "ChartJS"],
        live: "https://trustix.uk/",
    },
    {
        name: "Ivorymade",
        image: "/assets/ivorymade.png",
        slug: "ivorymade",
        role: "Frontend Developer",
        shortDescription: "B2B dental exercise equipment marketplace connecting dentists with sellers and managing orders.",
        tech: ["React", "Tailwind CSS", "Redux", "Calendly", "Channel Talk", "Chat system"],
        live: "https://ivorymade.com/",
    },
    {
        name: "Coaching Record",
        image: "/assets/coaching-record.png",
        slug: "coaching-record",
        role: "Frontend Developer",
        shortDescription: "Athletic sports tracking app for coaches, students, and guardians to monitor progress and generate reports.",
        tech: ["React", "TailwindCSS", "Redux"],
        live: "https://mobile.thecoachingrecord.com",
    },
];

const personalProjects = [
    {
        name: "Dropvein",
        image: "/assets/dropvein.png",
        slug: "dropvein",
        role: "Full Stack Developer",
        shortDescription: "Blood donation platform where users can donate blood, request donations, with Stripe payments, Calendly booking, and Channel Talk chat.",
        tech: ["React", "Node.js", "MongoDB", "ExpressJS", "Stripe", "Channel Talk", "Calendly"],
        live: "https://dropvein.netlify.app",
    },
    {
        name: "Venmart",
        image: "/assets/venmart.png",
        slug: "venmart",
        role: "Full Stack Developer",
        shortDescription: "E-commerce marketplace with Stripe payments, vendor management, and seamless shopping experience.",
        tech: ["React", "Node.js", "MongoDB", "ExpressJS"],
        live: "https://venmart.netlify.app",
    },
];

const ProjectCard = ({ project, index }) => (
    <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl overflow-hidden group hover:border-cyan-400/50 dark:hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-500"
    >
        {/* Image */}
        <div className="h-48 overflow-hidden relative">
            <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <span className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 text-xs font-medium text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-full">
                {project.role}
            </span>
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
);

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

            {/* Client Projects */}
            <div className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                    <Briefcase size={20} className="text-cyan-600 dark:text-cyan-400" />
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Client Projects
                    </h3>
                    <span className="text-xs text-slate-400 dark:text-slate-500 ml-1">— Frontend role, collaborated with backend team</span>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {clientProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>

            {/* Personal Projects */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <Code size={20} className="text-cyan-600 dark:text-cyan-400" />
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Personal Projects
                    </h3>
                    <span className="text-xs text-slate-400 dark:text-slate-500 ml-1">— Full stack: frontend, backend & database</span>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {personalProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
