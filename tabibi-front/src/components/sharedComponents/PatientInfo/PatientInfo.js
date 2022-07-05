import React, { useEffect, useState } from 'react'
import FormButton from '../../childComponents/Form/FormButton'
import FormIllustrations from '../../childComponents/Form/FormIllustrations'
import Input from '../../childComponents/Form/Input'
import SubHeader from '../../childComponents/SubHeader'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

function PatientInfo() {
  let navigate = useNavigate();
  const [specialitys, setSpecialitys ]= useState(['Eye Expert','Ot Expert','Corona Expert','Consultant','Surgeon','Dentist','Skin Care','Haire Care']);
  const [gendre, setGendre] = useState(['Male', 'Female']);
  const [redirect, setRedirect] = useState(false);
  const [selctedSpeciality, setSelctedSpeciality] = useState('')  
  const location = useLocation();
   
  
  
    const handleSubmit = async (event)=>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setSelctedSpeciality(data.get('speciality'))
     const reqBody= {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      age:data.get('age'),
      gendre:data.get('gendre'),
      speciality: data.get('speciality'),
      description:data.get('description'),
      patientId:location && location.state,
     }
     
     
      await axios.post("http://localhost:5000/patient-info", reqBody)
      .then((res) => {
        console.log(res)
        setRedirect(true) })
      .catch(error => {
          //this.setState({ errorMessage: error.message });
          console.error('There was an error!', error);
      }); 
    }
    //console.log(redirect)
    if(redirect){
      return <Navigate to="/geolocation" state={selctedSpeciality}/>
    }
    return (
    <div className='patientInfo-container my-5'>
        <div className='patientInfo-content'>
            <SubHeader title={ "Disease Details" } />
            <div className='container'>
                <div className='row align-items-center'>
                <div className='col-12 col-lg-6 wow slideInUp' data-wow-delay="0.1s">
                    <h3 className='formTitel text-center mb-4'>Make an appointment</h3>
                    <form onSubmit={handleSubmit}>
                        <Input type="text" name='firstName' placeholder="First Name ..." required={'required'}/>
                        <Input type="text" name='lastName' placeholder="Last Name ..." required={'required'}/>
                        <Input type="text" name='age' placeholder="Your Age ..." required={'required'}/>
                        <div className='m-auto col-6 m-auto'>
                              <select className="form-select m-auto mb-4 border bg-light px-4" aria-label="Default select example" name='gendre' required>
                                  <option value="">Gendre</option>
                                  {
                                  gendre.map((gendre,index) => 
                                    <option value={gendre} key={index} >{gendre}</option>
                                  )                          
                                  }
                              </select>
                        </div>
                        <div className='m-auto col-6 m-auto'>
                              <select className="form-select m-auto mb-4 border bg-light px-4" aria-label="Default select example" name='speciality' required>
                                  <option value=''>speciality</option>
                                  {
                                  specialitys.map((speciality,index,specialitys) => 
                                    <option value={speciality} key={index} >{speciality}</option>
                                  )                          
                                  }
                              </select>
                        </div>
                        <div className="col-6 m-auto pb-4">
                              <textarea type="text" name='description' className="form-control   border bg-light px-4" placeholder="Description..." style={{height:100}} required />
                        </div>
                        <FormButton type="submit" name="Register"/>
                    </form>
                </div>
                <FormIllustrations img="img/img6.png" altImg="signUp Img" title="Make an appointment with your doctor" desc="Fill in your form,to display the doctors according to your illness"/>
              </div>
                
            </div>
        </div>
    </div>
  )
}

export default PatientInfo