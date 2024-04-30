import Link from 'next/link';
import React from 'react'
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

export default function Navbar() {

    const socials = [
        {
            link: "https://www.linkedin.com/in/crosby-nash-303aab153/",

            label: "LinkedIn",

            Icon: SiLinkedin,
        },
        {
            link: "https://github.com/cros-nash",

            label: "Github",

            Icon: SiGithub,
        }


    ]

  return (

    <nav className='py-10 flex justify-between item-center'>

        <h1 className="text-2xl font-bold underline under-offset-8 decoration-green-500 -rotate-2">Crosby Nash</h1>

        <div className='flex items-center gap-5'>
            {socials.map((social, index)=>{
                const Icons = social.Icon
                return <Link href={social.link} key={index} aria-label={social.label}>
                    <Icons className='w-5 h- hover:scale-125 transition-all'/>
                </Link>
            })}
        </div>

    </nav>

  )
}