import React from 'react';
import Title from "./useComponents/Title";

const Contact = () => {
    return (
        <div name="contact" className="dark:from-white dark:to-gray-100 bg-gradient-to-b from-black to-gray-800 p-4 text-white h-screen">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg h-full mx-auto">
                <div className="pb-8">
                    <Title title="Contact" />
                    <p className="py-6 dark:text-gray-900">Submit the form below to get in touch with me</p>
                </div>

                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/23743eed-43b9-4ded-b6bb-904a51c11dce" method="POST" className="flex flex-col w-full md:w-1/2">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent dark:text-black dark:border-gray-950 border-2 rounded-md dark:placeholder-black text-white focus:outline-none"
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            className="my-4 p-2 bg-transparent dark:text-black dark:border-gray-950 border-2 rounded-md dark:placeholder-black text-white focus:outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows="10"
                            className="p-2 bg-transparent dark:text-black dark:border-gray-950 border-2 rounded-md dark:placeholder-black focus:outline-none">
                        </textarea>
                        <button
                            className="text-white bg-gradient-to-b from-cyan-500
                             to-blue-500 px-6 py-3 my-8 mx-auto flex items-center
                              rounded-md hover:scale-110 duration-300">
                            Let's Talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;