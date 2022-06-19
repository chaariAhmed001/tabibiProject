import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'

function SearchPage({houses}) {
    
  return (
    <div className='searchPage-container py-5'>
        <div className='searchPage-content'>
            <div className='container'>
                {/* <div className='row'>
                    <div className='searchResult-filter'>
                        <button type="button" className="btn btn-light">Type of place</button>
                        <button type="button" className="btn btn-light">Price</button>
                        <button type="button" className="btn btn-light">Rooms and beds</button>
                    </div>
                </div> */}
                <div className='row'>
                    {
                        houses&&houses.map((house,index)=>
                        <SearchResult
                        img={house.photo}
                        location={house.adress}
                        title={house.title}
                        description={house.description}
                        price={`${house.price}Dt/ night`}
                        phoneNumber={house.phoneNumber}
                        area={house.area} bedrooms={house.bedrooms} bathrooms={house.bathrooms} 
                        options={house.options}
                        key={index}
                    />
                        )
                    }
                   
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchPage