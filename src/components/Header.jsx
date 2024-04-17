import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-green-900 shadow-lg'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
                <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                    <span className='text-gray-50'>Brandon's</span>
                    <span className='text-green-100'>Trail</span>
                </h1>
            </Link>
            <form className=' bg-gray-50 p-3 rounded-lg flex items-center'>
                <input type="text" className='bg-transparent focus:outline-none w-24 sm:w-64' placeholder='Search...'/>
                <FaSearch className='text-green-900'/>
            </form>
            <ul className='flex justify-between gap-4'>
                <Link to='/home'>
                    <li className='hidden sm:inline text-gray-50 hover:underline cursor-pointer'>Home</li>
                </Link>
                <Link to='/about'>
                    <li className='hidden sm:inline text-gray-50 hover:underline cursor-pointer'>About</li>
                </Link>
                <Link to='/sign-in'>
                    <li className='sm:inline text-gray-50 hover:underline cursor-pointer'>Sign In</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}