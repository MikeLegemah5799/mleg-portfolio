import { NextSeo } from 'next-seo';
import AllProjects from '../components/AllProjects/AllProjects';
import TextHeader from '../components/TextHeader/TextHeader';

const Projects = () => {
    return (
        <div className="grow">
            <NextSeo
                title="Projects | Michael Legemah"
                openGraph={{
                    title: 'Carefully Curated Projects',
                    url: 'https://www.mleg.tech/projects',
                    description: 'A curated list of all my projects I&spos;ve done over the years.'
                }}
            />
            <TextHeader
                title="A Collection Of Projects I&apos;m Proud Of"
            />
            <AllProjects />
        </div>
    );
};

export default Projects;