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
   
    const onStateChange = (e) => {
        setchatMsg(e.target.value);
      };
      const testScheduels = async(patientID,doctorID) =>{
         //return await axios.get('http://localhost:5000/scheduels/scheduel/'+'6273db05d1b210f39d7e39f8')
        //return await axios.get('http://localhost:5000/scheduels/scheduel/patient/'+patientID).data
        // return res
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
             console.log(
                 {
                     'patient': currentChat._id, 
                     'docotr':connectedUser._id
                 }
             )
            const res = testScheduels(currentChat._id,connectedUser._id);
            setchatMsg(e.target.value);
            handleDateChange(e.target.value)
        }
      };
//console.log(user)
      const ShowMsg = () =>{
          if(chatMsg != '' )
            { 
             chatMsgs.push(chatMsg)
            }
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
    //console.log(user)
    const addScheduel = async()=>{
        chatMsgs.push(`${user && user.fullname} has confirm appointment`);  
        let data ={
            date : selectedDate, 
            patient_id:user&&  user._id ,
            docotr_id : currentChat&& currentChat._id,
        }    
       const res =await axios.post("http://localhost:5000/scheduels", data); 
    }
    const cancelScheduel = ()=>{
       chatMsgs.push(`${user && user.fullname} has cancel appointment`);setchatMsg('');
    }
  return (
    <div className='col-lg-8 col-md-12'>
       <div className='profile-sec d-flex align-items-center'>
            <img className='profile-img' src= {currentChat.profilImg ===undefined? '' : require(`../../../Imges/doctorProfilImg/${currentChat.profilImg}`)}></img>
            <h4 className='profile-name ps-4'>{user && user.fullname}</h4>
        </div>
        <div className='chat-section'>
            <div className='row g-0 align-items-center'>
                <div className='col-2 col-lg-1 '>
                    <img className='profile-img ms-2' src='img/testimonial-1.jpg' alt='profilImg'></img>
                </div>
                <div className='col-10 col-lg-11'>
                    <div className='chat-bubble chat-bubble-left'>
                        Hello Dr Chaari Ahmed!
                    </div>
                </div>    
            </div>
                {chatMsgs!=[] && chatMsgs.map((msg,index)=>{
                    return(
                        <div className='row g-0 align-items-center' key={index}>
                            <div className='col offset-md-6'key={index} >
                                <div  className='chat-bubble chat-bubble-right' key={index}>
                                    { (msg.slice(4,5)==='-') && (msg.slice(7,8)==='-')&&(msg.slice(10,11)==='T') ? 
                                    <div key={index} className='d-flex flex-column justify-content-center align-items-center'> 
                                        <span className='msg-conf'>confirm our appointment </span>
                                        <span className='date'>on <b>{msg}</b> ?</span>
                                        <div className='d-flex mt-2'>
                                        <button className='btn btn-primary m-2' onClick={addScheduel}> Confirm</button>
                                        <button className='btn btn-danger m-2' onClick={cancelScheduel}>Cancel</button>
                                        </div>
                                    </div>
                                    : msg}
                                   
                                </div>
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