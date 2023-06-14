import React, {forwardRef} from 'react';
import {motion} from "framer-motion";

const CardSkills = forwardRef(({src, title, style}, ref) => {
    return (
        <div
            ref={ref}
            className={`cursor-pointer shadow-md dark:bg-gray-300 hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="card" className="w-20 mx-auto"/>
            <p className="mt-4 dark:text-gray-900">{title}</p>
        </div>
    );
});

export const MCardSkill = motion(CardSkills);
export default CardSkills;