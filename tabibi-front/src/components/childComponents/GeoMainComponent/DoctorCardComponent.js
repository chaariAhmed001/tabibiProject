import React from 'react'
import { BsFillChatDotsFill, BsFillChatRightDotsFill, BsFillPlusCircleFill, BsPlusCircleFill, BsX } from "react-icons/bs";
import GetUserName from '../GetUserName';


function DoctorCardComponent({email,speciality,generalDes,img,className,key}) {
    /*console.log(email)
    const [currentSelected, setCurrentSelected] = useState(undefined);
  const changeCurrentDoc = (index, doc) => {
      setCurrentSelected(index);
      changeDoc(doc)
    };*/
 
    return (
        <div className={`doctorCard-container p-2 ms-4 mt-3 `} >
            {/*<div className='doctorCard-content w-100 h-100'>
                <div className='container '>
                    <div className='row'>
                            <div className='doctor-des w-100'>
                                <div className='row'>
                                <div className='doctor-pic col-md-1 col-xs-2'>
                                <img src= {img ===undefined? '' : require(`../../../Imges/doctorProfilImg/${img}`)} 
                                className='w-100 h-100'/>
                            </div>
                                <div  className='col-xl-9 col-lg-8 col-sm-6'>
                                    <h3 className='doctor-name'>Dr <GetUserName  email={email}/></h3>
                                    <h4 className='doctor-speciality'><span>Speciality:</span>{speciality}</h4>
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
                                <span>Description:</span> {generalDes} 
                                <a className='readMore d-md-none'>Read More</a>
                                <a className='readMore'> Read More About <GetUserName  email={email}/> </a>
                                </p>
                                
                                </div>
                                </div>
                                
                            </div>
                    </div>
                </div>
    </div>*/}
        </div>
      )
}

export default DoctorCardComponent