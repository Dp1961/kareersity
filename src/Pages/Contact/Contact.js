import React from 'react';
import './Contact.css'
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import courseimg from "../../assets/images/coursebanner.png"

const Contact = () => {
    return (
        <div className='ConTActpage'>
            <Header />
            <div className='PageHEaders'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='PageTi pt-5'>
                                <p><Link to="/">Home</Link> <i><FaAngleRight /></i><Link to="/contact">Contact</Link></p>
                                <h2>Contact US</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ContactFORm pt-5 pb-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='cAll'>
                                        <h6>Call Us</h6>
                                        <h5><Link to="tel:+919004214077">+91 90042 14077</Link></h5>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='cAll'>
                                        <h6>Mail Us</h6>
                                        <h5><Link to="mailto:askus@kareersity.com">askus@kareersity.com</Link></h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-8 col-md-8 col-sm-12'>
                            <div className='cAll COONtactForm'>
                                <h6>Write US</h6>
                                <form>
                                    <div className='row pt-2 justify-content-center'>
                                        <div className='col-lg-4 col-md-6 col-sm-12'>
                                            <input className='FORmConT' type="text" placeholder='Name' />
                                        </div>
                                        <div className='col-lg-4 col-md-6 col-sm-12'>
                                            <input className='FORmConT' type="email" placeholder='Email Address' />
                                        </div>
                                        <div className='col-lg-4 col-md-6 col-sm-12'>
                                            <input className='FORmConT' type="text" placeholder='Mobile Number' />
                                        </div>
                                        <div className='col-lg-12'>
                                            <textarea className='FORmConT' rows="5" cols="50" placeholder='Message' />
                                        </div>
                                        <div className='col-lg-2'>
                                            <button type="submit">Send</button>
                                        </div>
                                    </div>
                                </form>


                            </div>

                        </div>
                    </div>

                </div>
            </div>
            {/* image Section */}
            <div className='IMAgeSession pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 pt-3 pb-3'>
                            <Link to="/"><img src={courseimg} className='img-fluid' /></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* image section end */}
            <Footer />
        </div>
    )
}
export default Contact