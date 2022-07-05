import React from 'react'
import Why from './Why'

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
                    <Why title={'Expert Doctors'} desc={'Tabibi offer a list of doctors according to the patient disease.'} img={'img/card/Filter.png'} time={"0.5s"} />
                    <Why title={'Chat With Doctors'} desc={'After the patient chooses their doctor he can discussion with him to speak about his sick.'} img={'img/card/chat.png'} time={"1s"} />
                    <Why title={'Make appointment'} desc={'The doctor will send a schedule to the patient from chat, then the patient he will accept and conforme the appointment.'} img={'img/card/Schedule.png'} time={"1.5s"} />
                    <Why title={'Rent Home'} desc={'The patient will look from the application for a house which is next to the doctor cabin.'} img={'img/card/RentHome.png'} time={"2s"} />
                </div>                
            </div>
        </div>
    </div>
  )
}

export default WhyUs