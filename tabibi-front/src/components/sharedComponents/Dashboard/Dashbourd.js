import React, { useState } from 'react'
import DoughnutChart from '../../childComponents/DoughnutChart/DoughnutChart'
import FeaturedInfo from '../../childComponents/FeaturedInfo/FeaturedInfo'
import LineChart from '../../childComponents/LineChart/LineChart'
import NewMembers from '../../childComponents/NewMembers/NewMembers'
import "./Dashbourd.css"
function Dashbourd() {
  const [color, setColor] = useState();
  return (
    <div className='dashbourd-container col-10 m-2 '>
      <div className='dashbourd-content container'>
        <div className="PageHeading mt-2 row">
          <h3 className="pageTitle mb-0">Dashboard</h3>
        </div>
        <div className='FeaturedInfo-container row'>
          <FeaturedInfo onClick={(e) => setColor("red")} title='Users' nbTody='19' nbTotal='300' icon='fa-user ' color='bl' />
          <FeaturedInfo title='Patient' nbTody='9' nbTotal='60' icon='fa-bed' color='secondary' onClick={(e) => setColor("red")}/>
          <FeaturedInfo title='Doctor' nbTody='2' nbTotal='120' icon='fa-user-md' color='primary' onClick={(e) => setColor("red")}/>
          <FeaturedInfo title='LandLord' nbTody='8' nbTotal='40' icon='fa-home' color='dark' onClick={(e) => setColor("red")}/>
        </div>
        <div className='row'>
          <LineChart color={color} />
          <DoughnutChart />
        </div>
        <div className='row'>
          <NewMembers />
        </div>
      </div>
    </div>
  )
}

export default Dashbourd