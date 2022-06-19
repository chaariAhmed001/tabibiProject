import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
// import '../../../Imges/landlordImg'
function SearchResult({
    img,
    location,
    title,
    description,
    price,
    phoneNumber,area,bedrooms,bathrooms,options
}) {
  return (
    <div className='searchResult my-2 container wow fadeInUp ' data-wow-delay="0.1s">
        <div className='row'>
        <img src={require(`../../../Imges/landlordImg/${img}`)} alt="" className='col-lg-4 col-md-12'/>
            <div className='searchResult__info col-lg-8 col-md-12 text-center text-sm-start'>
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p className='mb-2'>{description}</p>
                </div>
                <div className='phone-num mb-2 d-flex flex-wrap'>
                 <div className='me-4'><FaPhoneAlt /> {phoneNumber}</div>
                 <div>
                    options: {area}m². {bedrooms} Bedrooms. {bathrooms } Bathrooms  {options.map(opt=>`${opt}. `)}
                 </div>
                </div>
                <div className="searchResult__infoBottom">
                    <div className='searchResults__price'>
                        <h4>{price}</h4>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
  )
}

export default SearchResult