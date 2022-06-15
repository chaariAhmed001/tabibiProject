import React, { useEffect, useState } from 'react'
import DoctorComponent from './DoctorComponent';
import MapComponent from './MapComponent';
import './GeoMainComponent.css'
import axios from 'axios';
function GeoMainComponent({doctors,selectedDoc,alldoc}) {
  const [mapCenter, setMapCenter] = useState({ lat: 36.808556157252745, lng: 10.18037874987866 });
  const [mapZoom, setMapZoom] = useState(6);

  //start modal event  
  const [show, setShow] = useState(false);
  const [currentDoc, setCurrentDoc] = useState(undefined);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //end modal event

  const handleDocChange = (doc) => {
    setCurrentDoc(doc);
    selectedDoc(doc);
    setMapCenter(doc.coordinates)
    setMapZoom(12)
  };
  return (
    <div className='geoMain-container ms-xs-3'>
      <div className='geoMain-content'>
        <div  className='container p-0 m-0'>
          <div  className='row map-section'>
            <MapComponent center={mapCenter} zoom={mapZoom} doctors={doctors}/>
          </div>
          <div className='row doctor-section p-2'>
            <DoctorComponent doctors={doctors} changeDoc={handleDocChange}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeoMainComponent