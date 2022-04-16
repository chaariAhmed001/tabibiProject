import React from 'react'
import './WichList.css'
import SubHeader from '../../childComponents/SubHeader'
import DoctorCard from './DoctorCard'
function WichList() {
  return (
    <div className='wichList-container'>
        <div className='wichList-content'>
              <SubHeader title={'Wishlist'} /> 
              <div className='container '>
                <div className='row justify-content-center wow zoomIn' data-wow-delay="0.1s">
                    <DoctorCard img={ 'img/wichlist/doctor1.jpg' } name={'Ines Kammoun'} spiciality={'Dentist'}  rating={3}/>  
                    <DoctorCard img={ 'img/wichlist/doc4.jpg' } name={'Issam Malouki'} spiciality={'Corona Expert'}  rating={3}/>  
                    <DoctorCard img={ 'img/wichlist/doc3.jpg' } name={'Hassen Jemaa'} spiciality={'Surgery'}  rating={3}/>  
                    <DoctorCard img={ 'img/wichlist/doc5.png' } name={'Bilel GUIGA'} spiciality={'Eye Expert'}  rating={3}/>  
                </div>
                <div className='row justify-content-center wow zoomIn' data-wow-delay="0.3s">
                    <DoctorCard img={ 'img/wichlist/doctor1.jpg' } name={'Ines Kammoun'} spiciality={'Dentist'}  rating={3}/>  
                    <DoctorCard img={ 'img/wichlist/doc4.jpg' } name={'Issam Malouki'} spiciality={'Corona Expert'}  rating={3}/>  
                    <DoctorCard img={ 'img/wichlist/doc3.jpg' } name={'Hassen Jemaa'} spiciality={'Surgery'}  rating={3}/>  
                </div>
              </div>              
        </div>
    </div>
  )
}

export default WichList