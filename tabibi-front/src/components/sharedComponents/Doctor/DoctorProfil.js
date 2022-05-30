import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import DoctorUpdate from './DoctorUpdate';

function DoctorProfil(props) {
  const location = useLocation();
  let navigate = useNavigate();
  const [user, setUser] = useState(location.state);
  const [doctor, setDoctor] = useState({});
  console.log("aaaa")
  console.log(props);
  useEffect(() => {
          const getDoc=async () => {
          setDoctor(await (await axios.get("http://localhost:5000/doctor/findDoc/"+props.user.email)).data);
          }
          getDoc();
          const interval=setInterval(()=>{
            getDoc();
           },100)
        return()=>clearInterval(interval)
  },[]);
  console.log(doctor)
  useEffect(() => {
    (
        async () => {
          const docEmail = props.user.email;
          setDoctor(await (await axios.get("http://localhost:5000/doctor/findDoc/"+docEmail)).data);
          
        }
    )();
},[user]);
  const update = ()=>{
    //elam'/doctorUpdate'
    navigate('/doctorUpdate', { state:{ user: user, doctor: doctor }})
  }
  //console.log(doctor)
  return (
    <div className='text-center my-4'>
      <button className='btn btn-primary' onClick={update}  >Update</button>
      <h2>{props.user.fullname}</h2>
      {/*<h3 >{user.email}</h3>
      <h4>{doctor.speciality}</h4>
      <h4>{doctor.phoneNumber}</h4>
      <p>Description: {doctor.generalDes}</p>  */}
      {/* <h4>Diploms</h4> */}
      {/* <p><b className='pe-2'>{doctor.education.year}:</b> {doctor.education.diplome}</p> */}
      {/* <img src={`doctorProfilImg/${doctor.profilImg}`} style={{width:300 }}></img> */}
      
    </div>
  )
}

export default DoctorProfil