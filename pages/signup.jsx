import Link from 'next/link'
import React from 'react'

export default function signup() {
  return (
    <div className="bg-slate-500 h-screen w-screen flex flex-col justify-center items-center">
        <div className='border border-black rounded-lg text-white w-96 h-96 flex flex-col items-center pt-8'>
            <h1 className='text-3xl text-black'>Signup</h1><br></br><br></br>
            <form className='text-black'> 
                <p>Name:</p>
                <input type='text'/>
                <p>Email:</p>
                <input type='email'/>
                <p>Username:</p>
                <input type='text'></input><br></br>
                <p>Password</p>
                <input type='password'></input><br></br><br></br>
                <Link href='/user'>
                <button className='border border-black w-32 rounded-lg bg-slate-300 text-black hover:bg-black hover:text-slate-300'>Signup</button><br/>
                </Link><br/>
            </form>
        </div>
   </div>
  )
}
