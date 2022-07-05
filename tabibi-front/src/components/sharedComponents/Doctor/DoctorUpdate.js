import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

function DoctorUpdate(props) {
  const [specialitys, setSpecialitys ]= useState(['Eye Expert','Ot Expert','Corona Expert','Consultant','Surgeon','Dentist','Skin Care','Haire Care']);
  const [message, setMessage] = useState('')
  const { state } = useLocation();
  const [result, setResult] = useState()
  
  const handleSubmit = async (event)=>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let imgUrl;
    if(data.get('profilImg').name ===''){
      imgUrl = state.doctor.profilImg;
    }
    else imgUrl= data.get('profilImg').name
    
    // data.append('speciality',data.get('speciality'));
     data.append('profilImg',imgUrl);
    // data.append('email',data.get('email'));
    // console.log(data.get('email'));

    const form = {
      fullname : data.get('fullName'),
      email: data.get('email')
    };
    console.log(state.user.id)
    if(data.email!==state.user.email){
      const findUser = await axios.get('http://localhost:5000/user/'+data.email);
      if(findUser.data==='')
      {
        setResult(await axios.put("http://localhost:5000/doctor/update/"+state.doctor._id,data));
        setResult(await axios.put("http://localhost:5000/user/update/"+state.user.id,form));
        
        setMessage(result.data.message);
      }else setMessage('Email is already in use')
    }else {
      setResult(await axios.put("http://localhost:5000/doctor/update/"+state.doctor._id, data));
      setResult(await axios.put("http://localhost:5000/user/update/"+state.user.id,form));
      setMessage(result.data.message);
    }
    
  }
  return (
    <div className='doctorUpdate-container py-5'>
        <div className='doctorUpdate-content'>
            <div className='container'>
                <div className='row align-items-center'>
                <div className='col-12 col-lg-6 wow slideInUp' data-wow-delay="0.1s">
                    <h3 className='formTitel text-center mb-4'>Doctor SignUp From</h3>
                    <form  onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="col-6 m-auto pb-4">
                            <input type="text" name='fullName' className="form-control   border bg-light px-4" placeholder="Your fullName" defaultValue={state.user.fullname}/>
                        </div>
                        <div className="col-6 m-auto pb-4">
                            <input type="email" name='email' className="form-control   border bg-light px-4" placeholder="Your Email" defaultValue={state.user.email}/>
                        </div>
                        <div className="col-6 m-auto ">
                          <select className="form-select m-auto mb-4 border bg-light px-4" aria-label="Default select example"  name='speciality'>
                              <option defaultValue>{state.doctor.speciality}</option>
                              {
                              specialitys.map((speciality,index,specialitys) => 
                                <option value={speciality} key={index}>{speciality}</option>
                              )                          
                              }
                          </select> 
                        </div>
                        <div className="col-6 m-auto pb-4">
                                <input type="number" name='phoneNb' className="form-control border bg-light px-4" placeholder="Phone number..." defaultValue={state.doctor.phoneNumber}  />
                            </div>
                            <div className="col-6 m-auto pb-4">
                              <input type="text" name='cabinetAddress' className="form-control   border bg-light px-4" placeholder="cabinetAddress" defaultValue={state.doctor.cabinetAddress}   />
                            </div>
                            <div className="col-6 m-auto pb-4">
                              <textarea type="text" name='generalDes' className="form-control   border bg-light px-4" placeholder="general Description" defaultValue={state.doctor.generalDes}  />
                            </div>
                            <div className="col-6 m-auto pb-4">
                              <textarea type="text" name='detailDes' className="form-control   border bg-light px-4" placeholder="detail Description" defaultValue={state.doctor.detailDes}  />
                            </div>
                        <div className="col-6 m-auto pb-4">
                          <input className="form-control" type="file" id="formFile" name='profilImg' />
                        </div>
                        <h3 className='text-center'>Diplome</h3>
                          <div className="col-6 m-auto pb-4">
                              <input type="text" name='diplome' className="form-control border bg-light px-4" placeholder="Degree" defaultValue={state.doctor.education.diplome} />
                          </div>
                          <div className="col-6 m-auto pb-4">
                              <input type="text" name='university' className="form-control border bg-light px-4" placeholder="University" defaultValue={state.doctor.education.university}/>
                          </div>
                          <div className="col-6 m-auto pb-4">
                              <input type="date" name='year' className="form-control border bg-light px-4" defaultValue={state.doctor.education.year} />
                          </div>
                        <p className='text-center'>{message}</p>
                        <div className="col-6 m-auto">
                            <button className="btn btn-primary w-100 " type="submit" >Update</button>
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

export default DoctorUpdate