import React from "react";
import { useParams, Link } from "react-router";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";

const projects = [
    {
        slug: "venmart",
        name: "Venmart - E-commerce Marketplace",
        image: "/assets/venmart.png",
        techStack: ["React", "Node.js", "MongoDB", "ExpressJS", "TailwindCSS", "Stripe"],
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
        image: "/assets/trustix.png",
        techStack: ["React", "TailwindCSS", "Redux", "ChartJS"],
        role: "Frontend Developer",
        description:
            "Trustix is a B2B football league ticket management platform designed for organizers, venues, and ticket distributors. It streamlines ticket creation, distribution, seat allocation, and real-time sales tracking for football leagues and tournaments.",
        liveLink: "https://trustix.uk/",
        githubClient: "#",
        challenges:
            "Real-time ticket management with live updates across multiple venues was the core challenge. Implementing QR code generation and scanning for single-ticket stadium access required tight integration with the ticketing flow. Building Excel import/export functionality for bulk management of users, tickets, and suppliers added significant complexity to the data handling layer.",
        improvements:
            "Planning to add mobile app for on-site ticket scanning, advanced analytics dashboards for organizers, and automated supplier reporting.",
    },
    {
        slug: "ivorymade",
        name: "Ivorymade - Dental Equipment B2B Marketplace",
        image: "/assets/ivorymade.png",
        techStack: ["React", "TailwindCSS", "Redux", "Calendly", "Channel Talk"],
        role: "Frontend Developer",
        description:
            "Ivorymade is a B2B dental exercise equipment selling platform that connects dentists with sellers. It features product catalogs, order management, a custom-built real-time chat system for dentist-seller communication, Channel Talk integration for booking meetings, and a streamlined procurement system for dental practices.",
        liveLink: "https://ivorymade.com/",
        githubClient: "#",
        challenges:
            "Initially we attempted to fully integrate Channel Talk's API with our own API key directly into the website. We achieved roughly 80% of the integration, but due to major dependency barriers and a tight deadline, we pivoted to building a custom chat system from scratch. The result is a fully functional real-time chat where users can send messages and admins can reply instantly — supporting text, images, and file sharing. Managing the real-time chat state and file uploads was a significant engineering effort.",
        improvements:
            "Future plans include adding subscription-based ordering, inventory management for sellers, and integration with dental practice management software.",
    },
    {
        slug: "dropvein",
        name: "Dropvein - Blood Donation Platform",
        image: "/assets/dropvein.png",
        techStack: ["React", "Node.js", "MongoDB", "ExpressJS", "Stripe", "Channel Talk", "Calendly", "TailwindCSS"],
        description:
            "Dropvein is a blood donation platform where users can donate blood and request donations. It features Stripe-powered payments for donations, Calendly integration for booking meetings, and Channel Talk for real-time chat support. Admins can manage and oversee all donation requests and activities.",
        liveLink: "https://dropvein.netlify.app",
        githubClient: "#",
        challenges:
            "Integrating multiple third-party services (Stripe, Calendly, Channel Talk) into a cohesive user experience and building a reliable admin dashboard for managing donation requests.",
        improvements:
            "Future plans include adding blood type matching, location-based donor search, notification alerts for urgent requests, and a mobile application.",
    },
    {
        slug: "coaching-record",
        name: "Coaching Record - Athletic Sports Tracker",
        image: "/assets/coaching-record.png",
        techStack: ["React", "TailwindCSS", "Redux"],
        role: "Frontend Developer",
        description:
            "Coaching Record is an athletic sports tracking application designed for coaches, students, and guardians. It enables real-time tracking of athlete progress across multiple sports, session management, performance reporting, and communication between coaches and guardians.",
        liveLink: "https://mobile.thecoachingrecord.com",
        githubClient: "#",
        challenges:
            "The biggest challenge was handling real-time data recording for athletes as a coach. The system needed to work seamlessly across three distinct roles — coach, parent, and athlete — each with their own dashboard and data views. Keeping all real-time data synchronized across these roles while ensuring each user only sees their authorized data required careful state management and API design on the frontend.",
        improvements:
            "Planning to add video analysis integration, AI-powered performance insights, and a mobile app for on-field tracking.",
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
