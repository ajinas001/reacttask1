import React, { useEffect } from 'react'
import './background.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { TiCloudStorageOutline } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import Aos from 'aos'
import 'aos/dist/aos.css'




function Main() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])
    return (
        <>
            <div className='container-fluid  '>
                <div className='row '>


                    <div className='col-lg-12 bg-light rounded wrapper pt-3 mt-2 shadow-lg' data-aos="fade-down">




                        <div><h3 className='ms-5 pt-4 bgtitle ps-3 text-start'>Choose a plan that's just right for you !</h3>
                            <div className='d-flex ms-auto month-ann-btn  me-5 '>


                                <button type='submit' className='monthly ms-auto      px-5 py-2 rounded-pill'>Monthly</button>
                                <button type='submit' className='annualy     px-4 py-2 rounded-pill'>Annually <sup className='text-success'>-10%</sup></button>
                            </div>
                        </div>
                        <div className='wrapper pt-1 ps-5 pe-5'>
                            {/* <header className='header'>
                                <h1>header</h1>
                            </header> */}
                            {/* <nav className='nav'>
                                navigatiob
                            </nav> */}
                            <main className='main shadow-lg text-start p-3' data-aos="fade-left">
                                <div className='planheader'>Basic</div>
                                <span class="strikethrough">$89.99/mo</span>
                                <p className='planpricenow'>$99.99/mo</p>
                                <button type='submit' className='planpricebutton1 px-4'>
                                    Get Started<span className='span1'></span> <FaArrowRightLong />
                                </button>
                                <hr className='hrline'></hr>
                                <p className='plandescription'> What you'll get:<br></br><br></br>
                                    <VscAccount /> Upto 25 Users<br></br>
                                    <TiCloudStorageOutline /> Upto 25gb Storage<br></br>
                                    <MdOutlineEmail /> Email Support</p>

                                <div className='explorefeatures ms-4'> <a>EXPLORE FEATURES</a> </div>
                            </main>
                            < main className='main shadow-lg text-start p-3' data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1500">
                                <div className='planheader'>Standard</div>
                                <span class="strikethrough">$89.99/mo</span>
                                <p className='planpricenow'>$99.99/mo</p>
                                <button type='submit' className='planpricebutton2 px-4'>
                                    Get Started<span className='span1'></span> <FaArrowRightLong />
                                </button>
                                <hr className='hrline'></hr>
                                <p className='plandescription'> What you'll get:<br></br><br></br>
                                    <VscAccount /> Upto 50 Users<br></br>
                                    <TiCloudStorageOutline /> Upto 60gb Storage<br></br>
                                    <MdOutlineEmail /> Email+chat Support</p>

                                <div className='explorefeatures ms-4'> <a>EXPLORE FEATURES</a> </div>
                            </main>
                            <main className='main shadow-lg text-start p-3' data-aos="fade-right">
                                <div className='planheader'>Premium</div>
                                <span class="strikethrough">$89.99/mo</span>
                                <p className='planpricenow'>$199.99/mo</p>


                                <button type='submit' className='planpricebutton3 px-4'>
                                    Get Started<span className='span1'></span> <FaArrowRightLong />
                                </button>

                                <hr className='hrline'></hr>
                                <p className='plandescription'> What you'll get:<br></br><br></br>
                                    <VscAccount /> Upto 75 Users<br></br>
                                    <TiCloudStorageOutline /> Upto 100gb Storage<br></br>
                                    <MdOutlineEmail /> Email+chat+whatsapp Support</p>

                                <div className='explorefeatures ms-4'> <a>EXPLORE FEATURES</a> </div>
                            </main>


                        </div>


                        <div className='wrapper1 ps-2 pe-2 pt-4'>
                            {/* <header className='header'>
                                <h1>header</h1>
                            </header> */}
                            {/* <nav className='nav'>
                                navigatiob
                            </nav> */}
                            <main className='m shadow-lg text-start ps-3' data-aos="fade-left">
                                <div className='d-flex'>


                                    <div>
                                        <button type='submit' className='smallbutton1 px-4 py-2'>Free Forever</button>
                                        <div className='freestarter ps-2'>Free Starter</div>
                                        <div className='plandescription'>The quickest and easiest way to try protocols with basic functionalities</div>
                                        <br></br><button type='submit' className='planpricebutton4 px-4'>
                                            Get Started<span className='span1'></span> <FaArrowRightLong />
                                        </button>
                                    </div>
                                    <div className='ps-3'>
                                        <p className='plandescription pt-4'> What you'll get:<br></br><br></br>
                                            <VscAccount /> Upto 25 Users<br></br>
                                            <TiCloudStorageOutline /> Upto 25gb Storage<br></br>
                                            <MdOutlineEmail /> Email Support
                                            <br></br><br></br>Basics of Documents,
                                            <br></br>Investor,Director and Team Management Included</p>


                                    </div>
                                </div>
                            </main>
                            < main className='m shadow-lg text-start' data-aos="fade-right">
                                <div className='d-flex'>


                                    <div>
                                        <button type='submit' className='smallbutton2 px-4 py-2'>Lets connect</button><br></br>
                                        <div className='freestarter ps-2'>Enterprise plan</div>
                                        <div className='plandescription'>Effortlessly customize and fine-tune services as your needs shift,ensuring the  tools for success</div>
                                        <br></br><button type='submit' className='planpricebutton5 px-4'>
                                            Get Started<span className='span1'></span> <FaArrowRightLong />
                                        </button>
                                    </div>
                                    <div className='ps-3'>
                                        <p className='plandescription pt-4'> What you'll get:<br></br><br></br>
                                            <VscAccount />  More than 75 Users<br></br><br></br>

                                            Customisation of all other features</p>


                                    </div>
                                </div>
                            </main>


                        </div>
                        <div className='bottomdescription'>
                            *Some unique features are provided as add-ons with invidual plans for each features
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
