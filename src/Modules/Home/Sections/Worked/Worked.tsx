/* eslint-disable prettier/prettier */
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Link } from '@nextui-org/link'
import { IoMdArrowDropright } from 'react-icons/io'

import Content from './partials/Content'

import { fadeLeft, motionStep } from '@/src/config/motion'
import { Timeline } from '@/src/components/UI/Aceternity/timeline'

const Worked = () => {

  const data = [
    {
      title: "2023",
      content: (
        <div >
          <div>
            <h1 className="text-xl font-medium text-slate-300">
              Jr. Software Engineer {''}
              <Link
                className="text-sky-300 border-b border-b-sky-300 border-dotted "
                href='https://hatechz.com/'
                target="_blank"
              >
                {""} @{"HATechZ"}
              </Link>
            </h1>
            <p className="text-slate-400 font-medium mt-1"> {"Jun'23 - Present"} </p>
          </div>
          <ul className="space-y-5 mt-5 max-w-xl">
            <li
              className="gap-1 flex text-slate-400 select-none"
            >
              <span className="min-w-10">
                <IoMdArrowDropright className="text-sky-400 text-[1.3rem]" />
              </span>
              <p>Developed and maintained high-performance, responsive web applications using JavaScript, React.js, and Next.js, while also building and optimizing cross-platform mobile applications with Flutter, all within an agile environment, delivering features and fixes under tight deadlines and adhering to industry best practices.</p>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div >
          <div>
            <h1 className="text-xl font-medium text-slate-300">
            Associate Member
              <Link
                className="text-sky-300 border-b border-b-sky-300 border-dotted md:ml-2"
                href='http://clubs.daffodilvarsity.edu.bd/club/diucpc'
                target="_blank"
              >
                {" "}
                @{"DIU Computer Programming Club"}
              </Link>
            </h1>
            <p className="text-slate-400 font-medium mt-1"> {"Feb'20 - Dec'22"} </p>
          </div>
          <ul className="space-y-5 mt-5 max-w-xl">
            <li
              className="gap-1 flex text-slate-400 select-none"
            >
              <span className="min-w-10">
                <IoMdArrowDropright className="text-sky-400 text-[1.3rem]" />
              </span>
              <p>Contributed to the promotion of club activities, significantly increasing engagement and membership.</p>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div >
          <div>
            <h1 className="text-xl font-medium text-slate-300">
              Campus Ambassador
              <Link
                className="text-sky-300 border-b border-b-sky-300 border-dotted md:ml-2"
                href='https://www.admissionassistant.com.bd/'
                target="_blank"
              >
                {" "}
                @{"Admission Assistant"}
              </Link>
            </h1>
            <p className="text-slate-400 font-medium mt-1"> {"Mar'20 - Dec'20"} </p>
          </div>
          <ul className="space-y-5 mt-5 max-w-xl">
            <li
              className="gap-1 flex text-slate-400 select-none"
            >
              <span className="min-w-10">
                <IoMdArrowDropright className="text-sky-400 text-[1.3rem]" />
              </span>
              <p>Worked alongside fellow ambassadors to organize promotional events</p>
            </li>
          </ul>
        </div>
      ),
    },
   
  ];

  return (
    <section className='container' id='experience' >
      <motion.h1 variants={fadeLeft} {...motionStep} className='flex items-center gap-2 text-lg md:text-3xl font-medium text-slate-300' >
        <span className='text-sky-400 font-mono' >02. </span>
        Changelog from my journey
      </motion.h1>

      {/* <div className='mt-14' >
        <Content />
      </div> */}

      <div className="w-full">
        <Timeline data={data} />
      </div>
    </section>
  )
}

export default Worked