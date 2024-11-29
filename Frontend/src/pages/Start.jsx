import React from 'react'
import uber_logo from '../assets/Uber_logo.png'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='h-screen bg-center bg-cover bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c5310f182519763.652f3606b64b0.jpg)] pt-8  flex justify-between flex-col w-full bg-red-400'> 
        <img  className='w-16 ml-8 ' src={uber_logo} alt="UBER-LOGO" />
        <div className='bg-white pb-7 py-4 px-4'>
          <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
          <Link to='/login' className='flex item-center justify-center w-full bg-black text-white rounderd py-3 mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start