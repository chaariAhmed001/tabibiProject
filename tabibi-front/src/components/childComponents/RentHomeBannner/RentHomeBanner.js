import React, { useState } from 'react'
import './RentHomeBanner.css'
import Search from './Search';

function RentHomeBanner() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className='rentHomeBanner-container'>
      <div className='rentHomeBanner-content'>
        <div className='bannner-search d-flex flex-column'>
          {showSearch && <Search />}
          <button type="button" className="btn btn-outline-secondary banner-searchBtn"
          onClick={()=> setShowSearch(!showSearch)}>
            {
              showSearch ? 'Hide' : 'Search Dates'
            }</button>
        </div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="img/RentHome/Banner/homeBn4.jpg" alt="..."/>
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3">
                  <h1 className="display-5 text-white text-uppercase mb-md-4 animated zoomIn">find your perfect place<br></br> with Tabibi</h1>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <img src="img/RentHome/Banner/homeBn2.jpg" alt="..."/>
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3">
                  <h1 className="display-5 text-white text-uppercase mb-md-4 animated zoomIn">choose a house to rent next<br></br> to the doctor's cabin</h1>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RentHomeBanner