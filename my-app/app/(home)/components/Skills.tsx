"use client";

import React from 'react'
import Title from './Title';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { SiPython } from "react-icons/si";

export default function Skills() {
    const skills = [
        {
            text: "Python",
            Icon: SiPython
        },
        {
            text: "Python",
            Icon: SiPython
        },
        {
            text: "Python",
            Icon: SiPython
        }
    ]


    return (
        <div className='max-w-5xl mx-auto px-8'>
            <Title text={'Skills'} className={'flex flex-col items-center justify-center -rotate-6'} />        
            <HoverEffect items={skills}/>
        </div>
    );
}