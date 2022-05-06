import React from 'react'
import { FaHome,FaUserInjured,FaUserMd } from "react-icons/fa";
import { IoAnalyticsSharp } from "react-icons/io5";
import { GiHouseKeys } from "react-icons/gi";
import "./SideBar.css";
function SideBar() {
  return (
    <div className='sideBar-container d-none d-lg-block col-2 bg-white navbar-light shadow-sm'>
        <div className='sideBar-content'>
          <div className='logo my-3'>
            <a href="index.html">
                <h2 className="ms-3 text-primary">TABIBI</h2>
            </a>
          </div>
          
          <div className='p-2'>
              <div className="sidebarMenu">
                <h3 className="sidebarTitle ms-2">Dashboard</h3>
                <ul className="sidebarList mb-0">
                  <li className="sidebarListItem active mb-2">
                    <FaHome className="sidebarIcon" />
                    Home
                  </li>
                  <li className="sidebarListItem">
                    <IoAnalyticsSharp className="sidebarIcon" />
                    Analytics
                  </li>
                </ul>
              </div>
              <div className="sidebarMenu">
                <h3 className="sidebarTitle ms-2">Users</h3>
                <ul className="sidebarList">
                  <li className="sidebarListItem">
                    <FaUserInjured className="sidebarIcon" />
                    Patient
                  </li>
                  <li className="sidebarListItem">
                    <FaUserMd className="sidebarIcon" />
                    Doctor
                  </li>
                  <li className="sidebarListItem">
                    <GiHouseKeys className="sidebarIcon" />
                    Landlord
                  </li>
                </ul>
              </div>
          </div>
          
        </div>
    </div>
  )
}

export default SideBar