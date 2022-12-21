import React from "react";


const Footer = () => {
    return (
        <footer className="columns-2xs flex flex-wrap items-center justify-between p-3" aria-label="Footer">
            <p className="text-sm">&copy; {new Date().getFullYear()} Designed, developed, and maintained by Michael Legemah</p>
        </footer>
    );
};

export default Footer;