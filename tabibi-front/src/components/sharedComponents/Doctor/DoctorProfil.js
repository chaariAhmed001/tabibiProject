import axios from 'axios';
import React, { useEffect, useState,useContext } from 'react'
import {  useNavigate } from 'react-router-dom';
import DoctorCard from '../Admin/User/DoctorCard';
import DoctorUpdate from '../Admin/User/DoctorUpdate';
import { loginContext } from '../../../Context/loginContext';


function DoctorProfil() {
  const {user,setUser,doctor, setDoctor} = useContext(loginContext)
  
  let navigate = useNavigate();
  
  const [specialitys, setSpecialitys ]= useState(['Eye Expert','Ot Expert','Corona Expert','Consultant','Surgeon','Dentist','Skin Care','Haire Care']);
  const [message, setMessage] = useState('');
  const [result, setResult] = useState();

  const getDoct = async () =>{
    //let user = await axios.get("http://localhost:5000/user",{ withCredentials: true })
    user.email !=undefined&& await axios.get(`http://localhost:5000/doctor/${user && user.email}`).then(res => setDoctor(res.data));
  }
  useEffect(() => {
   getDoct()
    
  }, [user.email])
console.log(doctor)
  return (
    <div className='doctorProfil-container '>
      <div className='doctorProfil-content container p-0'>
        <div className='row'>
        <div className='col-xl-5 col-md-12 my-4'>
          <DoctorCard doctor={doctor !== undefined && doctor} /> 
        </div>
         <div className='col-xl-7 col-md-12 my-4'>
          <DoctorUpdate doctor={doctor !== undefined && doctor} />

        </div> 
        </div>
        
      </div>
    </div>
  )
}

export default DoctorProfil