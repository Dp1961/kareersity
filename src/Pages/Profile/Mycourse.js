import React from 'react';
import './Profile.css';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
import c1 from "../../assets/images/course.png"
import { AiFillStar } from "react-icons/ai";
import ProgressBar from 'react-bootstrap/ProgressBar';

const Mycourse = () => {
    return (
        <div className='ProFILE'>
            <Header />
            <div className='PageHEaders'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='PageTi pt-5'>

                                <h2>My Course</h2>
                                <p><Link to="/">Home</Link> <i><FaAngleRight /></i><Link to="/mycourse">My Course</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ProfileTabs pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-4 col-sm-5'>
                            <div className='SIdeBar'>
                                <Nav defaultActiveKey="/dashboard" className="flex-column">
                                    <Nav.Link to="/dashboard">Dashboard</Nav.Link>
                                    <Nav.Link to="/subscribe">My Subscription</Nav.Link>
                                    <Nav.Link className='Active' to="/mycourse">My Course</Nav.Link>
                                    <Nav.Link to="/orderhistory">Order History</Nav.Link>
                                    <Nav.Link to="/wishlist">Wishlist</Nav.Link>
                                    <Nav.Link to="/profile">My Profile</Nav.Link>
                                    <Nav.Link to="">Log Out</Nav.Link>



                                </Nav>

                            </div>
                        </div>
                        <div className='col-lg-9 col-md-8 col-sm-7'>
                            <div className='row'>
                                <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12'>

                                    <div className='MainCOurSEdIV CouR Comp'>
                                        <div className="couRSeImg">
                                            <img
                                                src={c1}
                                                alt="Hepatology"
                                                className="img-fluid oragnsTop categriesImg"
                                            />
                                        </div>
                                        <div className='COurseConTEnt Cour'>
                                            <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
                                            <span className='SAPnHr'><hr /></span>
                                            <div className='SCetionCourse d-flex CouR'>
                                                <p><i><AiFillStar /></i> 4.9 (250)</p>
                                                <h6>Intermediate</h6>
                                                <h6 className='text-end'>02h 20m</h6>
                                            </div>

                                            <div className='statUS mt-2 mb-2'>
                                                <div className='d-flex'>
                                                    <h6>Completed</h6>
                                                    <h6 className='Stastu'>60%</h6>
                                                </div>
                                                <ProgressBar now={60} />
                                            </div>
                                            <p>Course validity : 20 days left</p>

                                        </div>
                                    </div>
                                    <div className='ButtONComp d-flex mb-3'>
                                        <button className='BTNCerti'>Download Certificate</button>
                                        <button className='BTNCerti one'>Assessment Test</button>
                                    </div>

                                </div>
                                <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12'>

                                    <div className='MainCOurSEdIV CouR Comp'>
                                        <div className="couRSeImg">
                                            <img
                                                src={c1}
                                                alt="Hepatology"
                                                className="img-fluid oragnsTop categriesImg"
                                            />
                                        </div>
                                        <div className='COurseConTEnt Cour'>
                                            <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
                                            <span className='SAPnHr'><hr /></span>
                                            <div className='SCetionCourse d-flex CouR'>
                                                <p><i><AiFillStar /></i> 4.9 (250)</p>
                                                <h6>Intermediate</h6>
                                                <h6 className='text-end'>02h 20m</h6>
                                            </div>

                                            <div className='statUS mt-2 mb-2'>
                                                <div className='d-flex'>
                                                    <h6>Completed</h6>
                                                    <h6 className='Stastu'>60%</h6>
                                                </div>
                                                <ProgressBar now={60} />
                                            </div>
                                            <p>Course validity : 20 days left</p>

                                        </div>
                                    </div>
                                    <div className='ButtONComp d-flex mb-3'>
                                        <button className='BTNCerti'>Download Certificate</button>
                                        <button className='BTNCerti one'>Assessment Test</button>
                                    </div>

                                </div>
                                <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12'>

                                    <div className='MainCOurSEdIV CouR Comp'>
                                        <div className="couRSeImg">
                                            <img
                                                src={c1}
                                                alt="Hepatology"
                                                className="img-fluid oragnsTop categriesImg"
                                            />
                                        </div>
                                        <div className='COurseConTEnt Cour'>
                                            <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
                                            <span className='SAPnHr'><hr /></span>
                                            <div className='SCetionCourse d-flex CouR'>
                                                <p><i><AiFillStar /></i> 4.9 (250)</p>
                                                <h6>Intermediate</h6>
                                                <h6 className='text-end'>02h 20m</h6>
                                            </div>

                                            <div className='statUS mt-2 mb-2'>
                                                <div className='d-flex'>
                                                    <h6>Completed</h6>
                                                    <h6 className='Stastu'>100%</h6>
                                                </div>
                                                <ProgressBar now={100} />
                                            </div>
                                            <p>Course validity : 20 days left</p>

                                        </div>
                                    </div>
                                    <div className='ButtONComp d-flex mb-3'>
                                        <button className='BTNCerti'>Download Certificate</button>
                                        <button className='BTNCerti one'>Assessment Test</button>
                                    </div>

                                </div>
                                <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12'>

                                    <div className='MainCOurSEdIV CouR Comp'>
                                        <div className="couRSeImg">
                                            <img
                                                src={c1}
                                                alt="Hepatology"
                                                className="img-fluid oragnsTop categriesImg"
                                            />
                                        </div>
                                        <div className='COurseConTEnt Cour'>
                                            <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
                                            <span className='SAPnHr'><hr /></span>
                                            <div className='SCetionCourse d-flex CouR'>
                                                <p><i><AiFillStar /></i> 4.9 (250)</p>
                                                <h6>Intermediate</h6>
                                                <h6 className='text-end'>02h 20m</h6>
                                            </div>

                                            <div className='statUS mt-2 mb-2'>
                                                <div className='d-flex'>
                                                    <h6>Completed</h6>
                                                    <h6 className='Stastu'>80%</h6>
                                                </div>
                                                <ProgressBar now={80} />
                                            </div>
                                            <p>Course validity : 20 days left</p>

                                        </div>
                                    </div>
                                    <div className='ButtONComp d-flex mb-3'>
                                        <button className='BTNCerti'>Download Certificate</button>
                                        <button className='BTNCerti one'>Assessment Test</button>
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
export default Mycourse