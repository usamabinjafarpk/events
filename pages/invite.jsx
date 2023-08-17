import Link from 'next/link'
import React from 'react'

export default function invite() {
  return (
    <div className='bg-slate-500 w-screen h-screen flex flex-col justify-center items-center'>
        <div className='border border-black w-96 h-96 rounded-lg'>
            <h1 className='text-3xl font-bold underline flex justify-center pt-5'>Invites</h1><br/>
            <ul className='flex flex-col justify-center items-center pt-10'>
                <li>Event 1<Link href='/user'><button className='border border-black w-32 rounded-lg bg-slate-300 text-black hover:bg-black hover:text-slate-300'>Accept</button></Link><Link href='/user'><button className='border border-black w-32 rounded-lg bg-slate-300 text-black hover:bg-black hover:text-slate-300'>Reject</button></Link></li><br/>
                <li>Event 2<Link href='/user'><button className='border border-black w-32 rounded-lg bg-slate-300 text-black hover:bg-black hover:text-slate-300'>Accept</button></Link><Link href='/user'><button className='border border-black w-32 rounded-lg bg-slate-300 text-black hover:bg-black hover:text-slate-300'>Reject</button></Link></li><br/>
                <li>Event 3<Link href='/user'><button className='border border-black w-32 rounded-lg bg-slate-300 text-black hover:bg-black hover:text-slate-300'>Accept</button></Link><Link href='/user'><button className='border border-black w-32 rounded-lg bg-slate-300 text-black hover:bg-black hover:text-slate-300'>Reject</button></Link></li><br/>
                <li>Event 4<Link href='/user'><button className='border border-black w-32 rounded-lg bg-slate-300 text-black hover:bg-black hover:text-slate-300'>Accept</button></Link><Link href='/user'><button className='border border-black w-32 rounded-lg bg-slate-300 text-black hover:bg-black hover:text-slate-300'>Reject</button></Link></li><br/>

            </ul>
        </div>
    </div>
  )
}
