import React from 'react';
import './Profile.css';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const Question = () => {
    return (
        <div className='ProFILE'>
            <Header />
            <div className='PageHEaders'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='PageTi pt-5'>

                                <h2>Question</h2>
                                <p><Link to="/">Home</Link> <i><FaAngleRight /></i><Link to="/question">Question</Link></p>
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
                                    <Nav.Link to="/dashboard">Dashboard</Nav.Link>
                                    <Nav.Link to="/subscribe">My Subscription</Nav.Link>
                                    <Nav.Link to="/mycourse">My Course</Nav.Link>
                                    <Nav.Link to="/orderhistory">Order History</Nav.Link>
                                    <Nav.Link to="/wishlist">Wishlist</Nav.Link>
                                    <Nav.Link to="/profile">My Profile</Nav.Link>
                                    <Nav.Link to="">Log Out</Nav.Link>



                                </Nav>

                            </div>
                        </div>
                        <div className='col-lg-9 col-md-8'>
                            <h4>7 Reasons Why You Should Get A the certificate In Pharmacy - Assessment</h4>
                            <div className='QUEstion mt-3'>
                                <form>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <p>1. Nunc eget sagittis ligula. Quisque ac hendrerit quam. Nam sed mi ut eros efficit.</p>
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-sm-12'>
                                            <input type="checkbox" value="Bike" />
                                            <label> 10 Quisq</label><br />
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-sm-12'>
                                            <input type="checkbox" value="Bike" />
                                            <label> 20 Quisq</label><br />
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-sm-12'>
                                            <input type="checkbox" value="Bike" />
                                            <label> 30 Quisq</label><br />
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-sm-12'>
                                            <input type="checkbox" value="Bike" />
                                            <label> 40 Quisq</label><br />
                                        </div>
                                    </div>
                                    <div className='row pt-3' >
                                        <div className='col-12'>
                                            <p>2. Nunc eget sagittis ligula. Quisque ac hendrerit quam. Nam sed mi ut eros efficit.</p>
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-sm-12'>
                                            <input type="checkbox" value="Bike" />
                                            <label> 10 Quisq</label><br />
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-sm-12'>
                                            <input type="checkbox" value="Bike" />
                                            <label> 20 Quisq</label><br />
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-sm-12'>
                                            <input type="checkbox" value="Bike" />
                                            <label> 30 Quisq</label><br />
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-sm-12'>
                                            <input type="checkbox" value="Bike" />
                                            <label> 40 Quisq</label><br />
                                        </div>
                                    </div>
                                    <div className='row pt-3'>
                                        <div className='col-lg-3 col-md-6 col-sm-12'>
                                            <p>3. Nunc eget sagittis ligula. Quisque ac hendrerit quam. Nam sed mi ut eros efficit.</p>
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-sm-12'>
                                            <input type="checkbox" value="Bike" />
                                            <label> 10 Quisq</label><br />
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-sm-12'>
                                            <input type="checkbox" value="Bike" />
                                            <label> 20 Quisq</label><br />
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-sm-12'>
                                            <input type="checkbox" value="Bike" />
                                            <label> 30 Quisq</label><br />
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-sm-12'>
                                            <input type="checkbox" value="Bike" />
                                            <label> 40 Quisq</label><br />
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='Btn-Grn'>
                                            <button>Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Question