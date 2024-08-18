'use client';
import { signIn, signOut } from 'next-auth/react'
import React from 'react'

const Appbar = () => {
  return (
    <div className='flex items-center justify-around p-2'>
      <div>Logo here</div>
      <div className='flex gap-2'>
        {
            <button className='bg-white text-black py-1 px-2 rounded-sm' onClick={() => signIn()}>Login</button>
        }
        {
            <button className='bg-white text-black py-1 px-2 rounded-sm' onClick={() => signOut()}>Login</button>
        }
      </div>
    </div>
  )
}

export default Appbar
