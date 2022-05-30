import React from 'react'

function Welcome({user}) {
  return (
    <div className='col-lg-8 col-md-12 welcom-container'>
        <img src="/robot.gif" alt="" />
        <h3>
            Welcome, <span>{user && user.fullname}!</span>
        </h3>
        <h4>Please select a chat to Start messaging.</h4>
    </div>
  )
}

export default Welcome