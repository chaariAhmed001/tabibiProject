import React from 'react'
import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker,
  Popup
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

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
        <Marker position={center}>
            <Popup>
              TABIBI Company
            </Popup>
        </Marker>
      </MapContainer>
      </div>
    </div>
  )
}

export default MapComponent