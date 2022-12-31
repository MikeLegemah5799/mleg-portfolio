import React from 'react';
import Image from 'next/image';
import { brands } from './brands';

const LogoCloud = () => {
    return (
        <div className="py-16">
            <div className="container m-auto px-6 space-y-8">
                <div className="m-auto text-center lg:w-7/12">
                    <h2 className="text-2xl font-bold md:text-4xl">Some Brand Journeys I&#39;ve Been Apart Of:</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 dark:bg-white">
                    {brands.map((b, index) => {
                        return (
                            <div className="p-4" key={index}>
                                <Image
                                    src={b.image}
                                    className="object-contain h-20"
                                    alt={b.alt}
                                    width={220}
                                    height={80}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default LogoCloud;