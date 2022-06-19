import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { GiDiploma, GiSkills } from 'react-icons/gi';
import { MdEmail, MdMapsHomeWork, MdSmartphone ,MdOutlineKeyboardBackspace, MdAddBox} from "react-icons/md";
import Input from '../../childComponents/Form/Input';
import FormButton from '../../childComponents/Form/FormButton';
import DoctorCard from '../Admin/User/DoctorCard';
import DoctorUpdate from '../Admin/User/DoctorUpdate';


function DoctorProfil() {
  const location = useLocation();
  let navigate = useNavigate();
  const [doctor, setDoctor] = useState(undefined);
  const [specialitys, setSpecialitys ]= useState(['Eye Expert','Ot Expert','Corona Expert','Consultant','Surgery','Dentist','Skin Care','Haire Care']);
  const [message, setMessage] = useState('');
  const [result, setResult] = useState();

  const getDoct = async () =>{
    await axios.get("http://localhost:5000/doctor/findUser/"+location.state).then(res => setDoctor(res.data));
  }
  useEffect(() => {
    let rerender = true;
    if(rerender)getDoct()
    return () => { rerender = false };
  }, [location.state])

console.log(doctor)
  return (
    <div className='doctorProfil-container '>
      <div className='doctorProfil-content container p-0'>
        <div className='row'>
        <div className='col-xl-5 col-md-12 my-4'>
          {/* <DoctorCard doctor={doctor !== undefined && doctor} /> */}
        </div>
        {/* <div className='col-xl-7 col-md-12 my-4'>
          <DoctorUpdate doctor={doctor !== undefined && doctor} />

        </div> */}
        </div>
        
      </div>
    </div>
  )
}

export default DoctorProfil