import { NextSeo } from 'next-seo';

const Projects = () => {
    return (
        <div className="grow">
            <NextSeo
                openGraph={{
                    title: 'Carefully Curated Projects',
                    url: 'https://www.mleg.tech/projects',
                    description: 'A curated list of all my projects I&spos;ve done over the years.'
                }}
            />
        </div>
    );
};

export default Projects;