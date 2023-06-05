import React from 'react';

const CardSkills = ({src, title, style}) => {
    return (
        <div className={`shadow-md dark:bg-gray-300 hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="card" className="w-20 mx-auto"/>
            <p className="mt-4 dark:text-gray-900">{title}</p>
        </div>
    );
};

export default CardSkills;