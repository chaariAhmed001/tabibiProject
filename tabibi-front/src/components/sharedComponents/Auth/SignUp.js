import React, { useState } from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom'
import Input from '../../childComponents/Form/Input';
import FormButton from '../../childComponents/Form/FormButton';
import SelectUser from '../../childComponents/Form/SelectUser';

function SignUp() {
    const [redirect, setRedirect] = useState(false)
    const [redirectForm, setRedirectForm] = useState();
    const [userType, setUserType] = useState();
    const [formData, setFormData] = useState()
    const [elements, setElemets] = useState(['Doctor','Patient','Landlord'])

    const handleSubmit=async (event)  =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setUserType(data.get('selectType'));
        setFormData({
          fullname : data.get('firstName')+' '+data.get('lastName'),
          email: data.get('email'),
          password: data.get('password'),
          type: data.get('selectType'),
          crated: new Date
        });
        console.log(data.get('selectType'))
        console.log(data)

        await axios.post("http://localhost:5000/user/signup", formData); 
        setRedirect(true);
      };
      if(redirect && userType === 'Patient'){
        return <Navigate to="/signin" state={formData.email}/>
      }
      else if(redirect && userType === 'Landlord'){
        return <Navigate to='/LandlodSignUp' state={formData.email}/>
      }
      else if(redirect && userType === 'Doctor'){
        return <Navigate to='/doctorSignUp' state={formData.email}/>
      }
  return (
    <div className='signUp-container'>
        <div className='signUp-content'>
            <div className='container'>
                <div className='row align-items-center'>
                <div className='col-12 col-lg-6 wow slideInUp' data-wow-delay="0.1s">
                    <h3 className='formTitel text-center mb-4'>Sign Up From Here</h3>
                    <form onSubmit={handleSubmit}>
                        <Input type="text" name='firstName' placeholder="Your First Name"/>
                        <Input type="text" name='lastName' placeholder="Your Last Name"/>
                        <Input type="email" name='email' placeholder="Your Email"/>
                        <Input type="password" name='password' placeholder="Your Password"/>
                        <SelectUser name='Type' elements={elements}/>
                        <FormButton type="submit" name="Sign Up"/>
                    </form>
                </div>
                <div className='col-6 text-center d-none d-lg-block wow slideInUp'data-wow-delay="0.3s">
                    <img src='img/Auth/Signup.png' alt='signUp Img' style={{width:300 }}></img>
                    <h4>Sign Up to our plateform </h4>
                    <p>Tabibi Portal help patients to find doctors according to their illnesses.</p>
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default SignUp