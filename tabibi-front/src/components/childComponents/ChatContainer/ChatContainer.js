import React, { useEffect, useRef, useState } from 'react'
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import axios from 'axios';
import { Socket } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';

function ChatContainer({currentChat, connectedUser,socket}) {
    
    const [chatMsg, setchatMsg] = useState("");
    const [chatMsgs, setChatMsgs] = useState([]);
    const [user, setUser] = useState(undefined)
    const [selectedDate, handleDateChange] = useState("");
    const [showDate, setShowDate] = useState("d-none")
    const [showMSgIn, setShowMsgIn] = useState("");
    const [showMsgErr, setShowMsgErr] = useState('d-none');
    const [msgErr, setMsgErr] = useState("");
    const [doctorScheduels, setDoctorScheduels] = useState(undefined)
    const scrollRef = useRef();
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [showSch, setShowSch] = useState('');
    const [showRentBtn, setShowRentBtn] = useState('d-none')
    const navigate = useNavigate();

    useEffect(() => {
     if(connectedUser.type === 'Patient')
     setShowSch('d-none')
    }, [])
    
    //get user current chat sleceted 
    const getUser = async() =>{
      const res= await axios.get(`http://localhost:5000/user/${currentChat.email}`);
      setUser(res.data)
    }

    useEffect(() => {
    
      getUser()
      
    }, [currentChat.email])
    // get all messages 
   const getMessages = async () =>{
    currentChat && setChatMsgs((await axios.post("http://localhost:5000/messages/getAll",{
        from: connectedUser&& connectedUser.id,
        to: user && user._id,
    })).data)}
   useEffect(() => {
    let isApiSubscribed = true;
     if(isApiSubscribed)getMessages();
     return () => {
      // cancel the subscription
      isApiSubscribed = false;
  };
   }, [currentChat&&currentChat.length, user&&user._id,connectedUser&& connectedUser.id,chatMsgs.length])
   

// enter a messages event
    const onStateChange = (e) => {
        setchatMsg(e.target.value);
    };

  // handel chat change (send a messages)
      const ShowMsg = async() =>{
        const reqBody= {
            from: connectedUser&& connectedUser.id,
            to: user && user._id,
            message: chatMsg,
        };
        
          const res = chatMsg != ''&& await axios.post("http://localhost:5000/messages/create", reqBody); 
          socket.current.on("send-msg", reqBody); 
          const msgs = [...chatMsgs];
          msgs.push({ fromSelf: true, message: chatMsg });
            setChatMsgs(msgs);
            setchatMsg('');
            setShowDate("d-none")
            setShowMsgIn("")    
      }

      useEffect(() => {
        if (socket.current) {
          socket.current.on("msg-recieve", (msg) => {
            console.log({msg})
            setArrivalMessage({ fromSelf: false, message: msg });
          });
        }
      }, []);
      useEffect(() => {
        arrivalMessage && setChatMsgs((prev) => [...prev, arrivalMessage]);
      }, [arrivalMessage]);

// test validation of the selecteed Date 
const testScheduels = async(patientID,doctorID,selectedDate) =>{
  //let Date= new Date(selectedDate);
   
   const res = await axios.get(('http://localhost:5000/scheduels/scheduel/'+doctorID));
   const res1 = await axios.get('http://localhost:5000/scheduels/scheduel/patient/'+patientID);
   res.data.map((element)=>{
       if(element.date.slice(0,16) === selectedDate){
          setShowMsgErr('');
          setMsgErr('you have a schedule in that date, select a valid date')
       }  
   })
   res1.data.map((element)=>{
      if(element.date.slice(0,16) === selectedDate){
         setShowMsgErr('');
         setMsgErr('the patient have a schedule in that date, select a valid date')
      }  
  })

  
}
// selected date event 
const onStateChange1 = (e) => {
  let today = new  Date
  let selectedDate = new Date(e.target.value);
  if(today > selectedDate){
      setShowMsgErr('');
      setMsgErr('select a valide date.');
      setShowDate('d-none')
      setShowMsgIn("")
      
  }else if(today <= selectedDate){
     const selectedDate = e.target.value;
      const res = testScheduels(currentChat&&currentChat._id,connectedUser&&connectedUser.id,selectedDate);
      setchatMsg(e.target.value);
      handleDateChange(e.target.value)
  }
};
// show the date picker input 
    const showDatePicker = () =>{
        setShowDate("")
        setShowMsgIn("d-none")
    }
// patient confirm the scheduel Date
    const addScheduel = async(date)=>{
        chatMsg==='' && setchatMsg(`${user && user.fullname} has confirm appointment`); 
        
        //chatMsgs.push(`${user && user.fullname} has confirm appointment`);  
        let data ={
            date : date, 
            patient_id:connectedUser&& connectedUser.id ,
            docotr_id : user&& user._id,
        }    
       await axios.post("http://localhost:5000/scheduels", data); 
       setShowRentBtn('')
    }
// patient cancel the scheduel Date
    const cancelScheduel = ()=>{
       chatMsgs.push(`${user && user.fullname} has cancel appointment`);
    }

//Rederect Patient to the Rent Home Page
const rederectToRenHome = () =>{
  navigate('/rentHome',{state: currentChat&&currentChat.coordinates !=undefined&& currentChat.coordinates})
}


  return (
    <div className='col-lg-8 col-md-12'>
       <div className='profile-sec d-flex align-items-center'>
            <img className='profile-img'  src='img/dx.jpg'></img>
            <div className='d-flex w-100'>
            <h4 className='profile-name ps-4 flex-grow-1'>{user && user.fullname}</h4>
            <button className={`btn text-primary ${showRentBtn}`} onClick={rederectToRenHome}>RENT HOME</button>
            </div>
            
        </div>

        <div className='chat-section'>
            
            {chatMsgs.map((msg,index) => {
          return (
              <div
                className={`message ${
                  msg.fromSelf ? "sended" : "recieved"
                }`}
                key={index}
              >
                <div className="content ">
                { ((msg.message).slice(4,5)==='-') && ((msg.message).slice(7,8)==='-')&&((msg.message).slice(10,11)==='T') ? 
                    <div ref={scrollRef} key={index} className='d-flex flex-column justify-content-center align-items-center m-2'> 
                      <span className='msg-conf'>confirm our appointment </span>
                      <span className='date'>on <b>{msg.message}</b> ?</span>
                        <div className='d-flex mt-2'>
                          <button className='btn btn-primary m-2' onClick={() =>addScheduel((msg.message))}> Confirm</button>
                          <button className='btn btn-danger m-2' onClick={() => cancelScheduel}>Cancel</button>
                        </div>
                    </div>
                    : <div ref={scrollRef} key={index}>{msg.message}</div>}
                </div>
              </div>
          );
        })}
        </div>
        <div className={`alert alert-danger alert-dismissible fade show ${showMsgErr}`} role="alert"> 
            {msgErr} 
            <button type="button" className="btn-close" onClick={()=>{setShowMsgErr('d-none')}}></button>
        </div>
        <div className='row chat-footer'>
            <div className='col-xl-10 col-lg-9 col-sm-9 col-8  mt-2'>
                <div className='row'>
                    <input className={`w-100 p-2 ms-3 ${showMSgIn}`} type='text' placeholder='Type your message here...' 
                    onChange={onStateChange} value={chatMsg} />
                    <input className={`msgInput p-2 mx-3 ${showDate}`} type="datetime-local" id="datetime-local"  onChange={onStateChange1}  value={selectedDate} />
                </div>  
            </div>
            
            <div className='icons col-xl-2 col-lg-3 col-sm-3 col-4 mt-2'>
                   <button className={`p-0 ${showMSgIn} ${showSch}  `}><AiFillSchedule className='mx-2' onClick={showDatePicker}/></button> 
                <FaMicrophone className='me-2'/>
                <button onClick={ShowMsg}>
                    <IoMdSend />
                </button>
            </div>
        </div>
    </div>                 
  )
}

export default ChatContainer