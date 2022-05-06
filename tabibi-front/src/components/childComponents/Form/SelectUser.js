import React, { useState } from 'react'

function SelectUser({name,elements,defaultValue}) {
    
  return (
    
        <select className="form-select m-auto mb-4 border bg-light px-4" aria-label="Default select example" name='selectType'>
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