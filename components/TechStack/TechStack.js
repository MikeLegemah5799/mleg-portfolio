import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faServer, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

const TechStack = () => {
    return (
        <section className="mx-auto bg-purple dark:bg-blue">
            <div className="container px-6 py-24 mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium title-font mb-4 text-white">Technologies I Work With:</h2>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                            <FontAwesomeIcon
                                icon={faDesktop}
                                style={{ fontSize: 80, color: "#39FF14" }}
                                className="w-20 h-20 flex-shrink-0 mr-4"
                            />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-white text-2xl title-font font-medium mb-3">Front End</h3>
                            <p className="leading-relaxed text-left text-white"><span className="font-semibold">Languages:</span> JavaScript, TypeScript, HTML, CSS, GraphQL</p>
                            <p className="leading-relaxed text-left text-white"><span className="font-semibold">Frameworks:</span> Angular, Vue, NextJS, TensorFlowJS</p>
                            <p className="leading-relaxed text-left text-white"><span className="font-semibold">Libraries:</span> React, JQuery, Framer, GSAP, HighCharts, Bootstrap, Foundation, TailWindCSS</p>
                            <p className="leading-relaxed text-left text-white"><span className="font-semibold">Mobile:</span> React Native, Progessive Web Apps(PWA)</p>
                            <p className="leading-relaxed text-left text-white"><span className="font-semibold">Templating:</span> Liquid, Handlebars, Twig</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                            <FontAwesomeIcon
                                icon={faServer}
                                style={{ fontSize: 80, color: "#39FF14" }}
                                className="w-20 h-20 flex-shrink-0 mr-4"
                            />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-white text-2xl title-font font-medium mb-3">Back End</h3>
                            <p className="leading-relaxed text-left text-white"><span className="font-semibold">Languages:</span> PHP, Python, Lua, Solidity</p>
                            <p className="leading-relaxed text-left text-white"><span className="font-semibold">Frameworks:</span> Laravel, DJango, Flask, Express, Solana, Palantir Warpcore, REST API, FastAPI</p>
                            <p className="leading-relaxed text-left text-white"><span className="font-semibold">Run Time:</span> Node, Deno</p>
                            <p className="leading-relaxed text-left text-white"><span className="font-semibold">Databases:</span> MySQL, PostgreSQL, MariaDB, AuroraDB, Redis, MongoDB, FireStore</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                            <FontAwesomeIcon
                                icon={faScrewdriverWrench}
                                style={{ fontSize: 80, color: "#39FF14" }}
                                className="w-20 h-20 flex-shrink-0 mr-4"
                            />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-white text-2xl title-font font-medium mb-3">Tools</h3>
                            <p className="leading-relaxed text-left text-white"><span className="font-semibold">Cloud:</span> AWS, GCP, Azure</p>
                            <p className="leading-relaxed text-left text-white"><span className="font-semibold">Content Management Systems:</span> WordPress, Shopify, Drupal, Expression Engine, Adobe Experience Manager</p>
                            <p className="leading-relaxed text-left text-white"><span className="font-semibold">Others:</span> Memcached, RabbitMQ, Keycloak, Microservices, OpenSSL, Linux, Jupyter Notebooks, Gigya, Google Analytics, Google Tag Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;