import { useEventContext } from "@/store/ContextProvider";
import Link from "next/link";
import { useRouter } from "next/router";
import  { useState } from "react";

export default function events() {

  const router = useRouter() 

  const {setevents} = useEventContext()

  const [eventName, seteventName] = useState("");
  const [eventDesc, seteventDesc] = useState("");

  function addItem() {
    if (eventName === "" || eventDesc === "") {
      alert("Enter an event");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      name: eventName,
      description: eventDesc
    };

    setevents((oldList) => [...oldList, item]);
    router.push(`events/${item.id}`)
    seteventName("");
    seteventDesc("");
  }

  return (
    <div className="bg-slate-500 h-screen flex flex-col justify-center items-center">
      <div className="border border-black rounded-lg text-black w-96 h-96 flex flex-col items-center pt-20">
        <h1 className="text-3xl font-bold underline">Events</h1>
        <br />
        <input
          className="border border-black"
          type="text"
          placeholder="Add the event Name"
          value={eventName}
          onChange={(e) => seteventName(e.target.value)}
        />
        <textarea
          className="border border-black my-4"
          type="text"
          placeholder="Add the event Description"
          value={eventDesc}
          onChange={(e) => seteventDesc(e.target.value)}
        ></textarea>
          <button
            className="border border-black rounded-lg w-16 bg-black text-white hover:bg-white hover:text-black"
            onClick={() => addItem()}
          >
            Add
          </button>
      </div>
    </div>
  );
}
