import React from 'react'

function FormIllustrations({img,altImg,title,desc}) {
  return (
    <div className='col-6 text-center d-none d-lg-block wow slideInUp'data-wow-delay="0.3s">
        <img src={img} alt={altImg} style={{width:300 }}></img>
        <h4>{title}</h4>
        <p>{desc}</p>
    </div>
  )
}

export default FormIllustrations