import React, { useState } from 'react'
import SelectUser from '../Form/SelectUser';
import DoctorCardComponent from './DoctorCardComponent'
import Input from '../../childComponents/Form/Input'

function DoctorComponent() {
  const [elements, setElemets] = useState(['Sprciality','Year of experience','Availbility','Status']);
  const [sorts, setSorts] = useState(['Alphabet','city','Availbility','Status']);
  return (
    <div className='doctorSec-container'>
        <div className='doctorSec-content'>
          <div className='searchSec-conent d-none d-lg-block my-3'>
            <div className='container'>
              <div className='row'>
                  <div className='doctor-search col-7'>
                      <Input className='col-12' type="search" name='search' placeholder="Search Doctor..." required={'required'}aria-label="Search"/>
                  </div>             
                  <div className='doctor-filter d-flex col-5'> 
                      <SelectUser className='col-5 me-4' name='Filtert Results' elements={elements}/> 
                      <SelectUser className='col-5' name='Sort by' elements={sorts}/> 
                  </div>
                
              </div>
            </div>
            
          </div>
            <div className='doctorsRes-container'>
                <div className='doctorsRes-content'>
                    <DoctorCardComponent />
                    <DoctorCardComponent />
                    <DoctorCardComponent />
                    <DoctorCardComponent />
                    <DoctorCardComponent />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DoctorComponent