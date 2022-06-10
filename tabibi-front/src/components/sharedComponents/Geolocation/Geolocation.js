import React from 'react'
import { useLocation } from 'react-router-dom';
import GeoMainComponent from '../../childComponents/GeoMainComponent/GeoMainComponent';
import SideBarComponent from '../../childComponents/SideBarComponent/SideBarComponent';


function Geolocation() {
    const location = useLocation();
    console.log(location.state)
  return (
    <div className='geolocation-container my-5' >
      <div className='geolocation-content'>
            <div className='container-fluid m-0 p-0' >
                <div className='row w-100'>
                    <div className='geolocation-sideBar-section d-none d-lg-block col-lg-3'>
                        <SideBarComponent />
                    </div>
                    <div className='geolocation-main-section col-lg-9 col-md-12'>
                        <div className='row'>
                            <GeoMainComponent />
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Geolocation