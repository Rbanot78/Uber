import React,{ useEffect, useRef, useState} from 'react'
import Uber_logo from '../assets/Uber_logo.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import axios from 'axios';
import 'remixicon/fonts/remixicon.css'

const Home = () => {
  const [ pickup, setPickup ] = useState('')
  const [ destination, setDestination ] = useState('')
  const [ panelOpen, setPanelOpen ] = useState(false)
  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5'  src={Uber_logo} alt="uber-logo" />

      <div className='h-screen w-screen'>
        {/* image for temporary */}
        <img src="https://i2-prod.mylondon.news/article16106961.ece/ALTERNATES/s615/2_Uber-pink-cars.jpg" alt="" />
      </div>
       
     


    </div>
  )
}

export default Home