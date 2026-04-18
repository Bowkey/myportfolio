import React from 'react'
import { IoCode } from 'react-icons/io5'
import { LuPalette } from 'react-icons/lu'
import { BsLightningCharge } from 'react-icons/bs'

import { FiGithub } from 'react-icons/fi'
import { LuLinkedin } from 'react-icons/lu'
import { CiMail } from 'react-icons/ci'

function Hero() {
    return (
        <div className='main-bg  bg-radial-[at_50%_50%] from-`red-200 via-blue-200  bg-cover px-8'>

            <div className='main-bg min-h-[80vh] flex flex-col justify-center items-center py-4' >

                <span className='font-extrabold text-2xl py-2'>Hi, I'm Bokizibe Jason Luke </span>
                <span className='text-2xl py-2'>Front-End Web Developer</span>
                <span className=''>I create beautiful, responsive, and user-friendly web applications. Passionate about clean code, modern design, and delivering exceptional user experiences</span>

                <div className='icons1 text-blue-400 flex flex-row justify-between items-center gap-6 font-extrabold text-2xl  m-8'>
                    <span><IoCode /></span>
                    <span><LuPalette /></span>
                    <span><BsLightningCharge /></span>

                </div>

                <div className='container1 flex flex-row justify-center gap-18 w-sm m-8'>
                    <button className='bg-black text-white py-2 px-6 rounded-xl border-amber-50 font-semibold cursor-pointer  hover:scale-110 duration-100'>Get in Touch</button>
                    <button className='py-2 px-6 rounded-xl border-2 border-black font-semibold cursor-pointer hover:scale-110 duration-100'>View Projects</button>
                </div>

                <div className='socials flex flex-row font-semibold py-10 text-xl gap-6 m-8'>
                    <span><FiGithub /></span>
                    
                    
                    <span><LuLinkedin /></span>
                    <span><CiMail /></span>
                </div>

            </div>


        </div>
    )
}

export default Hero