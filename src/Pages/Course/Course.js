import React from 'react';
import './Course.css'
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import c1 from "../../assets/images/course.png"
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { HiChevronDoubleRight } from "react-icons/hi";
import { BsFillSuitHeartFill } from "react-icons/bs";

const Course = () => {
    return (
        <div className='CoUrse'>
            <Header />
            <div className='CouRSE PAGE'>
                <div className='PageHEaders'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-7'>
                                <div className='PageTi pt-5'>

                                    <h2>Course</h2>
                                    <p><Link to="/">Home</Link> <i><FaAngleRight /></i><Link to="/course">Course</Link></p>
                                </div>
                            </div>
                            <div className='col-5 pt-5'>
                                <div className='SoRtForm'>
                                <form >
                                    <label for="cars">Sort by</label><br></br>
                                    <select >
                                        <option value="">Default</option>
                                        <option value="">A to Z</option>
                                        <option value="">Z to A</option>
                                        <option value="">Low to High</option>
                                        <option value="">High to Low</option>
                                    </select>
                                   
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='CORseFilter'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3 col-md-4 col-sm-12'>
                                <div className='FIlTcou'>
                                    <h4>Categories</h4>
                                    <hr></hr>
                                    <form>
                                        <div className='FILFoRm d-flex'>

                                            <input type="checkbox" />
                                            <label > industry Overview</label><br />
                                            {/* <p>58</p> */}
                                        </div>
                                        <div className='FILFoRm d-flex'>
                                            <input type="checkbox" />
                                            <label > R&D</label><br />
                                            {/* <p>58</p> */}
                                        </div>
                                        <div className='FILFoRm d-flex'>
                                            <input type="checkbox" />
                                            <label > Manufacturing </label><br />
                                            {/* <p>58</p> */}
                                        </div>
                                        <div className='FILFoRm d-flex'>
                                            <input type="checkbox" />
                                            <label >Sales</label><br />
                                            {/* <p>58</p> */}
                                        </div>
                                        <div className='FILFoRm d-flex'>
                                            <input type="checkbox" />
                                            <label > Marketing</label><br />
                                            {/* <p>58</p> */}
                                        </div>
                                        <div className='FILFoRm d-flex'>
                                            <input type="checkbox" />
                                            <label > International Business</label><br />
                                            {/* <p>58</p> */}
                                        </div>
                                        <div className='FILFoRm d-flex'>
                                            <input type="checkbox" />
                                            <label >Soft Skills</label><br />
                                            {/* <p>58</p> */}
                                        </div>
                                        <div className='FILFoRm d-flex'>
                                            <input type="checkbox" />
                                            <label >Supply Chain</label><br />
                                            {/* <p>58</p> */}
                                        </div>
                                        <div className='FILFoRm d-flex'>
                                            <input type="checkbox" />
                                            <label >Allied Industries</label><br />
                                            {/* <p>58</p> */}
                                        </div>
                                        <h4>Price</h4>
                                        <hr></hr>
                                        <div className='FILFoRm d-flex'>

                                            <input type="checkbox" />
                                            <label > All</label><br />
                                            {/* <p>58</p> */}
                                        </div>
                                        <div className='FILFoRm d-flex'>
                                            <input type="checkbox" />
                                            <label >Free</label><br />
                                            {/* <p>58</p> */}
                                        </div>
                                        <div className='FILFoRm d-flex'>
                                            <input type="checkbox" />
                                            <label > Paid </label><br />
                                            {/* <p>58</p> */}
                                        </div>
                                        <h4>Levels</h4>
                                        <hr></hr>
                                        <div className='FILFoRm d-flex'>

                                            <input type="checkbox" />
                                            <label > Beginner</label><br />
                                            {/* <p>58</p> */}
                                        </div>
                                        <div className='FILFoRm d-flex'>
                                            <input type="checkbox" />
                                            <label >Intermediate</label><br />
                                            {/* <p>58</p> */}
                                        </div>
                                        <div className='FILFoRm d-flex'>
                                            <input type="checkbox" />
                                            <label > Advanced </label><br />
                                            {/* <p>58</p> */}
                                        </div>


                                    </form>

                                </div>
                            </div>
                            <div className='col-lg-9 col-md-8 col-sm-12'>
                                <div className='row'>
                                    <div className='col-xl-4 col-lg-6 col-md-10 col-sm-12'>
                                        <div className='FIlTcou RES'>
                                            <div className='MainCOurSEdIV CouR'>
                                                <div className="couRSeImg">
                                                    <img
                                                        src={c1}
                                                        alt="Hepatology"
                                                        className="img-fluid oragnsTop categriesImg"
                                                    />
                                                </div>
                                                <div className='COurseConTEnt Cour'>
                                                    <h5><Link to="/course-detail">Grow Personal pharmacist Security Thinking & Principles</Link></h5>
                                                    <span className='SAPnHr'><hr /></span>
                                                    <div className='SCetionCourse d-flex CouR'>
                                                        <h4>FREE</h4>
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
                                                        <Link to="/"> <i><BsFillSuitHeartFill /></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-4 col-lg-6 col-md-10 col-sm-12'>
                                        <div className='FIlTcou RES'>
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
                                                        <h4>FREE</h4>
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
                                                        <Link to="/"> <i><BsFillSuitHeartFill /></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-4 col-lg-6 col-md-10 col-sm-12'>
                                        <div className='FIlTcou RES'>
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
                                                        <h4>FREE</h4>
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
                                                        <Link to="/"> <i><BsFillSuitHeartFill /></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-4 col-lg-6 col-md-10 col-sm-12'>
                                        <div className='FIlTcou RES'>
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
                                                        <h4>FREE</h4>
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
                                                        <Link to="/"> <i><BsFillSuitHeartFill /></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-4 col-lg-6 col-md-10 col-sm-12'>
                                        <div className='FIlTcou RES'>
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
                                                        <h4>FREE</h4>
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
                                                        <Link to="/"> <i><BsFillSuitHeartFill /></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-4 col-lg-6 col-md-10 col-sm-12'>
                                        <div className='FIlTcou RES'>
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
                                                        <h4>FREE</h4>
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
                                                        <Link to="/"> <i><BsFillSuitHeartFill /></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-4 col-lg-6 col-md-10 col-sm-12'>
                                        <div className='FIlTcou RES'>
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
                                                        <h4>FREE</h4>
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
                                                        <Link to="/"> <i><BsFillSuitHeartFill /></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-4 col-lg-6 col-md-10 col-sm-12'>
                                        <div className='FIlTcou RES'>
                                            <div className='MainCOurSEdIV CouR'>
                                                <div className="couRSeImg">
                                                    <img
                                                        src={c1}
                                                        alt="Hepatology"
                                                        className="img-fluid oragnsTop categriesImg"
                                                    />
                                                </div>
                                                <div className='COurseConTEnt Cour'>
                                                    <h5><Link to="/">Grow Personal pharmacist Security Thinking & Principles</Link></h5>
                                                    <span className='SAPnHr'><hr /></span>
                                                    <div className='SCetionCourse d-flex CouR'>
                                                        <h4>FREE</h4>
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
                                                        <Link to="/"> <i><BsFillSuitHeartFill /></i></Link>
                                                    </div>
                                                </div>
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
export default Course