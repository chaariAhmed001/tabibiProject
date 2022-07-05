import React from 'react'
import HomeAboutUs from '../../childComponents/HomeAboutUs'
import CommentSection from '../../childComponents/CommentSection'
import DepartmentArea from '../../childComponents/DepartmentArea/DepartmentArea'
import Doctors from '../../childComponents/Doctors'
import Header from '../../childComponents/Header'
import axios from 'axios';


function Home() {
  //const res =await axios.get("http://localhost:5000/user");
  //console.log(res);
  
  return (
    <div className='home-container'>
        <div className='home-content'>
            <Header />
            <HomeAboutUs />
            <DepartmentArea />
            <CommentSection />
            <Doctors />
        </div>
    </div>
  )
}

export default Home