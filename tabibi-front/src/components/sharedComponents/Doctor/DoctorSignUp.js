import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import PlacesAutocomplete, {geocodeByAddress,geocodeByPlaceId,getLatLng} from 'react-places-autocomplete';


function DoctorSignUp() {
  const [formData, setFormData] = useState();
  const [specialitys, setSpecialitys ]= useState(['Eye Expert','Ot Expert','Corona Expert','Consultant','Surgeon','Dentist','Skin Care','Haire Care']);
  const [redirect, setRedirect] = useState('false');
  const location = useLocation();
  const [userEmail, setUserEmail] = useState(location.state)
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] =useState({
    lat: null,
    lng: null
  });
  const [skills, setskills] = useState([])
  const [skillInput, setskillInput] = useState("");
  const [city, setCity] = useState(['Béja','Ben Arous','Bizerte','Gabes','Gafsa','Jendouba','Kairouan','Kasserine','Kebili','La Manouba','Le Kef','Mahdia','Médenine','Monastir','Nabeul','Sfax','Sidi Bouzid','Siliana','Sousse','Tataouine','Tozeur','Tunis','Zaghouan'])
    const handleSubmit=async (event)  =>{
      console.log(coordinates)
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.append('email', location.state); 
    data.append('phoneNumber', data.get('phoneNb')); 
    data.append('profilImg',data.get('profilImg').name);
    data.append('education[diplome]',data.get('diplome'));
    data.append('education[university]',data.get('university'));
    data.append('education[year]',data.get('year'));
    skills.forEach(skill => { data.append("skills[]", skill) })
    data.append('crated',new Date);
    coordinates.lat!= null &&data.append('coordinates[lat]', coordinates&& coordinates.lat);
    coordinates.lat!= null &&data.append('coordinates[lng]',coordinates&& coordinates.lng);
   
    await axios.post("http://localhost:5000/doctor/signUp", data); 
    setRedirect(true);
    setUserEmail('');
  };

  const onStateChange = (e) => {
    setskillInput(e.target.value);
    
  };
  const addSkills = () =>{
    skillInput !==''&& skills.push(skillInput);
    setskillInput('') 
    console.log(skills)
  }
  if(redirect===true){
    return <Navigate to="/signin"/>
  }
  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };
  return (
    <div className='doctorSignUP-container py-5'>
        <div className='doctorSignUP-content'>
            <div className='container'>
                <div className='row align-items-center'>
                <div className='col-12 col-lg-6 wow slideInUp' data-wow-delay="0.1s">
                    <h3 className='formTitel text-center mb-4'>Doctor SignUp From</h3>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                      <div className='row'>
                        <div className='col-xl-6 col-md-12'>
                          <div className='m-auto '>
                              <select className="form-select m-auto mb-4 border bg-light px-4" aria-label="Default select example" name='speciality' required>
                                  <option>speciality</option>
                                  {
                                  specialitys.map((speciality,index,specialitys) => 
                                    <option value={speciality} key={index} >{speciality}</option>
                                  )                          
                                  }
                              </select>
                          </div>
                            <div className="m-auto pb-4">
                                <input type="number" name='phoneNb' className="form-control border bg-light px-4" placeholder="Phone number..." required />
                            </div>
                            <PlacesAutocomplete
                              value={address}
                              onChange={setAddress}
                              onSelect={handleSelect}
                            >
                              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div className='col-6 col-md-12 mb-4'>
                                  <input className='form-control border bg-light px-4'{...getInputProps({ placeholder: "Cabinet Addresse..." })} name='cabinetAddress' required/>

                                  <div>
                                    {loading ? <div>...loading</div> : null}

                                    {suggestions.map((suggestion,index) => {
                                      return (
                                        <div className='form-control border bg-light px-4' key={index} {...getSuggestionItemProps(suggestion)}>
                                          {suggestion.description}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </PlacesAutocomplete>
                            <div className="m-auto pb-4">
                              <textarea type="text" name='generalDes' className="form-control   border bg-light px-4" placeholder="General Description" style={{height:80}} required />
                            </div>
                            <div className="m-auto pb-4">
                              <textarea type="text" name='detailDes' className="form-control   border bg-light px-4" placeholder="Detail Description" style={{height:100}} required />
                            </div>
                            
                        </div>
                        <div className='col-xl-6 col-md-12'>
                          <div className="m-auto pb-4">
                              <input className="form-control" type="file" id="formFile" name='profilImg' />
                          </div>
                          <div className='m-auto '>
                              <select className="form-select m-auto mb-4 border bg-light px-4" aria-label="Default select example" name='city' required>
                                  <option>city</option>
                                  {
                                  city.map((city,index) => 
                                    <option value={city} key={index} >{city}</option>
                                  )                          
                                  }
                              </select>
                          </div>
                          <div className="m-auto pb-4">
                                <input type="number" name='experience' className="form-control border bg-light px-4" placeholder="Year of experience..." required />
                            </div>
                          <h3 className='text-center'>Diplome</h3>
                          <div className="m-auto pb-4">
                              <input type="text" name='diplome' className="form-control border bg-light px-4" placeholder="Degree" required />
                          </div>
                          <div className="m-auto pb-4">
                              <input type="text" name='university' className="form-control border bg-light px-4" placeholder="University" required />
                          </div>
                          <div className=" m-auto pb-4">
                              <input type="date" name='year' className="form-control border bg-light px-4" required />
                          </div>
                          
                            
                        </div>
                      </div>
                      <div className='content col-12 d-flex align-content-between' style={{flexWrap: 'wrap' ,alignItems: 'space-between'}}>
                            {skills.map((skill,index)=>{
                                return(
                                 
                                  <span className='bg-light p-2 m-2' key={index} style={{borderRadius: 10}}>{skill}</span>
                                
                                );
                            })}
                      </div>
                      <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="List Of Treatments" aria-label="Your Skills" aria-describedby="button-addon2"  onChange={onStateChange} value={skillInput}/>
                        <button className="btn btn-outline-secondary" type="button" 
                            id="button-addon2" onClick={addSkills}>+</button>
                      </div>
                      <div className="col-6 m-auto">
                        <button className="btn btn-primary w-100" type="submit">Registre</button>
                      </div>
                    </form>
                </div>
                <div className='col-6 text-center d-none d-lg-block wow slideInUp'data-wow-delay="0.3s">
                    <img src='img/Auth/Login.png' alt='login Img' style={{width:300 }}></img>
                    <h4>LogIn in to our plateform </h4>
                    <p>Tabibi Portal help patients to find doctors according to their illnesses.</p>
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default DoctorSignUp