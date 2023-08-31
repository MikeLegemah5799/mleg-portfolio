import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logoLanguage from '../../public/static/logoLanguage.png';
import basicLanguage from '../../public/static/basicLanguage.gif';
import notepadJS from '../../public/static/notepadJS.gif';
import webDev from '../../public/static/webDev.jpeg';

const Timeline = () => {
    return (
        <section className="mx-auto container py-24 px-6">
            <div className="flex flex-col">
                <div className="text-center py-6 mb-2">
                    <h2 className="text-3xl font-bold md:text-4xl lg:text-6xl text-purple dark:text-blue mb-6">My Story</h2>
                    <p className="text-2xl">Scroll down through my timeline below</p>
                </div>
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}
            >
                <div className="w-full lg:flex border-2 rounded-lg border-purple bg-purple">
                    <div className="h-48 md:h-80 lg:h-auto lg:w-96 flex-none text-center overflow-hidden">
                        <Image
                            src={logoLanguage}
                            alt="Screenshot of Logo Programming Language"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <h3 className="text-2xl flex items-center text-gray-light">
                                Mid 1980&apos;s - Early 1990&apos;s - The Curiosity:
                            </h3>
                            <p className="text-base text-white">
                                As a young kid, I was always interested in tech and science. I always wanted to know how video games worked. When I got to 3rd grade, something amazing happened. We had a computer class. This is where I learned the Logo programming language. I thought it was so cool to be able to move the Turtle cursor on the screen. This newfound knowledge sparked a voracious appetite for understanding how software could bring imagination to life. I began to explore more programming languages, slowly progressing from basic commands to crafting simple games. The satisfaction of seeing my code translate into on-screen actions was incredibly rewarding and pushed me to delve deeper into the realms of coding and problem-solving. Looking back, that initial exposure to Logo programming not only ignited my passion but also laid the foundation for a lifelong journey of exploration and innovation in the realms of technology and science.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-48 my-5 relative z-10 left-1/2 w-6 flex items-center justify-center">
                        <div className="h-full w-1 bg-purple pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute left-1/2 top-1/2 z-50 -mt-3 rounded-full bg-purple shadow"></div>
                    <div className="w-6 h-6 absolute left-1/2 top-1/2 z-50 -mt-3 rounded-full animate-ping bg-purple shadow"></div>
                </div>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}
            >
                <div className="w-full lg:flex border-2 rounded-lg border-purple bg-purple">
                    <div className="h-48 md:h-80 lg:h-auto lg:w-96 flex-none text-center overflow-hidden">
                        <Image
                            src={basicLanguage}
                            alt="Screenshot of Basic Programming Language"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <h3 className="text-2xl flex items-center text-gray-light">
                                Early 1990s&apos;s - Late 1990&apos;s - The Growth:
                            </h3>
                            <p className="text-base text-white">
                                In junior high school, my fascination with programming continued to grow as I delved into new languages and platforms. The Apple IIe and Apple IIgs became my playgrounds for learning and experimentation. With the guidance of enthusiastic teachers, I transitioned from Logo to languages like BASIC, PASCAL, and Fortran. Each language brought its unique challenges and rewards, expanding my coding toolkit and enhancing my problem-solving skills. The Apple computers, with their distinctive green-on-black screens and clunky floppy disks, were the canvases on which I painted my digital creations.
                                One of my favorite pastimes was creating loops that produced mesmerizing patterns or generated random outcomes. These seemingly simple exercises taught me about the power of iteration and logic, concepts that would prove invaluable as I continued my journey into more complex programming tasks. Whether it was crafting a basic calculator in BASIC or experimenting with graphical user interfaces in PASCAL, each project was a stepping stone toward a deeper understanding of software development.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-48 my-5 relative z-10 left-1/2 w-6 flex items-center justify-center">
                        <div className="h-full w-1 bg-purple pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute left-1/2 top-1/2 z-50 -mt-3 rounded-full bg-purple shadow"></div>
                    <div className="w-6 h-6 absolute left-1/2 top-1/2 z-50 -mt-3 rounded-full animate-ping bg-purple shadow"></div>
                </div>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}
            >
                <div className="w-full lg:flex border-2 rounded-lg border-purple bg-purple">
                    <div className="h-48 md:h-80 lg:h-auto lg:w-96 flex-none text-center overflow-hidden">
                        <Image
                            src={notepadJS}
                            alt="Screenshot of HTML on Notepad"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <h3 className="text-2xl flex items-center text-gray-light">
                                Early 2000s&apos;s - Now - Programming on the Internet:
                            </h3>
                            <p className="text-base text-white">
                                My insatiable curiosity led me to dive into the realm of web development. Armed with a thirst for knowledge and a stack of programming books, I embarked on a journey of self-teaching that would reshape my understanding of technology. HTML, the backbone of the web, became my starting point. With the flicker of excitement, I wrote my first lines of code, crafting basic web pages that, although simple, felt like digital worlds I had the power to shape. CSS soon followed, adding an artistic layer to my coding endeavors. The process of styling elements, experimenting with colors, fonts, and layouts, was akin to painting on a blank canvas. JavaScript emerged as the bridge to interactivity and dynamic content. Armed with tutorials and examples, I ventured into the world of scripting. From simple pop-up alerts to more complex functions that responded to user interactions, JavaScript&apos;s potential felt limitless. Looking back, my path from Logo to HTML, CSS, JavaScript, and SQL was marked by a consistent thread of self-driven learning, trial and error, and an insatiable appetite for exploration. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-48 my-5 relative z-10 left-1/2 w-6 flex items-center justify-center">
                        <div className="h-full w-1 bg-purple pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute left-1/2 top-1/2 z-50 -mt-3 rounded-full bg-purple shadow"></div>
                    <div className="w-6 h-6 absolute left-1/2 top-1/2 z-50 -mt-3 rounded-full animate-ping bg-purple shadow"></div>
                </div>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}
            >
                <div className="w-full lg:flex border-2 rounded-lg border-purple bg-purple">
                    <div className="h-48 md:h-80 lg:h-auto lg:w-96 flex-none text-center overflow-hidden">
                        <Image
                            src={webDev}
                            alt="Screenshot of Web devlopment items"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <h3 className="text-2xl flex items-center text-gray-light">
                                Late 2000s&apos;s - Now - My Grind Can&apos;t Be Stopped:
                            </h3>
                            <p className="text-base text-white">
                                The allure of creating digital spaces that could reach a global audience was irresistible. With that goal in mind, I embarked on a journey to master WordPress and PHP. Online learning platforms like Team Treehouse and FreeCodeCamp became my virtual classrooms. The structured courses not only introduced me to the intricacies of web development but also cultivated my ability to tackle real-world projects. Through WordPress, I learned how to design and build dynamic websites, harnessing themes, plugins, and customizations to transform ideas into online realities. As I completed these courses, I felt a new sense of empowerment. Armed with a well-rounded foundation in web development, I began to explore opportunities to put my skills to the test. It wasn&apos;t long before I secured my first job in the tech industry, a pivotal moment that would forever change the trajectory of my career. With each project I tackled, I found myself growing more confident and proficient. The hands-on experience of troubleshooting, collaborating with team members, and adapting to evolving technologies provided an education that no textbook or online course could replicate. While the path wasn&apos;t always smooth and obstacles were frequent, the satisfaction of overcoming hurdles and witnessing the tangible results of my efforts was incredibly rewarding.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Timeline;