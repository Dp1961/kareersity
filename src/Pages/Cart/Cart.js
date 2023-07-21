import React from 'react';
import './Cart.css'
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import { Link } from "react-router-dom";
import { FaAngleRight, FaTimes } from "react-icons/fa";
import Table from 'react-bootstrap/Table';
import c1 from "../../assets/images/course.png"
import { AiFillStar } from "react-icons/ai";
import courseimg from "../../assets/images/coursebanner.png"

const Cart = () => {
    return (
        <div className='CArtPAge'>
            <Header />
            <div className='PageHEaders'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='PageTi pt-5'>

                                <h2>Cart</h2>
                                <p><Link to="/">Home</Link> <i><FaAngleRight /></i><Link to="/about">Cart</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='CarTBOX pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-9 col-lg-9 col-md-12'>
                            <div className='CartTablE'>
                                <Table striped bordered hover >
                                    <thead>
                                        <tr>
                                            <th> </th>
                                            <th>Course</th>
                                            <th>Price</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><button className='BtnSub'><i><FaTimes/></i></button></td>
                                            <td>
                                                <div className='CartBOxMain'>
                                                    <div className='row'>
                                                        <div className='col-lg-3'>
                                                            <div className='BoXimG'>
                                                                <img src={c1} className='img-fluid'/>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-9'>
                                                            <div className='ConteNt'>
                                                                <h4>7 Reasons Why You Should Get A the certificate In Pharmacy</h4>
                                                                <div className='d-flex'>
                                                                    <p>By Sivaramakrishnan</p>
                                                                    <p>Intermediate</p>
                                                                    <p>English</p>
                                                                    <p>02h 20m</p>
                                                                    <p><i><AiFillStar/></i> 02h 20m</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><h4 className='Rate'>₹ 199</h4></td>
                                            
                                        </tr>
                                        <tr>
                                            <td><button className='BtnSub'><i><FaTimes/></i></button></td>
                                            <td>
                                                <div className='CartBOxMain'>
                                                    <div className='row'>
                                                        <div className='col-lg-3'>
                                                            <div className='BoXimG'>
                                                                <img src={c1} className='img-fluid'/>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-9'>
                                                            <div className='ConteNt'>
                                                                <h4>7 Reasons Why You Should Get A the certificate In Pharmacy</h4>
                                                                <div className='d-flex'>
                                                                    <p>By Sivaramakrishnan</p>
                                                                    <p>Intermediate</p>
                                                                    <p>English</p>
                                                                    <p>02h 20m</p>
                                                                    <p><i><AiFillStar/></i> 02h 20m</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><h4 className='Rate'>₹ 199</h4></td>
                                            
                                        </tr>
                                        <tr>
                                            <td><button className='BtnSub'><i><FaTimes/></i></button></td>
                                            <td>
                                                <div className='CartBOxMain'>
                                                    <div className='row'>
                                                        <div className='col-lg-3'>
                                                            <div className='BoXimG'>
                                                                <img src={c1} className='img-fluid'/>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-9'>
                                                            <div className='ConteNt'>
                                                                <h4>7 Reasons Why You Should Get A the certificate In Pharmacy</h4>
                                                                <div className='d-flex'>
                                                                    <p>By Sivaramakrishnan</p>
                                                                    <p>Intermediate</p>
                                                                    <p>English</p>
                                                                    <p>02h 20m</p>
                                                                    <p><i><AiFillStar/></i> 02h 20m</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><h4 className='Rate'>₹ 199</h4></td>
                                            
                                        </tr>
                                       
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-12 pt-5'>
                            <div className='SidePURBTn'>
                                <button className='BluEBtn'>Total <span>₹ 497 </span> </button><br></br>
                                <button className='grnBtn'>Check Out </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* image Section */}
            <div className='IMAgeSession  pb-5'>
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
export default Cart