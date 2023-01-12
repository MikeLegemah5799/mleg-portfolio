import React from 'react';

const AboutHeader = () => {
    return (
        <header role="banner" aria-label="Hero Section" className="mx-auto bg-about bg-no-repeat bg-contain h-65 sm:h-99 md:bg-cover md:h-102 lg:h-124 xl:h-134">
            <div className="flex flex-col justify-center h-65 sm:h-99 md:h-102 lg:h-124 xl:h-134">
                <h1 className="text-6xl md:text-8xl text-white text-center drop-shadow-md">About Me</h1>
            </div>
        </header>
    );
}

export default AboutHeader;