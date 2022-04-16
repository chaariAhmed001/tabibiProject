import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaLongArrowAltLeft ,  FaLongArrowAltRight} from 'react-icons/fa';  
const options = {
  margin: 30,
  responsiveClass: true,
  autoplay: true,
  smartSpeed: 1000,
  dots:false,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 4,
      }
  },
};

function Doctors() {
  return (
    <div className='doctorsSec-container py-5 wow fadeInUp' data-wow-delay="0.1s">
        <div className='doctorsSec-content'>
            <div className=" section-title mb-4 mt-4 text-center">
              <h3 className="position-relative d-inline-block text-primary text-uppercase mb-4">Our Trusted Doctors</h3>
            </div> 
            <div className='container'> 
                     
              <OwlCarousel className="doctor-carousel wow zoomIn" loop margin={10}  {...options} data-wow-delay="0.9s">
                <div className="doctor-item">
                  <div className='doctor-img'>
                    <img className="img-fluid rounded-top" src="img/doc3.jpg" alt="" />
                  </div>
                  <div className="icon my-3">
                      <img className="default " src="img/surgery.png" alt="" />
                  </div>
                  <div className='doc-des text-center'>
                      <h4>Dr Hassen Jemaa</h4>
                      <h5>Surgery</h5>
                      <a href="#" className="btn btn-primary  px-md-5 me-3 my-4 animated slideInLeft">Appointment</a>
                  </div>
                </div>
                <div className="doctor-item">
                  <div className='doctor-img'>
                    <img className="img-fluid rounded-top" src="img/doc.jpg" alt="" />
                  </div>
                  <div className="icon my-3">
                      <img className="default " src="img/dentist.png" alt="" />
                  </div>
                  <div className='doc-des text-center'>
                      <h4>Dr Ines Kammoun</h4>
                      <h5>Dental</h5>
                      <a href="#" className="btn btn-primary px-md-5 me-3 my-4 animated slideInLeft">Appointment</a>
                  </div>
                </div>
                <div className="doctor-item">
                  <div className='doctor-img'>
                    <img className="img-fluid rounded-top" src="img/doc5.png" alt="" />
                  </div>
                  <div className="icon my-3">
                      <img className="default " src="img/doctor.png" alt="" />
                  </div>
                  <div className='doc-des text-center'>
                      <h4>Dr Bilel GUIGA</h4>
                      <h5>Eye Expert</h5>
                      <a href="#" className="btn btn-primary px-md-5 me-3 my-4 animated slideInLeft">Appointment</a>
                  </div>
                </div>
                <div className="doctor-item">
                  <div className='doctor-img'>
                    <img className="img-fluid rounded-top" src="img/doc4.jpg" alt="" />
                  </div>
                  <div className="icon my-3">
                      <img className="default " src="img/ppe.png" alt="" />
                  </div>
                  <div className='doc-des text-center'>
                      <h4>Dr Issam Malouki</h4>
                      <h5>Corona Expert</h5>
                      <a href="#" className="btn btn-primary px-md-5 me-3 my-4 animated slideInLeft">Appointment</a>
                  </div>
                </div>
                
            </OwlCarousel>  
            </div>  
        </div>
    </div>
  )
}

export default Doctors
