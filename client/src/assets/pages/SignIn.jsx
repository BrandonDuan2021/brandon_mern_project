import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, signInFail, signInSuccess } from '../../redux/user/userSlice'



export default function SignIn() {
    const [formData, setFormData] = useState({})
    const { loading, errorMsg } = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleChange = (e) =>{
      setFormData(
        {
          ...formData,
          [e.target.id]: e.target.value,
        }
      )
    }
    
    const handleSubmit = async (e) =>{
      e.preventDefault()
      try {
        dispatch(signInStart())
        const res = await fetch('/api/auth/sign-in', 
        {
          method:"POST",
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        })
        const data = await res.json();
        
        if(res.status!=200){
          dispatch(signInFail(data.msg))
          return
        }
        dispatch(signInSuccess(data))
        navigate('/')
        return
        
      } catch (error) {
        dispatch(signInFail(error.msg))
      }
    }
  
    return (
      <div className=" p-3 max-w-lg mx-auto">
        <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <input type="text" placeholder='email' className='border p-3 rounded-lg' id="email" onChange={handleChange}/>
          <input type="password" placeholder='password' className='border p-3 rounded-lg' id="password" onChange={handleChange}/>
          <button disabled={loading} className='border p-3 rounded-lg' id="sign-in" >{loading ? "Signing in..." : "SIGN IN"}</button>
        </form>
        <div className='flex flex-row gap-2 py-3'>
          <p>New to here?</p>
          <Link to={"/sign-up"} className=" hover:underline">
            <span className=' text-green-700'>Sign Up</span>
          </Link>
        </div>
        {errorMsg && <p className='text-red-500'>{errorMsg}</p>}
      </div>
    )
}
