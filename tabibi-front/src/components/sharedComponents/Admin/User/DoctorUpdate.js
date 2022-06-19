import React, { useState } from 'react'
import Input from '../../../childComponents/Form/Input';
import FormButton from '../../../childComponents/Form/FormButton';
import axios from 'axios';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Navigate } from 'react-router-dom';

function DoctorUpdate({doctor}) {
    const [specialitys, setSpecialitys ]= useState(['Eye Expert','Ot Expert','Corona Expert','Consultant','Surgery','Dentist','Skin Care','Haire Care']);
    const [city, setCity] = useState(['Béja','Ben Arous','Bizerte','Gabes','Gafsa','Jendouba','Kairouan','Kasserine','Kebili','La Manouba','Le Kef','Mahdia','Médenine','Monastir','Nabeul','Sfax','Sidi Bouzid','Siliana','Sousse','Tataouine','Tozeur','Tunis','Zaghouan'])
    const [skills, setskills] = useState([ ])
    const [skillInput, setskillInput] = useState("");
    const [message, setMessage] = useState('');
    const [address, setAddress] = useState(doctor.doctor && doctor.doctor.cabinetAddress);
    const [res, setres] = useState()
        const [coordinates, setCoordinates] =useState({
            lat: null,
            lng: null
        });
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let imgUrl;
        if(data.get('profilImg').name ===''){
          imgUrl = doctor.doctor && doctor.doctor.profilImg;
        }
        else {imgUrl= data.get('profilImg').name;}
        data.append('profilImg',imgUrl);
        data.append('education[diplome]',data.get('diplome'));
        data.append('education[university]',data.get('university'));
        data.append('education[year]',data.get('year'));
        skills.forEach(skill => { data.append("skills[]", skill) })
        coordinates.lat!= null &&data.append('coordinates[lat]', coordinates&& coordinates.lat);
        coordinates.lat!= null &&data.append('coordinates[lng]',coordinates&& coordinates.lng);
        const form = {
            fullname : data.get('fullname'),
            email: data.get('email')
          };
          await axios.put("http://localhost:5000/doctor/update/"+doctor.doctor._id, data).then(res =>setres(res))
          await axios.put("http://localhost:5000/user/update/"+doctor.user._id,form).then(res =>setres(res));
          
        }
        if(res!= undefined &&  res.data.message==='Doctor has been successfully updated')
        {
            return <Navigate to='/' />
        }
        const onStateChange = (e) => {
            setskillInput(e.target.value);
            
          };
          const addSkills = () =>{
            skillInput !==''&& skills.push(skillInput);
            setskillInput('') 
            console.log(skills)
          }
          const handleSelect = async value => {
            const results = await geocodeByAddress(value);
            const latLng = await getLatLng(results[0]);
            setAddress(value);
            setCoordinates(latLng);
          };
          
  return (
    <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-semi-bold text-primary">Edit</h6>
                            </div>
                            <div className='card-body'>
                                <div className="userUpdate">
                                <form  onSubmit={handleSubmit} encType="multipart/form-data">
                                    <div className='mb-3'>
                                        <label className="small mb-1" htmlFor="inputUsername">FullName</label>
                                        <Input type='text' name='fullname' placeholder="Your fullName" className='col-12' defaultValue={doctor.user && doctor.user.fullname }/>
                                    </div>
                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputUsername">Phone Number</label>
                                            <Input type='number' name='phoneNumber' placeholder="Phone number..." className='pb-3' defaultValue={doctor.doctor && doctor.doctor.phoneNumber }/>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputUsername">Cabinet Address</label>
                                            <PlacesAutocomplete
                                                value={address}
                                                onChange={setAddress}
                                                onSelect={handleSelect}
                                                
                                                >
                                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                                    <div className='col-6 col-md-12 mb-4'>
                                                    <input className='form-control border bg-light px-4' name='cabinetAddress'   {...getInputProps({ placeholder: doctor.doctor && doctor.doctor.cabinetAddress })}  />

                                                    <div>
                                                        {loading ? <div>...loading</div> : null}

                                                        {suggestions.map((suggestion,index) => {
                                                        return (
                                                            <div className='form-control border bg-light px-4 serach-result' key={index} {...getSuggestionItemProps(suggestion)}>
                                                            {suggestion.description}
                                                            </div>
                                                        );
                                                        })}
                                                    </div>
                                                    </div>
                                                )}
                                            </PlacesAutocomplete>
                                        </div>
                                    </div>
                                    <div className="row gx-3 ">
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputUsername">Speciality</label>
                                            <div className='m-auto '>
                                                <select className="form-select m-auto mb-4 border bg-light px-4" aria-label="Default select example" name='speciality' required>
                                                    <option defaultValue>{doctor.doctor && doctor.doctor.speciality}</option>
                                                    {
                                                    specialitys.map((speciality,index,specialitys) => 
                                                        <option value={speciality} key={index} >{speciality}</option>
                                                    )                          
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputUsername">Profil Image</label>
                                            <Input type='file' name='profilImg' className='pb-3'/>
                                        </div>
                                    </div>
                                    <div className='mb-3'>
                                        <label className="small mb-1" htmlFor="inputUsername">Email address</label>
                                        <Input type='email' name='email' placeholder="Your eamil" className='pb-3' defaultValue={doctor.doctor && doctor.doctor.email }/>
                                    </div>
                                    
                                    <div className="row gx-3 ">
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputUsername">Doctor General Description</label>
                                            <textarea className="form-control border bg-light px-4" name='generalDes' id="exampleFormControlTextarea1" rows="5" defaultValue={doctor.doctor && doctor.doctor.generalDes }></textarea>
                                            <label className="small my-2" htmlFor="inputUsername">Doctor Detail Description</label>
                                            <textarea className="form-control border bg-light px-4" name='detailDes' id="exampleFormControlTextarea1" rows="5" defaultValue={doctor.doctor && doctor.doctor.detailDes }></textarea>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputUsername">Diplom</label>
                                            <div className="m-auto pb-4">
                                                <input type="text" name='diplome' className="form-control border bg-light px-4" placeholder="Degree" required defaultValue={doctor.doctor && doctor.doctor.education && doctor.doctor.education.diplome} />
                                            </div>
                                            <Input type='text' name='university' placeholder="university..." className='pb-3' defaultValue={doctor.doctor && doctor.doctor.education && doctor.doctor.education.university} />
                                            <Input type='date' name='year' className='pb-3' defaultValue={doctor.doctor && doctor.doctor.education && doctor.doctor.education.year}/>
                                            <label className="small mb-1" htmlFor="inputUsername">City</label>
                                            <div className='m-auto '>
                                                <select className="form-select m-auto mb-2 border bg-light " aria-label="Default select example" name='city' required>
                                                    <option>city</option>
                                                    {
                                                    city.map((city,index) => 
                                                        <option value={city} key={index} >{city}</option>
                                                    )                          
                                                    }
                                                </select>
                                            </div>
                                            <label className="small mb-1" htmlFor="inputUsername">Year of experience</label>
                                            <Input type='text' name='experience' placeholder="university..." className='pb-3' defaultValue={doctor.doctor && doctor.doctor.experience } />
                                        </div>
                                        <div className='content col-12 d-flex align-content-between' style={{flexWrap: 'wrap' ,alignItems: 'space-between'}}>
                                                {skills!=undefined&&skills.map((skill,index)=>{
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

                                    </div>
                                    <p className='text-center'>{message}</p>
                                    <FormButton type='submit' name='Save Changes'/>
                                </form>
                                </div>
                            </div>
                        </div>
  )
}

export default DoctorUpdate