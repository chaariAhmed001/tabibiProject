import React from 'react'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="index.html" className="navbar-brand p-0">
            <h1 className="m-0 text-primary">TABIBI</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">About</a>
                <a href="service.html" className="nav-item nav-link">Service</a>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
            <a href="appointment.html" className="btn btn-primary py-2 px-4 ms-3">Appointment</a>
        </div>
    </nav>
  )
}

export default NavBar