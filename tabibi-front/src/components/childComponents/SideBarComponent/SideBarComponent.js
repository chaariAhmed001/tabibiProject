import React, { useState } from 'react'
import './SideBarComponent.css'
import { FaStar } from 'react-icons/fa';
const colors = {
    orange: "#FAA85B",
    grey: "#a9a9a9"
    
};


function SideBarComponent() {
  const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)

    const handleClick = value => {
        setCurrentValue(value)
    }
    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }
  return (
    <div className='sideBar-container ms-4'>
      <div className='sideBar-content '>
        <div className='profilSideBar-container p-3'>
          <div className='profilSideBar-content'> 
              <div className='doctorPres-container '>
                  <div className='doctorPres-content d-flex mb-4'>
                      <div className='doctor-pic '>
                          <img src="https://img.freepik.com/vecteurs-libre/contexte-du-docteur_1270-84.jpg?size=338&ext=jpg&ga=GA1.2.1978120341.1627776000" />
                      </div>
                      <div className='docotr-details ms-4'>
                          <h5 className='mb-0 '><b>CHAARI Ahmed</b></h5>
                          <div className='doct-speciality'>Surgery</div>
                          <div className='doct-status'>Doctor Chaari ahmed is online</div>
                      </div>    
                  </div>
              </div>
              <div className='doctorDetails-container mt-3'>
                  <div className='doctorDetails-content'>
                      <div className='doctorDes-sec'>
                          <h3>Doctor description</h3>
                          <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum...
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
                          <span className='ps-3'>22 222 222 </span>               
                      </div> 
                      <div className='doctor-status '>
                          <p className='mb-4'>
                              The doctor is not available <br></br>
                              The doctor will be available in 2 weeks
                          </p>
                          <div className='chat-btn m-auto'>
                              <button type="button" class="btn btn-primary btn-sm ">Chat with doctor AHMED</button>
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