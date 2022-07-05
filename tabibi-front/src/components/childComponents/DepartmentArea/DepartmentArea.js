import React from 'react'
import Department from './department'

function DepartmentArea() {
  return (
    <div className='departmentArea-contaienr py-5' style={{ backgroundColor: '#F9FAFA' }}>
        <div className='departmentArea-service'>
          <div className='container wow fadeInUp' data-wow-delay="0.6s">
            <div className=" section-title mb-4 mt-4 text-center">
              <h3 className="position-relative d-inline-block text-primary text-uppercase mb-4">How we Work</h3>
            </div>
            <div className='row'> 
              <Department index='1' title='Enter Information' description= 'The patient must add all the information and he must specify his sick in the description.' img='img/dep1.jpg'/>
              <Department index='2' title='Select Expert Doctor' description= 'The patient choose a doctor from the doctors concerned with their disease.' img='img/doctor1.jpg'/>
              <Department index='3' title='Make Appointment' description= 'After the patient chooses their doctor and discussion with the doctor to make an appointment.' img='img/app.jpg'  />
              <Department index='4' title='Rent home' description= 'The patient will look from the application for a house which is next to the doctor cabin.' img='img/home.jpg'/> 
            </div>
          </div>
        </div>
    </div>
  )
}

export default DepartmentArea