import React from "react";
import "./Footer.css";
import logo from "../../assets/images/wkareersity-logo.png"
import { FaAngleRight } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { ImLocation } from "react-icons/im";
import { FaFacebookF, FaLinkedinIn, FaInstagramSquare, FaTwitter, FaYoutube } from "react-icons/fa";



const Footer = () => {
    return (
        <div className="Footer pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12">
                        <div className="FooTLOgo">
                            <img src={logo} className="img-fluid" />

                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                        <div className="QuickLINk">
                            <h5>QUICK LINKS</h5>
                            <ul class="foot-nav">
                                <li><a href=" "><i><FaAngleRight /></i>Home </a></li>
                                <li><a href=" "><i><FaAngleRight /></i>Course</a></li>
                                <li><a href=" "><i><FaAngleRight /></i>Live Programs</a></li>
                                <li><a href=" "><i><FaAngleRight /></i>Blogs</a></li>
                                <li><a href=" "><i><FaAngleRight /></i>About Us</a></li>
                                <li><a href=" "><i><FaAngleRight /></i>Contact Us</a></li>



                            </ul>
                            <ul class="foot-nav one">
                                <li><a href=" "><i><FaAngleRight /></i>Joint as Student </a></li>
                                <li><a href=" "><i><FaAngleRight /></i>Joint as Educator</a></li>
                                <li><a href=" "><i><FaAngleRight /></i>Teams & Conditions</a></li>
                                <li><a href=" "><i><FaAngleRight /></i>Privacy Policy</a></li>
                                <li><a href=" "><i><FaAngleRight /></i>Cancellation / Refund policy</a></li>
                                <li><a href=" "><i><FaAngleRight /></i>Help and Support</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                        <div className="QuickLINk">
                            <h5>CATEGORIES</h5>
                            <ul class="foot-nav one">
                                <li><a href=" "><i><FaAngleRight /></i>Industry Overview </a></li>
                                <li><a href=" "><i><FaAngleRight /></i>R&D</a></li>
                                <li><a href=" "><i><FaAngleRight /></i>Manufacturing</a></li>
                                <li><a href=" "><i><FaAngleRight /></i>Sales</a></li>
                                <li><a href=" "><i><FaAngleRight /></i>International Business</a></li>
                                



                            </ul>
                            <ul class="foot-nav">
                            <li><a href=" "><i><FaAngleRight /></i>Marketing</a></li>
                               
                                <li><a href=" "><i><FaAngleRight /></i>Soft Skill </a></li>
                                <li><a href=" "><i><FaAngleRight /></i>Supply Chain</a></li>
                                <li><a href=" "><i><FaAngleRight /></i>Allied Industries</a></li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-12 col-md-6 col-sm-12">
                        <div className="REAchuss">
                            <div className="QuickLINk">
                                <h5>REACH US</h5>
                                <ul class="foot-nav rEAScg">
                                    <li><a href="tel:+919004214077 "><i><MdCall /></i>+91 90042 14077</a></li>
                                    <li><a href="mailto:askus@kareersity.com"><i><GrMail /></i>askus@kareersity.com</a></li>
                                    <li><a><i><ImLocation /></i>Corporate Office <br /> <span>Thane, Mumbai
                                    </span></a></li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <hr />
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 CoPyRigHTS">
                        <div className="COPyRights">
                            <p>Copyright © 2023 Kareersity. All rights reserved</p>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 CoPyRigHTS text-center">
                        <div className="COPyRights">
                            <p>Powered By: <a href="https://www.cortexmarketing.in/">Cortex Media Marketing Pvt Ltd</a></p>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 CoPyRigHTS">
                        <div className="COPyRights d-flex">
                            <p>Follow us on:</p>
                            <div className="socialMEDia">
                                <li><a href=""><FaFacebookF /></a></li>
                                <li><a href=""><FaLinkedinIn /></a></li>
                                <li><a href=""><FaInstagramSquare /></a></li>
                                <li><a href=""><FaTwitter /></a></li>
                                <li><a href=""><FaYoutube /></a></li>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row pt-3 mt-3">
                    <div className="col-12">
                        <div className="SubSCribe d-flex">
                            <div className="SubPAr">
                                <p>Subscribe To Our Newsletter To Get Updates</p>
                            </div>
                            <div className="SubINPut">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" />
                                    <button class="btn btn-outline-secondary SuBS" type="button" id="button-addon2">SUBSCRIBE <i className="RigHTSubsCR"><FaAngleRight/></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Footer