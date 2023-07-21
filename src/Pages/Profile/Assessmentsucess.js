import React from 'react';
import './Profile.css';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { HiThumbUp } from "react-icons/hi";
import Nav from 'react-bootstrap/Nav';

const Assessmentsucess = () => {
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
                        <div className='col-lg-3 col-md-3 col-sm-5'>
                            <div className='SIdeBar'>
                            <Nav defaultActiveKey="/dashboard" className="flex-column">
                                <Nav.Link  to="/dashboard">Dashboard</Nav.Link>
                                <Nav.Link to="/subscribe">My Subscription</Nav.Link>
                                <Nav.Link to="/mycourse">My Course</Nav.Link>
                                <Nav.Link to="/orderhistory">Order History</Nav.Link>
                                <Nav.Link to="/wishlist">Wishlist</Nav.Link>
                                <Nav.Link  to="/profile">My Profile</Nav.Link>
                                <Nav.Link to="">Log Out</Nav.Link>




                            </Nav>

                            </div>
                        </div>
                        <div className='col-lg-9 col-md-9'>
                            <div className='SuceSSBox'>
                                <i><HiThumbUp/></i>
                                <h4>Thanks for attending assessment</h4>
                                <h5>YOUR SCORE IS 14 / 15</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Assessmentsucess