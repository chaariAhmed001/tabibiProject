import React from 'react'
import { FaGripLinesVertical } from "react-icons/fa";
function SubHeader(props) {
  return (
    <div className='subHeader-container'>
        <div className='subHeader-content'>
            <div className="container-fluid bg-primary py-5 hero-header mb-5">
                <div className="row py-3">
                    <div className="col-12 text-center">
                        <h1 className="display-3 text-white animated zoomIn">{ props.title }</h1>
                        <a href="" className="h4 text-white">Home</a>
                        <FaGripLinesVertical className='text-white mb-2'/>
                        <a href="" className="h4 text-white">{ props.title }</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubHeader