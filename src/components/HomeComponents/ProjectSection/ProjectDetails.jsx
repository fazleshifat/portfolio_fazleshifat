import React from "react";
import { useParams, Link } from "react-router";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";

const projects = [
    {
        slug: "venmart",
        name: "Venmart - E-commerce Marketplace",
        image: "/assets/venmart.png",
        techStack: ["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS", "Stripe"],
        description:
            "Venmart is a modern e-commerce marketplace allowing vendors to sell products online with secure payments and smooth user experience. Features include product listings, cart management, order tracking, and Stripe-powered checkout.",
        liveLink: "https://venmart.netlify.app",
        githubClient: "https://github.com/fazleshifat/venmart-client",
        challenges:
            "Integrating multiple payment gateways and ensuring seamless order management were the biggest technical challenges.",
        improvements:
            "Future plans include AI-driven product recommendations, advanced analytics for vendors, and a mobile application.",
    },
    {
        slug: "Trustix",
        name: "Trustix - Football League Ticket Management",
        image: "https://picsum.photos/seed/trustix/800/450",
        techStack: ["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS"],
        description:
            "Trustix is a B2B football league ticket management platform designed for organizers, venues, and ticket distributors. It streamlines ticket creation, distribution, seat allocation, and real-time sales tracking for football leagues and tournaments.",
        liveLink: "#",
        githubClient: "#",
        challenges:
            "Building a real-time seat allocation system and managing concurrent ticket purchases across multiple venues were the primary challenges.",
        improvements:
            "Planning to add QR-code based ticket validation, mobile app for ticket scanning, and analytics dashboards for organizers.",
    },
    {
        slug: "ivorymade",
        name: "Ivorymade - Dental Equipment B2B Marketplace",
        image: "https://picsum.photos/seed/ivorymade/800/450",
        techStack: ["React", "Express.js", "MongoDB", "TailwindCSS", "Firebase Auth"],
        description:
            "Ivorymade is a B2B dental exercise equipment selling platform that connects dentists with sellers. It features product catalogs, order management, dentist-seller communication, and a streamlined procurement system for dental practices.",
        liveLink: "#",
        githubClient: "#",
        challenges:
            "Designing the multi-role system for dentists and sellers with appropriate access controls and building a specialized product categorization for dental equipment.",
        improvements:
            "Future plans include adding subscription-based ordering, inventory management for sellers, and integration with dental practice management software.",
    },
    {
        slug: "coaching-record",
        name: "Coaching Record - Athletic Sports Tracker",
        image: "https://picsum.photos/seed/coaching/800/450",
        techStack: ["React", "Node.js", "MongoDB", "Firebase", "TailwindCSS"],
        description:
            "Coaching Record is an athletic sports tracking application designed for coaches, students, and guardians. It enables tracking of progress across multiple sports, session management, performance reporting, and communication between coaches and guardians.",
        liveLink: "#",
        githubClient: "#",
        challenges:
            "Building a multi-role system with different dashboards for coaches, students, and guardians while keeping the data synchronized and generating meaningful progress reports.",
        improvements:
            "Planning to add video analysis integration, AI-powered performance insights, and a mobile app for on-field tracking.",
    },
    {
        slug: "cryppo",
        name: "Cryppo - Cryptocurrency Platform",
        image: "https://picsum.photos/seed/cryppo/800/450",
        techStack: ["React", "Redux", "Node.js", "MongoDB", "TailwindCSS"],
        description:
            "Cryppo is a cryptocurrency platform providing live market updates, portfolio tracking, and investment insights. Users can monitor real-time price changes, manage their crypto portfolios, and access market analysis tools.",
        liveLink: "#",
        githubClient: "#",
        challenges:
            "Implementing real-time price updates with WebSocket connections and building accurate portfolio valuation with multiple currency support.",
        improvements:
            "Future plans include adding trading functionality, price alerts, social trading features, and advanced charting tools.",
    },
];

const ProjectDetails = () => {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-400 bg-slate-50 dark:bg-slate-900">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Project not found</h2>
                    <Link to="/" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <section className="max-w-4xl mx-auto px-6 py-24">
            {/* Back Link */}
            <Link
                to="/"
                className="inline-flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors mb-8"
            >
                <ArrowLeft size={18} /> Back to Projects
            </Link>

            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/50 mb-10">
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                {project.name}
            </h1>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-8">
                {project.techStack.map((tech, i) => (
                    <span
                        key={i}
                        className="bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 px-4 py-1.5 rounded-full text-sm font-medium"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Description */}
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg mb-8">
                {project.description}
            </p>

            {/* Challenges */}
            <div className="mb-8">
                <h3 className="text-cyan-600 dark:text-cyan-400 font-semibold text-lg mb-2">Challenges</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{project.challenges}</p>
            </div>

            {/* Improvements */}
            <div className="mb-10">
                <h3 className="text-cyan-600 dark:text-cyan-400 font-semibold text-lg mb-2">
                    Future Improvements
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{project.improvements}</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
                {project.liveLink !== "#" && (
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    >
                        Live Demo <FaExternalLinkAlt />
                    </a>
                )}
                {project.githubClient !== "#" && (
                    <a
                        href={project.githubClient}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold transition-all duration-300"
                    >
                        GitHub <FaGithub />
                    </a>
                )}
            </div>
        </section>
    );
};

export default ProjectDetails;
