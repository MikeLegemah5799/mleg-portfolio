import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logoLanguage from '../../public/static/logoLanguage.png';

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
                    <div className="h-48 lg:h-auto flex-none text-center overflow-hidden">
                        <Image
                            src={logoLanguage}
                            alt="Screenshot of Logo Programming Language"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <h3 className="text-2xl flex items-center text-gray-light">
                                Mid 1980&apos;s - Mid 1990&apos;s - The Curiosity:
                            </h3>
                            <p className="text-base text-white">As a young kid, I was always interested in tech and science. I always wanted to know how video games worked. When I got to 3rd grade, something amazing happened. We had a computer class. This is where I learned the Logo programming language. I thought it was so cool to be able to move the Turtle cursor on the screen.</p>
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
        </section>
    );
}

export default Timeline;