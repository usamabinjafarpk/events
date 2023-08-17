import { createContext, useState, useContext } from 'react';

const EventContext = createContext()

export function useEventContext(){
  return useContext(EventContext)
}


function ContextProvider({children}) {

    const [events, setevents] = useState([])
    return (
        <EventContext.Provider value= {
          {
            events, setevents
          } 
        }
        >   
          {children}
        </EventContext.Provider>
    )
}



export default ContextProvider