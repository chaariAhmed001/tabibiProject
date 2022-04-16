import React, { useState } from 'react'

function SelectUser({name,elements}) {
    
  return (
    <select className="form-select m-auto w-50 mb-4" aria-label="Default select example" name='selectType'>
        <option defaultValue>{name}</option>
        {
            elements.map((element,index,specialitys) => 
             <option value={element} key={index} >{element}</option>
            )                          
        }
    </select>
  )
}

export default SelectUser