import React from 'react'
import Appointment from './Appointment';
import './LatestApp.css'
function LatestApp() {
    
  return (
    <div className="col-xl-7 col-lg-8">
      <div className="card shadow mb-4">   
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Latest appointments</h6>
        </div>                            
        <div className="card-body table-responsiv p-2">
        <table className="widgetLgTable table">
            <thead >
            <tr className="widgetLgTr">
          <th className="widgetLgTh ps-5">Patient</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Doctor</th>
          <th className="widgetLgTh">Status</th>
        </tr>
            </thead>
        <tbody>
        <Appointment patient='Chaari Ahmed' doctor='Ines Kamoun' date ='23/04/2022' status='Approved'/>
        <Appointment patient='Chaari Ahmed' doctor='Ines Kamoun' date ='23/04/2022' status='Declined'/>
        <Appointment patient='Chaari Ahmed' doctor='Ines Kamoun' date ='23/04/2022' status='Approved'/>
        <Appointment patient='Chaari Ahmed' doctor='Ines Kamoun' date ='23/04/2022' status='Approved'/>
        <Appointment patient='Chaari Ahmed' doctor='Ines Kamoun' date ='23/04/2022' status='Approved'/>
        <Appointment patient='Chaari Ahmed' doctor='Ines Kamoun' date ='23/04/2022' status='Approved'/>
        
        </tbody>
        

      </table>
        </div>
      </div>
    </div>
  )
}

export default LatestApp