import React from 'react'
import CommentSection from '../../childComponents/CommentSection'
import DepartmentArea from '../../childComponents/DepartmentArea'
import SubHeader from '../../childComponents/SubHeader'
import WhyUs from '../../childComponents/WhyUs'

function Service() {
  return (
    <div className='aboutUs-container'>
        <div className='aboutUs-container'>
            <SubHeader title={"OUR SERVICE"} />
            <WhyUs />
            <DepartmentArea />
            <CommentSection />
        </div>
    </div>
  )
}

export default Service