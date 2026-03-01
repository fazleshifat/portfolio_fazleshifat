import React from 'react';
import Banner from '../../../components/HomeComponents/Banner/Banner';
import AboutMe from '../../../components/HomeComponents/AboutMe/AboutMe';
import ExperienceSection from '../../../components/HomeComponents/ExperienceSection/ExperienceSection';
import TechStackSection from '../../../components/HomeComponents/TechStackSection/TechStackSection';
import ProjectsSection from '../../../components/HomeComponents/ProjectSection/ProjectSection';
import EducationSection from '../../../components/HomeComponents/EducationSection/EducationSection';
import ContactSection from '../../../components/HomeComponents/ContactSection.jsx/ContactSection';

const Home = () => {
    return (
        <>
            <Banner />
            <AboutMe />
            <ExperienceSection />
            <TechStackSection />
            <ProjectsSection />
            <EducationSection />
            <ContactSection />
        </>
    );
};

export default Home;
