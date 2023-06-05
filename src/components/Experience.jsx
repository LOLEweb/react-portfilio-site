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
import CardSkills from "./useComponents/CardSkills";

const Experience = () => {
    return (
        <div name="experience" className="dark:from-white dark:to-gray-100 bg-gradient-to-b from-gray-800 to-black pt-20 pb-20 sm:pb-0 sm:pt-0 sm:h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-white">
                <div>
                    <Title title="Experience" />
                    <p className="py-6 dark:text-gray-900">These are the technologies I've worked with</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center px-4 sm:px-0">
                    <CardSkills src={html} title="HTML" style="shadow-orange-500"/>
                    <CardSkills src={css} title="CSS" style="shadow-blue-500"/>
                    <CardSkills src={javascript} title="JavaScript" style="shadow-yellow-500"/>
                    <CardSkills src={reactImage} title="React" style="shadow-blue-600"/>
                    <CardSkills src={tailwind} title="Tailwind" style="shadow-sky-400"/>
                    <CardSkills src={nextjs} title="Next Js" style="shadow-white dark:shadow-gray-500"/>
                    <CardSkills src={github} title="GitHub" style="shadow-gray-500"/>
                    <CardSkills src={graphql} title="Coming soon..." style="shadow-pink-400"/>
                </div>
            </div>
        </div>
    );
};

export default Experience;