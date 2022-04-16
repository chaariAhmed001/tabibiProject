import React from 'react'

function Header(props) {
  return (
    <div className='header-container'>
        <div className='header-content'>
        <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="img/car.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={ { maxWidth: 800} }>
                                    <h1 className="display-2 text-white text-uppercase mb-md-4 animated zoomIn">Find a doctor <br></br> &  book onligne</h1>
                                    <h5 className="text-white  mb-3 mb-md-5  animated slideInDown">Easily book a doctor anywhere in the world  with Tabibi</h5>
                                    <a href="#" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</a>
                                    <a href="#" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={ { maxWidth: 800} }>
                                    <h1 className="display-2 text-white text-uppercase mb-md-4 animated zoomIn">Take Care of Your Health</h1>
                                    <h5 className="text-white  mb-3 mb-md-5  animated slideInDown">Find the best doctor for your health with Tabibi</h5>
                                    <a href="#" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</a>
                                    <a href="#" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={ { maxWidth: 800} }>
                                    <h1 className="display-2 text-white text-uppercase mb-md-4 animated zoomIn">Safe your own health get best Service</h1>
                                    <h5 className="text-white  mb-3 mb-md-5  animated slideInDown">Find the best doctor for your health with Tabibi</h5>
                                    <a href="#" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</a>
                                    <a href="#" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev d-none d-md-block" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next d-none d-md-block" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header