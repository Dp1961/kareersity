import React from 'react';
import './Checkout.css'
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import c1 from "../../assets/images/course.png"
import { AiFillStar } from "react-icons/ai";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const Checkout = () => {
    return (
        <div className='ChECkoutPage'>
            <Header />
            <div className='PageHEaders'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='PageTi pt-5'>
                                <h2>Check Out</h2>
                                <p><Link to="/">Home</Link> <i><FaAngleRight /></i><Link to="/checkout">Check out</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='CheCkBox pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-9 col-md-12 col-sm-12'>
                            <div className='BillINg'>
                                <h4>Billing details</h4>
                                <div className='BillForm mt-3 mb-4'>
                                    <form>
                                        <div className='row'>
                                            <div className='col-4'>
                                                <input className='FormBilling' type='text' placeholder='Name' />
                                            </div>
                                            <div className='col-4'>
                                                <input className='FormBilling' type='email' placeholder='Email Address' />
                                            </div>
                                            <div className='col-4'>
                                                <input className='FormBilling' type='text' placeholder='Mobile Number' />
                                            </div>
                                            <div className='col-4'>
                                                <select>
                                                    <option>Country</option>
                                                    <option value="">Country 1</option>
                                                    <option value="">Country 1</option>
                                                    <option value="">Country 1</option>
                                                </select>
                                            </div>
                                            <div className='col-4'>
                                                <select>
                                                    <option>State</option>
                                                    <option value="">State 1</option>
                                                    <option value="">State 1</option>
                                                    <option value="">State 1</option>
                                                </select>
                                            </div>
                                            <div className='col-4'>
                                                <select>
                                                    <option>City</option>
                                                    <option value="">City 1</option>
                                                    <option value="">City 1</option>
                                                    <option value="">City 1</option>
                                                </select>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                                <h4>Course</h4>
                                <div className='BillCouRSe'>
                                    <div className='CartBOxMain'>
                                        <div className='row'>
                                            <div className='col-lg-3'>
                                                <div className='BoXimG'>
                                                    <img src={c1} className='img-fluid' />
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
                                                        <p><i><AiFillStar /></i> 02h 20m</p>

                                                    </div>
                                                    <h4 className='Rate'>₹ 199</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='BillCouRSe'>
                                    <div className='CartBOxMain'>
                                        <div className='row'>
                                            <div className='col-lg-3'>
                                                <div className='BoXimG'>
                                                    <img src={c1} className='img-fluid' />
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
                                                        <p><i><AiFillStar /></i> 02h 20m</p>

                                                    </div>
                                                    <h4 className='Rate'>₹ 199</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='BillCouRSe'>
                                    <div className='CartBOxMain'>
                                        <div className='row'>
                                            <div className='col-lg-3'>
                                                <div className='BoXimG'>
                                                    <img src={c1} className='img-fluid' />
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
                                                        <p><i><AiFillStar /></i> 02h 20m</p>

                                                    </div>
                                                    <h4 className='Rate'>₹ 199</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12 pt-5'>
                            <div className='row  blUEBack'>
                                <div className='col-lg-8 col-md-8 col-sm-8'>
                                    <div className='CheckBillIng'>
                                        <h6>SubTotal</h6>
                                    </div>

                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-4 '>
                                    <div className='CheckBillIng text-end'>
                                        <h6>₹ 497</h6>
                                    </div>


                                </div>
                                <span className='Dummy'><hr /></span>
                                <div className='col-12'>
                                    <div className='CheckBillIng'>
                                        <h6>Promo Code</h6>
                                    </div>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Recipient's username"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Text id="basic-addon2">Apply</InputGroup.Text>
                                    </InputGroup>
                                </div>

                                <div className='col-lg-8 col-md-8 col-sm-8'>
                                    <div className='CheckBillIng'>
                                        <h6>Discount</h6>
                                    </div>

                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-4 '>
                                    <div className='CheckBillIng text-end'>
                                        <h6> - ₹ 497</h6>
                                    </div>


                                </div>

                                <span className='Dummy'><hr /></span>

                                <div className='col-lg-8 col-md-8 col-sm-8'>
                                    <div className='CheckBillIng'>
                                        <h6>GST</h6>
                                    </div>

                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-4 '>
                                    <div className='CheckBillIng text-end'>
                                        <h6>₹ 50</h6>
                                    </div>


                                </div>

                                <span className='Dummy'><hr /></span>

                                <div className='col-lg-8 col-md-8 col-sm-8'>
                                    <div className='CheckBillIng'>
                                        <h6>Total</h6>
                                    </div>

                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-4 '>
                                    <div className='CheckBillIng text-end'>
                                        <h6>₹ 500</h6>
                                    </div>


                                </div>



                            </div>


                            <div className='SidePURBTn mt-3'>

                                <button className='grnBtn'>Check Out </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Checkout