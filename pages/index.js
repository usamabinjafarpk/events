import Link from 'next/link'
import React from 'react'

export default function index() {
  return (
    <div className="bg-slate-500 h-screen w-screen flex flex-col justify-center items-center">
        <div className='border border-black rounded-lg text-black w-96 h-96 flex flex-col items-center pt-8'>
            <h1 className='text-3xl text-black '>Login</h1><br></br><br></br>
            <form>
                <p>Username:</p>
                <input type='text'></input><br></br>
                <p>Password</p>
                <input type='password'></input><br></br><br></br>
                <Link href='/user'>
                <button className='border border-black w-32 rounded-lg bg-slate-300 text-black hover:bg-black hover:text-slate-300'>Sign in</button><br/>
               </Link><br/>
                <a href='/signup'>New user?</a>
            </form>
        </div>
   </div>
  )
}
