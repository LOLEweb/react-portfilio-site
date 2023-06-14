import React from 'react';
import HeroImage from '../assets/heroImage.jpg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'
import {useTypewriter, Cursor} from "react-simple-typewriter";
import { motion } from 'framer-motion'
const Home = () => {

    const [text] = useTypewriter({
        words: ["Frontend", "Full-stack", "Backend"],
        loop: true,
        typeSpeed: 60,
        deleteSpeed: 50,
        delaySpeed: 2000,
    });

    const topAnimation = {
        hidden: {
            y: -100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.2},
        }),
    }

    const botAnimation = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.2},
        }),
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2}}
            name="home" className="h-screen dark:from-gray-100 dark:to-gray-100 bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto
            flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center">{/*Main content*/}
                    <motion.h2 custom={1} variants={topAnimation}
                        className="max-w-[500px] dark:text-gray-900 text-5xl sm:text-7xl font-bold text-white">I'm <span className="text-cyan-500">{text}</span><Cursor/> Developer</motion.h2>
                    <motion.p
                        custom={2}
                        variants={topAnimation}
                        className="dark:text-gray-900 text-gray-500 py-4 max-w-md">
                        <span className="text-cyan-500">I have 1 year website development experience.</span>
                        Currently, I love to work on web application using technologies like
                        React, Tailwind, Node JS and WebPack
                    </motion.p>
                    <motion.div
                        custom={3}
                        variants={botAnimation}
                    >
                        <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-3
                        flex items-center rounded-md bg-gradient-to-r
                        from-cyan-500 to-blue-500 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                            </span>
                        </Link>
                    </motion.div>
                </div>
                <motion.div
                    custom={3}
                    variants={topAnimation}
                >{/*Img*/}
                    <img src={HeroImage} alt="my img" className="hover:scale-110 duration-300 rounded-2xl mx-auto hidden sm:block sm:w-2/3"/>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Home;