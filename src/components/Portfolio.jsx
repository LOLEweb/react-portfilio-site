import {motion} from "framer-motion";
import React from 'react';
import reactShop from '../assets/portfolio/react-shop.png'
import gpt3 from '../assets/portfolio/gpt-3.png'
import maketDef from '../assets/portfolio/maket-def.png'
import manageTailw from '../assets/portfolio/manage-tail.png'
import reactRest from '../assets/portfolio/react-restaurant.png'
import reactBoot from '../assets/portfolio/front-boot.png'
import state from '../assets/portfolio/usestate.jpg'
import Title from "./useComponents/Title";
import {MCard} from "./useComponents/Card";
const Portfolio = () => {

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
            name="portfolio" className="dark:from-gray-100 dark:to-gray-100 bg-gradient-to-b from-black to-gray-800 text-white sm:pb-32 md:pb-32 lg:pb-48"> {/*mAIN*/}
            <div className="max-w-screen-lg p-4 mx-auto"> {/*Content*/}
                <motion.div
                    custom={1}
                    variants={topAnimation}
                    viewport={{amount: 0.2}}
                    className="pb-8"> {/*Div 1*/}
                    <Title title="Portfolio" />
                    <p className="py-6 dark:text-gray-900">Check out some of my work right here</p>
                </motion.div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">{/*Div 2*/}
                    <MCard custom={2} variants={botAnimation}  src={reactShop}/>
                    <MCard custom={3} variants={botAnimation}  src={gpt3}/>
                    <MCard custom={4} variants={botAnimation}  src={maketDef}/>
                    <MCard custom={5} variants={botAnimation}  src={manageTailw}/>
                    <MCard custom={6} variants={botAnimation}  src={reactRest}/>
                    <MCard custom={7} variants={botAnimation} src={reactBoot}/>
                    <MCard custom={8} variants={botAnimation} src={state}/>
                </div>
            </div>
        </motion.div>
    );
};

export default Portfolio;