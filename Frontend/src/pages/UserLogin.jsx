import React,{useState,useContext } from 'react'
import uber_logo from '../assets/Uber_logo.png'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/userContext'
import axios from 'axios'

const UserLogin = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
 

  const { user, setUser } = useContext(UserDataContext)
  const navigate = useNavigate()



  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if (response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }


    setEmail('')
    setPassword('')
  }
  return (
    <div className='p-7 flex flex-col h-screen justify-between '>
      <div>
      <img src={uber_logo} className='w-16 mb-8 ' alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e)
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
      <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create New Account</Link></p>
      </div>
      <div>
      <Link to='/captain-login' className='bg-[#10b461] text-white flex items-center  justify-center  font-semibold  mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base  '>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin