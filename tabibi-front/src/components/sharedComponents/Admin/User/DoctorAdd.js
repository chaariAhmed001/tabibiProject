import axios from 'axios';
import React, { useState } from 'react'
import FormButton from '../../../childComponents/Form/FormButton';
import Input from '../../../childComponents/Form/Input'

function DoctorAdd() {
  const [specialitys, setSpecialitys ]= useState(['Eye Expert','Ot Expert','Corona Expert','Consultant','Surgery','Dentist','Skin Care','Haire Care']);
    const [result, setResult] = useState()
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        data.append('education[diplome]',data.get('diplome'));
        data.append('education[university]',data.get('university'));
        data.append('education[year]',data.get('year'));
        data.append('crated',new Date);
        const form = {
            fullname : data.get('fullname'),
            email: data.get('email'),
            crated: new Date,
            type:'Doctor',
            password: data.get('password')
        };
        setResult(await axios.post("http://localhost:5000/doctor/signUp", data));
        setResult(await axios.post("http://localhost:5000/user/signup", form));
        console.log(result)
    }
  return (
    <div className="doctorAdd-container col-10 m-4">
            <div className='doctorAdd-content container'>
                <h3 className='formTitel mb-4'><i className="fa fa-user-md me-1 "></i> Doctor Add From</h3>
                <div className='col-xl-10  m-auto'>
                    <div className="userUpdate">
                        <form  onSubmit={handleSubmit} encType="multipart/form-data">
                            <div className="row gx-3 mb-3">
                                <div className="col-md-6">
                                <label className="small mb-1" htmlFor="inputUsername">FullName</label>
                                <Input type='text' name='fullname' placeholder="Your fullName" className='pb-3' />
                                </div>
                                <div className="col-md-6">
                                    <label className="small mb-1" htmlFor="inputUsername">Password</label>
                                    <Input type='password' name='password' placeholder="Password" className='pb-3'/>
                                </div>
                            </div>
                            <div className="row gx-3 mb-3">
                                <div className="col-md-6">
                                    <label className="small mb-1" htmlFor="inputUsername">Phone Number</label>
                                    <Input type='number' name='phoneNumber' placeholder="Phone number..." className='pb-3' />
                                </div>
                                <div className="col-md-6">
                                    <label className="small mb-1" htmlFor="inputUsername">Cabinet Address</label>
                                    <Input type='text' name='cabinetAddress' placeholder="Cabinet Address..." className='pb-3'/>
                                </div>
                            </div>
                            <div className="row gx-3 ">
                                <div className="col-md-6">
                                    <label className="small mb-1" htmlFor="inputUsername">Speciality</label>
                                    <div className='m-auto '>
                                        <select className="form-select m-auto mb-4 border bg-light px-4" aria-label="Default select example" name='speciality' required>
                                            <option defaultValue>Speciality</option>
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
                                            <Input type='file' name='profilImg' className='pb-3' required='required'/>
                                    </div>
                            </div>
                            <div className='mb-3'>
                                <label className="small mb-1" htmlFor="inputUsername">Email address</label>
                                <Input type='email' name='email' placeholder="Your eamil" className='pb-3'/>
                            </div>
                                            
                            <div className="row gx-3 ">
                                <div className="col-md-6">
                                    <label className="small mb-1" htmlFor="inputUsername">Doctor Description</label>
                                    <textarea className="form-control border bg-light px-4" name='generalDes' id="exampleFormControlTextarea1" rows="5" ></textarea>
                                </div>
                                <div className="col-md-6">
                                    <label className="small mb-1" htmlFor="inputUsername">Diplom</label>
                                    <div className="m-auto pb-4">
                                        <input type="text" name='diplome' className="form-control border bg-light px-4" placeholder="Degree" required />
                                    </div>
                                    <Input type='text' name='university' placeholder="university..." className='pb-3' />
                                    <Input type='date' name='year' className='pb-3'/>
                                </div>
                            </div>               
                            <FormButton type='submit' name='Save Changes'/>
                        </form>
                    </div>
                </div>
            </div>
            
    </div>
  )
}

export default DoctorAdd