import React from 'react';
import reactShop from '../assets/portfolio/react-shop.png'
import gpt3 from '../assets/portfolio/gpt-3.png'
import maketDef from '../assets/portfolio/maket-def.png'
import manageTailw from '../assets/portfolio/manage-tail.png'
import reactRest from '../assets/portfolio/react-restaurant.png'
import reactBoot from '../assets/portfolio/front-boot.png'
import state from '../assets/portfolio/usestate.jpg'
import Title from "./useComponents/Title";
import Card from "./useComponents/Card";
const Portfolio = () => {

    return (
        <div name="portfolio" className="dark:from-gray-100 dark:to-gray-100 bg-gradient-to-b from-black to-gray-800 text-white sm:pb-32 md:pb-32 lg:pb-48"> {/*mAIN*/}
            <div className="max-w-screen-lg p-4 mx-auto"> {/*Content*/}
                <div className="pb-8"> {/*Div 1*/}
                    <Title title="Portfolio" />
                    <p className="py-6 dark:text-gray-900">Check out some of my work right here</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">{/*Div 2*/}
                    <Card  src={reactShop}/>
                    <Card  src={gpt3}/>
                    <Card  src={maketDef}/>
                    <Card  src={manageTailw}/>
                    <Card  src={reactRest}/>
                    <Card  src={reactBoot}/>
                    <Card  src={state}/>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;