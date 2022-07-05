import React,{ useEffect, useState }from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import './Schedule.css'
import axios from 'axios'


function Schedule() {

const [scheduel, setScheduel] = useState({})
const [data, setData] = useState([])
const [user, setUser] = useState({})
const [title, setTitle] = useState('')

const getUser = async()=>{
  setUser((await axios.get("http://localhost:5000/user",{ withCredentials: true })).data)
}

useEffect(()=>{
  let isApiSubscribed = true;
  if (isApiSubscribed){getUser()}
  return () => {
          // cancel the subscription
          isApiSubscribed = false;
          
      };
}
,[user && user.email])
useEffect(async() => {
  const res = await axios.get(('http://localhost:5000/scheduels/data/'+user.id));
  setData(res.data)
}, [data.length])

   const handleDateClick = (info) =>{
    alert('selected ' + info.startStr + ' to ' + info.endStr);
   
   }
  
  
  return (
    <div className='calendar-container wow fadeInUp' data-wow-delay="0.1s">
        <div className='calendar-content'>
            <div className='container'>
                <FullCalendar
                    plugins={[ dayGridPlugin ,interactionPlugin,timeGridPlugin]}
                    initialView="dayGridMonth"
                    selectable= {true}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                      }}
                      height= {500}
                    weekends={true}
                    events={"http://localhost:5000/scheduels/data/"+user.id}
                    select={handleDateClick}
                    
                />
            </div>
        </div>
        
    </div>
  )
}

export default Schedule