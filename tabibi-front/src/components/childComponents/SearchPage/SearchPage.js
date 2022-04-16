import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className='searchPage-container py-5'>
        <div className='searchPage-content'>
            <div className='container'>
                <div className='row'>
                    <div className='searchResult-filter'>
                        <p className='ps-3'>62 stays · 26 august to 30 august · 2 guest</p>
                        <button type="button" className="btn btn-light">Type of place</button>
                        <button type="button" className="btn btn-light">Price</button>
                        <button type="button" className="btn btn-light">Rooms and beds</button>
                    </div>
                </div>
                <div className='row'>
                    <SearchResult
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                        location="Private room in center of Tunis"
                        title="Stay at this spacious Edwardian House"
                        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                        price="Dt30 / night"
                        total="Dt117 total"
                    />
                    <SearchResult
                        img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                        location="Private room in center of Tunis"
                        title="Independant luxury studio apartment"
                        description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
                        price="Dt40 / night"
                        total="Dt157 total"
                    />
                    <SearchResult
                        img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                        location="Private room in center of Tunis"
                        title="Tunis Studio Apartments"
                        description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
                        star={3.8}
                        price="Dt35 / night"
                        total="Dt207 total"
                    />
                    <SearchResult
                        img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
                        location="Private room in center of Tunis"
                        title="Tunis Studio Apartments"
                        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"   
                        price="Dt55 / night"
                        total="Dt320 total"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchPage