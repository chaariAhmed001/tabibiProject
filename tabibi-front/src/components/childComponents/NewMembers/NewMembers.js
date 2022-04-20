import React from 'react'
import Member from './Member';
import './NewMembers.css'
function NewMembers() {
  return (
    <div className="col-xl-5 col-lg-5">
      <div className="card shadow mb-4">   
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">New Join Members</h6>
        </div>                            
        <div className="card-body px-0">
          <Member name='Ines Kamoun' type='Doctor' img='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
          <Member name='Ines Kamoun' type='Doctor' img='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
          <Member name='Ines Kamoun' type='Doctor' img='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
          <Member name='Ines Kamoun' type='Doctor' img='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
          <Member name='Ines Kamoun' type='Doctor' img='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
          <Member name='Ines Kamoun' type='Doctor' img='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
          
        </div>
      </div>
    </div>
  )
}

export default NewMembers