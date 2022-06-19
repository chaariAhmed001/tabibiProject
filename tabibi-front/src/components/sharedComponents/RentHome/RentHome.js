import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import RentHomeBanner from '../../childComponents/RentHomeBannner/RentHomeBanner'
import SearchPage from '../../childComponents/SearchPage/SearchPage'

export default function RentHome() {
  const location = useLocation();
  const [rentHouses, setRentHouses] = useState([]);
  const [houseList, setHouseList] = useState(undefined)
  let circle={
    latitude: location.state.lat,
    longitude: location.state.lng,
    radius: "0.2"
  }
  const isInside=(circle_x, circle_y, rad, x, y) => {
    if ((x - circle_x) * (x - circle_x) +(y - circle_y) * (y - circle_y) <= rad * rad)
    return true;
    else
    return false;
  }
  useEffect(async() => {
    axios.get("http://localhost:5000/landlord/houses").then(res=>setHouseList(res.data))
    
    houseList.map((house,index)=>{
      let test = isInside(circle.latitude,circle.longitude,circle.radius,house.coordinates.lat,house.coordinates.lng)
      if(test===true){
          rentHouses.push(house)
        }
    })
  }, [houseList&&houseList.length,location.state])
  
  console.log(houseList)
  return (
    <div>
        <RentHomeBanner />
        <SearchPage houses={rentHouses} />
    </div>
  )
}
