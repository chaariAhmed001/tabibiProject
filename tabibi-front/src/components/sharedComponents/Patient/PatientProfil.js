import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { loginContext } from '../../../Context/loginContext'
import PatientCard from '../Admin/User/PatientCard'
import PatientUpdate from '../Admin/User/PatientUpdate';
import '../Admin/User/User.css'
function PatientProfil() {
    const {user,setUser} = useContext(loginContext);
    const [patient, setPatient] = useState({})
    const getPatient = async () => {
        
        const response = await axios
          .get(`http://localhost:5000/patient/${user!=undefined&&user.email}`)
          .catch((err) => {
            console.log("Err: ", err);
          });   
          
          setPatient(response.data);
        };
    
      useEffect(() => {
        getPatient();
      }, [user&&user.email]);
      
  return (
    <div className='doctorProfil-container '>
      <div className='doctorProfil-content container p-0'>
        <div className='row'>
        <div className='col-xl-5 col-md-12 my-4'>
          <PatientCard user={user} patient={ patient}/>
        </div>
         <div className='col-xl-7 col-md-12 my-4'>
          <PatientUpdate user={user} patient={ patient}/>
        </div> 
        </div>
        
      </div>
    </div>
  )
}

export default PatientProfil