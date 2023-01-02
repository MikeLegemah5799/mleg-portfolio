import React from 'react';
import Image from 'next/image';
import { recents } from './recents';
import Link from 'next/link';

const RecentProjects = () => {
    return (
        <section className="py-16 bg-purple dark:bg-blue">
            <div className="m-auto space-y-8 container">
                <div className="m-auto text-center">
                    <h2 className="text-2xl font-bold md:text-4xl text-white">Recent Projects:</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {recents.map((r, index) => {
                        return (
                            <div className="max-w-xs rounded-md shadow-md bg-white dark:bg-black mx-auto mb-6" key={index}>
                                <Image
                                    src={r.image}
                                    alt={r.alt}
                                    className="object-cover"
                                    width={320}
                                    height={240}
                                />
	                            <div className="flex flex-col justify-between p-6 space-y-8">
		                            <div className="space-y-2">
                                        <h3 className="text-3xl font-semibold">{r.title}</h3>
                                        <p className="dark:text-gray-100">{r.description}</p>
                                        <h4>Technologies Utilized:</h4>
                                        <ul className="flex list-none p-0 flex-wrap">
                                            {r.tech.map((t, index) => {
                                                return (
                                                    <li key={index} className="text-sm pr-2.5">{t}</li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <Link href={r.link} target="_blank">
                                        <button
                                            type="button"
                                            className="w-full px-8 py-3 text-lg font-semibold border-purple rounded bg-purple text-green dark:bg-green dark:text-purple hover:shadow-lg disabled:bg-gray-dark disabled:text-gray-light dark:disabled:bg-gray-dark dark:disabled:text-gray-light"
                                            disabled={r.linkDisabled}
                                        >
                                            {r.hasLink}
                                        </button>
                                    </Link>
                                    <Link href={r.code} target="_blank">
                                        <button
                                            type="button"
                                            className="w-full px-8 py-3 text-lg font-semibold border-purple rounded bg-purple text-green dark:bg-green dark:text-purple hover:shadow-lg disabled:bg-gray-dark disabled:text-gray-light dark:disabled:bg-gray-dark dark:disabled:text-gray-light"
                                            disabled={r.codeDisabled}
                                        >
                                            {r.hasCode}
                                        </button>
                                    </Link>
	                            </div>
                            </div>
                        );
                    })}
                </div>
                <div className="m-auto text-center p-6 lg:p-0">
                    <Link href="/projects">
                        <button type="button" className="bg-green text-purple text-lg font-semibold px-8 py-3 rounded hover:shadow-lg w-full md:w-fit">View All Projects</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default RecentProjects;