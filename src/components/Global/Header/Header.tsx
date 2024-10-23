/* eslint-disable prettier/prettier */
"use client"

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

import { navData } from '@/src/config/constants'
import AnimatedTextCharacter from '@/src/components/motion/AnimatedTextCherecter'
import { child, container } from '@/src/components/motion'

const Header = () => {
  return (
    <header className='top-0 w-full z-50 relative py-[30px] mx-auto right-0 left-0 container ' >
      <div className='flex items-center justify-center md:justify-between' >

        <Link className='flex' href='/' >
          <AnimatedTextCharacter
            className='text-4xl font-semibold text-sky-700'
            text='N'
          />
          <AnimatedTextCharacter
            className='text-4xl text-slate-700/80'
            text='irjhor.'
          />
        </Link>

        <motion.ul animate="visible" className='__navright' initial="hidden" variants={container} >
          {navData.map((e: string, i: number) =>
            <motion.a key={i} className='hidden md:block' href={`#${e.toLocaleLowerCase()}`} variants={child} >
              <li> <span>0{i + 1}.</span> {e} </li></motion.a>
          )}
        </motion.ul>

      </div>
    </header>
  )
}

export default Header