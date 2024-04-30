"use client";

import React from 'react'
import Title from './Title';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import {SiPython, SiJavascript, SiNodedotjs, SiHtml5, SiGnubash, SiOcaml} from "react-icons/si";

export default function Skills() {
    const skills = [
        {
            text: "Python",
            Icon: SiPython
        },
        {
            text: "JavaScript",
            Icon: SiJavascript
        },
        {
            text: "Node.js",
            Icon: SiNodedotjs
        },
        {
            text: "HTML5",
            Icon: SiHtml5
        },
        {
            text:"Bash",
            Icon: SiGnubash
        },
        {
            text:"OCaml",
            Icon: SiOcaml
        }
    ]


    return (
        <div className='max-w-5xl mx-auto px-8'>
            <Title text={'Skills'} className={'flex flex-col items-center justify-center -rotate-6'} />        
            <HoverEffect items={skills}/>
        </div>
    );
}