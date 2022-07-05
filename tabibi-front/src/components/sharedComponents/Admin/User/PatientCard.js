import React from 'react'
import { MdEmail, MdSmartphone } from 'react-icons/md'
import './User.css'

function PatientCard({user,patient}) {
    console.log(patient)
  return (
    <div className="doctorCard-container card shadow  " style={{height:550}}>
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-semi-bold text-primary">Patient Profil</h6>
        </div>
        <div className="card-body m-2">                              
            <div className="doctorProfil-container mb-4">
                <div className="doctor-pres">
                <img src= {patient&&patient.profilImg ===undefined? '' : require(`../../../../Imges/patient/${patient&&patient.profilImg}`)}
                        alt="doctr Image" className="doctorImg" />
                    <div className="d-flex flex-column ms-3">
                        <h5 className='font-weight-semi-bold mb-0'>{user && user.fullname }</h5>
                        {patient&& patient.country&&patient.country }
                    </div>
                </div>                
            </div>
            <div className='doctorContact'>
                <h5 className='font-weight-semi-bold'>Contact Details</h5>
                <div className='doctor-email mb-2'>
                    <MdEmail className='icon me-1'/>{patient && patient.email }
                </div>
                <div className='doctor-phoneNumber mb-2'>
                    <MdSmartphone className='icon me-1'/>{ patient&& patient.phoneNumber }
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default PatientCard