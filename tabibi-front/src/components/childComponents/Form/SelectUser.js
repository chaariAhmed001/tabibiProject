import React, { useState } from 'react'

function SelectUser({name,elements,defaultValue,onChange}) {
    
  return (
    <div className='col-6 m-auto pb-4'>
 <select className="form-select border bg-light px-4 " aria-label="Default select example" name='selectType' required onChange={onChange}>
        <option value="">{name}</option>
        {
            elements.map((element,index,specialitys) => 
             <option value={element} key={index} >{element}</option>
            )                          
        }
      </select>
    </div>
       
   
    
  )
}

export default SelectUser