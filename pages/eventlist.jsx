import React from 'react'

export default function eventlist() {
  return (
    <div className='bg-slate-500 w-screen h-screen flex flex-col justify-center items-center'>
        <div className='border border-black w-96 h-96 rounded-lg'>
            <h1 className='text-3xl font-bold underline flex justify-center pt-5'>List of Events</h1><br/>
            <ul className='flex flex-col justify-center items-center pt-10 text-2xl'>
                <li>Event 1: Owner </li>
                <li>Event 2: Owner </li>
                <li>Event 3: Owner </li>
                <li>Event 4: Owner </li>
            </ul>
        </div>
    </div>
  )
}
