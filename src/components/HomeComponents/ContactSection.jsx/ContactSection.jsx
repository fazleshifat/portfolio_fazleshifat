import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import emailIcon from "@iconify-icons/mdi/email";
import phoneIcon from "@iconify-icons/mdi/phone";
import whatsappIcon from "@iconify-icons/mdi/whatsapp";
import mapMarkerIcon from "@iconify-icons/mdi/map-marker";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const contactInfo = [
    {
        icon: emailIcon,
        label: "Email",
        value: "mailbox.shifat@gmail.com",
        href: "mailto:mailbox.shifat@gmail.com",
    },
    {
        icon: phoneIcon,
        label: "Phone",
        value: "+8801600872442",
        href: "tel:+8801600872442",
    },
    {
        icon: whatsappIcon,
        label: "WhatsApp",
        value: "+8801600872442",
        href: "https://wa.me/8801831694191",
    },
    {
        icon: mapMarkerIcon,
        label: "Location",
        value: "Chattogram, Bangladesh",
        href: null,
    },
];

const ContactSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent! Replace this with your backend logic.");
    };

    return (
        <section id="contact" className="section-container">
            <div className="text-center mb-16">
                <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-widest uppercase">
                    Contact
                </span>
                <h2 className="section-heading mt-2">Get In Touch</h2>
                <div className="heading-accent mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl p-8 shadow-sm dark:shadow-none"
                >
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                        Contact Information
                    </h3>
                    <div className="space-y-6">
                        {contactInfo.map((item, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-500/10 flex items-center justify-center shrink-0">
                                    <Icon
                                        icon={item.icon}
                                        width="24"
                                        height="24"
                                        className="text-cyan-600 dark:text-cyan-400"
                                    />
                                </div>
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        target={item.href.startsWith("http") ? "_blank" : undefined}
                                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
                                    >
                                        {item.value}
                                    </a>
                                ) : (
                                    <span className="text-slate-600 dark:text-slate-300 font-medium">
                                        {item.value}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-700/50">
                        <p className="text-slate-400 dark:text-slate-500 text-sm mb-4">Find me on</p>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/fazleshifat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-500/10 transition-all"
                            >
                                <FaGithub size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/md-al-fazle-shifat-a514413ba/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-500/10 transition-all"
                            >
                                <FaLinkedin size={18} />
                            </a>
                            <a
                                href="https://web.facebook.com/al.fazle.shifat/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-500/10 transition-all"
                            >
                                <FaFacebook size={18} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl p-8 shadow-sm dark:shadow-none"
                >
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                        Send a Message
                    </h3>
                    <div className="space-y-5">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg px-4 py-3 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/50 dark:focus:ring-cyan-400/50 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg px-4 py-3 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/50 dark:focus:ring-cyan-400/50 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                        />
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            required
                            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg px-4 py-3 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/50 dark:focus:ring-cyan-400/50 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
};

export default ContactSection;
