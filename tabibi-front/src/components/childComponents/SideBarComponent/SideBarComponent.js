import React, { useEffect, useState } from 'react'
import './SideBarComponent.css'
import { FaStar } from 'react-icons/fa';
import GetUserName from '../GetUserName';
import { Link, Navigate, useNavigate } from 'react-router-dom';
const colors = {
    orange: "#FAA85B",
    grey: "#a9a9a9"
    
};

// import '../../../Imges/doctorProfilImg'
function SideBarComponent({selectedDoc,defaultDoc}) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [doc, setDoc] = useState(undefined)
  const stars = Array(5).fill(0);
  let navigate = useNavigate(); 

    const handleClick = value => {
        setCurrentValue(value)
    }
    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }
    useEffect(() => {
      selectedDoc=== undefined ? setDoc(defaultDoc) : setDoc(selectedDoc)
      
    }, [defaultDoc&&defaultDoc.email,selectedDoc!= undefined && selectedDoc.email])
   
    const navigateTochat =()=>{
        navigate('/chat');
    }
  return (
    <div className='sideBar-container ms-4'>
      <div className='sideBar-content '>
        <div className='profilSideBar-container p-3'>
          <div className='profilSideBar-content'> 
              <div className='doctorPres-container '>
                  <div className='doctorPres-content d-flex mb-4'>
                      <div className='doctor-pic '>
                        <img src= { doc&&doc.profilImg === ''||  doc&&doc.profilImg === undefined ? '' :  doc &&  require(`../../../Imges/doctorProfilImg/${doc&&doc.profilImg}`)} />
                      </div>
                      <div className='docotr-details ms-4'>
                          <h5 className='mb-0 '><b>
                            <GetUserName  email={doc&& doc.email}/> 
                              </b></h5>
                          <div className='doct-speciality'>{doc&& doc.speciality}</div>
                          <div className='doct-status'>Doctor <GetUserName  email={doc&& doc.email}/> is online</div>
                      </div>    
                  </div>
              </div>
              <div className='doctorDetails-container mt-3'>
                  <div className='doctorDetails-content'>
                      <div className='doctorDes-sec'>
                          <h3>About Doctor <GetUserName  email={doc&& doc.email}/></h3>
                          <p class="text-justify text-break">
                          {doc&& doc.detailDes}
                          </p>
                      </div>
                      <div className='doctorRt-sec d-flex aling-items-center'>
                          <h3>Rating <span>(3.5/5)</span></h3>
                          <div className='rating-icons  '>
                          {stars.map((_, index) => {
                          return (
                              <FaStar key={index} size={24} onClick={() => handleClick(index + 1)}
                                      onMouseOver={() => handleMouseOver(index + 1)}
                                      onMouseLeave={handleMouseLeave}
                                      color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                      style={{
                                          marginRight: 10,
                                          cursor: "pointer",
                                          width:15                                    
                                      }}
                              />
                          )
                      })}
                          </div>
                      </div>
                      <div className='docotrPn-sec mt-2 mb-2 d-flex'>
                          <h3>Phone number</h3>
                          <span className='ps-3'>{doc&& doc.phoneNumber} </span>               
                      </div><div className='docotrPn-sec mt-2 mb-2 d-flex'>
                          <h3>Skills: </h3>
                          {doc && doc.skills.map((skill,index) => 
                                <span className='ps-3' key={index}>{skill}</span>
                            )}
                                         
                      </div>  
                      <div className='doctor-status '>
                          <p className='mb-4'>
                              The doctor is not available <br></br>
                              The doctor will be available in 2 weeks
                          </p>
                          <div className='chat-btn m-auto'>
                              <button type="button" className="btn btn-primary btn-sm "  onClick={navigateTochat}>Chat with doctor <GetUserName  email={doc&& doc.email}/></button>
                              {/* <Link to="/chat" state={selectedDoc} className="btn btn-primary btn-sm"><GetUserName  email={doc&& doc.email}/></Link> */}
                          </div>
                      </div>                   
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBarComponent