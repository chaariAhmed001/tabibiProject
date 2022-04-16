import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function SearchResult({
    img,
    location,
    title,
    description,
    price,
    total,
}) {
  return (
    <div className='searchResult my-2 container wow fadeInUp ' data-wow-delay="0.1s">
        <div className='row'>
        <img src={img} alt="" className='col-lg-4 col-md-12'/>
            <div className='searchResult__info col-lg-8 col-md-12 text-center text-sm-start'>
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p className='mb-2'>{description}</p>
                </div>
                <div className='phone-num mb-2'>
                 <FaPhoneAlt /> 22 222 222
                </div>
                <div className="searchResult__infoBottom">
                    <div className='searchResults__price'>
                        <h4>{price}</h4>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
  )
}

export default SearchResult