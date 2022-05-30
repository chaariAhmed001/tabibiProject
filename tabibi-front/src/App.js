import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/childComponents/Footer';
import NavBar from './components/childComponents/NavBar';
import AboutUs from './components/sharedComponents/AboutUs/AboutUs';
import LogIn from './components/sharedComponents/Auth/LogIn';
import Chat from './components/sharedComponents/Chat/Chat';
import Contact from './components/sharedComponents/Contact/Contact';
import Home from './components/sharedComponents/Home/Home';
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
import SideBar from './components/childComponents/SideBar/SideBar';
import Dashbourd from './components/sharedComponents/Dashboard/Dashbourd';
import Users from './components/sharedComponents/Admin/AllUsers/Users';
import Doctors from './components/sharedComponents/Admin/AllUsers/Doctors';
import Doctor from './components/sharedComponents/Admin/User/Doctor';
import DoctorAdd from './components/sharedComponents/Admin/User/DoctorAdd';
import Cookies from 'universal-cookie';

function App() {
  
  const [user, setUser] = useState({});
  const [userType, setUserType] = useState('admin');
  const [style, setStyle] = useState('');
  
  
  useEffect(() => {
  
    (userType=== 'admin') &&
       (path===(`http://localhost:3000/dashbourd`)||
        path===('http://localhost:3000/doctors')||
        path===('http://localhost:3000/doctor')||
        path===('http://localhost:3000/doctorAdd'))? setStyle('d-lg-flex d-block'):setStyle('')
        
  }, [])   
  /*const getUser = async()=>{
    setUser((await axios.get("http://localhost:5000/user",{ withCredentials: true })).data)
  }
  useEffect(()=>{
  getUser()

  }
,[user])*/
  
  const logout = async () => {
    await fetch('http://localhost:5000/user/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
    });

    setUser({});

}
// console.log(user)
const path = window.location.href;
  return (
    <div className={style}>
      {(userType=== 'admin') &&
       (path===(`http://localhost:3000/dashbourd`)||
        path===('http://localhost:3000/doctors')||
        path===('http://localhost:3000/doctor')||
        path===('http://localhost:3000/doctorAdd'))
        ? <SideBar/> :<NavBar /> 
        }
      
      <button onClick={logout} >log out</button>
      
      <Router>
          <Routes>
            <Route path='/' exact element={ <Home /> }/>
            <Route path='/signin' element={ <LogIn user={user} /> }/>
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
            <Route path='dashbourd' element={ <Dashbourd /> } />
            <Route path='/users' element={ <Users /> } />
            <Route path='/doctors' element={ <Doctors /> } />
            <Route path='/doctor/:id' element={ <Doctor /> } />
            <Route path='/doctorAdd' element={ <DoctorAdd /> }/>
          </Routes>
      </Router>
      {(userType=== 'admin') &&
       (path===(`http://localhost:3000/dashbourd`)||
        path===('http://localhost:3000/doctors')||
        path===('http://localhost:3000/doctor')||
        path===('http://localhost:3000/doctorAdd'))? <></> :<Footer /> }
      
    </div>
    );
}

export default App;
