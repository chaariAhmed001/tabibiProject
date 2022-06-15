import React, { useEffect, useState } from 'react'
import {
    MapContainer,
    TileLayer,
    Polygon,
    Marker,
    Popup,
    useMap
  } from 'react-leaflet';
  import 'leaflet/dist/leaflet.css';
  import L from 'leaflet';
import GetUserName from '../GetUserName';

  function GetIcon(profilImg) {
    return L.icon({
      iconUrl: require("../../../Imges/doctorProfilImg/" + profilImg),
      iconSize: [50,50],
      className: 'marker-icon'
    });
  }
function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}
function MapComponent({center,zoom,doctors}) {
  return (
    <div className='map-container'>
      <div className='map-content'>
      <MapContainer center={center} zoom={zoom} >
          <ChangeView center={center} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          doctors&&doctors.map((doctor,index)=>(
            
            <Marker position={doctor.coordinates} key={index} >
              <Popup autoClose={false}>
                <div>
                  
                </div>
                <div>
                  <GetUserName email={doctor.email} />
                  <br></br>{doctor.email}
                </div>
                
              </Popup>
            </Marker>

          ))
        }
      </MapContainer>
      </div>
    </div>
  )
}

export default MapComponent