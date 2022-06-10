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
    const [elements, setElemets] = useState(['Doctor','Patient','Landlord']);
    const [message, setMessage] = useState();
    const[values,setValues]=useState({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      confirmPassword:"",
      type:"",
      crated: new Date
    });
    const inputs = [
      {
        name: "firstName",
        type: "text",
        placeholder: "FirstName",
        title:
          "First Name should be 3-16 characters and shouldn't include any special character!",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
      {
        name: "lastName",
        type: "text",
        placeholder: "lastName",
        title:
          "last Name should be 3-16 characters and shouldn't include any special character!",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
      {
        name: "email",
        type: "email",
        placeholder: "Email",
        title: "It should be a valid email address!",
        label: "Email",
        required: true,
      },
      {
        name: "password",
        type: "password",
        placeholder: "Password",
        title:
          "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        label: "Password",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
      },
      {

        name: "confirmPassword",
        type: "password",
        placeholder: "Confirm Password",
        title: "Passwords don't match!",
        label: "Confirm Password",
        pattern: values.password === values.confirmPassword,
        required: true,
      },
    ];

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
        
        const res =await axios.post("http://localhost:5000/user/signup", formData); 
        setMessage(res)
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
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
  return (
    <div className='signUp-container'>
        <div className='signUp-content'>
            <div className='container'>
                <div className='row align-items-center'>
                <div className='col-12 col-lg-6 wow slideInUp' data-wow-delay="0.1s">
                    <h3 className='formTitel text-center mb-4'>Sign Up From Here</h3>
                    <form onSubmit={handleSubmit}>
                        {inputs.map((input,index) => (
                            <Input
                              key={index}
                              {...input}
                              value={values[input.name]}
                              onChange={onChange}
                              
                            />
                          ))}
                        <SelectUser name='Type' elements={elements}/> 
                        
                        <FormButton type="submit" name="Sign Up"/>
                        
                    </form>
                </div>
                
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default SignUp