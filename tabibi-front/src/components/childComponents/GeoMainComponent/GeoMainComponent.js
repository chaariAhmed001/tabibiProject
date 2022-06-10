import React, { useState } from 'react'
import DoctorComponent from './DoctorComponent';
import MapComponent from './MapComponent';
import './GeoMainComponent.css'
function GeoMainComponent() {
  const [mapCenter, setMapCenter] = useState({ lat: 36.808556157252745, lng: 10.18037874987866 });
  const [mapZoom, setMapZoom] = useState(10);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='geoMain-container ms-xs-3'>
      <div className='geoMain-content'>
        <div  className='container p-0 m-0'>
          <div  className='row map-section'>
            <MapComponent center={mapCenter} zoom={mapZoom}/>
          </div>
          <div className='row doctor-section mt-1'>
            <DoctorComponent/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeoMainComponent