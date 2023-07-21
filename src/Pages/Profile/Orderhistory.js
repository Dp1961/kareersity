import React from 'react';
import './Profile.css';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';


const Orderhistory = () => {
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
                        <div className='col-lg-3 col-md-12'>
                            <div className='SIdeBar'>
                                <Nav defaultActiveKey="/dashboard" className="flex-column">
                                    <Nav.Link to="/dashboard">Dashboard</Nav.Link>
                                    <Nav.Link to="/subscribe">My Subscription</Nav.Link>
                                    <Nav.Link to="/mycourse">My Course</Nav.Link>
                                    <Nav.Link className='Active' to="">Order History</Nav.Link>
                                    <Nav.Link to="/wishlist">Wishlist</Nav.Link>
                                    <Nav.Link to="/profile">My Profile</Nav.Link>
                                    <Nav.Link to="">Log Out</Nav.Link>
                                </Nav>

                            </div>
                        </div>
                        <div className='col-lg-9 col-md-12'>
                            <div className='OrderTABle'>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Category</th>
                                            <th>Course</th>
                                            <th>Date</th>
                                            <th>Rate</th>
                                            <th>Invoice</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#5478595</td>
                                            <td>International Business</td>
                                            <td>7 Reasons Why You Should Get A the certificate In Pharmacy</td>
                                            <td>22 - Jan - 2023</td>
                                            <td>₹ 1969</td>
                                            <td><button className='DOwnLoaDBtN'><i><AiOutlineDownload/></i></button></td>
                                        </tr>
                                        <tr>
                                            <td>#5478595</td>
                                            <td>International Business</td>
                                            <td>7 Reasons Why You Should Get A the certificate In Pharmacy</td>
                                            <td>22 - Jan - 2023</td>
                                            <td>₹ 1969</td>
                                            <td><button className='DOwnLoaDBtN'><i><AiOutlineDownload/></i></button></td>
                                        </tr>
                                        <tr>
                                            <td>#5478595</td>
                                            <td>International Business</td>
                                            <td>7 Reasons Why You Should Get A the certificate In Pharmacy</td>
                                            <td>22 - Jan - 2023</td>
                                            <td>₹ 1969</td>
                                            <td><button className='DOwnLoaDBtN'><i><AiOutlineDownload/></i></button></td>
                                        </tr>
                                        <tr>
                                            <td>#5478595</td>
                                            <td>International Business</td>
                                            <td>7 Reasons Why You Should Get A the certificate In Pharmacy</td>
                                            <td>22 - Jan - 2023</td>
                                            <td>₹ 1969</td>
                                            <td><button className='DOwnLoaDBtN'><i><AiOutlineDownload/></i></button></td>
                                        </tr>
                                        
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Orderhistory