import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers= async () =>{
            await axios.get("http://localhost:5000/user/users").then(res=>setUsers(res.data.users));
        }
        getUsers();
        const interval=setInterval(()=>{
            getUsers();
           },100)
        return()=>clearInterval(interval)
        

    },[]);
    const deleteUser = (id)=>{
        console.log(id);
    }
  return (
    <div className='container'>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Type</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
            {
               users.map((user,index,users) => 
                <tr key={index}>
                <th scope="row">{index}</th>
                    <td>{user.fullname}</td>
                    <td>{user.email}</td>
                    <td>{user.type}</td>
                    <td>
                        <button className='btn btn-primary' onClick={async ()=>{await axios.delete("http://localhost:5000/user/"+user._id); }}>X</button>
                    </td>
                </tr>
                )                       
            }
            </tbody>
        </table>
    </div>
  )
}

export default Users