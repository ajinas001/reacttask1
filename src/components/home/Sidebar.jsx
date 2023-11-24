import React, { useEffect } from 'react'
import './nav.css'
import { MdDashboard } from "react-icons/md";
import { GiChestnutLeaf } from "react-icons/gi";
import { MdLibraryAdd } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { TbMessage2Plus } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";
import Aos from 'aos'
import 'aos/dist/aos.css'



function Sidebar() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])
    return (
        <>





            <div className="containe wrapper" data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1500">
                <nav>
                    <div className="navba mt-5">
                        <div className="log">
                            <img src="/images/images.jpeg" alt="" /><br></br><br></br>
                            <h1 className="span1">Ram Mohan<span className='text-primary'><MdKeyboardArrowRight /></span></h1>
                            <p className="span2"> raman2@gmail.com</p>
                        </div>
                        <ul>
                            <li>
                                <a href="#">

                                    <span className='dashitems text-primary'> <MdDashboard /> </span><span className="nav-ite">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">

                                    <span className='dashitems text-primary'><GiChestnutLeaf /> </span> <span className="nav-ite">Perks</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">

                                    <span className='dashitems text-primary'> <MdLibraryAdd /> </span><span className="nav-ite">Addons</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">

                                    <span className='dashitems text-primary'> <FaQuestionCircle /> </span> <span className="nav-ite">FAQ</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">

                                    <span className='dashitems text-primary'> <TbMessage2Plus /></span> <span className="nav-ite">Support</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="logou">
                                    <i className="fas fa-sign-out-alt text-primary" />
                                    <span className="nav-ite text-primary">Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>





        </>
    )
}

export default Sidebar
