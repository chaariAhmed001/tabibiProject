import React from 'react'

function FormButton({type,name}) {
  return (
    <div className="col-6 m-auto">
        <button className="btn btn-primary w-75 ms-4" type={type}>{name}</button>
    </div> 
  )
}

export default FormButton