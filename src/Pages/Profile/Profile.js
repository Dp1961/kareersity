import React from 'react';
import './Profile.css';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { AiFillCamera } from "react-icons/ai";
import Nav from 'react-bootstrap/Nav';
import abtGirl from '../../assets/images/abtGirl.png';

const Profile = () => {
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
                                    <Nav.Link to="/dashboard">Dashboard</Nav.Link>
                                    <Nav.Link to="/subscribe">My Subscription</Nav.Link>
                                    <Nav.Link to="/mycourse">My Course</Nav.Link>
                                    <Nav.Link to="/orderhistory">Order History</Nav.Link>
                                    <Nav.Link to="/wishlist">Wishlist</Nav.Link>
                                    <Nav.Link className='Active' to="/profile">My Profile</Nav.Link>
                                    <Nav.Link to="">Log Out</Nav.Link>
                                </Nav>

                            </div>
                        </div>
                        <div className='col-lg-9 col-md-8 col-sm-12'>
                            <div className='ProFileForM'>
                                <form>
                                    <div className='row'>
                                        <div className='col-12'>
                                        <div className='ProFi1'>
                                        {/* <input type="file" id="imgupload" style={"display:none"}/>  */}
                                                <i><AiFillCamera/></i>
                                               <img src={abtGirl} className='img-fluid'/>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='ProFi1'>
                                                <h4>Personal Information</h4>
                                            </div>

                                        </div>
                                        <div className='col-12 d-flex'>
                                            <div className='ProFi1'>


                                                <input type="radio" />
                                                <label>Student</label>

                                                <input type="radio" />
                                                <label >Working Professional</label>

                                            </div>
                                            <button>Edit</button>
                                        </div>

                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='ProFi'>
                                                <label>Name</label><br />
                                                <input type='text' placeholder='Name' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className='ProFi'>
                                                <label>Email Address</label><br />
                                                <input type='text' placeholder='Email Address' />
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className='ProFi'>
                                                <label>Mobile Number</label><br />
                                                <input type='text' placeholder='Mobile Number' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='ProFiBtn'>
                                                <button type='submit'>Save</button>
                                                <hr />
                                            </div>

                                        </div>
                                    </div>


                                    <div className='row'>

                                        <div className='col-12 d-flex'>
                                            <div className='ProFi1'>
                                                <h4>Password Information</h4>
                                            </div>
                                            <button>Edit</button>
                                        </div>

                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='ProFi'>
                                                <label>Current Password</label><br />
                                                <input type='text' placeholder='*****' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className='ProFi'>
                                                <label>New Password</label><br />
                                                <input type='text' placeholder='*****' />
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className='ProFi'>
                                                <label>Conform Password</label><br />
                                                <input type='text' placeholder='*****' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='ProFiBtn'>
                                                <button type='submit'>Save</button>
                                                <hr />
                                            </div>

                                        </div>
                                    </div>

                                    <div className='row'>

                                        <div className='col-12 d-flex'>
                                            <div className='ProFi1'>
                                                <h4>Address Information</h4>
                                            </div>
                                            <button>Edit</button>
                                        </div>

                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='ProFi'>
                                                <label>Address</label><br />
                                                <input type='text' placeholder='Address' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className='ProFi'>
                                                <label>Pincode</label><br />
                                                <input type='text' placeholder='Pincode' />
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className='ProFi'>
                                                <label>City</label><br />
                                                <select >
                                                    <option >City</option>
                                                    <option value="c1">C1</option>
                                                    <option value="c2">C2</option>
                                                    <option value="c3">C3</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className='ProFi'>
                                                <label>State</label><br />
                                                <select >
                                                    <option >State</option>
                                                    <option value="c1">C1</option>
                                                    <option value="c2">C2</option>
                                                    <option value="c3">C3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className='ProFi'>
                                                <label>Country</label><br />
                                                <select >
                                                    <option >Country</option>
                                                    <option value="c1">C1</option>
                                                    <option value="c2">C2</option>
                                                    <option value="c3">C3</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='ProFiBtn'>
                                                <button type='submit'>Save</button>
                                                <hr />
                                            </div>

                                        </div>
                                    </div>


                                    <div className='row'>

                                        <div className='col-12 d-flex'>
                                            <div className='ProFi1'>
                                                <h4>Academic Information</h4>
                                            </div>
                                            <button>Edit</button>
                                        </div>

                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>

                                            <div className='ProFi'>
                                                <label>Name of the College</label><br />
                                                <select >
                                                    <option >Others</option>
                                                    <option value="c1">C1</option>
                                                    <option value="c2">C2</option>
                                                    <option value="c3">C3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='ProFi'>
                                                <label>Address</label><br />
                                                <input type='text' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-4 col-sm-12'>
                                            <div className='ProFi'>
                                                <label>Year of the College</label><br />
                                                <select >
                                                    <option >Year</option>
                                                    <option value="c1">1st Year</option>
                                                    <option value="c2">2nd Year</option>
                                                    <option value="c3">3rd Year</option>
                                                    <option value="c3">4th Year</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-4 col-sm-12'>
                                            <div className='ProFi'>
                                                <label>City</label><br />
                                                <input type='text' placeholder='City' />
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-4 col-sm-12'>
                                            <div className='ProFi'>
                                                <label>Pincode</label><br />
                                                <input type='text' placeholder='Pincode' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>

                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='ProFi'>
                                                <label>Degree of Stream</label><br />
                                                <select >
                                                    <option >Others</option>
                                                    <option value="c1">C1</option>
                                                    <option value="c2">C2</option>
                                                    <option value="c3">C3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='ProFi'>
                                                <label>Pincode</label><br />
                                                <input type='text' placeholder='Pincode' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='ProFiBtn'>
                                                <button type='submit'>Save</button>
                                                <hr />
                                            </div>

                                        </div>
                                    </div>


                                    <div className='row'>

                                        <div className='col-12 d-flex'>
                                            <div className='ProFi1'>
                                                <h4>Professional Information</h4>
                                            </div>
                                            <button>Edit</button>
                                        </div>

                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='ProFi'>
                                                <label>Name of the Company</label><br />
                                                <input type='text' placeholder='Name of the Company' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className='ProFi'>
                                                <label>Designation</label><br />
                                                <input type='text' placeholder='Designation' />
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                        <div className='ProFi'>
                                                <label>Total No of Experience</label><br />
                                                <input type='text' placeholder='Total No of Experience' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className='ProFi'>
                                                <label>Degree of Stream</label><br />
                                                <select >
                                                    <option >Others</option>
                                                    <option value="B.Pharm">B.Pharm</option>
                                                    <option value="D.Pharm">D.Pharm</option>
                                                    <option value="M.Pharm">M.Pharm</option>
                                                    <option value="M.Pharm">M.Pharm</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                        <div className='ProFi'>
                                                <label>Total No of Experience</label><br />
                                                <input type='text' placeholder='Total No of Experience' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-6'>
                                        <div className='ProFi'>
                                                <label>City</label><br />
                                                <input type='text' placeholder='City' />
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                        <div className='ProFi'>
                                                <label>Pincode</label><br />
                                                <input type='text' placeholder='Pincode' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='ProFiBtn'>
                                                <button type='submit'>Save</button>
                                               
                                            </div>

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
export default Profile