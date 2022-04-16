import React, { useState } from 'react'
import MapComponent from '../../childComponents/MapComponent'
import SubHeader from '../../childComponents/SubHeader'
import '../Contact/Contact.css'

function Contact() {
    const [mapCenter, setMapCenter] = useState({ lat: 36.808556157252745, lng: 10.18037874987866 });
    const [mapZoom, setMapZoom] = useState(10);

  return (
    <div className='contact-container'>

        <SubHeader title={ "Contact Us" } />
        <div className='container'>
            <div className='row'>
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-xl-6 wow slideInUp" data-wow-delay="0.1s">
                                <div className="bg-light rounded h-100 p-5">
                                    <div className="section-title">
                                        <h5 className="position-relative d-inline-block text-primary text-uppercase">Contact Us</h5>
                                        <h1 className="display-6 mb-4">Feel Free To Contact Us</h1>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                                        <div className="text-start">
                                            <h5 className="mb-0">Our Office</h5>
                                            <span>123 Street, Tunis, Tunisia</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                                        <div className="text-start">
                                            <h5 className="mb-0">Email Us</h5>
                                            <span>info@tabibi.com</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                                        <div className="text-start">
                                            <h5 className="mb-0">Call Us</h5>
                                            <span>+22 222 222</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 wow slideInUp" data-wow-delay="0.3s">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <input type="text" className="form-control border-0 bg-light px-4" placeholder="Your Name" style={{ height:55 }}  />
                                        </div>
                                        <div className="col-12">
                                            <input type="email" className="form-control border-0 bg-light px-4" placeholder="Your Email" style={{ height:55 }} />
                                        </div>
                                        <div className="col-12">
                                            <input type="text" className="form-control border-0 bg-light px-4" placeholder="Subject" style={{ height:55 }}/>
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control border-0 bg-light px-4 py-3" rows="5" placeholder="Message"></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='row map-section wow fadeInUp mb-2' data-wow-delay="0.5s">
                <MapComponent center={mapCenter} zoom={mapZoom}/>
            </div>
    </div>
  )
}

export default Contact