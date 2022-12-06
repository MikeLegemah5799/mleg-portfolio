import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "../../public/static/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faAmbulance,
    faAnchor,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav role="navigation" aria-label="Main navigation" className="border-gray-200 px-2 sm:px-4 py-3 rounded dark:bg-gray-900 h-16">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link href="/" className="flex items-center">
                    <Image
                        src={Logo}
                        alt="Mike Legemah Coder Logo"
                        width={40}
                        height={40}
                    />
                    <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white ml-3">Michael Legemah</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open Main menu</span>
                    <svg className="w-6 h-6 fill-purple" aria-hidden="true" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-3 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="#" className="block py-2 pl-3 pr-4 text-base font-medium hover:text-purple hover:font-semibold text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="#" className="block py-2 pl-3 pr-4 text-base font-medium hover:text-purple hover:font-semibold text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                        </li>
                        <li>
                            <Link href="#" className="block py-2 pl-3 pr-4 text-base font-medium hover:text-purple hover:font-semibold text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</Link>
                        </li>
                        <li>
                            <Link href="#" className="block py-2 pl-3 pr-4 text-base font-medium hover:text-purple hover:font-semibold text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</Link>
                        </li>
                        <li>
                            <Link href="#" className="block py-2 pl-3 pr-4 text-base font-medium hover:text-purple hover:font-semibold text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;