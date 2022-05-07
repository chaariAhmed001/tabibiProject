import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'

function GetUserProfilImg({email,type}) {
    const [profilImg, setProfilImg] = useState('')
    const getUser =async(email)=>{
        const response = await axios
        .get(`http://localhost:5000/${type}/${email}`)
        .catch((err) => {
        console.log("Err: ", err);
      });   
      setProfilImg(response.data.profilImg)
    }
    useEffect(() => {
        if (email && email !== "") getUser(email);
        
      }, [email,profilImg]);
      
  return (
    <img src= { profilImg==='' ? '':  require(`../../../src/Imges/doctorProfilImg/${profilImg}`)} alt="" className="widgetSmImg " />
  )
}

export default GetUserProfilImg