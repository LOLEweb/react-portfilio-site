import React from 'react';
import {FaGithub, FaVk, FaDiscord} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    VKontakte <FaVk size={30}/>
                </>
            ),
            href: 'https://vk.com/kushakov3',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/LOLEweb'
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:priveta22@mail.ru'
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: '/Resume.docx',
            download: true
        },
        {
            id: 5,
            child: (
                <>
                    Discord <FaDiscord size={30}/>
                </>
            ),
            style: 'rounded-br-md',
            href: 'https://discord.com/channels/@me'
        },
    ]

    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({id, child, href, style, download}) => (
                    <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-black bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]" + " " + style}>
                        <a href={href} className="flex justify-between items-center w-full text-white"
                        download={download}
                           target='_blank'
                           rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default SocialLinks;