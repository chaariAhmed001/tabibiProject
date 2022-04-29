import React, { useEffect, useState } from 'react'
import './Doctor.css'
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { GiDiploma, GiSkills } from 'react-icons/gi';
import { MdEmail, MdMapsHomeWork, MdSmartphone } from "react-icons/md";
import Input from '../../../childComponents/Form/Input';
import SelectUser from '../../../childComponents/Form/SelectUser';
import FormButton from '../../../childComponents/Form/FormButton';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from "react-router-dom";
function Doctor() {
  const [specialitys, setSpecialitys ]= useState(['Eye Expert','Ot Expert','Corona Expert','Consultant','Surgery','Dentist','Skin Care','Haire Care']);
  const [message, setMessage] = useState('');
  const [doctor, setDoctor] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  let params = useParams();
  console.log(params.id)
  useEffect(() => {
    const getDoc=async () => {
    setDoctor(await (await axios.get("http://localhost:5000/doctor/findDoc/"+location.state)).data);
    }
    getDoc();
},[]);

  //console.log(doctor.user)
  
  const handleSubmit = async (event)=>{}


  return (
    <div className="doctor-container col-10 p-2">
        <div className='doctor-content container'>
            <div className="row align-items-center justify-content-between ">
                <div className='col-auto mb-3'>
                    <h5 className="pageTitle my-4"><i className="fa fa-user-md me-1"></i>Edit Doctor</h5>
                </div>
                <div className="col-12 col-xl-auto mb-3">
                    <a className="btn btn-sm btn-light text-primary ms-5 " href="#" onClick={() => {navigate(-1) ;setDoctor({})}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left me-1"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        Back to Doctors List
                        
                    </a>
                </div>
            </div>
            <div className='row'>
                <div className='col-xl-5 mb-4'>
                    <div className="card shadow ">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-semi-bold text-primary">Doctor Profil</h6>
                        </div>
                        <div className="card-body">
                            {
                                /*doctor ? 
                            <div className="doctorProfil-container">
                                <div className="doctor-pres">
                                    <img
                                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                    className="doctorImg"
                                    />
                                    <div className="d-flex flex-column ms-3">
                                    <h5 className='font-weight-semi-bold mb-0'>{doctor.user.fullname}</h5>
                                    {doctor.doctor.speciality}
                                    </div>
                                </div>
                                <div className='doctor-desc my-2'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel nisi nisl. Aliquam et nisi lorem. Vestibulum sodales a mauris et egestas. Mauris ligula erat, rhoncus at nisi nec, tempus tincidunt ligula.</p>
                                </div>
                                <div className="doctorDetail">
                                    <div className='doctorAccount mb-3'>
                                        <h5 className='font-weight-semi-bold'>Account Details</h5>
                                        <div className='doctor-degree mb-2'>
                                        
                                            <div className='mb-2'> <GiDiploma className='icon me-1'/> {doctor.doctor.education.diplome} | {doctor.doctor.education.university}</div>
                                            <div> <GiDiploma className='icon me-1'/> {doctor.doctor.education.diplome} | {doctor.doctor.education.university}</div>
                                        </div>
                                        <div className='doctor-skills'>
                                            <GiSkills className='icon me-2'/>skill1, skill2, skill3
                                            
                                        </div>
                                    </div>
                                    <div className='doctorContact'>
                                        <h5 className='font-weight-semi-bold'>Contact Details</h5>
                                        <div className='doctor-email mb-2'>
                                            <MdEmail className='icon me-1'/>
                                            {doctor.doctor.email} 
                                        </div>
                                        <div className='doctor-phoneNumber mb-2'>
                                            <MdSmartphone className='icon me-1'/>
                                            {doctor.doctor.phoneNumber}
                                        </div>
                                        <div className='doctor-phoneNumber'>
                                            <MdMapsHomeWork className='icon me-1'/>
                                            {doctor.doctor.adress}
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        : <></>    
                            */}
                        </div>
                    </div>
                </div>
                <div className='col-xl-7'>
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-semi-bold text-primary">Edit</h6>
                        </div>
                        <div className='card-body'>
                            <div className="userUpdate">
                            <form  onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className='mb-3'>
                                    <label className="small mb-1" htmlFor="inputUsername">FullName</label>
                                    <Input type='text' name='fullName' placeholder="Your fullName" className='col-12'/>
                                </div>
                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputUsername">Phone Number</label>
                                        <Input type='number' name='phoneNb' placeholder="Phone number..." className='pb-3'/>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputUsername">Cabinet Address</label>
                                        <Input type='text' name='cabinetAddress' placeholder="Cabinet Address..." className='pb-3'/>
                                    </div>
                                </div>
                                <div className="row gx-3 ">
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputUsername">Speciality</label>
                                        <SelectUser name='speciality' elements={specialitys} className='pb-3'/>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputUsername">Profil Image</label>
                                        <Input type='file' name='profilImg' className='pb-3'/>
                                    </div>
                                </div>
                                <div className='mb-3'>
                                    <label className="small mb-1" htmlFor="inputUsername">Email address</label>
                                    <Input type='email' name='email' placeholder="Your eamil" className='pb-3'/>
                                </div>
                                
                                <div className="row gx-3 ">
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputUsername">Doctor Description</label>
                                        <textarea className="form-control border bg-light px-4" name='generalDes' id="exampleFormControlTextarea1" rows="5"></textarea>
                                    </div>
                                    <div className="col-md-6">
                                    <label className="small mb-1" htmlFor="inputUsername">Diplom</label>
                                    <Input type='text' name='diplome' placeholder="Degree..." className='pb-3' />
                                    <Input type='text' name='university' placeholder="university..." className='pb-3' />
                                    <Input type='date' name='year' className='pb-3'/>
                                    </div>
                                </div>
                                <p className='text-center'>{message}</p>
                                <FormButton type='submit' name='Save Changes'/>
                            </form>
                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>
        </div>
    </div>
  )
}

export default Doctor