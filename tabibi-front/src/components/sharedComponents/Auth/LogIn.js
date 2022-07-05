import React , { useEffect, useState,useContext }  from 'react'
import './Auth.css'
import { useNavigate } from 'react-router-dom'
import { loginContext } from '../../../Context/loginContext';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


function LogIn({onSuccess}) {
    const {user,setUser} = useContext(loginContext)
    let navigate = useNavigate();
    const [redirect, setRedirect] = useState(false)
    const [errMsg, setErrMsg] = useState();
    const getUser = async()=>{
        setUser((await axios.get("http://localhost:5000/user",{ withCredentials: true })).data)
      }
      useEffect(()=>{
        let isApiSubscribed = true;
        if (isApiSubscribed){getUser()}
        return () => {
                // cancel the subscription
                isApiSubscribed = false;
                
            };
      }
    ,[user && user.email])
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const form = {
          email: data.get('email'),
          password: data.get('password')
        };
       const res =await axios.post("http://localhost:5000/user/signin", form, { withCredentials: true })
       setErrMsg(res.data)
       if(!res.data){
        onSuccess();
        setRedirect(true);  
        setUser(res.data);
        
    }
    
     };

     if(redirect && user.type === 'Patient'){
        return <Navigate to="/patientInfo" state={user&&user.id}/>
      }
        else if(redirect && user.type === 'Landlord'){
        return <Navigate to='/LandlodSignUp' />
      }
      else if(redirect && user.type === 'Doctor'){
        
        return <Navigate to='/doctorProfil' state={user&&user.email} />
      }
      else if(redirect && user.type === 'Admin'){
        
        return <Navigate to='/dashbourd' state={user&&user.email} />
      }
  return (
    <div className='logIn-container'>
        <div className='logIn-content'>
            <div className='container'>
               {
               (user && user.email )? <p>you are loged in</p> : 
               
                <div className='row align-items-center'>
                <div className='col-12 col-lg-6 wow slideInUp' data-wow-delay="0.1s">
                    <h3 className='formTitel text-center mb-4'>Login From Here</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="col-6 m-auto pb-4">
                            <input type="email" name='email' className="form-control   border bg-light px-4" placeholder="Your Email" required />
                        </div>
                        <div className="col-6 m-auto mb-2">
                                <input type="password" name='password' className="form-control border bg-light px-4" placeholder="Your Password" required/>
                        </div>
                        <p className='text-center'>{errMsg}</p>
                        <div className='col-6 forgot-link m-auto text-center'>
                            <a href="#" 
                            className="nav-item nav-link active" 
                            onClick={()=>{
                                navigate('/passwordRec')
                            }}
                            style={{fontWeight: 600}}>Lost password?</a>
                            </div>
                        <div className="col-6 m-auto">
                            <button className="btn btn-primary w-100 " type="submit">Log In</button>
                        </div>
                        <div className="col-6 or-divide"><span>or</span></div>
                        <div className='col-6 signIN-btn m-auto text-center'>
                            <button className="btn  w-100 "
                             onClick={()=>{
                                 navigate('/signup')
                             }} >
                                 Sign Up
                            </button>
                        </div>
                        
                    </form>
                </div>
                <div className='col-6 text-center d-none d-lg-block wow slideInUp'data-wow-delay="0.3s">
                    <img src='img/Auth/Login.png' alt='login Img' style={{width:300 }}></img>
                    <h4>LogIn in to our plateform </h4>
                    <p>Tabibi Portal help patients to find doctors according to their illnesses.</p>
                </div>
                </div>
               } 
            </div>
        </div>
    </div>
  )
}

export default LogIn