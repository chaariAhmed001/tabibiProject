import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Doctors() {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        const getDoctors= async () =>{
            await axios.get("http://localhost:5000/doctor/doctors").then(res=>setDoctors(res.data.res));
        }
        getDoctors();
        const interval=setInterval(()=>{
            getDoctors();
           },100)
        return()=>clearInterval(interval)
    },[]);
  return (
    <div className='container'>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">speciality</th>
                    <th scope="col">Address</th>
                   
                </tr>
            </thead>
            <tbody>
            {
               doctors.map((doctor,index,doctors) => 
                <tr key={index}>
                <th scope="row">{index}</th>
                    <td>{doctor.speciality}</td>
                    <td>{doctor.cabinetAddress}</td>
                    
                </tr>
                )                       
            }
            </tbody>
        </table>
    </div>
  )
}

export default Doctors