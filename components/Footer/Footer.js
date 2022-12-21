import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedinIn,
    faGithub,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className="columns-2xs flex flex-wrap items-center justify-between p-3" aria-label="Footer">
            <p className="text-sm">&copy; {new Date().getFullYear()} Designed, developed, and maintained by Michael Legemah</p>
            <ul className="inline-flex">
                <li>
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
            </ul>
        </footer>
    );
};

export default Footer;