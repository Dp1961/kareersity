import React from 'react';
import './Profile.css';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
import { GiOpenBook,GiTrophyCup} from "react-icons/gi";
import { SlBadge} from "react-icons/sl";

import { RiComputerLine } from "react-icons/ri";

const Dashboard = () => {
    return (
        <div className='ProFILE'>
            <Header />
            <div className='PageHEaders'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='PageTi pt-5'>

                                <h2>Profile</h2>
                                <p><Link to="/">Home</Link> <i><FaAngleRight /></i><Link to="/profile">Profile</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ProfileTabs pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-4 col-sm-12'>
                            <div className='SIdeBar'>
                                <Nav defaultActiveKey="/dashboard" className="flex-column">
                                    <Nav.Link className='Active' to="/dashboard">Dashboard</Nav.Link>
                                    <Nav.Link to="/subscribe">My Subscription</Nav.Link>
                                    <Nav.Link to="/mycourse">My Course</Nav.Link>
                                    <Nav.Link to="/orderhistory">Order History</Nav.Link>
                                    <Nav.Link to="/wishlist">Wishlist</Nav.Link>
                                    <Nav.Link to="/profile">My Profile</Nav.Link>
                                    <Nav.Link to="">Log Out</Nav.Link>



                                </Nav>

                            </div>
                        </div>
                        <div className='col-lg-9 col-md-8 col-sm-12'>
                            <div className='Direct d-flex'>
                            <div className='GrnBGTemp'>
                                <h5>Complete your profile</h5>
                                <p>Curabitur aliquet eros sed lorem egestas euismod. Suspendisse accumsan pretium ante, in vehicula ante scelerisque vel.Curabitur aliquet eros sed lorem egestas euismod. Suspendisse accumsan pretium ante, in vehicula ante scelerisque vel. </p>
                                </div>
                                <div class="progressss yellow">
                                    <span class="progress-left">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <span class="progress-right">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <div class="progress-value">50%</div>
                                </div>
                           
                            </div>
                            <div className='CardDasH mt-3'>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-6 col-sm-6'>
                                        <div className='blueBox'>
                                            <div className='BookIcon mb-2'>
                                            <i>
                                                <GiOpenBook/>
                                            </i>
                                            </div>
                                           
                                            <h3>70</h3>
                                            <h6>Enrolled Courses</h6>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-6'>
                                        <div className='blueBox orange'>
                                            <div className='BookIcon orange mb-2'>
                                            <i>
                                                <RiComputerLine/>
                                            </i>
                                            </div>
                                           
                                            <h3>10</h3>
                                            <h6>Active Courses</h6>
                                        </div>
                                    </div>
                                    
                                    <div className='col-lg-4 col-md-6 col-sm-6'>
                                        <div className='blueBox grn'>
                                            <div className='BookIcon grn mb-2'>
                                            <i>
                                                <GiTrophyCup/>
                                            </i>
                                            </div>
                                           
                                            <h3>10</h3>
                                            <h6>Completed Courses</h6>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-6'>
                                        <div className='blueBox vilot'>
                                            <div className='BookIcon vilot mb-2'>
                                            <i>
                                                <SlBadge/>
                                            </i>
                                            </div>
                                           
                                            <h3>10</h3>
                                            <h6>Completed Courses</h6>
                                        </div>
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
export default Dashboard