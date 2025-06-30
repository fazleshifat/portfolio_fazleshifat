import React from "react";
import { Icon } from "@iconify/react";
import emailIcon from "@iconify-icons/mdi/email";
import phoneIcon from "@iconify-icons/mdi/phone";
import whatsappIcon from "@iconify-icons/mdi/whatsapp";
import mapMarkerIcon from "@iconify-icons/mdi/map-marker";

const ContactSection = () => {
    // Example form handler (replace with your own logic)
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent! Replace this with your backend logic.");
    };

    return (
        <section
            id="contact"
            className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-center items-center gap-16 px-6 py-20"
        >
            {/* Contact Info Card */}
            <div className="flex-1 max-w-md p-10 rounded-xl shadow-lg">
                <h2 className="text-4xl font-extrabold mb-8 text-black dark:text-white">
                    Contact Info
                </h2>
                <div className="flex flex-col space-y-8 text-center">
                    <div className="flex gap-4">
                        <Icon icon={emailIcon} width="36" height="36" className="text-indigo-500" />
                        <a
                            href="mailto:mailbox.shifat@gmail.com"
                            className="text-lg font-semibold text-black dark:text-white hover:underline"
                        >
                            mailbox.shifat@gmail.com
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <Icon icon={phoneIcon} width="36" height="36" className="text-indigo-500" />
                        <a
                            href="tel:+8801831694191"
                            className="text-lg font-semibold text-black dark:text-white hover:underline"
                        >
                            +8801831694191
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <Icon icon={whatsappIcon} width="36" height="36" className="text-indigo-500" />
                        <a
                            href="https://wa.me/8801831694191"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-semibold text-black dark:text-white hover:underline"
                        >
                            +8801831694191 (WhatsApp)
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <Icon icon={mapMarkerIcon} width="36" height="36" className="text-indigo-500" />
                        <p className="text-lg font-semibold text-black dark:text-white">
                            Mirsarai, Chittagong
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <form
                onSubmit={handleSubmit}
                className="flex-1 max-w-2xl p-10 border-2 rounded-xl shadow-lg border-indigo-300 bg-white dark:bg-[#1e1e26]"
            >
                <h2 className="text-4xl font-extrabold mb-8 text-black dark:text-white text-center">
                    Send a Message
                </h2>

                <div className="flex flex-col space-y-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2a2a3b] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2a2a3b] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        required
                        className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2a2a3b] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 transition text-white font-semibold rounded-md py-3"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ContactSection;
