import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Link from "next/link";
import Image from "next/image";
import MikeMemoji from "../../public/static/mikeMemoji.png";


const Hero = () => {
    // Create ref element
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Front End Developer', 'Software Engineer', 'Retro Gamer', 'BBQ Expert', 'Solutions Architect', 'Problem Solver.'],
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
        <header role="banner" aria-label="Hero Section">
            <div className="flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			        <h1 className="text-5xl leading-none sm:text-6xl sm:h-24 md:h-12 text-blue mb-3" ref={el}></h1>
			        <p className="mt-3 mb-8 text-lg sm:mb-12 text-left">Combining compelling UI&#39;s with flexible, scalable backends to create unique full stack experiences.</p>
			        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <button
                            type="button"
                            href="#"
                            className="px-8 py-3 text-lg font-semibold border-purple rounded bg-purple text-green dark:bg-green dark:text-purple hover:shadow-lg"
                        >
                            Projects
                        </button>
                        <button
                            type="button"
                            href="#"
                            className="px-8 py-3 text-lg text-purple font-semibold border rounded dark:border-green dark:text-green hover:shadow-lg"
                        >
                            About
                        </button>
			        </div>
		        </div>
		        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
                    <Image src={MikeMemoji}
                        alt="Mike Memoji"
                        className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                    />
		        </div>
	        </div>
        </header>
    );
};

export default Hero;
