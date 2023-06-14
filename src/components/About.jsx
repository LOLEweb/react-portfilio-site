import {motion} from "framer-motion";
import React from 'react';
import Title from "./useComponents/Title";

const About = () => {

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


    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            name="about" className="dark:from-gray-100 dark:to-gray-100 h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg mx-auto p-4">
                <motion.div
                    custom={1}
                    variants={topAnimation}
                    className="pb-8">
                    <Title title="About" />
                </motion.div>
                <motion.p
                    custom={2}
                    variants={topAnimation}
                    className="dark:text-gray-900 dark:font-medium">
                    Hi, my name is Dmitry and I am from Yoshkar-Ola and I am a website developer. I am 17 years old and I am just starting my way in IT. This site is made completely about me and here you can learn a little more about me and my skills🙂 At the moment I am studying in the college, but unfortunately not in my specialty, in the future I will try to change the faculty I need.
                </motion.p>
                <br/>
                <motion.p
                    custom={3}
                    variants={topAnimation}
                    className="dark:text-gray-900 dark:font-medium">
                    My path in IT began with courses on programming in iSpring, namely learning JavaScript and writing my first game in this language. After the first course I decided to try something new and found the perfect option for myself in the form of web development. I was given to me at first all very difficult, but later I was able to make a project for the defense and even work with a real client🙂
                </motion.p>
            </div>

        </motion.div>
    );
};

export default About;