import React from 'react';
import Image from 'next/image';
import { work } from './work';
import Link from 'next/link';

const AllProjects = () => {
    return (
        <section className="py-16 bg-purple dark:bg-blue">
            <div className="m-auto space-y-8 container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {work.map((w, index) => {
                        return (
                            <div className="max-w-xs rounded-md shadow-md bg-white dark:bg-black mx-auto mb-12" key={index}>
                                <Image
                                    src={w.image}
                                    alt={w.alt}
                                    className="object-cover"
                                    width={320}
                                    height={240}
                                />
	                            <div className="flex flex-col justify-between p-6 space-y-8">
		                            <div className="space-y-2">
                                        <h3 className="text-3xl font-semibold">{w.title}</h3>
                                        <p className="dark:text-gray-100">{w.description}</p>
                                        <h4>Technologies Utilized:</h4>
                                        <ul className="flex list-none p-0 flex-wrap">
                                            {w.tech.map((t, index) => {
                                                return (
                                                    <li key={index} className="text-sm p-1.5 bg-blue mr-1 mb-1 text-white font-semibold">{t}</li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <Link href={w.link} target="_blank">
                                        <button
                                            type="button"
                                            className="w-full px-8 py-3 text-lg font-semibold border-purple rounded bg-purple text-green dark:bg-green dark:text-purple hover:shadow-lg disabled:bg-gray-dark disabled:text-gray-light dark:disabled:bg-gray-dark dark:disabled:text-gray-light"
                                            disabled={w.linkDisabled}
                                        >
                                            {w.hasLink}
                                        </button>
                                    </Link>
                                    <Link href={w.code} target="_blank">
                                        <button
                                            type="button"
                                            className="w-full px-8 py-3 text-lg font-semibold border-purple rounded bg-purple text-green dark:bg-green dark:text-purple hover:shadow-lg disabled:bg-gray-dark disabled:text-gray-light dark:disabled:bg-gray-dark dark:disabled:text-gray-light"
                                            disabled={w.codeDisabled}
                                        >
                                            {w.hasCode}
                                        </button>
                                    </Link>
	                            </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default AllProjects;