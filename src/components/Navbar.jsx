import React from 'react'

const Navbar = () => {
  return (
    <nav className='items-center justify-between bg-white '>
      <div className='flex items-center justify-between w-full h-full px-4 py-3 md:px-14'>
        <h1 className='text-xl font-extrabold'>Logo</h1>
        <div className='flex gap-4'>
          <button className='px-2 py-1 text-xl font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-900'>
            Login
          </button>
          <button className='px-2 py-1 text-xl font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-900 '>
            Sign Up
          </button>
        </div>
      </div>
      <hr />
    </nav>
  )
}

export default Navbar
