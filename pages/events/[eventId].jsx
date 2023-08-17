import { useEventContext } from "@/store/ContextProvider"
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function detailevent() {

  const router = useRouter() 

  const {events} = useEventContext()

  const event = useMemo(() => events.filter((item) => item.id === parseInt(router.query.eventId))[0], [events])
  
  return (
    <div className='bg-slate-500 w-screen h-screen flex justify-center pt-20'>
        <div className='flex flex-col'>
        <h1 className='font-bold text-4xl underline'>Event Details</h1><br/>
            <p>Event name: {event?.name}</p>
            <p>{event?.description}</p><br/>
            <p>Send invitation:</p>
            <input type="email" placeholder='Enter the email' ></input><br/>
            <Link href='mailto:someone@gmail.com'>
            <button className='border border-black w-32 rounded-lg bg-slate-300 text-black hover:bg-black hover:text-slate-300'>Send Invitation</button>
            </Link>
        </div>
    </div>
  )
}
