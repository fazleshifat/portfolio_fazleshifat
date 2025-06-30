import React from 'react';
import Navbar from '../../../shared/Navbar/Navbar';
import Banner from '../../../components/HomeComponents/Banner/Banner';
import AboutMe from '../../../components/HomeComponents/AboutMe/AboutMe';
import EducationSection from '../../../components/HomeComponents/EducationSection/EducationSection';
import TechStackSection from '../../../components/HomeComponents/TechStackSection/TechStackSection';
import ProjectsSection from '../../../components/HomeComponents/ProjectSection/ProjectSection';
import ContactSection from '../../../components/HomeComponents/ContactSection.jsx/ContactSection';

const Home = () => {
    return (
        <>

            <section className='dark:bg-gradient-to-b from-indigo-900 via-gray-800 min-h-screen'>
                <Banner></Banner>
                <AboutMe></AboutMe>
                <TechStackSection></TechStackSection>
                <EducationSection></EducationSection>
                <ProjectsSection></ProjectsSection>
                <ContactSection></ContactSection>
            </section>

        </>
    );
};

export default Home;