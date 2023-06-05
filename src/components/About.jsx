import React from 'react';
import Title from "./useComponents/Title";

const About = () => {
    return (
        <div name="about" className="dark:from-white dark:to-gray-100 h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg mx-auto p-4">
                <div className="pb-8">
                    <Title title="About" />
                </div>
                <p className="dark:text-gray-900 dark:font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias architecto aut consequatur cumque, dolor earum eius fugiat in incidunt ipsam libero maiores nostrum, numquam quae rem veritatis? Amet illum nemo odit totam voluptates. Dolore eius error fuga ipsa nemo nostrum quo repellat sequi sint tenetur, ullam vel veniam, voluptas.
                </p>
                <br/>
                <p className="dark:text-gray-900 dark:font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolore error facilis fugit iure labore quas quibusdam. Accusamus consequatur dolorum excepturi minus modi necessitatibus obcaecati quibusdam quod recusandae. Debitis ea iusto molestiae pariatur quaerat suscipit tempore! Consequuntur culpa est nam, nesciunt possimus praesentium quasi quibusdam ratione, repellat reprehenderit, sint velit?
                </p>
            </div>

        </div>
    );
};

export default About;