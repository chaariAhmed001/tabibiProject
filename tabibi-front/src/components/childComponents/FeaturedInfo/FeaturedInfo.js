import React from 'react'
import './FeaturedInfo.css'
function FeaturedInfo({icon,title,nbTody,nbTotal,color}) {
  return (
    <div className="col-xl-3 col-md-6 mb-4 my-4">
        <div className={`card border-left-${color} shadow`}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className={`card-title mb-1 ${color}`}>
                      {title}
                    </div>
                    <div className="card-subtitle-day mb-0">
                      <b>{nbTody}</b> Today
                    </div>
                    <div className='card-subtitle-total'>{nbTotal}<b>Total</b></div>
                  </div>
                  <div className="card-icon col-auto">
                    <i className={`fa fa-2x ${icon} ${color}`}></i>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedInfo