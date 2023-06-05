import React from 'react';
import HeroImage from '../assets/heroImage.jpg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'
const Home = () => {
    return (
        <div name="home" className="h-screen dark:from-white dark:to-gray-100 bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto
            flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center">{/*Main content*/}
                    <h2 className="dark:text-gray-900 text-5xl sm:text-7xl font-bold text-white">I'm <span className="text-cyan-500">Frontend</span> Developer</h2>
                    <p className="dark:text-gray-900 text-gray-500 py-4 max-w-md">
                        <span className="text-cyan-500">I have 1 year website development experience.</span>
                        Currently, I love to work on web application using technologies like
                        React, Tailwind, Node JS and WebPack
                    </p>
                    <div>
                        <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-3
                        flex items-center rounded-md bg-gradient-to-r
                        from-cyan-500 to-blue-500 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                            </span>
                        </Link>
                    </div>
                </div>
                <div>{/*Img*/}
                    <img src={HeroImage} alt="my img" className="itd hover:scale-110 duration-300 rounded-2xl mx-auto w-2/3 md:w-full"/>
                </div>
            </div>
        </div>
    );
};

export default Home;