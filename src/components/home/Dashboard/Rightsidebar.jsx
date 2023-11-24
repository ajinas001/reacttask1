import React from 'react'
import './main.css'
import { MdNotificationsActive } from "react-icons/md";
import './background.css'

function Rightsidebar() {
  return (
    <>
      <div className='conatainer-fluid'>
        <div className='row'>
            <div className='col-lg-1'>

            </div>
            <div className='col-lg-8 text-primary fs-1 mt-2 notiicon'>
            <MdNotificationsActive />
            </div>
            <div className='col-lg-3'>
                
            </div>
        </div>
      </div>
    </>
  )
}

export default Rightsidebar
