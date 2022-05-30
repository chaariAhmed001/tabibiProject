import React, { useEffect, useState } from 'react'
import '../Chat/Chat.css'
import {FaSearch } from "react-icons/fa";
import ContactList from '../../childComponents/ContactList/ContactList';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import ChatContainer from '../../childComponents/ChatContainer/ChatContainer';
import Welcome from '../../childComponents/ChatContainer/Welcome';

function Chat() {
    
    const [user, setUser] = useState({});
    const [currentChat, setCurrentChat] = useState(undefined);
    const [contacts, setContacts] = useState(undefined);

    // get connected User
    const getUser = async()=>{
        setUser((await axios.get("http://localhost:5000/user",{ withCredentials: true })).data)
      }
      useEffect(()=>{
      getUser()
      }
    ,[user && user.email])
    //get users chat contacts list 
    useEffect(() => {
        const getcontacs= async () =>{
          await axios.get("http://localhost:5000/doctor/doctors").then(res=>setContacts(res.data.res));
        }
        getcontacs();
    },[]);

// on Change current chat 
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

    
  return (
    
    <div className='chat-container'>
        <div className='chat-content'>
        {(user && user.email )? 
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 d-none d-lg-block wow slideInUp' data-wow-delay="0.1s">
                        <div className='profile-sec d-flex align-items-center'>
                                <img className='profile-img' src='img/testimonial-1.jpg' alt='profilImg'></img>
                                <h4 className='profile-name ps-4'>{user && user.fullname}</h4>
                                
                        </div>
                        <div className='search-box mb-4 '>
                                <div className='input-wrapper'>
                                    <FaSearch className='search-icon'/>
                                    <input placeholder='Search here' type='text '/>
                                </div>
                        </div>
                       <ContactList contacts={contacts} changeChat={handleChatChange}/>
                    </div>
                    {(currentChat === undefined )?
                    <Welcome user={user}/>
                    :<ChatContainer currentChat={currentChat}/>}
                </div>
            </div>
            : <p>your are note loged in  <Link to={"/signIN"}>signIN</Link></p>
         }
        </div>
        
    </div>
  )
}

export default Chat