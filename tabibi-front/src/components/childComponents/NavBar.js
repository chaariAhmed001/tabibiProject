import React, { useState } from 'react'

function NavBar({user}) {
    const [userCn, setUserCn] = useState(user);
    const logout = async () => {
        await fetch('http://localhost:5000/user/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
    
        setUserCn(undefined);
    
    }
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
                <a href="http://localhost:3000" className="nav-item nav-link active">Home</a>
                <a href="http://localhost:3000/about" className="nav-item nav-link">About</a>
                <a href="http://localhost:3000/service" className="nav-item nav-link">Service</a>
                <a href="http://localhost:3000/contact" className="nav-item nav-link">Contact</a>
                {
                    user.type === 'Doctor' && <div className='d-flex'>
                        <a href="http://localhost:3000/schedule" className="nav-item nav-link active">schedule</a>
                        <a href="http://localhost:3000/doctorProfil" className="nav-item nav-link">DoctorProfil</a>
                        <a href="http://localhost:3000/chat" className="nav-item nav-link">Chat</a>
                        <a href='http://localhost:3000' onClick={logout} className="nav-item nav-link">LogOut</a> 
                    </div>
                }
                {
                    user.type === 'Patient' && <div className='d-flex'>
                        <a href="http://localhost:3000/schedule" className="nav-item nav-link active">schedule</a>
                        <a href="http://localhost:3000/chat" className="nav-item nav-link">Chat</a>
                        <a href="http://localhost:3000/patientInfo" className="nav-item nav-link">Search Doctor</a>
                        <a href="http://localhost:3000/doctorProfil" className="nav-item nav-link">Favorite</a>
                        <a  href='http://localhost:3000' onClick={logout} className="nav-item nav-link">LogOut</a>
                        
                    </div>
                }
            </div>
            {user.type === 'Patient' || user.type ==undefined &&<a href="http://localhost:3000/signin" className="btn btn-primary py-2 px-4 ms-3">Appointment</a>}
        </div>
    </nav>
  )
}

export default NavBar