import React from 'react';
import './Profile.css';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
import c1 from "../../assets/images/course.png"
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { HiChevronDoubleRight } from "react-icons/hi";


const Wishlist = () => {
    return (
        <div className='ProFILE'>
            <Header />
            <div className='PageHEaders'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='PageTi pt-5'>

                                <h2>Wishlist</h2>
                                <p><Link to="/">Home</Link> <i><FaAngleRight /></i><Link to="/wishlist">Wishlist</Link></p>
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
                                    <Nav.Link to="/profile">Dashboard</Nav.Link>
                                    <Nav.Link to="/subscribe">My Subscription</Nav.Link>
                                    <Nav.Link to="/mycourse">My Course</Nav.Link>
                                    <Nav.Link to="/orderhistory">Order History</Nav.Link>
                                    <Nav.Link className='Active' to="/wishlist">Wishlist</Nav.Link>
                                    <Nav.Link to="/profile">My Profile</Nav.Link>
                                    <Nav.Link to="">Log Out</Nav.Link>



                                </Nav>

                            </div>
                        </div>
                        <div className='col-lg-9 col-md-8 col-sm-12'>
                            <div className='row'>
                                <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12'>

                                    <div className='MainCOurSEdIV CouR'>
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
                                                <h4>₹ 199</h4>
                                                <h6>Intermediate</h6>
                                                <h6 className='text-end'>02h 20m</h6>
                                            </div>
                                            <span className='SAPnHr'><hr /></span>
                                            <div className='FinAlDIv d-flex CouR'>
                                                <p><i><AiFillStar /></i> 4.9 (250)</p>
                                                <Link to="/">Learn More <i><HiChevronDoubleRight /></i></Link>
                                            </div>
                                            <span className='SAPnHr'><hr /></span>
                                            <div className='FinAlDIv d-flex CouR SAP'>
                                                <p>By Rajesh Kumar & Sivaramakrishnan</p>

                                                <Link to="/" className='ADdcaRT'> <i className='ICONS pt-2'><AiOutlineShoppingCart /></i> Add To Cart </Link>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12'>

                                    <div className='MainCOurSEdIV CouR'>
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
                                                <h4>₹ 199</h4>
                                                <h6>Intermediate</h6>
                                                <h6 className='text-end'>02h 20m</h6>
                                            </div>
                                            <span className='SAPnHr'><hr /></span>
                                            <div className='FinAlDIv d-flex CouR'>
                                                <p><i><AiFillStar /></i> 4.9 (250)</p>
                                                <Link to="/">Learn More <i><HiChevronDoubleRight /></i></Link>
                                            </div>
                                            <span className='SAPnHr'><hr /></span>
                                            <div className='FinAlDIv d-flex CouR SAP'>
                                                <p>By Rajesh Kumar & Sivaramakrishnan</p>

                                                <Link to="/" className='ADdcaRT'> <i className='ICONS pt-2'><AiOutlineShoppingCart /></i> Add To Cart </Link>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12'>

                                    <div className='MainCOurSEdIV CouR'>
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
                                                <h4>₹ 199</h4>
                                                <h6>Intermediate</h6>
                                                <h6 className='text-end'>02h 20m</h6>
                                            </div>
                                            <span className='SAPnHr'><hr /></span>
                                            <div className='FinAlDIv d-flex CouR'>
                                                <p><i><AiFillStar /></i> 4.9 (250)</p>
                                                <Link to="/">Learn More <i><HiChevronDoubleRight /></i></Link>
                                            </div>
                                            <span className='SAPnHr'><hr /></span>
                                            <div className='FinAlDIv d-flex CouR SAP'>
                                                <p>By Rajesh Kumar & Sivaramakrishnan</p>

                                                <Link to="/" className='ADdcaRT'> <i className='ICONS pt-2'><AiOutlineShoppingCart /></i> Add To Cart </Link>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12'>

                                    <div className='MainCOurSEdIV CouR'>
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
                                                <h4>₹ 199</h4>
                                                <h6>Intermediate</h6>
                                                <h6 className='text-end'>02h 20m</h6>
                                            </div>
                                            <span className='SAPnHr'><hr /></span>
                                            <div className='FinAlDIv d-flex CouR'>
                                                <p><i><AiFillStar /></i> 4.9 (250)</p>
                                                <Link to="/">Learn More <i><HiChevronDoubleRight /></i></Link>
                                            </div>
                                            <span className='SAPnHr'><hr /></span>
                                            <div className='FinAlDIv d-flex CouR SAP'>
                                                <p>By Rajesh Kumar & Sivaramakrishnan</p>

                                                <Link to="/" className='ADdcaRT'> <i className='ICONS pt-2'><AiOutlineShoppingCart /></i> Add To Cart </Link>

                                            </div>
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
export default Wishlist