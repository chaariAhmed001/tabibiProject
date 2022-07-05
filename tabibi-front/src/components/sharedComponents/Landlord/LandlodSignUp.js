import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import FormButton from '../../childComponents/Form/FormButton';
import FormIllustrations from '../../childComponents/Form/FormIllustrations';
import Input from '../../childComponents/Form/Input';
import GooglePlacesInput from '../../childComponents/Form/GooglePlacesInput';
import FormGroup from '../../childComponents/Form/FormGroup';
function LandlodSignUp() {
  const location = useLocation();
  const [housePhotos, sethousePhotos] = useState([])
  const [redirect, setRedirect] = useState('false');
  const [options, setOptions] = useState([])
  const [coordinates, setCoordinates] =useState({
    lat: null,
    lng: null
  });

  const upload = (e) => {
      let photos=[];
    // Convert the FileList into an array and iterate
    Array.from(e.target.files).forEach(file => {
        photos.push(file.name ) 
    });
    sethousePhotos(photos)

}
const handleSubmit = async(event) =>{
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const photo = data.append("photo",data.get('photo').name);
  data.append("email",location.state);
  data.append('crated',new Date);  
  coordinates.lat!= null &&data.append('coordinates[lat]', coordinates&& coordinates.lat);
  coordinates.lat!= null &&data.append('coordinates[lng]',coordinates&& coordinates.lng);
  options.forEach(opt => { data.append("options[]", opt) });
  await axios.post("http://localhost:5000/landlord/signUp",data);
  
  setRedirect(true);
}
if(redirect===true){
  return <Navigate to="/signin"/>
}
const handleCordChange = (cord)=>{
  setCoordinates(cord)
}
const getOptions =(options)=>{
  setOptions(options)
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
                        <div className='col-xl-6 col-md-12'>
                          <Input type="text" name='title' placeholder="Title..." className='col-6 col-md-12 mb-4 m-auto'/>
                          <Input type="text" name='phoneNumber' placeholder="Phone number..." required={'required'}className='col-6 col-md-12 mb-4 m-auto'/>
                          <Input type="text" name='area' placeholder="Area en m2..." required={'required'}className='col-6 col-md-12 mb-4 m-auto'/>
                          <Input type="text" name='bedrooms' placeholder="Number of Bedrooms..." required={'required'} className='col-6 col-md-12 mb-4 m-auto'/>
                          <GooglePlacesInput name='adress' placeholder='House Adress...' getCoordinates={handleCordChange} className='col-6 col-md-12 mb-4 m-auto'/>
                        </div>
                        <div className='col-xl-6 col-md-12'>
                        <Input type="text" name='bathrooms' placeholder="Number of Bathrooms..." required={'required'} className='col-6 col-md-12 mb-4 m-auto'/>
                        <div className="m-auto pb-4">
                              <textarea type="text" name='description' className="form-control   border bg-light px-4" placeholder="Description" style={{height:100}} required />
                        </div>
                        <Input type="text" name='price' placeholder="Price night..." required={'required'} className='col-6 col-md-12 mb-4 m-auto'/>
                        <Input type="file" name='photo' placeholder="Photo..." required={'required'} className='col-6 col-md-12 mb-4 m-auto'/>
                        </div>
                      </div>                    
                       
                        
                        <FormGroup name='options' placeholder='List of Options' getInputs={getOptions}/>
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

export default LandlodSignUp