import React, { useState } from 'react'
import DoctorComponent from './DoctorComponent';
import MapComponent from './MapComponent';
import './GeoMainComponent.css'
function GeoMainComponent({doctors,selectedDoc}) {
  const [mapCenter, setMapCenter] = useState({ lat: 36.808556157252745, lng: 10.18037874987866 });
  const [mapZoom, setMapZoom] = useState(10);
  const [show, setShow] = useState(false);
  const [currentDoc, setCurrentDoc] = useState(undefined);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //console.log(doctors)
  const handleDocChange = (doc) => {
    setCurrentDoc(doc);
    selectedDoc(doc)
  };
  return (
    <div className='geoMain-container ms-xs-3'>
      <div className='geoMain-content'>
        <div  className='container p-0 m-0'>
          <div  className='row map-section'>
            <MapComponent center={mapCenter} zoom={mapZoom}/>
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