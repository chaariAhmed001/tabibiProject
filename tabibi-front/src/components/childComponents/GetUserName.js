import axios from 'axios';
import React, { useEffect, useState } from 'react'

function GetUserName({email}) {
    //await axios.post("http://localhost:5000/user/signin", form, { withCredentials: true })
    const [name, setName] = useState('')
    const getUser =async(email)=>{
        const response = await axios
        .get(`http://localhost:5000/user/${email}`)
        .catch((err) => {
        console.log("Err: ", err);
      });   
      setName(response.data.fullname)
    }
    useEffect(() => {
        if (email && email !== "") getUser(email);
        
      }, [email,name]);
  return (
    <span className="fw-bold mb-1">{name}</span>
  )
}

export default GetUserName