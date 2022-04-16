import React from 'react'

function DepartmentArea() {
  return (
    <div className='departmentArea-contaienr py-5' style={{ backgroundColor: '#F9FAFA' }}>
        <div className='departmentArea-service'>
          <div className='container wow fadeInUp' data-wow-delay="0.1s">
            <div className=" section-title mb-4 mt-4 text-center">
              <h3 className="position-relative d-inline-block text-primary text-uppercase mb-4">How we Work</h3>
            </div>
            <div className='row'> 
              <div className="col-xl-3 col-lg-6 col-md-6 mt-5 text-center wow zoomIn" data-wow-delay="0.5s">
                    <div className="single-department ">
                        <div className="thumb">
                            <img src="img/dep1.jpg" alt="" />
                            <span className="count bg-1">01</span>
                        </div>
                        <div className="content ms-4">
                            <h4 className="title font-weight-semi-bold ">Enter Information</h4>
                            <p>The patient must add all the information and he must specify his sick in the description.</p>
                        </div>
                    </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 mt-5 text-center wow zoomIn" data-wow-delay="1s">
                    <div className="single-department ">
                        <div className="thumb">
                            <img  src="img/doctor1.jpg" alt="" />
                            <span className="count bg-2">02</span>
                        </div>
                        <div className="content ms-4">
                            <h4 className="title font-weight-semi-bold">Select Expert Doctor</h4>
                            <p>The patient choose a doctor from the doctors concerned with their disease. </p>
                        </div>
                    </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 mt-5 text-center wow zoomIn" data-wow-delay="1.5s">
                    <div className="single-department ">
                        <div className="thumb">
                            <img src="img/app.jpg" alt="" />
                            <span className="count bg-3">03</span>
                        </div>
                        <div className="content ms-4">
                            <h4 className="title font-weight-semi-bold">Make Appointment</h4>
                            <p>After the patient chooses their doctor and discussion with the doctor to make an appointment.</p>
                        </div>
                    </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 mt-5 text-center wow zoomIn" data-wow-delay="2s">
                    <div className="single-department ">
                        <div className="thumb">
                            <img src="img/home.jpg" alt="" />
                            <span className="count bg-4">04</span>
                        </div>
                        <div className="content ms-4">
                            <h4 className="title font-weight-semi-bold ">Rent home</h4>
                            <p>The patient will look from the application for a house which is next to the doctor's cabin.</p>
                        </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DepartmentArea