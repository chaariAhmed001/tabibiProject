import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
import GetUserName from '../GetUserName';
function ContactList({contacts,changeChat }) {
    const [currentSelected, setCurrentSelected] = useState(undefined);
    const changeCurrentChat = (index, contact) => {
        setCurrentSelected(index);
        changeChat(contact)
      };
  return (
    <div className='deslist-sec mb-4'>
        {
            
            contacts&& contacts!= undefined &&(contacts.map((doc,index) =>
            <div 
            className={` discussion-item wow fadeIn d-flex  align-items-center ${
                index === currentSelected ? "selected" : ""
              }`} data-wow-delay="0.5s" key={index} 
              onClick={() => changeCurrentChat(index, doc)}
              >
            <img className='profile-img' src= {doc.profilImg=== undefined? '' : require(`../../../Imges/doctorProfilImg/${doc.profilImg}`)} alt='profilImg'></img>
            <div className="text">
                <GetUserName  email={doc.email}/>
            </div>
          </div>))
        }
       
    </div>
  )
}

export default ContactList