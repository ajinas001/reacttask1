import React, { useEffect } from 'react'
import './nav.css'
import { MdKeyboardArrowDown } from "react-icons/md";
import Aos from 'aos'
import 'aos/dist/aos.css'

function Navbar() {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
  return (
    <>
      <div className='ccontainer-fluid'>
        <div className='row'>
            <div className='col-lg-12 navdiv d-flex'>
                <div className='mr-auto p-2'>
                   <span><img className='logoimage' src='/images/logo.png'></img></span>
                </div>


                {/* <div class="">
  <div class="">Flex item</div>
  <div class="p-2">Flex item</div>
  <div class="p-2">Flex item</div>
</div> */}


                <div className='p-2 ms-auto me-4 mt-4'>
                            <span className='xyz' data-aos="zoom-in-right">  <img className='smalllogo' src='/images/smalllogo.png'></img>   XYZ Enterprise Pvt Ltd</span><span className=' py-2 px-2 bg-light rounded me-auto downarrow'><MdKeyboardArrowDown /></span>
                </div>
            </div>
        </div>

      </div>
    </>
  )
}

export default Navbar
