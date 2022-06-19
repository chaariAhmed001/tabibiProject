import React from 'react'
import { GiDiploma, GiSkills } from 'react-icons/gi';
import { MdEmail, MdMapsHomeWork, MdSmartphone ,MdOutlineKeyboardBackspace, MdAddBox} from "react-icons/md";
function DoctorCard({doctor}) {
  const img=(doctor.doctor&&doctor.doctor.profilImg)
  return (
    <div className="doctorCard-container card shadow  ">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-semi-bold text-primary">Doctor Profil</h6>
        </div>
        <div className="card-body">                              
            <div className="doctorProfil-container">
                <div className="doctor-pres">
                    {/* src= {require(`../../../../Imges/doctorProfilImg/${doc.profilImg}`)} */}
                    <img src= {img ===undefined? '' : require(`../../../../Imges/doctorProfilImg/${img}`)}
                        alt="doctr Image" className="doctorImg" />
                    <div className="d-flex flex-column ms-3">
                        <h5 className='font-weight-semi-bold mb-0'>{doctor.user && doctor.user.fullname }</h5>
                        {doctor.doctor && doctor.doctor.speciality }
                    </div>
                </div>
                <div className='doctor-desc my-2'>
                    <h5 className='font-weight-semi-bold'>General Description</h5>
                    <p>{doctor.doctor && doctor.doctor.generalDes }</p>
                </div>
                <div className='doctor-desc my-2'>
                    <h5 className='font-weight-semi-bold'>Detail Description</h5>
                    <p>{doctor.doctor && doctor.doctor.detailDes }</p>
                </div>
                <div className="doctorDetail">
                    <div className='doctorAccount mb-3'>
                        <h5 className='font-weight-semi-bold'>Account Details</h5>
                        <div className='doctor-degree mb-2'>
                            <div className='mb-2'> <GiDiploma className='icon me-1'/> 
                            {doctor.doctor && doctor.doctor.education && doctor.doctor.education.diplome} | {doctor.doctor && doctor.doctor.education && doctor.doctor.education.university}</div>
                            </div>
                            <div className='doctor-skills'>
                                <GiSkills className='icon me-2'/> List Of Treatments : <br></br>Inguinal Hernia Repair Surgery, Cholecystectomy - Gall Bladder Removal, Whipple Surgery                  
                            </div>
                    </div>
                    <div className='doctorContact'>
                        <h5 className='font-weight-semi-bold'>Contact Details</h5>
                        <div className='doctor-email mb-2'>
                            <MdEmail className='icon me-1'/>{doctor.doctor && doctor.doctor.email }
                        </div>
                        <div className='doctor-phoneNumber mb-2'>
                            <MdSmartphone className='icon me-1'/>{doctor.doctor && doctor.doctor.phoneNumber }
                        </div>
                        <div className='doctor-phoneNumber'>
                            <MdMapsHomeWork className='icon me-1'/>{doctor.doctor && doctor.doctor.cabinetAddress }
                        </div>
                    </div>
                </div>
                                    
            </div>
        </div>
    </div>
  )
}

export default DoctorCard