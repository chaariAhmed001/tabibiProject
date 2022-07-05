import React from 'react'

function Why({title,desc,img,time}) {
  return (
    <div className="col-xl-3 col-lg-6 col-md-6 mt-5 text-center wow zoomIn" data-wow-delay={time} >
        <div className='card-img'>
            <img src={img}></img>
        </div>
        <div className='card-content'>
            <h4 className="title font-weight-semi-bold ">{title}</h4>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default Why