import { NextSeo } from 'next-seo';
import AboutHeader from '../components/AboutHeader/AboutHeader';
import Summary from '../components/Summary/Summary';
import TechStack from '../components/TechStack/TechStack';
import Timeline from '../components/Timeline/Timeline';

const About = () => {
    return (
        <div className="grow">
            <NextSeo
                openGraph={{
                    title: 'So Who Is Michael Legemah?',
                    url: 'https://www.mleg.tech/about',
                    description: 'I&apos;m a Front End biased Software Engineer with over 10 years of professional experience. I&apos;ve worked in industries ranging from financial, to consumer packaged goods and everything in between.'
                }}
            />
            <AboutHeader />
            <Summary />
            <TechStack />
            <Timeline />
        </div>
    );
};

export default About;