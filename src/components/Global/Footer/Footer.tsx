/* eslint-disable prettier/prettier */
import { Link } from '@nextui-org/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='pb-5' id="__footer" >
      <div className='text-center text-slate-400' >

        <p className='opacity-90'> Copyright &copy;{new Date().getFullYear()} {''}
          <Link className='text-sky-400 text-base' href='/' target='_blank'> Nirjhor Saha </Link>
          {''} All Rights Reserved.
        </p>

      </div>
    </div>
  )
}

export default Footer