// components/EducationSection.jsx
import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';

const educationData = [
    {
        title: "Diploma in Engineering",
        subject: "Computer Science & Technology",
        institution: "Feni Computer Institute",
        duration: "2024",
        cgpa: "3.41",
        description: "Focused on web development, algorithms, and system design. Participated in programming contests and contributed to open-source projects.",
    },
    {
        title: "Secondary School Certificate (SSC)",
        institution: "Maruf Model Primary & High School",
        duration: "2019",
        cgpa: "5.00",
        description: "Completed SSC with excellent results, focused on science and computer studies.",
    },

];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2 },
    }),
};

const EducationSection = () => {
    return (
        <section id="education" className="max-w-[1300px] mx-auto py-16 text-base-content">
            <div className="max-w-5xl mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <GraduationCap className="inline-block mr-2 text-purple-500" size={28} />
                    Education
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {educationData.map((item, i) => (
                        <motion.div
                            key={i}
                            className="card bg-base-100 shadow-xl rounded-2xl p-6 border-2 border-indigo-300"
                            initial="hidden"
                            whileInView="visible"
                            custom={i}
                            variants={cardVariants}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-400 mb-1">{item.title}</h3>
                            {item.subject && (
                                <p className="text-sm italic text-gray-400 mb-1">{item.subject}</p>
                            )}
                            <p className="text-sm text-gray-700 dark:text-gray-400 mb-1">{item.institution}</p>
                            <p className="text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">{item.duration}</p>
                            {item.cgpa && (
                                <p className="text-sm text-gray-800 dark:text-gray-400 mb-3">CGPA: {item.cgpa}</p>
                            )}
                            <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default EducationSection;
