import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import GeoMainComponent from '../../childComponents/GeoMainComponent/GeoMainComponent';
import SideBarComponent from '../../childComponents/SideBarComponent/SideBarComponent';


function Geolocation() {
    const location = useLocation();
    const [doctors, setDoctors] = useState(undefined);
    const [doc, setDoc] = useState(undefined)
    const getDoctors= async () =>{
       await axios.get("http://localhost:5000/doctor/doctors/"+(location&&location.state)).then((res)=> setDoctors(res.data));
     }
     
 useEffect(() => {
  getDoctors();
 },[location&&location.state]);
const selectedDoc=(doc)=>{
setDoc(doc)
}

  return (
    <div className='geolocation-container my-5' >
      <div className='geolocation-content'>
            <div className='container-fluid m-0 p-0' >
                <div className='row w-100'>
                    <div className='geolocation-sideBar-section d-none d-lg-block col-lg-3'>
                        <SideBarComponent selectedDoc={doc} defaultDoc={doctors&&doctors[0]}/>
                    </div>
                    <div className='geolocation-main-section col-lg-9 col-md-12'>
                        <div className='row'>
                            <GeoMainComponent doctors={doctors} selectedDoc={selectedDoc}/>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Geolocation