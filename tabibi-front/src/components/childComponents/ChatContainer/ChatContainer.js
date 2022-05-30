import React, { useEffect, useState } from 'react'
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import axios from 'axios';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import xtype from 'xtypejs'

// pick a date util library
import DateFnsUtils from '@date-io/date-fns';
import { ca } from 'date-fns/locale';

function ChatContainer({currentChat}) {
    const [chatMsg, setchatMsg] = useState("");
    const [chatMsgs, setChatMsgs] = useState([]);
    const [profilImg, setprofilImg] = useState(undefined)
    const [user, setUser] = useState(undefined)
    const [selectedDate, handleDateChange] = useState("");
    const [showDate, setShowDate] = useState("d-none")
    const [showMSgIn, setShowMsgIn] = useState("")
    const onStateChange = (e) => {
        setchatMsg(e.target.value);
      };
      const onStateChange1 = (e) => {
        setchatMsg(e.target.value);
      };
      const ShowMsg = () =>{
          if(chatMsg != '' )
            { 
             chatMsgs.push(chatMsg)
            }
            if(selectedDate != ""){
                chatMsgs.push(selectedDate)
            }
            setchatMsg('');
            setShowDate("d-none")
            setShowMsgIn("")
            // else if (chatMsg != '' && ){
      }
    
      const getUser = async() =>{
        setUser((await axios.get("http://localhost:5000/user/"+currentChat.email)).data)
      }
      useEffect(() => {
        getUser()
      }, [user && user.eamil])
    const showDatePicker = () =>{
        setShowDate("")
        setShowMsgIn("d-none")
    }
    console.log(chatMsg)
    console.log(chatMsgs)
    const addScheduel = ()=>{
        
        chatMsgs.push(`${user && user.fullname} has confirm appointment`);
        //chatMsgs.push(chatMsg)
       
    }
    const cancelScheduel = ()=>{
       chatMsgs.push(`${user && user.fullname} has cancel appointment`);setchatMsg('');
       setchatMsg('');
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
                {chatMsgs!=[] &&chatMsgs.map((msg,index)=>{
                    return(
                        <div className='row g-0 align-items-center'>
                            <div className='col offset-md-6'>
                                <div className='chat-bubble chat-bubble-right' key={index}>
                                    { (msg.slice(4,5)==='-') && (msg.slice(7,8)==='-')&&(msg.slice(10,11)==='T') ? 
                                    <div className='d-flex flex-column justify-content-center align-items-center'> 
                                        <span className='msg-conf'>confirm our appointment </span>
                                        <span className='date'>on <b>{msg}</b> ?</span>
                                        <div className='d-flex mt-2'>
                                        <button className='btn btn-primary m-2' onClick={addScheduel}> Confirm</button>
                                        <button className='btn btn-danger m-2' onClick={cancelScheduel}>Cancel</button>
                                        </div>
                                    </div>
                                    : msg}
                                    {/* chatMsg.slice(4,5)==='-') && (chatMsg.slice(7,8)==='-')&&(chatMsg.slice(10,11)==='T' */}
                                </div>
                            </div>
                        </div>
                        );
                })}
        </div>
        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker
                    variant="inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                />
                </MuiPickersUtilsProvider> */}
        <div className='row chat-footer'>
            <div className='col-xl-10 col-lg-9 col-sm-9 col-8  mt-2'>
                <div className='row'>
                    <input className={`w-100 p-2 ms-3 ${showMSgIn}`} type='text' placeholder='Type your message here...' 
                    onChange={onStateChange} value={chatMsg} />
                    <input className={`msgInput p-2 mx-3 ${showDate}`} type="datetime-local" id="datetime-local"  onChange={onStateChange1}  value={selectedDate}/>
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