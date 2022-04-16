import React from 'react'

function Footer() {
  return (
    <div className='footer-container text-center text-md-start' >
        <div className='footer-content'>
        <div className="container-fluid bg-dark text-light py-5 wow fadeInUp" data-wow-delay="0.3s">
        <div className="container pt-5">
            <div className="row g-5 pt-4">
                <div className="col-lg-3 col-md-6">
                    <h3 className="text-white mb-4">Quick Links</h3>
                    <div className="d-flex flex-column justify-content-start">
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Comments</a>
                        <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h3 className="text-white mb-4">Popular Links</h3>
                    <div className="d-flex flex-column justify-content-start">
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Account</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Wishlist</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Historical</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h3 className="text-white mb-4">Get In Touch</h3>
                    <p className="mb-2"><i className="bi bi-geo-alt text-primary me-2"></i>123 Street, Tunis, Tunisia</p>
                    <p className="mb-2"><i className="bi bi-envelope-open text-primary me-2"></i>info@tabibi.com</p>
                    <p className="mb-0"><i className="bi bi-telephone text-primary me-2"></i>+22 222 222</p>
                </div>
                <div className="col-lg-3 col-md-6 media-icons">
                    <h3 className="text-white mb-4">Follow Us</h3>
                    <div className="d-flex">
                        <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        
    </div>
  )
}

export default Footer