import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';
function DoctorSignUp() {
  const [formData, setFormData] = useState();
  const [specialitys, setSpecialitys ]= useState(['Eye Expert','Ot Expert','Corona Expert','Consultant','Surgery','Dentist','Skin Care','Haire Care']);
  const [redirect, setRedirect] = useState('false');
  const location = useLocation();
  
  
    const handleSubmit=async (event)  =>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.append('email', location.state); 
    data.append('phoneNumber', data.get('phoneNb')); 
    data.append('profilImg',data.get('profilImg').name);
    data.append('education[diplome]',data.get('diplome'));
    data.append('education[university]',data.get('university'));
    data.append('education[year]',data.get('year'));
    data.append('crated',new Date);
    console.log( data.get('cabinetAddress'))
    await axios.post("http://localhost:5000/doctor/signUp", data); 
    setRedirect(true);
  };
  console.log(redirect)
  if(redirect===true){
    return <Navigate to="/signin"/>
  }
  
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
                            <div className="m-auto pb-4">
                              <input type="text" name='cabinetAddress' className="form-control   border bg-light px-4" placeholder="cabinetAddress" required />
                            </div>
                            <div className="m-auto pb-4">
                              <textarea type="text" name='generalDes' className="form-control   border bg-light px-4" placeholder="general Description" required />
                            </div>
                            <div className="m-auto pb-4">
                              <textarea type="text" name='detailDes' className="form-control   border bg-light px-4" placeholder="detail Description" required />
                            </div>
                            
                        </div>
                        <div className='col-xl-6 col-md-12'>
                          <div className="m-auto pb-4">
                              <input className="form-control" type="file" id="formFile" name='profilImg' />
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