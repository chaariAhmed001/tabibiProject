import React from 'react'
import { FaUserInjured } from 'react-icons/fa'
import FeaturedInfo from '../../childComponents/FeaturedInfo/FeaturedInfo'
import "./Dashbourd.css"
function Dashbourd({icon,color}) {
  return (
    <div className='dashbourd-container col-10 m-2 '>
      <div className='dashbourd-content container'>
        <div className="PageHeading mt-2 row">
          <h3 className="pageTitle mb-0">Dashboard</h3>
        </div>
        <div className='row'>
          <FeaturedInfo title='Users' nbTody='19' nbTotal='300' icon='fa-user ' color='bl'/>
          <FeaturedInfo title='Patient' nbTody='9' nbTotal='60' icon='fa-bed' color='secondary'/>
          <FeaturedInfo title='Doctor' nbTody='2' nbTotal='120' icon='fa-user-md' color='primary'/>
          <FeaturedInfo title='LandLord' nbTody='8' nbTotal='40' icon='fa-home' color='dark'/>
        </div>
        </div>
      </div>
  )
}

export default Dashbourd