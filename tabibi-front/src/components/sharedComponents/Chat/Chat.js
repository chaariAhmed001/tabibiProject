import React, { useState } from 'react'
import '../Chat/Chat.css'
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
function Chat() {
    const [chatMsg, setchatMsg] = useState("");
    const [chatMsgs, setChatMsgs] = useState([]);
    const onStateChange = (e) => {
        setchatMsg(e.target.value);
      };
    
      const ShowMsg = () =>{
          if(chatMsg != '')
            chatMsgs.push(chatMsg)
            console.log(chatMsgs);
            setchatMsg('');
      }
    
      
  return (
    <div className='chat-container'>
        <div className='chat-content'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 d-none d-lg-block wow slideInUp' data-wow-delay="0.1s">
                        <div className='profile-sec d-flex align-items-center'>
                                <img className='profile-img' src='img/team-1.jpg' alt='profilImg'></img>
                                <h4 className='profile-name ps-4'>Dr Chaari Ahmed</h4>
                        </div>
                        <div className='search-box mb-4 '>
                                <div className='input-wrapper'>
                                    <FaSearch className='search-icon'/>
                                    <input placeholder='Search here' type='text '/>
                                </div>
                        </div>
                        <div className='deslist-sec mb-4'>
                            <div className='discussion-item wow fadeIn' data-wow-delay="0.5s">
                                <img className='profile-img' src='img/testimonial-1.jpg' alt='profilImg'></img>
                                <div className="text">
                                    <h5 className='mt-2 mb-0'>Kammoun Ines</h5>
                                    <p className="text-muted m-0">Hey, Dr Chaari Ahmed</p>
                                </div>
                                <span className="time text-muted small">13:21</span>
                            </div>
                            <div className='discussion-item wow fadeIn' data-wow-delay="0.6s">
                                <img className='profile-img' src='img/testimonial-2.jpg' alt='profilImg'></img>
                                <div className="text">
                                    <h5 className='mt-2 mb-0'>Kammoun Ines</h5>
                                    <p className="text-muted m-0">Hey, Dr Chaari Ahmed</p>
                                </div>
                                <span className="time text-muted small">13:21</span>
                            </div>
                            <div className='discussion-item wow fadeIn' data-wow-delay="0.7s">
                                <img className='profile-img' src='img/after.jpg' alt='profilImg'></img>
                                <div className="text">
                                    <h5 className='mt-2 mb-0'>Kammoun Ines</h5>
                                    <p className="text-muted m-0">Hey, Dr Chaari Ahmed</p>
                                </div>
                                <span className="time text-muted small">13:21</span>
                            </div>
                            <div className='discussion-item wow fadeIn' data-wow-delay="0.8s">
                                <img className='profile-img' src='img/after.jpg' alt='profilImg'></img>
                                <div className="text">
                                    <h5 className='mt-2 mb-0'>Kammoun Ines</h5>
                                    <p className="text-muted m-0">Hey, Dr Chaari Ahmed</p>
                                </div>
                                <span className="time text-muted small">13:21</span>
                            </div>
                            <div className='discussion-item wow fadeIn' data-wow-delay="0.5s">
                                <img className='profile-img' src='img/after.jpg' alt='profilImg'></img>
                                <div className="text">
                                    <h5 className='mt-2 mb-0'>Kammoun Ines</h5>
                                    <p className="text-muted m-0">Hey, Dr Chaari Ahmed</p>
                                </div>
                                <span className="time text-muted small">13:21</span>
                            </div>
                            
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-12'>
                        <div className='profile-sec d-flex align-items-center'>
                                <img className='profile-img' src='img/testimonial-1.jpg' alt='profilImg'></img>
                                <h4 className='profile-name ps-4'>Kammoun Ines</h4>
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
                            {chatMsgs.map((msg,index)=>{
                                return(
                                <div className='row g-0 align-items-center'>
                                    <div className='col offset-md-6'>
                                        <div className='chat-bubble chat-bubble-right' key={index}>
                                            {msg}
                                        </div>
                                    </div>
                                </div>
                                );
                            })}
                            
                        </div>
                        <div className='row chat-footer'>
                            <div className='col-xl-10 col-lg-9 col-sm-9 col-8  mt-2'>
                                    <input className='w-100 p-2 ms-2' type='text' placeholder='Type your message here...' 
                                    onChange={onStateChange}
                                    value={chatMsg}></input>
                            </div>
                            <div className='icons col-xl-2 col-lg-3 col-sm-3 col-4 mt-2'>
                                    <AiFillSchedule className='mx-2'/>
                                    <FaMicrophone className='me-2'/>
                                    <button onClick={ShowMsg}>
                                        <IoMdSend />
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chat