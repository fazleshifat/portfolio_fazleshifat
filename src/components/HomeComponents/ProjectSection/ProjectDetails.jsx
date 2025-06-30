import React from "react";
import { useParams, Link } from "react-router";
import { FaExternalLinkAlt, FaGithub, FaArrowLeft } from "react-icons/fa";

const projects = [
    {
        slug: "marigold",
        name: "Marigold - Online Utility Bill Payment System",
        image: "/assets/marigold.png",
        techStack: ["React", "Express.js", "MongoDB", "TailwindCSS", "Firebase Auth"],
        description:
            "Marigold is an online utility bill payment platform that simplifies paying electricity, gas, and water bills with an easy-to-use interface and secure transactions.",
        liveLink: "https://marigold-payment.netlify.app",
        githubClient: "https://github.com/fazleshifat/marigold-payment",
        challenges:
            "Handling real-time payment verification and ensuring secure API endpoints for payment processing were the biggest challenges.",
        improvements:
            "Plan to add mobile apps, improve UI/UX with more detailed user dashboards, and integrate more payment gateways in the future.",
    },
    {
        slug: "hobbins",
        name: "Hobbins - Community & Group Management App",
        image: "/assets/hobbins.png",
        techStack: ["React", "Firebase", "Express.js", "MongoDB", "TailwindCSS"],
        description:
            "Hobbins is a community and group management application enabling users to create, join, and manage various hobby groups with event planning and chat features.",
        liveLink: "https://hobbins.netlify.app",
        githubClient: "https://github.com/fazleshifat/hobbins-client",
        challenges:
            "Implementing real-time chat and managing group permissions securely were key challenges during development.",
        improvements:
            "Planning to add mobile push notifications, richer user profiles, and more interactive event calendars.",
    },
    {
        slug: "venmart",
        name: "Venmart - E-commerce Marketplace",
        image: "/assets/venmart.png",
        techStack: ["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS", "Stripe"],
        description:
            "Venmart is a modern e-commerce marketplace allowing vendors to sell products online with secure payments and smooth user experience.",
        liveLink: "https://venmart.netlify.app",
        githubClient: "https://github.com/fazleshifat/venmart-client",
        challenges:
            "Integrating multiple payment gateways and ensuring seamless order management were the biggest technical challenges.",
        improvements:
            "Future plans include AI-driven product recommendations and advanced analytics for vendors.",
    },
];


const ProjectDetails = () => {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-500">
                Project not found.
            </div>
        );
    }

    return (
        <section className="max-w-5xl mx-auto px-6 py-12 border-2 border-indigo-600 rounded-lg
      bg-white text-white
      transition-colors duration-300"
        >
            {/* Big Image */}
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Title */}
            <h1 className="text-4xl font-extrabold mb-6 text-gray-800">
                {project.name}
            </h1>

            {/* Tech Stack */}
            <div className="mb-8">
                <ul className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, i) => (
                        <li
                            key={i}
                            className="px-4 py-2 bg-indigo-100 text-indigo-900 rounded-full font-medium dark:bg-indigo-200 dark:text-indigo-800"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Description */}
            <div className="mb-8 text-gray-700 leading-relaxed">
                <p>{project.description}</p>
            </div>

            {/* Challenges */}
            <div className="mb-8 text-gray-700 leading-relaxed">
                <span className="font-semibold text-indigo-400 dark:text-indigo-600">Challenges: </span>
                {project.challenges}
            </div>

            {/* Improvements */}
            <div className="mb-8 text-gray-700 leading-relaxed">
                <span className="font-semibold text-indigo-400 dark:text-indigo-600">Potential Improvements: </span>
                {project.improvements}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-start">
                <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-md hover:bg-indigo-700 transition"
                >
                    Live Demo <FaExternalLinkAlt />
                </a>
                <a
                    href={project.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-indigo-600 text-indigo-600 px-5 py-3 rounded-md hover:bg-indigo-600 hover:text-white transition"
                >
                    GitHub Client <FaGithub />
                </a>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 border border-gray-400 text-gray-400 px-5 py-3 rounded-md hover:bg-gray-400 hover:text-black transition"
                >
                    <FaArrowLeft /> Back to Projects
                </Link>
            </div>
        </section>
    );
};

export default ProjectDetails;
