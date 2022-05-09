import React, { useEffect, useState } from 'react'
import './Doctor.css'
import { GiDiploma, GiSkills } from 'react-icons/gi';
import { MdEmail, MdMapsHomeWork, MdSmartphone ,MdOutlineKeyboardBackspace, MdAddBox} from "react-icons/md";
import Input from '../../../childComponents/Form/Input';
import SelectUser from '../../../childComponents/Form/SelectUser';
import FormButton from '../../../childComponents/Form/FormButton';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {selectedDoctor ,removeSelectedDoctor} from "../../../../redux/actions/doctorActions";
function Doctor() {
  const [specialitys, setSpecialitys ]= useState(['Eye Expert','Ot Expert','Corona Expert','Consultant','Surgery','Dentist','Skin Care','Haire Care']);
  const [message, setMessage] = useState('');
  const [result, setResult] = useState();
  const navigate = useNavigate();
  let params = useParams();
  let doctor = useSelector((state) => state.doctor);
  const img=(doctor.doctor&&doctor.doctor.profilImg)
  
  const dispatch = useDispatch();
  const getDoctor = async (params) => {
    console.log(params.id)
    const response = await axios
      .get(`http://localhost:5000/doctor/doctor/${params.id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });   
      
      dispatch(selectedDoctor(response.data));
    };

  useEffect(() => {
    if (params && params !== "") getDoctor(params);
    return () => {
        dispatch(removeSelectedDoctor());
      };
  }, [params]);
  
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
    const form = {
        fullname : data.get('fullname'),
        email: data.get('email')
      };
    // data.append('diplome ',data.get('diplome'));
    
    setResult(await axios.put("http://localhost:5000/doctor/update/"+doctor.doctor._id, data));
    setResult( await axios.put("http://localhost:5000/user/update/"+doctor.user._id,form));
    
    if(result.data.message==='User has been successfully updated'){
        navigate(-1);
        //setMessage(result.data.message) 
    }else 
    setMessage(result.data.message) 
  }
//   console.log(doctor.doctor && doctor.doctor.profilImg )
  
    return (
        <div className="doctor-container col-10 p-2">
            <div className='doctor-content container'>
                <div className="row align-items-center justify-content-between ">
                    <div className='col-auto mb-3'>
                        <h5 className="pageTitle my-4"><i className="fa fa-user-md me-1"></i>Edit Doctor</h5>
                    </div>

                    <div className="col-12 col-xl-auto mb-3 d-felx justify-content-center align-items-center">
                        <a className="btn btn-sm btn-light text-primary " href="#" onClick={() => {navigate('/doctorAdd')}}>
                            <MdAddBox  style={{fontSize: 20 ,marginRight: 3, marginBottom:3}}/>
                            Add Doctor
                        </a>
                        <a className="btn btn-sm btn-light text-primary ms-2" href="#" onClick={() => {navigate(-1)}}>
                            <MdOutlineKeyboardBackspace style={{fontSize: 20 , marginRight: 3,marginBottom:3}}/>
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
                                <div className="doctorProfil-container">
                                    <div className="doctor-pres">
                                    {/* src= {require(`../../../../Imges/doctorProfilImg/${doc.profilImg}`)} */}
                                        <img 
                                         src= {img ===undefined? '' : require(`../../../../Imges/doctorProfilImg/${img}`)}
                                        alt="doctr Image"
                                        className="doctorImg"
                                        />
                                        <div className="d-flex flex-column ms-3">
                                        <h5 className='font-weight-semi-bold mb-0'>{doctor.user && doctor.user.fullname }</h5>
                                        {doctor.doctor && doctor.doctor.speciality }
                                        </div>
                                    </div>
                                    <div className='doctor-desc my-2'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel nisi nisl. Aliquam et nisi lorem. Vestibulum sodales a mauris et egestas. Mauris ligula erat, rhoncus at nisi nec, tempus tincidunt ligula.</p>
                                    </div>
                                    <div className="doctorDetail">
                                        <div className='doctorAccount mb-3'>
                                            <h5 className='font-weight-semi-bold'>Account Details</h5>
                                            <div className='doctor-degree mb-2'>
                                            
                                                <div className='mb-2'> <GiDiploma className='icon me-1'/> {doctor.doctor && doctor.doctor.education && doctor.doctor.education.diplome} | {doctor.doctor && doctor.doctor.education && doctor.doctor.education.university}</div>
                                                <div> <GiDiploma className='icon me-1'/>  {doctor.doctor && doctor.doctor.education && doctor.doctor.education.diplome} | {doctor.doctor && doctor.doctor.education && doctor.doctor.education.university}</div>
                                            </div>
                                            <div className='doctor-skills'>
                                                <GiSkills className='icon me-2'/>skill1, skill2, skill3
                                                
                                            </div>
                                        </div>
                                        <div className='doctorContact'>
                                            <h5 className='font-weight-semi-bold'>Contact Details</h5>
                                            <div className='doctor-email mb-2'>
                                                <MdEmail className='icon me-1'/>
                                                
                                                {doctor.doctor && doctor.doctor.email }
                                            </div>
                                            <div className='doctor-phoneNumber mb-2'>
                                                <MdSmartphone className='icon me-1'/>
                                                {doctor.doctor && doctor.doctor.phoneNumber }
                                            </div>
                                            <div className='doctor-phoneNumber'>
                                                <MdMapsHomeWork className='icon me-1'/>
                                                {doctor.doctor && doctor.doctor.cabinetAddress }
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
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
                                        <Input type='text' name='fullname' placeholder="Your fullName" className='col-12' defaultValue={doctor.user && doctor.user.fullname }/>
                                    </div>
                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputUsername">Phone Number</label>
                                            <Input type='number' name='phoneNumber' placeholder="Phone number..." className='pb-3' defaultValue={doctor.doctor && doctor.doctor.phoneNumber }/>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputUsername">Cabinet Address</label>
                                            <Input type='text' name='cabinetAddress' placeholder="Cabinet Address..." className='pb-3' defaultValue={doctor.doctor && doctor.doctor.cabinetAddress }/>
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
                                            <label className="small mb-1" htmlFor="inputUsername">Doctor Description</label>
                                            <textarea className="form-control border bg-light px-4" name='generalDes' id="exampleFormControlTextarea1" rows="5" defaultValue={doctor.doctor && doctor.doctor.generalDes }></textarea>
                                        </div>
                                        <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputUsername">Diplom</label>
                                        <div className="m-auto pb-4">
                                            <input type="text" name='diplome' className="form-control border bg-light px-4" placeholder="Degree" required defaultValue={doctor.doctor && doctor.doctor.education && doctor.doctor.education.diplome} />
                                        </div>
                                        <Input type='text' name='university' placeholder="university..." className='pb-3' defaultValue={doctor.doctor && doctor.doctor.education && doctor.doctor.education.university} />
                                        <Input type='date' name='year' className='pb-3' defaultValue={doctor.doctor && doctor.doctor.education && doctor.doctor.education.year}/>
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