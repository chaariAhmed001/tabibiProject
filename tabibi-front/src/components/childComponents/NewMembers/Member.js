import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdVisibility } from "react-icons/md";
import GetUserProfilImg from '../GetUserProfilImg';
import './NewMembers.css'
function Member({name,type,email}) {
  
  return (
    <div className="d-flex align-items-center justify-content-between px-4 mb-3">
            <div className="d-flex align-items-center">
              <img src=""/>

              <div className="ms-4">
                <div className="h5 mb-0">{name}</div>
                <div className="text-xs text-muted ">{type}</div>
              </div>
            </div>
            <div className="ms-4 small">
              <button type="button" className="d-flex align-items-center btn display-btn btn-sm"><MdVisibility className='me-2'/> Display</button>
            </div>
          </div>
  )
}

export default Member