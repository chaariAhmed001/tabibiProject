import React from 'react'
import {
    MapContainer,
    TileLayer,
    Polygon
  } from 'react-leaflet';
  import 'leaflet/dist/leaflet.css';

function MapComponent({center,zoom}) {
  return (
    <div className='map-container'>
      <div className='map-content'>
      <MapContainer
        center={center} zoom={zoom} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      </div>
    </div>
  )
}

export default MapComponent