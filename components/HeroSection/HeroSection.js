import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Link from 'next/link';
import Image from 'next/image';
import MikeAI from '../../public/static/mikeAI.png';


const Hero = () => {
    // Create ref element
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Front End Developer.', 'Software Engineer.', 'Retro Gamer.', 'BBQ Expert.', 'Solutions Architect.', 'Problem Solver.'],
            startDelay: 1000,
            typeSpeed: 60,
            backSpeed: 0,
            backDelay: 500,
            showCursor: false,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <header role="banner" aria-label="Hero Section" className="mx-auto container">
            <div className="flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left mx-auto">
                    <h3 className="text-2xl text-left">Hi, I&#39;m Michael Legemah</h3>
			        <h1 className="text-4xl h-9 leading-none whitespace-nowrap sm:text-6xl md:h-14 xl:text-8xl xl:h-24 text-left text-purple dark:text-blue mb-3" ref={el}></h1>
			        <p className="mt-3 mb-8 text-lg sm:mb-12 text-left"> I Combine compelling UI&#39;s with flexible, scalable backends to create unique full stack experiences.</p>
			        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-start lg:justify-start">
                        <Link href="/projects">
                            <button
                                type="button"
                                className="px-8 py-3 w-full lg:w-36 h-14 text-lg font-semibold border-purple rounded bg-purple text-green dark:bg-green dark:text-purple hover:shadow-lg"
                            >
                                Projects
                            </button>
                        </Link>
                        <Link href="/about">
                            <button
                                type="button"
                                className="px-8 py-3 w-full lg:w-36 h-14 text-lg text-purple font-semibold border rounded dark:border-green dark:text-green hover:shadow-lg"
                            >
                            About
                        </button>
                        </Link>
			        </div>
		        </div>
		        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
                    <Image
                        src={MikeAI}
                        alt="Mike in AI"
                        className="object-contain h-auto lg:h-120"
                    />
		        </div>
	        </div>
        </header>
    );
};

export default Hero;
