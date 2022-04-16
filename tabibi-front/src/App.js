import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/childComponents/Footer';
import Header from './components/childComponents/Header';
import NavBar from './components/childComponents/NavBar';
import AboutUs from './components/sharedComponents/AboutUs/AboutUs';
import LogIn from './components/sharedComponents/Auth/LogIn';
import Chat from './components/sharedComponents/Chat/Chat';
import Contact from './components/sharedComponents/Contact/Contact';
import Home from './components/sharedComponents/Home/Home';
import JsonData from "./data/data.json";
import {BrowserRouter as Router,Routes,Route,Link,Switch } from 'react-router-dom';
import SignUp from './components/sharedComponents/Auth/SignUp';
import LostPss from './components/sharedComponents/Auth/LostPss';
import WichList from './components/sharedComponents/WichList/WichList';
import Schedule from './components/sharedComponents/Schedule/Schedule';
import RentHome from './components/sharedComponents/RentHome/RentHome';
import axios from 'axios';
import DoctorSignUp from './components/sharedComponents/Doctor/DoctorSignUp';
import LandlodSignUp from './components/sharedComponents/Landlord/LandlodSignUp';
import DoctorProfil from './components/sharedComponents/Doctor/DoctorProfil';
import DoctorUpdate from './components/sharedComponents/Doctor/DoctorUpdate';


function App() {
  
  const [user, setUser] = useState({});

  const logout = async () => {
    await fetch('http://localhost:5000/user/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
    });

    setUser({});
}

  return (
    <div>
      <NavBar />
      {/* <button onClick={logout} >log out</button>
      <p>
      {name ? 'Hi ' + name : 'You are not logged in'}
      </p> */}
      <Router>
          <Routes>
            <Route path='/' exact element={ <Home /> }/>
            <Route path='/signin' element={ <LogIn user={user} setUser={setUser}/> }/>
            <Route path='/signup' element={ <SignUp /> }/>
            <Route path='/doctorSignup' element={ <DoctorSignUp /> }/>
            <Route path='/landlodSignup' element={ <LandlodSignUp /> }/>

            <Route path='/about' element={ <AboutUs /> } />
            <Route path='/chat' element={ <Chat /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/passwordRec' element={ <LostPss /> } />
            <Route path='/wichList' element={ <WichList /> } />
            <Route path='/schedule' element={ <Schedule /> } />
            <Route path='/rentHome' element={ <RentHome /> } />
            <Route path='/doctorProfil' element={ <DoctorProfil user={user}/> } />
            <Route path='/doctorupdate' element={ <DoctorUpdate/> } />
            <Route path='/LandlodSignUp' element={ <LandlodSignUp user={user}/> } />
          </Routes>
      </Router>
      <Footer />
    </div>
    );
}

export default App;
