/* eslint-disable prettier/prettier */
"use client"

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

import { fadeTop, motionStep } from '@/src/config/motion'

const Mail = () => {
  return (
    <motion.div variants={fadeTop} {...motionStep} className='fixed z-[999] bottom-0 right-[40px] hidden xl:block' id="__mail" >
      <div className='space-y-6 after:h-[90px] after:w-[1px] after:bg-slate-400 after:block after:mx-auto after:mt-6 ' >
        <Link className='text-[15px] text-slate-600 dark:text-sky-400 hover:text-sky-600 cursor-pointer transition-all duration-300  rl'
          href='mailto:nirjhor.badhan25@gmail.com' > nirjhor.badhan25@gmail.com </Link>
      </div>
    </motion.div>
  )
}

export default Mail