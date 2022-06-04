import React, { useEffect, useState } from 'react'
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import axios from 'axios';

function ChatContainer({currentChat, connectedUser}) {
    const [chatMsg, setchatMsg] = useState("");
    const [chatMsgs, setChatMsgs] = useState([]);
    const [user, setUser] = useState(undefined)
    const [selectedDate, handleDateChange] = useState("");
    const [showDate, setShowDate] = useState("d-none")
    const [showMSgIn, setShowMsgIn] = useState("");
    const [showMsgErr, setShowMsgErr] = useState('d-none');
    const [msgErr, setMsgErr] = useState("");
   const [doctorScheduels, setDoctorScheduels] = useState(undefined)
   /*console.log({
       "connceteUser": connectedUser&& connectedUser.id,
       "current Chat selelcted" : user && user._id
   })*/
   const getMessages = async () =>{
    const reqBody= connectedUser && user && {
       from: connectedUser.id,
       to: user._id,
    }
    setChatMsgs((await axios.post("http://localhost:5000/messages/getAll",{
        from: connectedUser&& connectedUser.id,
        to: user && user._id,
    })).data)
   
}
   useEffect(() => {
     getMessages();
   }, [currentChat&&currentChat.length, user&&user._id,connectedUser&& connectedUser.id,chatMsgs.length])
   console.log(chatMsgs)
    const onStateChange = (e) => {
        setchatMsg(e.target.value);
      };
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
      const ShowMsg = async() =>{
        const reqBody= {
            from: connectedUser&& connectedUser.id,
            to: user && user._id,
            message: chatMsg,
        };
          const res = chatMsg != ''&& await axios.post("http://localhost:5000/messages/create", reqBody); 
            setchatMsg('');
            setShowDate("d-none")
            setShowMsgIn("")    
      }
      //get user current chat sleceted 
      const getUser = async() =>{
        const res= await axios.get(`http://localhost:5000/user/${currentChat.email}`);
        setUser(res.data)
      }
      
      useEffect(() => {
       
        getUser()
        
      }, [currentChat.email])

    const showDatePicker = () =>{
        setShowDate("")
        setShowMsgIn("d-none")
    }
    
    const addScheduel = async()=>{
        setchatMsg(`${user && user.fullname} has confirm appointment`)
        console.log(chatMsg);
        //chatMsgs.push(`${user && user.fullname} has confirm appointment`);  
        let data ={
            date : selectedDate, 
            patient_id:connectedUser&& connectedUser.id ,
            docotr_id : user&& user._id,
        }    
       const res =await axios.post("http://localhost:5000/scheduels", data); 
    }
    const cancelScheduel = ()=>{
       chatMsgs.push(`${user && user.fullname} has cancel appointment`);
    }
  return (
    <div className='col-lg-8 col-md-12'>
       <div className='profile-sec d-flex align-items-center'>
            <img className='profile-img' src= {currentChat.profilImg ===undefined? '' : require(`../../../Imges/doctorProfilImg/${currentChat.profilImg}`)}></img>
            <h4 className='profile-name ps-4'>{user && user.fullname}</h4>
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
                    <div key={index} className='d-flex flex-column justify-content-center align-items-center m-2'> 
                                        <span className='msg-conf'>confirm our appointment </span>
                                        <span className='date'>on <b>{msg.message}</b> ?</span>
                                        <div className='d-flex mt-2'>
                                        <button className='btn btn-primary m-2' onClick={addScheduel}> Confirm</button>
                                        <button className='btn btn-danger m-2' onClick={cancelScheduel}>Cancel</button>
                                        </div>
                    </div>
                    : msg.message}
                </div>
              </div>
          );
        })}
         
        </div>
        {/* <div className='chat-section'>
                {chatMsgs != [] && chatMsgs.map((msg,index)=>{
                    return(
                        <div className='row g-0 align-items-center' key={index}>
                            <div className='col-6' key={index} >
                                <div  className={`chat-bubble chat-bubble-${ msg.fromSelf ? "right" : "left"}`} key={index}>
                                    { ((msg.message).slice(4,5)==='-') && ((msg.message).slice(7,8)==='-')&&((msg.message).slice(10,11)==='T') ? 
                                    <div key={index} className='d-flex flex-column justify-content-center align-items-center'> 
                                        <span className='msg-conf'>confirm our appointment </span>
                                        <span className='date'>on <b>{msg.message}</b> ?</span>
                                        <div className='d-flex mt-2'>
                                        <button className='btn btn-primary m-2' onClick={addScheduel}> Confirm</button>
                                        <button className='btn btn-danger m-2' onClick={cancelScheduel}>Cancel</button>
                                        </div>
                                    </div>
                                    : msg.message}
                                   
                                </div>
                            </div>
                        </div>
                        );
                })}                                    
        </div> */}
        
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
                   <button className={`p-0 ${showMSgIn}`}><AiFillSchedule className='mx-2' onClick={showDatePicker}/></button> 
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