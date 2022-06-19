import React, { useState } from 'react'

function FormGroup({name,placeholder,getInputs}) {
    const [msgs, setMsgs] = useState([])
    const [msgInput, setMsgInput] = useState("");
    const onStateChange = (e) => {
        setMsgInput(e.target.value);
        
      };
      const addMsgs = () =>{
        msgInput !==''&& msgs.push(msgInput);
        setMsgInput('') 
        
      }
      getInputs(msgs)
  return (
    <div>
         <div className='content col-12 d-flex align-content-between' style={{flexWrap: 'wrap' ,alignItems: 'space-between'}}>
                            {msgs.map((msg,index)=>{
                                return(
                                 
                                  <span className='bg-light p-2 m-2' key={index} style={{borderRadius: 10}}>{msg}</span>
                                
                                );
                            })}
                      </div>
                      <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder={placeholder} aria-label="Your Skills" aria-describedby="button-addon2"  onChange={onStateChange} value={msgInput}/>
                        <button className="btn btn-outline-secondary" type="button" 
                            id="button-addon2" onClick={addMsgs}>+</button>
                      </div>
    </div>
  )
}

export default FormGroup