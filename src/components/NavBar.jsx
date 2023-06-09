import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'
import Theme from "./useComponents/Theme";
import Headroom from "react-headroom";

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]

    return (
        <nav className="flex dark:bg-gray-300 bg-black text-white justify-between px-6 py-4 z-50 sm:py-6 sm:px-6 items-center sticky top-0">
            {/*<div>*/}
            {/*    <h1 className="text-4xl sm:text-5xl font-signature">Dizi Code</h1>*/}
            {/*</div>*/}
            <div className="dark:text-black">
                <Theme />
            </div>

            <ul className="hidden md:flex">
                {links.map(({id, link}) => (
                    <li key={id} className="dark:text-black px-4 cursor-pointer capitalize
                     font-medium text-gray-500 hover:scale-105 duration-200">
                        <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-30 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars  size={30}/> }
            </div>
            {nav && (
                <ul className="flex flex-col justify-center items-center
                absolute top-0 left-0 w-full h-screen bg-gradient-to-b
                from-black to-gray-800 text-gray-500 dark:from-white dark:to-white z-20">
                    {links.map(({id, link}) => (
                        <li key={id} className="dark:text-gray-900 px-4 cursor-pointer capitalize py-6 text-4xl">
                            <Link
                                onClick={() => setNav(!nav)}
                                to={link}
                                smooth
                                duration={500}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default NavBar;