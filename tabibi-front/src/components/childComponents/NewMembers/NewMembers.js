import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Member from './Member';
import './NewMembers.css'
function NewMembers({users}) {
  
  
  return (
    <div className="col-xl-5 col-lg-5">
      <div className="card shadow mb-4">   
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">New Join Members</h6>
        </div>                            
        <div className="card-body px-0">
          {
            users.filter(user=>user.type==='Doctor')
               .map((user,index,users) => 
                <Member name={user.fullname} type={user.type} img='img/wichList/doctor1.jpg' email={user.email} key={index}/>
                )                       
            }
          
          
        </div>
      </div>
    </div>
  )
}

export default NewMembers