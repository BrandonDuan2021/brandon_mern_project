import React from 'react'
import {Link} from 'react-router-dom'

export default function SignUp() {
  return (
    <div className=" p-3 max-w-lg mx-auto">
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form action="post" className='flex flex-col gap-4'>
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id="username"/>
        <input type="text" placeholder='email' className='border p-3 rounded-lg' id="email"/>
        <input type="password" placeholder='password' className='border p-3 rounded-lg' id="password"/>
        <input type="password" placeholder='confirm password' className='border p-3 rounded-lg' id="confirm-password"/>
        <button className='border p-3 rounded-lg' id="sign-up">SIGN UP</button>
      </form>
      <div className='flex flex-row gap-2 py-3'>
        <p>Already got an account?</p>
        <Link to={"/sign-in"} className=" hover:underline">
          <span className=' text-green-700'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}
