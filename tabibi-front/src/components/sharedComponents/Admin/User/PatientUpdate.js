import React, { useMemo, useState } from 'react'
import Input from '../../../childComponents/Form/Input'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import FormButton from '../../../childComponents/Form/FormButton';
import axios from 'axios';
function PatientUpdate({user,patient}) {
  const [value, setValue] = useState(patient&&patient.country);
  const options = useMemo(() => countryList().getData(), []);
  const [res, setRes] = useState('');
  console.log(value)
  const changeHandler = value => {
    setValue(value)
  }
  const handleSubmit= async (event) =>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const form = {
      fullname : data.get('fullname'),
      email: data.get('email')
    };
    let imgUrl;
    if(data.get('profilImg').name ===''){
      imgUrl = patient && patient.profilImg;
    }
    else {imgUrl= data.get('profilImg').name;}
    data.append("country",value && value.label? value.label: value);
    await axios.put(`http://localhost:5000/patient/update/${patient&&patient._id}`,data).then(res =>setRes(res))
    await axios.put("http://localhost:5000/user/update/"+user && user.id,form).then(res =>setRes(res));

  }
  console.log(res)
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-semi-bold text-primary">Edit Patient</h6>
      </div>
      <div className='card-body'>      
        <form  onSubmit={handleSubmit} encType="multipart/form-data"> 
          <div className='mb-3'>
            <label className="small mb-1" htmlFor="inputUsername">FullName</label>
            <Input type='text' name='fullname' placeholder="Your fullName" className='col-12' defaultValue={user && user.fullname } required={'required'} />
          </div>
          <div className='mb-3'>
            <label className="small mb-1" htmlFor="inputUsername">Email</label>
            <Input type='email' name='email' placeholder="Your fullName" className='col-12' defaultValue={user && user.email } required={'required'} />
          </div>
          <div className='mb-3'>
            <label className="small mb-1" htmlFor="inputUsername">Country</label>
            <Select className='col-12 mb-4' options={options} value={value} onChange={changeHandler} />
          </div>
          <div className='mb-3'>
            <label className="small mb-1" htmlFor="inputUsername">Profil Image</label>
            <Input type='file' name='profilImg' className='col-12' defaultValue={patient && patient.profilImg } />
          </div>
          <div className='mb-3'>
            <label className="small mb-1" htmlFor="inputUsername">Profil Image</label>
            <Input type='text' name='phoneNumber' className='col-12' defaultValue={patient && patient.phoneNumber } required={'required'} />
          </div>
          <FormButton type='submit' name='Save Changes'/>          
        </form>                  
      </div>
    </div>
  )
}

export default PatientUpdate