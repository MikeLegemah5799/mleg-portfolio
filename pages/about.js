import NextSeo from 'next-seo';
import AboutHeader from '../components/AboutHeader/AboutHeader';
import Summary from '../components/Summary/Summary';
import TechStack from '../components/TechStack/TechStack';

const About = () => {
    return (
        <div className="grow">
            <AboutHeader />
            <Summary />
            <TechStack />
        </div>
    );
};

export default About;