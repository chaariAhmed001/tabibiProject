import React from 'react'
import SubHeader from '../../childComponents/SubHeader'
import HomeAboutUs from '../../childComponents/HomeAboutUs'
import WhyUs from '../../childComponents/WhyUs'
import './AboutUs.css'
import Doctors from '../../childComponents/Doctors'

export default function AboutUs() {
  return (
    <div className='aboutUs-container'>
        <div className='aboutUs-container'>
            <SubHeader title={"About US"} />
            <HomeAboutUs />
            <WhyUs />
            <Doctors />
        </div>
    </div>
  )
}
