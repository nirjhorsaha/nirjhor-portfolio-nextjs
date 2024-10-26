/* eslint-disable prettier/prettier */

import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'


const Right = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className='md:cols-span-2 lg:block mt-4 md:mt-0 '
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 300 }} >
      <div className='md:w-[300px] h-[350px] relative group rounded-xl after:transition-all after:duration-200 after:hover:left-[12px] after:hover:top-[12px] after:w-full after:z-30 after:h-full after:border-[2px] after:absolute after:top-[20px] after:left-[20px] after:rounded-xl after:border-sky-500' >
        <Image
          alt='loading...'
          blurDataURL="/images/model/Nirjhor Saha Image.jpg"
          className='rounded-xl transition-all duration-200 group-hover:translate-y-[2px] group-hover:translate-x-[2px]'
          layout='fill'
          objectFit='cover'
          quality={100}
          src='/images/nirjhor-saha.png'
        />
        <div className='absolute rounded-xl top-0 bottom-0 right-0 left-0 bg-sky-700/10 hover:bg-transparent transition-all duration-200 cursor-pointer' />
      </div>
    </motion.div>
  )
}

export default Right