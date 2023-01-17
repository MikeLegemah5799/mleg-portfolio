import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faChess, faUniversalAccess, faFingerprint, faPalette, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const Summary = () => {
    return (
        <section className="mx-auto container py-24 px-6">
            <div className="flex flex-col">
                <div class="h-1 bg-gray-light rounded overflow-hidden">
                    <div class="w-24 h-full bg-purple dark:bg-blue"></div>
                </div>
                <div className="text-center py-6 mb-2">
                    <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl text-purple dark:text-blue mb-6">So Who Is Michael Legemah?</h1>
                    <p className="text-2xl text-left">I&apos;m a Front End biased Software Engineer with over 10 years of professional experience. I&apos;ve worked in industries ranging from financial, to consumer packaged goods and everything in between. My focus is the following areas:</p>
                </div>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-light rounded flex p-4 h-full items-center">
                        <FontAwesomeIcon
                            icon={faCode}
                            style={{ fontSize: 24, color: "#7A28CB" }}
                            className="w-6 h-6 flex-shrink-0 mr-4"
                        />
                        <span class="title-font font-medium">Web Development & Web Applications</span>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-light rounded flex p-4 h-full items-center">
                        <FontAwesomeIcon
                            icon={faChess}
                            style={{ fontSize: 24, color: "#7A28CB" }}
                            className="w-6 h-6 flex-shrink-0 mr-4"
                        />
                        <span class="title-font font-medium">Content Strategy & Content Management</span>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-light rounded flex p-4 h-full items-center">
                        <FontAwesomeIcon
                            icon={faUniversalAccess}
                            style={{ fontSize: 24, color: "#7A28CB" }}
                            className="w-6 h-6 flex-shrink-0 mr-4"
                        />
                        <span class="title-font font-medium">Accessibility</span>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-light rounded flex p-4 h-full items-center">
                        <FontAwesomeIcon
                            icon={faFingerprint}
                            style={{ fontSize: 24, color: "#7A28CB" }}
                            className="w-6 h-6 flex-shrink-0 mr-4"
                        />
                        <span class="title-font font-medium">Cyber Security</span>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-light rounded flex p-4 h-full items-center">
                        <FontAwesomeIcon
                            icon={faPalette}
                            style={{ fontSize: 24, color: "#7A28CB" }}
                            className="w-6 h-6 flex-shrink-0 mr-4"
                        />
                        <span class="title-font font-medium">User Experience</span>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-light rounded flex p-4 h-full items-center">
                        <FontAwesomeIcon
                            icon={faUserGraduate}
                            style={{ fontSize: 24, color: "#7A28CB" }}
                            className="w-6 h-6 flex-shrink-0 mr-4"
                        />
                        <span class="title-font font-medium">Mentorship</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;