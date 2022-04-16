import React from 'react'


function HomeAboutUs() {
  return (
    <div className='aboutUs-container text-center text-lg-start '>
        <div className='aboutUs-content '>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-7 ">
                            <div className="section-title mb-4 mt-4 ">
                                <h3 className="position-relative d-inline-block text-primary text-uppercase ms-4 mb-4">About Us</h3>
                                <img className="w-100 h-100 wow zoomIn d-lg-none" 
                                data-wow-delay="0.9s" 
                                src="img/undraw_medicine_b1ol.png" 
                                style={{objectFit: 'cover'}} />
                                <h1 className="display-5 mb-0">The Best Doctor That You Can Trust</h1>
                            </div>
                            <h5 className="text-body fst-italic mb-4">The Tabibi platform aims to organize patients who arrive from other countries to Tunisia to have good doctors and help patients to find doctors according to their illnesses</h5>
                            <div className="row g-3">
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Award Winning</h5>
                                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Professional Staff</h5>
                                </div>
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>24/7 Opened</h5>
                                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Fair Prices</h5>
                                </div>
                            </div>
                            <a href="appointment.html" className="btn btn-primary py-3 px-5 mt-4 wow zoomIn" data-wow-delay="0.6s">Make Appointment</a>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block" style={ { minHeight: 500} }>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 wow zoomIn" 
                                data-wow-delay="0.9s" 
                                src="img/undraw_medicine_b1ol.png" 
                                style={{objectFit: 'cover'}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeAboutUs