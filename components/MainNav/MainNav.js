import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from '../../public/static/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedinIn,
    faGithub,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MainNav = () => {
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const [toggle, setToggle] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav
            role="navigation"
            aria-label="Main navigation"
            className="dark:bg-dark-gray flex flex-wrap items-center justify-between p-3 lg:h-16"
        >
            <Link href="/" className="flex items-center">
                <Image
                    src={Logo}
                    alt="Mike Legemah Coder Logo"
                    width={40}
                    height={40}
                />
                <span className="self-center whitespace-nowrap ml-3 text-xl font-semibold text-black dark:text-white">
                    Michael Legemah
                </span>
            </Link>
            <div className="flex lg:hidden">
                <button onClick={() => setToggle(!toggle)}>
                    <FontAwesomeIcon
                        icon={faBars}
                        style={{ fontSize: 18, color: "#7A28CB" }}
                    />
                </button>
            </div>
            {toggle && (
                <ul className="toggle w-full mt-4 py-10 lg:py-0 lg:mt-0 lg:w-auto lg:flex text-center lg:text-start dark:bg-dark-gray">
                    <li className="py-3">
                        <Link
                            href="/" className={`pl-3 pr-4 text-base hover:text-purple hover:font-semibold ${router.asPath === "/" ? "font-semibold text-purple" : "font-medium" }`}>
                            Home
                        </Link>
                    </li>
                    <li className="py-3">
                        <Link href="/about" className={`pl-3 pr-4 text-base hover:text-purple hover:font-semibold ${router.asPath === "/about" ? "font-semibold text-purple" : "font-medium" }`}>
                            About
                        </Link>
                    </li>
                    <li className="py-3">
                        <Link href="/projects" className={`pl-3 pr-4 text-base hover:text-purple hover:font-semibold ${router.asPath === "/projects" ? "font-semibold text-purple" : "font-medium" }`}>
                            Projects
                        </Link>
                    </li>
                    <li className="py-3">
                        <Link href="https://techroyalty.net/" target="_blank" className={`pl-3 pr-4 text-base hover:text-purple hover:font-semibold ${router.asPath === "https://techroyalty.net/" ? "font-semibold text-purple" : "font-medium" }`}>
                            Podcast
                        </Link>
                    </li>
                    <li className="py-3">
                        <Link href="/contact" className={`pl-3 pr-4 text-base hover:text-purple hover:font-semibold ${router.asPath === "/contact" ? "font-semibold text-purple" : "font-medium" }`}>
                            Contact
                        </Link>
                    </li>
                    {/* Soocial Icons */}
                    <li className="p-3 inline-flex">
                        <Link href="https://github.com/MikeLegemah5799" target="_blank" className="py-0.5 px-2">
                            <FontAwesomeIcon
                                icon={faGithub}
                                style={{ fontSize: 18 }}
                            />
                        </Link>
                    </li>
                    <li className="inline-flex px-3">
                        <Link href="https://www.linkedin.com/in/michaellegemah/" target="_blank" className="py-0.5 px-2">
                            <FontAwesomeIcon
                                icon={faLinkedinIn}
                                style={{ fontSize: 18 }}
                            />
                        </Link>
                    </li>
                    <li className="inline-flex px-3">
                        <Link href="https://twitter.com/MikeLegemah" target="_blank" className="py-0.5 px-2">
                            <FontAwesomeIcon
                                icon={faTwitter}
                                style={{ fontSize: 18 }}
                            />
                        </Link>
                    </li>
                    <li className="h-6 inline-flex px-3">
                        <button
                            aria-label="Toggle Dark Mode"
                            type="button"
                            className="w-10 h-5 py-0 px-3 rounded focus:outline-none"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            {mounted && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    className="w-4 h-4 text-yellow dark:text-yellow"
                                >
                                    {theme === "dark" ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                        />
                                    )}
                                </svg>
                            )}
                        </button>
                    </li>
                </ul>
            )}
            {/* Desktop menu */}
                <ul className="hidden w-full mt-4 py-10 lg:py-0 lg:mt-0 lg:w-auto lg:flex text-center lg:text-start dark:bg-dark-gray">
                    <li className="py-1 lg:py-0">
                        <Link
                            href="/" className={`pl-3 pr-4 text-base hover:text-purple hover:font-semibold ${router.asPath === "/" ? "font-semibold text-purple" : "font-medium" }`}>
                            Home
                        </Link>
                    </li>
                    <li className="py-1 lg:py-0">
                        <Link href="/about" className={`pl-3 pr-4 text-base hover:text-purple hover:font-semibold ${router.asPath === "/about" ? "font-semibold text-purple" : "font-medium" }`}>
                            About
                        </Link>
                    </li>
                    <li className="py-1 lg:py-0">
                        <Link href="/projects" className={`pl-3 pr-4 text-base hover:text-purple hover:font-semibold ${router.asPath === "/projects" ? "font-semibold text-purple" : "font-medium" }`}>
                            Projects
                        </Link>
                    </li>
                    <li className="py-1 lg:py-0">
                        <Link href="https://techroyalty.net/" target="_blank" className={`pl-3 pr-4 text-base hover:text-purple hover:font-semibold ${router.asPath === "https://techroyalty.net/" ? "font-semibold text-purple" : "font-medium" }`}>
                            Podcast
                        </Link>
                    </li>
                    <li className="py-1 lg:py-0">
                        <Link href="/contact" className={`pl-3 pr-4 text-base hover:text-purple hover:font-semibold ${router.asPath === "/contact" ? "font-semibold text-purple" : "font-medium" }`}>
                            Contact
                        </Link>
                    </li>
                    {/* Soocial Icons */}
                    <li className="py-1 lg:py-0">
                        <Link href="https://github.com/MikeLegemah5799" target="_blank" className="py-0.5 px-2">
                            <FontAwesomeIcon
                                icon={faGithub}
                                style={{ fontSize: 18 }}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.linkedin.com/in/michaellegemah/" target="_blank" className="py-0.5 px-2">
                            <FontAwesomeIcon
                                icon={faLinkedinIn}
                                style={{ fontSize: 18 }}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://twitter.com/MikeLegemah" target="_blank" className="py-0.5 px-2">
                            <FontAwesomeIcon
                                icon={faTwitter}
                                style={{ fontSize: 18 }}
                            />
                        </Link>
                    </li>
                    <li className="h-6">
                        <button
                            aria-label="Toggle Dark Mode"
                            type="button"
                            className="w-10 h-5 py-0 px-3 rounded focus:outline-none"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            {mounted && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    className="w-4 h-4 text-yellow dark:text-yellow"
                                >
                                    {theme === "dark" ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                        />
                                    )}
                                </svg>
                            )}
                        </button>
                    </li>
                </ul>
        </nav>
    );
};

export default MainNav;
