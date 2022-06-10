import React from 'react'
import { BsFillChatDotsFill, BsFillChatRightDotsFill, BsFillPlusCircleFill, BsPlusCircleFill, BsX } from "react-icons/bs";


function DoctorCardComponent() {
    return (
        <div className='doctorCard-container p-2 '>
            <div className='doctorCard-content w-100 h-100'>
                <div className='container'>
                    <dvi className='row'>
                            <div className='doctor-des w-100'>
                                <div className='row'>
                                <div className='doctor-pic col-md-1 col-xs-2'>
                                <img src="https://img.freepik.com/vecteurs-libre/contexte-du-docteur_1270-84.jpg?size=338&ext=jpg&ga=GA1.2.1978120341.1627776000" 
                                className='w-100 h-100'/>
                            </div>
                                <div  className='col' style={{ flexGrow: '3' }}>
                                    <h3 className='doctor-name'>Dr CHAARI Ahmed</h3>
                                    <h4 className='doctor-speciality'><span>Speciality:</span> Allergy and immunology</h4>
                                </div>
                                <div className='col'>
                                    <div className='doctor-icons' >
                                        <BsFillPlusCircleFill className='plus-btn m-2' />
                                        <BsFillChatRightDotsFill  className='add-btn mt-1'/>
                                    </div>
                                </div>
                                </div>
                                <div className='row'>
                                <div className='doctor-desc'>
                                <p className='m-1  d-none d-sm-block '>
                                <span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt... 
                                {/* <a className='readMore d-md-none'>Read More</a> <br></br> */}
                                <a className='readMore'> Read More About CHAARI Ahmed</a>                                </p>
                                
                                </div>
                                </div>
                                
                            </div>
                    </dvi>
                </div>
            </div>
        </div>
      )
}

export default DoctorCardComponent