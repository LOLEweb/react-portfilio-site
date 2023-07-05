import {motion} from "framer-motion";
import React from 'react';
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import graphql from '../assets/graphql.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import Title from "./useComponents/Title";
import CardSkills, {MCardSkill} from "./useComponents/CardSkills";

const Experience = () => {

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
            name="experience" className="dark:from-gray-100 dark:to-gray-100 bg-gradient-to-b from-gray-800 to-black pt-20 pb-20 sm:pb-0 sm:pt-0 sm:h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-white">
                <motion.div
                custom={2}
                variants={topAnimation}
                >
                    <Title title="Experience" />
                    <p className="py-6 dark:text-gray-900">These are the technologies I've worked with</p>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center px-4 sm:px-0">
                    <MCardSkill src={html} title="HTML" style="shadow-orange-500"/>
                    <MCardSkill src={css} title="CSS" style="shadow-blue-500"/>
                    <MCardSkill src={javascript} title="JavaScript" style="shadow-yellow-500"/>
                    <MCardSkill src={reactImage} title="React" style="shadow-blue-600"/>
                    <MCardSkill src={tailwind} title="Tailwind" style="shadow-sky-400"/>
                    <MCardSkill src={nextjs} title="Next Js" style="shadow-white dark:shadow-gray-500"/>
                    <MCardSkill src={github} title="GitHub" style="shadow-gray-500"/>
                    <CardSkills src={graphql} title="Coming soon..." style="shadow-pink-400"/>
                </div>
            </div>
        </motion.div>
    );
};

export default Experience;