import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import mikeMemoji from '../../public/static/mikeMemoji.png';

const ContactSection = () => {
    return (
        <section className="relative z-10 rounded-md shadow-md bg-purple p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:ml-4">
                    <h2 className="text-white font-semibold text-2xl">
                        Wanna work with me, let&apos;s talk.
                    </h2>
                    <p className="font-light text-base text-white mt-2">
                        Email me, DM me, or call me. I&apos;ll get back to you as soon as I can.
                    </p>
                    <div className="icons-container inline-flex flex-col my-20">
                        <div className="flex flex-row items-center p-4">
                            <FontAwesomeIcon
                                icon={faPhone}
                                style={{ fontSize: 24, color: "#FFF" }}
                                className="w-6 h-6 flex-shrink-0 mr-4"
                            />
                            <a className="text-white text-md" href="tel:5162731611">
                            516-273-1611
                            </a>
                        </div>
                        <div className="flex flex-row items-center p-4">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                style={{ fontSize: 24, color: "#FFF" }}
                                className="w-6 h-6 flex-shrink-0 mr-4"
                            />
                            <a className="text-white text-md" href="mailto:michaellegemah@gmail.com">
                                michaellegemah@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <Image
                        src={mikeMemoji}
                        alt="Mike Memoji"
                    />
                </div>
            </div>
        </section>
    );
};
export default ContactSection;