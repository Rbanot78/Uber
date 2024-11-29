import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import driver_logo from '../assets/driver_logo.png'

const Captainlogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const [captainDate,setCaptainData] = useState('')

  const sumitHandler = (e) => {
    e.preventDefault()
    setCaptainData({
      email:email,
      password:password,
    })
  
    setEmail('');
    setPassword('');
    // call the backend API for login
  }
  return (
    <div className='p-7 flex flex-col h-screen justify-between '>
      <div>
      <img src={driver_logo} className='w-16 mb-8 ' alt="" />
      <form onSubmit={(e)=>{
        sumitHandler(e)
      }}>
        <h3 className='text-lg font-medium mb-2' > What's your Email</h3>

        <input required value={email} onChange={(e)=>{
        setEmail(e.target.value)
      
        }} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 borber w-full text-lg placeholder:text-base   ' type="email" placeholder='email@example.com' />

        <h3 className='text-lg font-medium mb-2'  >Enter Password</h3>
        <input required value={password} onChange={(e)=>{
          setPassword(e.target.value)
         
        }} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 borber w-full text-lg placeholder:text-base   ' type="password" placeholder='password' />


        <button className='bg-[#111] text-white font-semibold  mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base   '>Login</button>
      
      </form>
      <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as Captain</Link></p>
      </div>
      <div>
      <Link to='/login' className='bg-[#d5622d] text-white flex items-center  justify-center  font-semibold  mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base  '>Sign in as User</Link>
      </div>
    </div>
  )
}


export default Captainlogin