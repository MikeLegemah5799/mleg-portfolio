import NextSeo from 'next-seo';
import AboutHeader from '../components/AboutHeader/AboutHeader';
import Summary from '../components/Summary/Summary';
const About = () => {
    return (
        <div className="grow">
            <AboutHeader />
            <Summary />
        </div>
    );
};

export default About;