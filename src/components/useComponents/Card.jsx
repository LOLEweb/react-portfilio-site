import React from 'react';

const Card = ( {src} ) => {
    return (
            <div className="dark:shadow-gray-950 shadow-md shadow-gray-600 rounded-lg">
                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                <div className="flex items-center justify-center">
                    <button className="dark:text-gray-900 w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                    <button className="dark:text-gray-900 w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                </div>
            </div>
    );
};

export default Card;