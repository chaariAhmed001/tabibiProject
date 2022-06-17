import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
function GetUserProfilImg({email,type}) {
    const [profilImg, setProfilImg] = useState('');
    const [doctor, setDoctor] = useState(undefined)
    const getDoct = async () =>{
      await axios.get("http://localhost:5000/doctor/cpDoctor/"+email).then(res => setDoctor(res.data));
    }
    useEffect(() => {
      let rerender = true;
      rerender&& getDoct()
      return rerender=false
    }, [email])
    console.log(doctor!==undefined&&doctor)
  return (
    <img src={doctor&& doctor.doctor&&doctor.doctor.profilImg ===undefined? '' : require(`../../Imges/doctorProfilImg/${doctor&& doctor.doctor&&doctor.doctor.profilImg}`)} />
  )
}

export default GetUserProfilImg