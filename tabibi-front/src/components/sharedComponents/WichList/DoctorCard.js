import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { IoCloseSharp } from "react-icons/io5";

function DoctorCard({img , name, spiciality,rating}) {
    const colors = {
        orange: "#FAA85B",
        grey: "#a9a9a9"
        
    };
        const [currentValue, setCurrentValue] = useState(0);
        const [hoverValue, setHoverValue] = useState(rating);
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
    <div className='doctorCards-container col-lg-3 col-md-5 col-sm-5 mb-4 m-auto'>
        <div className='doctor-box m-auto'>
            <div className='doctor-img'>
                <img src={img} alt='doctor Img' className='ms-3 mb-3'></img>
                <IoCloseSharp  className='closeBtn'/>
            </div>
            <div className='doctor-content'>
                <h5>Dr {name}</h5>
                <span>{spiciality}</span>
                <div className='rating-icons mb-2'>
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
                <button type="button" className="btn btn-primary btn-sm ">Appointment</button>
            </div>
        </div>

    </div>

  )
}

export default DoctorCard