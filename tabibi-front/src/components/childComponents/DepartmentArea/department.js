import React from 'react'

function Department({title,description,index,img}) {
  return (
    <div className="col-xl-3 col-lg-6 col-md-6 mt-5 text-center wow zoomIn">
        <div className="single-department ">
            <div className="thumb">
                <img src={img} alt="" />
                <span className={`count bg-${index}`}>0{index}</span>
            </div>
            <div className="content ms-4">
                <h4 className="title font-weight-semi-bold ">{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default Department