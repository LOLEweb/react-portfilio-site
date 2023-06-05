import React from 'react';

const Title = ({ title }) => {
    return (
        <p className="dark:text-gray-900 text-4xl font-bold inline border-b-4 border-gray-500">{title}</p>
    );
};

export default Title;