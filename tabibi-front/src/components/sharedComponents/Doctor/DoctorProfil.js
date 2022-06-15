import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { GiDiploma, GiSkills } from 'react-icons/gi';
import { MdEmail, MdMapsHomeWork, MdSmartphone ,MdOutlineKeyboardBackspace, MdAddBox} from "react-icons/md";
import Input from '../../childComponents/Form/Input';
import FormButton from '../../childComponents/Form/FormButton';


function DoctorProfil() {
  const location = useLocation();
  let navigate = useNavigate();
  const [doctor, setDoctor] = useState(undefined);
  const [specialitys, setSpecialitys ]= useState(['Eye Expert','Ot Expert','Corona Expert','Consultant','Surgery','Dentist','Skin Care','Haire Care']);
  const [message, setMessage] = useState('');
  const [result, setResult] = useState();

  const getDoct = async () =>{
    await axios.get("http://localhost:5000/doctor/cpDoctor/"+location.state).then(res => setDoctor(res.data));
  }
  useEffect(() => {
    let rerender = true;
    rerender&& getDoct()
    return rerender=false
  }, [location.state])
  console.log(doctor)
  
  
  /*useEffect(() => {
          const getDoc=async () => {
          //setDoctor(await (await axios.get("http://localhost:5000/doctor/findDoc/"+props.user.email)).data);
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
          //setDoctor(await (await axios.get("http://localhost:5000/doctor/findDoc/"+docEmail)).data);
          
        }
    )();
},[user]);*/
  const update = ()=>{
    //elam'/doctorUpdate'
    //navigate('/doctorUpdate', { state:{ user: user, doctor: doctor }})
  }
  //console.log(doctor)
  return (
    <div>
      <p>{doctor&&doctor.user.fullname}</p>
    </div>
  )
}

export default DoctorProfil