import React from "react";
import { Link } from "react-router";


const projects = [
    {
        name: "Marigold",
        image: "/assets/marigold.png",
        slug: "marigold",
        shortDescription: "Online utility bill payment system.",
        live: "https://marigold-payment.netlify.app",
    },
    {
        name: "Hobbins",
        image: "/assets/hobbins.png",
        slug: "hobbins",
        shortDescription: "Hobby group community web app.",
        live: "https://hobbins.netlify.app",
    },
    {
        name: "Venmart",
        image: "/assets/venmart.png",
        slug: "venmart",
        shortDescription: "E-commerce platform for daily goods.",
        live: "https://venmart.netlify.app",
    },
];



const ProjectsSection = () => {
    return (
        <section id="projects" className="max-w-[1300px] mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold text-center text-indigo-400 mb-10">Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="card bg-base-100 dark:bg-[#1e1e26] shadow-md rounded-xl overflow-hidden border border-indigo-300"
                    >
                        <div className="p-3 pb-0 overflow-hidden rounded-lg">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-48 object-cover rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="text-xl font-semibold text-indigo-300 mb-2">{project.name}</h3>
                            <p className="text-gray-400 text-sm mb-4">
                                {project.shortDescription}
                            </p>

                            <div className="flex justify-center gap-3 flex-wrap">
                                <Link
                                    to={`/projects/${project.slug}`}
                                    className="btn btn-outline btn-sm btn-primary"
                                >
                                    View Details
                                </Link>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-sm btn-secondary"
                                >
                                    Live Site
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
