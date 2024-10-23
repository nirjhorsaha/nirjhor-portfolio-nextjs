/* eslint-disable prettier/prettier */
import Image from 'next/legacy/image'
import Link from 'next/link'
import React from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { FiGithub } from 'react-icons/fi'
import clsx from 'clsx'
import { Code } from '@nextui-org/code'
import { Tooltip } from '@nextui-org/tooltip'

import { ProjectTypes } from '@/src/config/types'




const Featured = ({ secondary, live, thumnail, code, title, description, tech, num }: ProjectTypes) => {

    const __renderImage = () => {
        return (
            <div className='col-span-12 sm:col-span-7 relative ' >
                <Link href={`${live}`} >
                    <div className='h-[350px] w-full relative rounded-xl overflow-hidden'>
                        <Image
                            alt='loading...'
                            blurDataURL={`/images/projects/${thumnail}`}
                            // className='transition-all duration-300 group-hover:scale-110 '
                            layout='fill'
                            objectFit='cover'
                            quality={100}
                            src={`/images/projects/${thumnail}`}
                        />

                        {/* <div className='absolute top-0 bottom-0 left-0 right-0 bg-sky-900/50 transition-all duration-300 cursor-pointer hover:opacity-0' /> */}
                    </div>
                </Link>
            </div>
        )
    }


    const __renderContent = () => {
        return (
            <div className={clsx('col-span-12 sm:col-span-5 text-right sm:absolute sm:left-[50%] ', secondary && '!relative  !left-0 !text-start sm:w-[120%]')} >
                <div>
                    {/* <p className='text-sky-400' > Featured </p> */}
                    <div className="text-5xl leading-none font-extrabold text-sky-400">
                        {num}
                    </div>
                    <h1 className='text-3xl font-medium text-slate-300' > {title} </h1>

                    <div className='my-6 p-6 bg-slate-200 dark:bg-slate-800 dark:text-slate-300 shadow-xl rounded-xl hidden sm:block' >
                        <p> {description} </p>
                    </div>

                    <div className={clsx('flex text-slate-400 gap-x-2 justify-end flex-wrap', secondary && '!justify-start ml-0')} >
                        {tech.map((e: string, i: number) => <Code key={i} className='dark:bg-slate-800 dark:text-sky-400 m-1 lg:m-0'>{e}</Code>)}
                    </div>

                    <div className={clsx('flex justify-end mt-5 gap-3', secondary && '!justify-start')} >

                        <Tooltip content="Live">
                            {live && <Link className='hover:text-sky-400 transition-all duration-300 hover:scale-110 text-2xl' href={`${live}`} target='_blank' >
                                <HiOutlineExternalLink />
                            </Link>}
                        </Tooltip>

                        <Tooltip content="Github">
                            {code && <Link className='hover:text-sky-400 transition-all duration-300 hover:scale-110 text-2xl' href={`${code}`} target='_blank' >
                                <FiGithub />
                            </Link>}
                        </Tooltip>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className='relative grid grid-cols-12 items-center gap-3 group ' >
            {secondary ?
                <>
                    {__renderContent()}
                    {__renderImage()}
                </>

                :

                <>
                    {__renderImage()}
                    {__renderContent()}
                </>
            }
        </div>
    )
}

export default Featured