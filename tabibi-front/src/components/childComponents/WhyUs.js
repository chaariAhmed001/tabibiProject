import React from 'react'

function WhyUs() {
  return (
    <div className='chooseUs-container py-4'>
        <div className='chooseUs-content'>
            <div className="section-title my-4 text-center">
              <h3 className="position-relative d-inline-block text-primary text-uppercase mb-4">why choose us</h3>
              <p>
              Tabibi is a portal that provides different forms of services that form a centralized platform <br></br>to help patient to find ther best doctor acording according to their illnesses.
              </p>
            </div>
            <div className='card-sec container mb-4 wow fadeInUp' data-wow-delay="0.1s">
                <div className='row'>
                    <div className="col-xl-3 col-lg-6 col-md-6 mt-5 text-center wow zoomIn" data-wow-delay="0.5s" >
                    <div className='card-img'>
                            <img src='img/card/Filter.png'></img>
                    </div>
                    <div className='card-content'>
                            <h4 className="title font-weight-semi-bold ">Expert Doctors</h4>
                            <p>Tabibi offer a list of doctors according to the patient disease  </p>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 mt-5 text-center wow zoomIn" data-wow-delay="1s">
                    <div className='card-img'>
                            <img src='img/card/chat.png'></img>
                    </div>
                    <div className='card-content'>
                            <h4 className="title font-weight-semi-bold ">Chat With Doctors</h4>
                            <p>After the patient chooses their doctor he can discussion with him to speak about his sick </p>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 mt-5 text-center wow zoomIn" data-wow-delay="1.5s">
                        <div className='card-img'>
                                <img src='img/card/Schedule.png'></img>
                        </div>
                        <div className='card-content'>
                                <h4 className="title font-weight-semi-bold ">Make appointment</h4>
                                <p>The doctor will send a schedule to the patient from chat, then the patient he will accept and conforme the appointment.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 mt-5 text-center wow zoomIn" data-wow-delay="2s">
                        <div className='card-img'>
                                <img src='img/card/RentHome.png'></img>
                        </div>
                        <div className='card-content'>
                                <h4 className="title font-weight-semi-bold ">Rent Home</h4>
                                <p>The patient will look from the application for a house which is next to the doctor's cabin.</p>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </div>
  )
}

export default WhyUs