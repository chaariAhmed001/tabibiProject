import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import DoughnutChart from '../../childComponents/DoughnutChart/DoughnutChart'
import FeaturedInfo from '../../childComponents/FeaturedInfo/FeaturedInfo'
import LatestApp from '../../childComponents/LatestApp/LatestApp'
import LineChart from '../../childComponents/LineChart/LineChart'
import NewMembers from '../../childComponents/NewMembers/NewMembers'
import "./Dashbourd.css"
function Dashbourd() {
  const [color, setColor] = useState();
  const [users, setUsers] = useState([]);
  const [todayUsers, setTodayUsers] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [todayDocs, setTodayDocs] = useState([]);

  useEffect(() => {
    const getUsers= async () =>{
      await axios.get("http://localhost:5000/user/users").then(res=>setUsers(res.data.users));
      await axios.get("http://localhost:5000/user/todayUsers").then(res=>setTodayUsers(res.data.users));
      await axios.get("http://localhost:5000/doctor/doctors").then(res=>setDoctors(res.data.res));
      await axios.get("http://localhost:5000/doctor/todayDoctors").then(res=>setTodayDocs(res.data.doctors));
      
    }
    getUsers();
},[]);

  return (
    <div className='dashbourd-container col-10 m-2 '>
      <div className='dashbourd-content container'>
        <div className="PageHeading mt-2 row">
          <h3 className="pageTitle mb-0">Dashboard</h3>
        </div>
        <div className='FeaturedInfo-container row'>
          <FeaturedInfo onClick={(e) => setColor("red")} title='Users' nbTody={todayUsers.length} nbTotal={users.length} icon='fa-user ' color='bl' />
          <FeaturedInfo title='Patient' nbTody='0' nbTotal='8' icon='fa-bed' color='secondary' onClick={(e) => setColor("red")}/>
          <FeaturedInfo title='Doctor' nbTody={todayDocs.length} nbTotal={ doctors.length} icon='fa-user-md' color='primary' onClick={(e) => setColor("red")}/>
          <FeaturedInfo title='LandLord' nbTody='0' nbTotal='4' icon='fa-home' color='dark' onClick={(e) => setColor("red")}/>
        </div>
        <div className='row'>
          <LineChart color={color} users={users}/>
          <DoughnutChart />
        </div>
        <div className='row'>
          <NewMembers users={users}/>
          <LatestApp />
        </div>
      </div>
    </div>
  )
}

export default Dashbourd