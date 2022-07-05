import React, { useContext } from 'react'
import FormButton from '../../childComponents/Form/FormButton'
import FormIllustrations from '../../childComponents/Form/FormIllustrations'
import Input from '../../childComponents/Form/Input'
import { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import axios from 'axios'
import { Navigate, useLocation } from 'react-router-dom'

function PatientSignUp() {
  const [value, setValue] = useState('');
  const options = useMemo(() => countryList().getData(), []);
  const location = useLocation();
  const [redirect, setRedirect] = useState('false');

  const changeHandler = value => {
    setValue(value)
  }
  const handleSubmit= async (event) =>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.append("profilImg",data.get('profilImg').name);
    data.append("country",value.label);
    data.append("email",location&&location.state);
    await axios.post("http://localhost:5000/patient/signUp",data);
    setRedirect(true);
  }
  
  if(redirect===true){
    return <Navigate to="/signin"/>
  }
  return (
    <div className='signUp-container'>
      <div className='signUp-content'> 
      <div className='container'>
                <div className='row align-items-center'>
                <div className='col-12 col-lg-6 wow slideInUp' data-wow-delay="0.1s">
                    <h3 className='formTitel text-center mb-4'>Sign Up From Here</h3>
                    <form onSubmit={handleSubmit}>
                      <div className='row'>
                        <div className='col-xl-6 col-md-12 m-auto'>
                          <Input type="file" name='profilImg' className='col-6 col-md-12 mb-4 m-auto'/>
                          <Input type="text" name='phoneNumber' placeholder="Phone number..." required={'required'}className='col-6 col-md-12 mb-4 m-auto'/>
                          <Select className='mb-4' options={options} value={value} onChange={changeHandler} />
                        </div>
                      </div>                                           
                      <FormButton type="submit" name="Register"/>
                    </form>
                </div>
                <FormIllustrations img="img/Auth/Signup.png" altImg="signUp Img" title="Sign Up to our plateform" desc="Tabibi Portal help patients to find doctors according to their illnesses."/>
              </div>
                
            </div>
      </div>
    </div>
  )
}

export default PatientSignUp