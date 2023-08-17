import Link from 'next/link'
import React from 'react'

export default function user() {
  return (
    <div className='bg-slate-500 w-screen h-screen flex flex-col justify-center items-center'>
        <div className='border border-black flex flex-col justify-center items-center w-96 h-96 rounded-lg'>
        <div className='text-base bg-indigo-900 text-white ring ring-white font-bold uppercase rounded-full w-8 h-8 flex justify-center items-center'>US</div><br></br>
        <p className='text-2xl'>Name of the user</p><br/><br/>
        <Link href='/events'>
        <button className='border border-black w-32 rounded-lg bg-slate-300 text-black hover:bg-black hover:text-slate-300'>Add events</button>
        </Link><br/>
        <Link href='/invite'>
        <button className='border border-black w-32 rounded-lg bg-slate-300 text-black hover:bg-black hover:text-slate-300'>Invitations</button><br/>
        </Link>
        </div>
    </div>
  )
}
