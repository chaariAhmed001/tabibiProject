import React, { useState } from 'react'

function Input({type,name,placeholder,required,multiple,className}) {
 
  return (
    <div className={className ? className : 'col-6 m-auto pb-4'}>
        <input type={type} name={name} className="form-control border bg-light px-4" placeholder={placeholder}  multiple={multiple}/>
    </div>
  )
}

export default Input