import React from 'react';
import './About.css'
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import abt from '../../assets/images/abtpage.png'
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import abtgirl from '../../assets/images/abtGirl.png'
import teacher from '../../assets/images/teacher.png'
import plan from '../../assets/images/planning.png'
import industry from '../../assets/images/g867.png'
import exp from '../../assets/images/g4956.png'






const About = () => {
    return (
        <div className='AbouTPAge'>
            <Header />
            <div className='PageHEaders'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='PageTi pt-5'>
                               
                                <h2>About US</h2>
                                <p><Link to="/">Home</Link> <i><FaAngleRight /></i><Link to="/about">About</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='AboutDIV pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12'>
                            <div className='PageHEader'>
                                <h3>Who are we</h3>
                            </div>
                            <div className='AbTContenT pt-2'>
                                <p>We are an EdTech organization, with an aim to introduce Industry perspective in Pharma education. We intend to boost careers by facilitating intellect exchange between academia and industry.</p>
                                <p>To ensure that those who enter the industry are better prepared and ready from day one, we create a paradigm change from a "Supply stipulated" system to a "Demand determined" model.</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <img src={abt} className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='WhatWeDO pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 justify-content-center'>
                            <div className='PageHEader'>
                                <h3>Who are we</h3>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12'>
                            <div className='row'>
                                <div className='col-lg-3 col-md-3 col-sm-3'>
                                    <div className='ABTimG'>
                                        <img src={plan} className='img-fluid' />
                                    </div>
                                </div>
                                <div className='col-lg-9 col-md-9 col-sm-9'>
                                    <div className='ABtcont pt-3'>
                                        <h5>Screening & Planning</h5>
                                        <p>Helping Students Choosing Their Career Path Based Their Strength & Interest.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='row pt-5'>
                                <div className='col-lg-3 col-md-3 col-sm-3 paDiNg'>
                                    <div className='ABTimG'>
                                        <img src={industry} className='img-fluid' />
                                    </div>
                                </div>
                                <div className='col-lg-9 col-md-9 col-sm-9 paDiNg'>
                                    <div className='ABtcont pt-1'>
                                        <h5>Access to Industry Experts</h5>
                                        <p>Tech Driven Access of Customized Content. Domain Expert Practical Training Modules On Capabilities & Desired Skills.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-4 col-md-12'>
                            <img src={abtgirl} className='img-fluid' />
                        </div>
                        <div className='col-lg-4 col-md-12'>
                            <div className='row'>
                                
                                <div className='col-lg-9 col-md-9 col-sm-9'>
                                    <div className='ABtcont rIght pt-1'>
                                        <h5>Industry Customized Modules</h5>
                                        <p>Experiential Learning & Education Under The Guidance Of Industry Experts And Faculty.</p>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-3'>
                                    <div className='ABTimG'>
                                        <img src={teacher} className='img-fluid' />
                                    </div>
                                </div>
                            </div>

                            <div className='row pt-5'>
                               
                                <div className='col-lg-9 col-md-9 col-sm-9 paDiNg'>
                                    <div className='ABtcont rIght pt-1'>
                                        <h5>Industry Readiness Interface</h5>
                                        <p>Making Student Interview Ready, Department & Therapy Ready : Curated as per Industry and Individual Company.</p>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-3 paDiNg'>
                                    <div className='ABTimG'>
                                        <img src={exp} className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default About