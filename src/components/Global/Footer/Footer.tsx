/* eslint-disable prettier/prettier */
import { Link } from '@nextui-org/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='py-5' id="__footer" >
      <div className='text-center text-sm text-slate-400' >

        <p className='opacity-90'> Copyright &copy;{new Date().getFullYear()} 
          <Link className='text-sky-400' href='https://github.com/bchiang7/v4' target='_blank'> Nirjhor Saha </Link> 
        </p> 
      </div>
    </section>
  )
}

export default Footer