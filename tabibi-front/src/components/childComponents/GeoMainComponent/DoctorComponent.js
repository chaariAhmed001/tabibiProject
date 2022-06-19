import React, { useEffect, useState } from 'react'
import SelectUser from '../Form/SelectUser';
import DoctorCardComponent from './DoctorCardComponent'
import Input from '../../childComponents/Form/Input'
import { BsAlarmFill, BsFillChatDotsFill, BsFillChatRightDotsFill, BsFillPlusCircleFill, BsPlusCircleFill, BsX } from "react-icons/bs";
import GetUserName from '../GetUserName';
import axios from 'axios';

function DoctorComponent({doctors,changeDoc}) {
  const [elements, setElemets] = useState(['Sprciality','Year of experience','Availbility','Status']);
  const [sorts, setSorts] = useState(['Alphabet','city','Availbility','Status']);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  const [coordinates, setCoordinates] = useState({});
  const [searchInput, setSearchInput] = useState('');
  const [allDoctors, setAllDoctors] = useState([])
    
  /*useEffect(async() => {
    const getDoctors =async(docId)=>{
      await axios.get(`http://localhost:5000/doctor/doctor/${docId}`).then(res => allDoctors.push(res.data))
      // allDoctors.push(doctor.data);
    }
    doctors&& doctors.map(doc=>{
      
        getDoctors(doc._id)
      })
  }, [allDoctors,doctors])*/
  
  const changeCurrentDoc = (index, doc) => {
      setCurrentSelected(index);
      changeDoc(doc)
    };
    
  return (
    <div className='doctorSec-container'>
        <div className='doctorSec-content'>
          <div className='searchSec-conent d-none d-lg-block my-3'>
            <div className='container px-0'>
              <div className='row'>
                  <div className='doctor-search col-7'>
                      <div className='col-12 m-auto pb-4'>
                          <input  className="form-control border bg-light px-4"  type="search" name='search' 
                          placeholder="Search Doctor..." aria-label="Search" 
                          onChange={(e)=> setSearchInput(e.target.value)}/>
                      </div>
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
                  {
                     
                     doctors&& doctors.filter((doc,index) => {
                        if (searchInput === '') {
                            return doc;
                        }
                        else {
                          
                            return doc.email.toLowerCase().includes(searchInput.toLowerCase())
                        }
                    })
                   .map((doc,index) =>
                    <div className={`doctorCard-container p-2 ms-4 mt-3 ${index === currentSelected ? 
                      "selected" : ""}`} data-wow-delay="0.5s" onClick={() => changeCurrentDoc(index, doc)} 
                      key={index} >
                      <div className='doctorCard-content w-100 h-100'>
                          <div className='container '>
                              <div className='row'>
                                      <div className='doctor-des w-100'>
                                          <div className='row'>
                                          <div className='doctor-pic col-md-1 col-xs-2'>
                                          <img src= {doc.profilImg ===undefined? '' : require(`../../../Imges/doctorProfilImg/${doc.profilImg}`)}  
                                          className='w-100 h-100'/>
                                      </div>
                                          <div  className='col-xl-9 col-lg-8 col-sm-6'>
                                              <h3 className='doctor-name'>Dr <GetUserName email={doc.email}/></h3>
                                              <h4 className='doctor-speciality'><span>Speciality:</span>{doc.speciality}</h4>
                                          </div>
                                          <div className='col-2'>
                                              <div className='doctor-icons' >
                                                  <BsFillPlusCircleFill className='plus-btn m-2' />
                                                  <BsFillChatRightDotsFill  className='add-btn mt-1'/>
                                              </div>
                                          </div>
                                          </div>
                                          <div className='row'>
                                          <div className='doctor-desc'>
                                          <p className='m-1  d-none d-sm-block '>
                                          <span>Description:</span> {doc.generalDes} 
                                          <a className='readMore d-md-none'>Read More</a>
                                          <a className='readMore' > Read More About <GetUserName email={doc.email}/></a>
                                          </p>
                                          
                                          </div>
                                          </div>
                                          
                                      </div>
                              </div>
                          </div>
                      </div>
                    </div>)
                  }
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default DoctorComponent