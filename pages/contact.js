import { NextSeo } from 'next-seo';
import ContactSection from '../components/ContactSection/ContactSection';
import TextHeader from '../components/TextHeader/TextHeader';

const Contact = () => {
    return (
        <div className="grow">
            <NextSeo
                title="Contact | Michael Legemah"
                openGraph={{
                    title: 'Get In Touch With Me',
                    url: 'https://www.mleg.tech/contact',
                    description: 'Contact information for Michael Legemah.'
                }}
            />
            <TextHeader
                title="Get In Touch With Me"
            />
            <ContactSection />
        </div>
    );
};

export default Contact;