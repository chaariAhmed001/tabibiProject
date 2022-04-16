import React from 'react';

function CommentSection() {
  return (
    <div className='commentSec-container bg-testimonial wow fadeInUp' data-wow-delay="0.1s">
        <div className='commentSec-content d-flex justify-content-center align-items-center'>
            <div id="carouselExampleControls" className="carousel slide  testimonial-carousel mt-5" data-bs-ride="carousel">
                
                <div className="carousel-inner wow zoomIn" data-wow-delay="0.6s">  
                    <div className="carousel-item testimonial-item  text-center text-white active p-2 p-lg-5">
                        <img className="img-fluid mx-auto rounded  mb-3" src="img/dx.jpg" alt="" />
                        <p className="fs-5 ">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                        <hr className="mx-auto w-25" />
                        <h4 className="text-white mb-0">Chaari Ahmed</h4>
                    </div>
                    <div className="carousel-item testimonial-item text-center text-white p-2 p-lg-5">
                        <img className="img-fluid mx-auto rounded  mb-3" src="img/dx.jpg" alt="" />
                        <p className="fs-5 ">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                        <hr className="mx-auto w-25" />
                        <h4 className="text-white mb-0">Chaari ahmed</h4>
                    </div>
                    
                </div>
                <div className='owl-nav'>
                    <button className="carousel-control-prev owl-prev d-none d-md-block" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <i className="bi bi-arrow-left"></i>
                    </button>
                    <button className="carousel-control-next owl-next d-none d-md-block" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <i className="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommentSection