import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import FormButton from '../../childComponents/Form/FormButton';
import FormIllustrations from '../../childComponents/Form/FormIllustrations';
import Input from '../../childComponents/Form/Input';
function LandlodSignUp() {
  const location = useLocation();
  const [housePhotos, sethousePhotos] = useState([])
  const [redirect, setRedirect] = useState('false');
  
  const upload = (e) => {
      let photos=[];
    // Convert the FileList into an array and iterate
    Array.from(e.target.files).forEach(file => {
        photos.push(file.name ) 
    });
    sethousePhotos(photos)

}
console.log(housePhotos)

const handleSubmit = async(event) =>{
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  data.append('email', location.state);
  for (let i = 0 ; i < housePhotos.length ; i++) {
    data.append(`photos${i}`, housePhotos);
}
  console.log(data.get('photos'))
  await axios.post("http://localhost:5000/landlord/signUp", data);
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
                        <Input type="text" name='title' placeholder="Title..."/>
                        <Input type="text" name='phoneNumber' placeholder="Phone number..." required={'required'}/>
                        <Input type="text" name='adress' placeholder="Adress..."required={'required'}/>
                        <Input type="text" name='description' placeholder="Description..." required={'required'}/>
                        <Input type="text" name='price' placeholder="Price night..." required={'required'}/>
                        {/* <Input type="file" onChange = {upload} name='photo' placeholder="Photo..." required={'required'} multiple={'multiple'}/> */}
                        <input onChange={upload}  name='photos'  type = 'file' multiple />
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