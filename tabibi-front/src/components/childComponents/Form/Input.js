import React, { useState } from 'react'
import '../../sharedComponents/Auth/Auth.css'
function Input(props) {
 const { label, errorMessage, onChange,multiple,className ,defaultValue, ...inputProps } = props;
  return (
    <div className={className ? className : 'col-6 m-auto pb-4'}>
        <input  className="form-control border bg-light px-4"  {...inputProps}  
        multiple={multiple} defaultValue={defaultValue}  onChange={onChange}/>
    </div>
  )
}

export default Input