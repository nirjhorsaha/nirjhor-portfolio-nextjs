/* eslint-disable prettier/prettier */
import { motion } from 'framer-motion'
import { IoMdArrowDropright } from 'react-icons/io'

import {  } from "react-icons/io";
import { fadeTop, motionStep } from '@/src/config/motion';
import { aboutContent, skills } from '@/src/config/constants';


const Left = () => {
  return (
    <motion.div variants={fadeTop} {...motionStep} className='col-span-3' >
      
      <div className='space-y-4 mt-7 text-slate-400 text-justify' >

        {aboutContent.map((e:string, i:number) => <p key={i} > {e} </p>)}

        <div className='__skills md:pr-56' >
           <ul className='grid grid-cols-2 space-y-2' >
              {skills.map((e: string, i: number) => (
                <li key={i} className='gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-sky-400' > <IoMdArrowDropright className='text-sky-400 text-xl' /> {e}</li> 
              ))}             
           </ul> 
        </div>

      </div>

    </motion.div>
  )
}

export default Left
