import React from 'react';
import './Course.css'
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { AiFillStar, AiOutlineStar, AiFillLock } from "react-icons/ai";
import { BsPlayCircle,BsPlayFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import certificate from '../../assets/images/kareersity-certificate.png';
import imgdummy from '../../assets/images/imgdummy.png';
import ProgressBar from 'react-bootstrap/ProgressBar';
import c1 from "../../assets/images/course.png"
import Accordion from 'react-bootstrap/Accordion';
import { HiChevronDoubleRight } from "react-icons/hi";

const Courselist = () => {
    return (
        <div className='CouREseLIstPA'>
            <Header />
            <div className='PageHEaders COUrseLi'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-12'>
                            <div className='PageTi  pt-5 pb-5'>
                                <p><Link to="/">Home</Link> <i><FaAngleRight /></i><Link to="/course">Course</Link><i><FaAngleRight /></i><Link to="/course">Industry Overview</Link><i><FaAngleRight /></i><Link to="/course">Grow Personal pharmacist Security Thinking & Principles</Link></p>
                                <h2>Grow Personal pharmacist Security Thinking & Principles</h2>
                                <p>Quisque ac sollicitudin libero, eget laoreet tellus. Quisque hendrerit, leo sit consequat accumsan, purus tortor iaculis est, nec semper metus tellus eget lectus.</p>
                                <h6 className='d-flex CL'><p>By Sivaramakrishnan</p><p>Intermediate</p><p>Premium</p></h6>
                                <h6 className='d-flex CL'><p><i><LiaCertificateSolid /></i>CERTIFIED COURSE</p><p className='star'>
                                    <i><AiFillStar /></i>
                                    <i><AiFillStar /></i>
                                    <i><AiFillStar /></i>
                                    <i><AiFillStar /></i>
                                    <i><AiFillStar /></i>
                                    4.9 ( 1550 Rating ) 14863 Students</p></h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='CorLiSt pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-12 '>
                            <div className='CoRTabS'>
                                <Tabs defaultActiveKey="first">
                                    <Tab eventKey="first" title="Overview">
                                        <div className='OveRView pt-4 pb-4'>
                                            <h4>Course description</h4>
                                            <p>Curabitur aliquet eros sed lorem egestas euismod. Suspendisse accumsan pretium ante, in vehicula ante scelerisque vel. Duis finibus id nibh a iaculis. Etiam vel purus lectus. Proin dictum imperdiet neque, eget condimentum arcu porta sed. Aenean interdum leo quis enim bibendum, nec imperdiet magna gravida. Maecenas faucibus justo at enim commodo fermentum. Vivamus ac odio id diam auctor facilisis sed at odio. Morbi mattis tortor libero, ac tempus lacus tristique ac. Quisque ultrices, turpis et facilisis tempor, libero augue accumsan nisl, eget suscipit quam est quis dolor. Sed maximus sed libero malesuada consequat. Nunc ut dapibus ligula, et mattis risus. In efficitur lorem ut neque tincidunt sodales.</p>
                                            <Link to="">Show More</Link>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="second" title="Instructor">
                                        <div className='OveRView pt-4 pb-4'>
                                            <h4>Course description</h4>
                                            <p>Curabitur aliquet eros sed lorem egestas euismod. Suspendisse accumsan pretium ante, in vehicula ante scelerisque vel. Duis finibus id nibh a iaculis. Etiam vel purus lectus. Proin dictum imperdiet neque, eget condimentum arcu porta sed. Aenean interdum leo quis enim bibendum, nec imperdiet magna gravida. Maecenas faucibus justo at enim commodo fermentum. Vivamus ac odio id diam auctor facilisis sed at odio. Morbi mattis tortor libero, ac tempus lacus tristique ac. Quisque ultrices, turpis et facilisis tempor, libero augue accumsan nisl, eget suscipit quam est quis dolor. Sed maximus sed libero malesuada consequat. Nunc ut dapibus ligula, et mattis risus. In efficitur lorem ut neque tincidunt sodales.</p>
                                            <Link to="">Show More</Link>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="third" title="Course is for">
                                        <div className='OveRView pt-4 pb-4'>
                                            <h4>Course description</h4>
                                            <p>Curabitur aliquet eros sed lorem egestas euismod. Suspendisse accumsan pretium ante, in vehicula ante scelerisque vel. Duis finibus id nibh a iaculis. Etiam vel purus lectus. Proin dictum imperdiet neque, eget condimentum arcu porta sed. Aenean interdum leo quis enim bibendum, nec imperdiet magna gravida. Maecenas faucibus justo at enim commodo fermentum. Vivamus ac odio id diam auctor facilisis sed at odio. Morbi mattis tortor libero, ac tempus lacus tristique ac. Quisque ultrices, turpis et facilisis tempor, libero augue accumsan nisl, eget suscipit quam est quis dolor. Sed maximus sed libero malesuada consequat. Nunc ut dapibus ligula, et mattis risus. In efficitur lorem ut neque tincidunt sodales.</p>
                                            <Link to="">Show More</Link>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="four" title="Course Includes">
                                        <div className='OveRView pt-4 pb-4'>
                                            <h4>Course description</h4>
                                            <p>Curabitur aliquet eros sed lorem egestas euismod. Suspendisse accumsan pretium ante, in vehicula ante scelerisque vel. Duis finibus id nibh a iaculis. Etiam vel purus lectus. Proin dictum imperdiet neque, eget condimentum arcu porta sed. Aenean interdum leo quis enim bibendum, nec imperdiet magna gravida. Maecenas faucibus justo at enim commodo fermentum. Vivamus ac odio id diam auctor facilisis sed at odio. Morbi mattis tortor libero, ac tempus lacus tristique ac. Quisque ultrices, turpis et facilisis tempor, libero augue accumsan nisl, eget suscipit quam est quis dolor. Sed maximus sed libero malesuada consequat. Nunc ut dapibus ligula, et mattis risus. In efficitur lorem ut neque tincidunt sodales.</p>
                                            <Link to="">Show More</Link>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="five" title="Ratings & Reviews">
                                        <div className='OveRView pt-4 pb-4'>
                                            <h4>Course description</h4>
                                            <p>Curabitur aliquet eros sed lorem egestas euismod. Suspendisse accumsan pretium ante, in vehicula ante scelerisque vel. Duis finibus id nibh a iaculis. Etiam vel purus lectus. Proin dictum imperdiet neque, eget condimentum arcu porta sed. Aenean interdum leo quis enim bibendum, nec imperdiet magna gravida. Maecenas faucibus justo at enim commodo fermentum. Vivamus ac odio id diam auctor facilisis sed at odio. Morbi mattis tortor libero, ac tempus lacus tristique ac. Quisque ultrices, turpis et facilisis tempor, libero augue accumsan nisl, eget suscipit quam est quis dolor. Sed maximus sed libero malesuada consequat. Nunc ut dapibus ligula, et mattis risus. In efficitur lorem ut neque tincidunt sodales.</p>
                                            <Link to="">Show More</Link>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                            <hr />
                            <div className='CLwhat'>
                                <h4>What you'll learn</h4>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-12'>
                                        <ul className='LearNList'>
                                            <li><i><TiTick /></i>Curabitur aliquet eros sed lorem egestas euismod.</li>
                                            <li><i><TiTick /></i>Curabitur aliquet eros sed lorem egestas euismod.</li>
                                            <li><i><TiTick /></i>Curabitur aliquet eros sed lorem egestas euismod.</li>
                                            <li><i><TiTick /></i>Curabitur aliquet eros sed lorem egestas euismod.</li>
                                            <li><i><TiTick /></i>Curabitur aliquet eros sed lorem egestas euismod.</li>
                                            <li><i><TiTick /></i>Curabitur aliquet eros sed lorem egestas euismod.</li>
                                        </ul>
                                    </div>
                                    <div className='col-lg-6 col-md-12'>
                                        <ul className='LearNList'>
                                            <li><i><TiTick /></i>Curabitur aliquet eros sed lorem egestas euismod.</li>
                                            <li><i><TiTick /></i>Curabitur aliquet eros sed lorem egestas euismod.</li>
                                            <li><i><TiTick /></i>Curabitur aliquet eros sed lorem egestas euismod.</li>
                                            <li><i><TiTick /></i>Curabitur aliquet eros sed lorem egestas euismod.</li>
                                            <li><i><TiTick /></i>Curabitur aliquet eros sed lorem egestas euismod.</li>
                                            <li><i><TiTick /></i>Curabitur aliquet eros sed lorem egestas euismod.</li>
                                        </ul>
                                    </div>
                                </div>


                            </div>
                            <hr />
                            <div className='ValUBCeR'>
                                <h4>Valuable certifications</h4>
                                <div className='row'>
                                    <div className='col-lg-5 col-md-4 col-sm-12 pt-2'>
                                        <div className='ValueImG '>
                                            <img src={certificate} className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className='col-lg-7 col-md-8 col-sm-12 pt-2'>
                                        <div className='ValuCoN'>
                                            <p>Curabitur aliquet eros sed lorem egestas euismod. Suspendisse accumsan pretium ante, in vehicula ante scelerisque vel.Curabitur aliquet eros sed lorem egestas euismod. Suspendisse accumsan pretium ante, in vehicula ante scelerisque vel.</p>
                                            <ul className='LearNList'>
                                                <li><i><TiTick /></i>Curabitur aliquet eros sed lorem egestas euismod.</li>
                                                <li><i><TiTick /></i>Curabitur aliquet eros sed lorem egestas euismod.</li>
                                                <li><i><TiTick /></i>Curabitur aliquet eros sed lorem egestas euismod.</li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <hr />
                            <div className='EDClist'>
                                <h4>Educator</h4>
                                <div className='EdConT mb-4'>
                                    <div className='row'>
                                        <div className='col-lg-3 col-md-12'>
                                            <div className='EDImG'>
                                                <img src={imgdummy} className='img-fluid' />
                                            </div>
                                        </div>
                                        <div className='col-lg-9 col-md-12'>
                                            <div className='EdConT'>
                                                <h4>S.SIVARAMAKRISHNAN</h4>
                                                <h6>Advanced Pharma Educator</h6>
                                                <div className='ECLD d-flex'>
                                                    <p><i><AiFillStar /></i> 4.9 ( 1550 Rating ) 14863 Students </p>
                                                    <p>2863 Review</p>
                                                    <p>16 Courses</p>
                                                </div>
                                                <p>Curabitur aliquet eros sed lorem egestas euismod. Suspendisse accumsan pret ante, in vehicula ante scelerisque vel. Duis finibus id nibh a iaculis.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className='OveRView pt-4 pb-4'>
                                <h4>Who this course is for</h4>
                                <p>Curabitur aliquet eros sed lorem egestas euismod. Suspendisse accumsan pretium ante, in vehicula ante scelerisque vel. Duis finibus id nibh a iaculis. Etiam vel purus lectus. Proin dictum imperdiet neque, eget condimentum arcu porta sed. Aenean interdum leo quis enim bibendum, nec imperdiet magna gravida. Maecenas faucibus justo at enim commodo fermentum. Vivamus ac odio id diam auctor facilisis sed at odio. Morbi mattis tortor libero, ac tempus lacus tristique ac. Quisque ultrices, turpis et facilisis tempor, libero augue accumsan nisl, eget suscipit quam est quis dolor. Sed maximus sed libero malesuada consequat. Nunc ut dapibus ligula, et mattis risus. In efficitur lorem ut neque tincidunt sodales.</p>
                                <Link to='/' >Show More</Link>
                            </div>
                            <hr />
                            <div className='ValuCoN'>
                                <h4>Course Includes</h4>
                                <div className='row'>
                                    <div className='col-6'>
                                        <ul className='LearNList'>
                                            <li><i><TiTick /></i>12 Hours on-demand video</li>
                                            <li><i><TiTick /></i>6 Downloadable resources</li>

                                        </ul>
                                    </div>
                                    <div className='col-6'>
                                        <ul className='LearNList'>
                                            <li><i><TiTick /></i>3 Articles</li>
                                            <li><i><TiTick /></i>Certificate of completion</li>

                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <hr />
                            <div className='CLrating '>
                                <h4>Ratings & Reviews</h4>
                                <div className='row'>
                                    <div className='col-lg-3 col-md-12'>
                                        <div className='GrnRati mt-3'>
                                            <h3>4.5</h3>
                                            <p className='staR d-flex'>
                                                <i><AiFillStar /></i>
                                                <i><AiFillStar /></i>
                                                <i><AiFillStar /></i>
                                                <i><AiFillStar /></i>
                                                <i><AiFillStar /></i>
                                            </p>
                                            <h6>Course Rating</h6>
                                        </div>
                                    </div>
                                    <div className='col-lg-9 pt-3'>
                                        <div className='row'>
                                            <div className='col-lg-2 col-md-2'>
                                                <div className='MAinFlip'>
                                                    <div className='RatinGBAr' >
                                                        <p>5 <i><AiFillStar /></i></p>

                                                    </div>

                                                </div>

                                            </div>
                                            <div className='col-lg-10 col-md-10'>
                                                <div className='MAinFlip'>

                                                    <ProgressBar now={60} />
                                                </div>

                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-2 col-md-2'>
                                                <div className='MAinFlip'>
                                                    <div className='RatinGBAr' >
                                                        <p>4 <i><AiFillStar /></i></p>

                                                    </div>

                                                </div>

                                            </div>
                                            <div className='col-lg-10 col-md-10'>
                                                <div className='MAinFlip'>

                                                    <ProgressBar now={50} />
                                                </div>

                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-2 col-md-2'>
                                                <div className='MAinFlip'>
                                                    <div className='RatinGBAr' >
                                                        <p>3 <i><AiFillStar /></i></p>

                                                    </div>

                                                </div>

                                            </div>
                                            <div className='col-lg-10 col-md-10'>
                                                <div className='MAinFlip'>

                                                    <ProgressBar now={40} />
                                                </div>

                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-2 col-md-2'>
                                                <div className='MAinFlip'>
                                                    <div className='RatinGBAr' >
                                                        <p>2 <i><AiFillStar /></i></p>

                                                    </div>

                                                </div>

                                            </div>
                                            <div className='col-lg-10 col-md-10'>
                                                <div className='MAinFlip'>

                                                    <ProgressBar now={30} />
                                                </div>

                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-2 col-md-2'>
                                                <div className='MAinFlip'>
                                                    <div className='RatinGBAr' >
                                                        <p>1 <i><AiFillStar /></i></p>

                                                    </div>

                                                </div>

                                            </div>
                                            <div className='col-lg-10 col-md-10'>
                                                <div className='MAinFlip'>

                                                    <ProgressBar now={20} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <hr />
                            <div className='CommCL'>
                                <h4>734 reviews</h4>
                                <div className='row pt-4'>
                                    <div className='col-2'>
                                        <div className='CommImG'>
                                            <img src={imgdummy} className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className='col-5'>
                                        <div className='CommConT'>
                                            <h4>Vineeth Sharma</h4>
                                            <h5>B Pharma.,</h5>
                                        </div>
                                    </div>
                                    <div className='col-5'>
                                        <div className='StarFIVe'>
                                            <i><AiFillStar /></i>
                                            <i><AiFillStar /></i>
                                            <i><AiFillStar /></i>
                                            <i><AiFillStar /></i>
                                            <i><AiOutlineStar /></i>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='CommConT'>
                                            <p>There is a need to incorporate more business and management training into their curricula to better prepare graduates for working in the pharmaceutical industry A Great initiative, this concept will be a career booster for our students</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='row pt-4'>
                                    <div className='col-2'>
                                        <div className='CommImG'>
                                            <img src={imgdummy} className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className='col-5'>
                                        <div className='CommConT'>
                                            <h4>Vineeth Sharma</h4>
                                            <h5>B Pharma.,</h5>
                                        </div>
                                    </div>
                                    <div className='col-5'>
                                        <div className='StarFIVe'>
                                            <i><AiFillStar /></i>
                                            <i><AiFillStar /></i>
                                            <i><AiFillStar /></i>
                                            <i><AiFillStar /></i>
                                            <i><AiOutlineStar /></i>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='CommConT'>
                                            <p>There is a need to incorporate more business and management training into their curricula to better prepare graduates for working in the pharmaceutical industry A Great initiative, this concept will be a career booster for our students</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='row pt-4'>
                                    <div className='col-2'>
                                        <div className='CommImG'>
                                            <img src={imgdummy} className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className='col-5'>
                                        <div className='CommConT'>
                                            <h4>Vineeth Sharma</h4>
                                            <h5>B Pharma.,</h5>
                                        </div>
                                    </div>
                                    <div className='col-5'>
                                        <div className='StarFIVe'>
                                            <i><AiFillStar /></i>
                                            <i><AiFillStar /></i>
                                            <i><AiFillStar /></i>
                                            <i><AiFillStar /></i>
                                            <i><AiOutlineStar /></i>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='CommConT'>
                                            <p>There is a need to incorporate more business and management training into their curricula to better prepare graduates for working in the pharmaceutical industry A Great initiative, this concept will be a career booster for our students</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='row pt-4'>
                                    <div className='col-2'>
                                        <div className='CommImG'>
                                            <img src={imgdummy} className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className='col-5'>
                                        <div className='CommConT'>
                                            <h4>Vineeth Sharma</h4>
                                            <h5>B Pharma.,</h5>
                                        </div>
                                    </div>
                                    <div className='col-5'>
                                        <div className='StarFIVe'>
                                            <i><AiFillStar /></i>
                                            <i><AiFillStar /></i>
                                            <i><AiFillStar /></i>
                                            <i><AiFillStar /></i>
                                            <i><AiOutlineStar /></i>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='CommConT'>
                                            <p>There is a need to incorporate more business and management training into their curricula to better prepare graduates for working in the pharmaceutical industry A Great initiative, this concept will be a career booster for our students</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <Link to="">Show More</Link>
                                <hr />
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-12 '>
                            <div className='entireCont'>
                                <div className='RightCL'>
                                    <div className='CLrighTImg'>
                                        <img src={c1} className='img-fluid' />

                                    </div>
                                    <div className='PlyIcon'>
                                    <i className='ggrn'><BsPlayFill /></i>
                                    </div>
                                    <div className='Rl d-flex mt-4'>
                                        <div className='RightCLcont d-flex'>
                                            <h2>₹ 199</h2>
                                            <h3><s>₹399</s></h3>
                                        </div>
                                        <div className='lEft HRS'>
                                            <h4>3 days left!</h4>
                                        </div>
                                    </div>
                                    <div className="row mt-4 mb-4">
                                        <div className='col-6'>
                                            <div className='GrnBtNN'>
                                                <button>Add to Cart</button>
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className='BdrstNN'>
                                                <button>Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='d-flex mb-3'>
                                        <div className='ClRConteNt'>
                                            <h4>Course Content</h4>
                                        </div>
                                        <div className='Hrs'>
                                            <h5>02h 20m</h5>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='ACCclRight'>
                                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>1.Introduction to the Pharmaceutical Industry</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i className='ggrn'><BsPlayCircle /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i className='ggrn'><BsPlayCircle /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i><AiFillLock /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i><AiFillLock /></i>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>2. Overview of Drug Development Process</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i className='ggrn'><BsPlayCircle /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i className='ggrn'><BsPlayCircle /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i><AiFillLock /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i><AiFillLock /></i>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>3. Regulatory Affairs in Pharmaceuticals</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i className='ggrn'><BsPlayCircle /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i className='ggrn'><BsPlayCircle /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i><AiFillLock /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i><AiFillLock /></i>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>4. Sales and Marketing in Pharmaceuticals</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i className='ggrn'><BsPlayCircle /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i className='ggrn'><BsPlayCircle /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i><AiFillLock /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i><AiFillLock /></i>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header>5. Clinical Research in Pharmaceuticals</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i className='ggrn'><BsPlayCircle /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i className='ggrn'><BsPlayCircle /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i><AiFillLock /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i><AiFillLock /></i>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header>6. Clinical Research in Pharmaceuticals</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i className='ggrn'><BsPlayCircle /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i className='ggrn'><BsPlayCircle /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i><AiFillLock /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i><AiFillLock /></i>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="6">
                                                <Accordion.Header>7. Clinical Research in Pharmaceuticals</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i className='ggrn'><BsPlayCircle /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i className='ggrn'><BsPlayCircle /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i><AiFillLock /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i><AiFillLock /></i>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="7">
                                                <Accordion.Header>8. Clinical Research in Pharmaceuticals</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i className='ggrn'><BsPlayCircle /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i className='ggrn'><BsPlayCircle /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i><AiFillLock /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i><AiFillLock /></i>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="8">
                                                <Accordion.Header>9. Clinical Research in Pharmaceuticals</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i className='ggrn'><BsPlayCircle /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i className='ggrn'><BsPlayCircle /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i><AiFillLock /></i>
                                                        </div>
                                                    </div>
                                                    <div className='AccContEnt d-flex'>
                                                        <div className='AccHeA'>
                                                            <h6>Definition and scope of the pharmaceutical industry - (12s)</h6>
                                                        </div>
                                                        <div className='ACCTim'>
                                                            <i><AiFillLock /></i>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>
                                <div className='FORCl'>
                                    <h4>Related courses</h4>
                                    <div className='row'>
                                    <div className='MainCOurSEdIV d-flex'>
                                    <div className="couRSeImg">
                                        <img
                                            src={c1}
                                            alt="Hepatology"
                                            className="img-fluid oragnsTop categriesImg"
                                        />
                                    </div>
                                    <div className='COurseConTEnt'>
                                        <h5><Link to="/">Grow Personal pharmacist Security Thinking & Principles</Link></h5>
                                        <span className='SAPnHr'><hr /></span>
                                        <div className='SCetionCourse d-flex'>
                                            <h4>FREE</h4>
                                            <h6>Intermediate</h6>
                                            <h6 className='text-end'>02h 20m</h6>
                                        </div>
                                        <span className='SAPnHr'><hr /></span>
                                        <div className='FinAlDIv d-flex'>
                                            <p><i><AiFillStar /></i> 4.9 (250)</p>
                                            <Link to="/">Learn More <i><HiChevronDoubleRight /></i></Link>
                                        </div>
                                    </div>
                                </div>
                                    </div>
                                    <div className='row'>
                                    <div className='MainCOurSEdIV d-flex'>
                                    <div className="couRSeImg">
                                        <img
                                            src={c1}
                                            alt="Hepatology"
                                            className="img-fluid oragnsTop categriesImg"
                                        />
                                    </div>
                                    <div className='COurseConTEnt'>
                                        <h5><Link to="/">Grow Personal pharmacist Security Thinking & Principles</Link></h5>
                                        <span className='SAPnHr'><hr /></span>
                                        <div className='SCetionCourse d-flex'>
                                            <h4>FREE</h4>
                                            <h6>Intermediate</h6>
                                            <h6 className='text-end'>02h 20m</h6>
                                        </div>
                                        <span className='SAPnHr'><hr /></span>
                                        <div className='FinAlDIv d-flex'>
                                            <p><i><AiFillStar /></i> 4.9 (250)</p>
                                            <Link to="/">Learn More <i><HiChevronDoubleRight /></i></Link>
                                        </div>
                                    </div>
                                </div>
                                    </div>
                                    <div className='row'>
                                    <div className='MainCOurSEdIV d-flex'>
                                    <div className="couRSeImg">
                                        <img
                                            src={c1}
                                            alt="Hepatology"
                                            className="img-fluid oragnsTop categriesImg"
                                        />
                                    </div>
                                    <div className='COurseConTEnt'>
                                        <h5><Link to="/">Grow Personal pharmacist Security Thinking & Principles</Link></h5>
                                        <span className='SAPnHr'><hr /></span>
                                        <div className='SCetionCourse d-flex'>
                                            <h4>FREE</h4>
                                            <h6>Intermediate</h6>
                                            <h6 className='text-end'>02h 20m</h6>
                                        </div>
                                        <span className='SAPnHr'><hr /></span>
                                        <div className='FinAlDIv d-flex'>
                                            <p><i><AiFillStar /></i> 4.9 (250)</p>
                                            <Link to="/">Learn More <i><HiChevronDoubleRight /></i></Link>
                                        </div>
                                    </div>
                                </div>
                                    </div>
                                    <div className='row'>
                                    <div className='MainCOurSEdIV d-flex'>
                                    <div className="couRSeImg">
                                        <img
                                            src={c1}
                                            alt="Hepatology"
                                            className="img-fluid oragnsTop categriesImg"
                                        />
                                    </div>
                                    <div className='COurseConTEnt'>
                                        <h5><Link to="/">Grow Personal pharmacist Security Thinking & Principles</Link></h5>
                                        <span className='SAPnHr'><hr /></span>
                                        <div className='SCetionCourse d-flex'>
                                            <h4>FREE</h4>
                                            <h6>Intermediate</h6>
                                            <h6 className='text-end'>02h 20m</h6>
                                        </div>
                                        <span className='SAPnHr'><hr /></span>
                                        <div className='FinAlDIv d-flex'>
                                            <p><i><AiFillStar /></i> 4.9 (250)</p>
                                            <Link to="/">Learn More <i><HiChevronDoubleRight /></i></Link>
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
export default Courselist