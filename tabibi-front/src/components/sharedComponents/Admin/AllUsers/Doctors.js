import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdDelete, MdModeEdit } from "react-icons/md";
function Doctors() {
    const [doctors, setDoctors] = useState([]);
    const [doc, setDoc] = useState([]);
    

    useEffect(() => {
        const getDoctors= async () =>{
            await axios.get("http://localhost:5000/doctor/doctors").then(res=>setDoctors(res.data.res));
        }
        
        getDoctors();
        
        /*const interval=setInterval(()=>{
            getDoctors();
           },100)
        return()=>clearInterval(interval)
        http://localhost:5000/doctor/findDoc/"+docEmail*/
    },[]);
    /*useEffect(() => {
        const getUser = async(doctor)=>{
            axios.get("http://localhost:5000/doctor/findDoc/"+doctor.email).then(res=> setDoc(res) ) 
    
            }
            doctors.forEach((element)=>{
                getUser(element.email);
            })
        
    },[]);*/
    const getUser = async(doctor)=>{
        axios.get("http://localhost:5000/doctor/findDoc/"+doctor.email).then(res=> setDoc(res.data) ) 

        }
        const handleDelete = async(id) => {
            //console.log(id)
            await axios.delete("http://localhost:5000/doctor/"+id)
            setDoctors(doctors.filter((item) => item._id !== id));
        };
    return (
    <div className='doctors-container col-10 m-2'>
        <div className='doctors-content container'>
        <div className="PageHeading mt-2 row">
          <h3 className="pageTitle my-4">Doctors</h3>
        </div>
        <table className="table" style={{overflowX:'scroll'}}>
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Doctor</th>
                    <th scope="col">Email</th>
                    <th scope="col">Diplome</th>
                    <th scope="col">PhoneNumber</th>   
                    <th scope="col">created </th>      
                    <th scope="col">Actions</th>     
                </tr>
            </thead>
            <tbody>
            {
                doctors.map((doc,index) => 
                <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src= {`doctorProfilImg/${doc.profilImg}`}
                                alt=""
                                style={{width:45,height:45 , objectFit:'cover'}}
                                className="rounded-circle "
                                />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Doctor Name</p>
                                <p className="text-muted mb-0">{doc.speciality}</p>
                            </div>
                        </div>
                    </td>
                    <td>{doc.email}</td>
                    <td>{doc.education.diplome}</td>
                    <td>{doc.phoneNumber}</td>
                    <td>{doc.crated.slice(0,10)}</td>
                    <td>
                    <button type="button" className="btn btn-primary btn-sm me-2" ><MdModeEdit/></button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDelete(doc._id)}><MdDelete/></button>
                    </td>                    
                </tr>
                )                
            }
            </tbody>
        </table>
        </div>
        
    </div>
  )
}

export default Doctors