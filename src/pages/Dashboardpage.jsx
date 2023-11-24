import React from 'react'
import Main from '../components/home/Dashboard/main'
import Navbar from '../components/home/Navbar'
import Sidebar from '../components/home/Sidebar'
import Rightsidebar from '../components/home/Dashboard/Rightsidebar'

function Dashboardpage() {
  return (
    <>
      <div className='conatner-fluid  mainbg'>
        <div className='row'>
            <div className='col-lg-12'>
                <Navbar></Navbar>
            </div>
            <div className='col-lg-2'>
               <Sidebar></Sidebar>
            </div>
            <div className='col-lg-9'>
            <Main/>
            </div>
            <div className='col-lg-1'>
                <Rightsidebar></Rightsidebar>
            </div>
        </div>
      </div>
    </>
  )
}

export default Dashboardpage
