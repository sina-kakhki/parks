import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav () {
  return (
    <div className='flex w-48 justify-between'>
      <div>
        <button className='bg-green-500 hover:bg-green-700 text-white py-2 px-4 border border-green-700 rounded' >
          <Link to="/">Log out</Link>
        </button>
      </div>
      <div>
        <button className='bg-green-500 hover:bg-green-700 text-white py-2 px-4 border border-green-700 rounded'>
          <Link to="/">Home</Link>
        </button>       
      </div>
    </div>
  )
}
