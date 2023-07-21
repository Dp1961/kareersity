import React from 'react';
import './Blog.css';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import blog from "../../assets/images/blog.png"

const Blogdetail = () => {
    return (
        <div className='BlogDEtails'>
            <Header />
            <div className='PageHEaders'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='PageTi pt-5'>
                                <p><Link to="/">Home</Link> <i><FaAngleRight /></i> <Link to="/blog">Blogs</Link><i> <FaAngleRight /></i> <Link to="/blog">Grow Personal pharmacist Security Thinking and Principles in Pharmacist Average Salary in India 2023</Link></p>
                                <h2>Blogs</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='blogdeTialContEnt pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-8 col-sm-12'>
                            <div className='blogIMG'>
                                <img src={blog} className='img-fluid' />
                            </div>
                            <div className='BLogContent pt-3'>
                                <h6 className='pb-3'>October 23, 2023</h6>
                                <h4>What You Need As A Pharmacy Student To Achieve Success</h4>
                                <p>Quisque ac sollicitudin libero, eget laoreet tellus. Quisque hendrerit, leo sit amet consequat accumsan...</p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-4 col-sm-12'>
                            <h4>Related Blog</h4>
                           
                           
                            <div className='row pt-3'>
                                <div className='col-lg-4'>
                                    <div className='blogIMG'>
                                        <img src={blog} className='img-fluid' />
                                    </div>

                                </div>
                                <div className='col-lg-8'>
                                    <div className='BLogContent detail'>
                                        <h6>19 October</h6>
                                        <h5><Link to="/blogdetail">What You Need As A Pharmacy Student To Achieve Success</Link></h5>
                                        <p>Quisque ac sollicitudin libero, eget laoreet tellus. Quisque hendrerit, leo sit amet consequat accumsan...</p>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                            <div className='row pt-3'>
                                <div className='col-lg-4'>
                                    <div className='blogIMG'>
                                        <img src={blog} className='img-fluid' />
                                    </div>

                                </div>
                                <div className='col-lg-8'>
                                    <div className='BLogContent detail'>
                                        <h6>19 October</h6>
                                        <h5><Link to="/blogdetail">What You Need As A Pharmacy Student To Achieve Success</Link></h5>
                                        <p>Quisque ac sollicitudin libero, eget laoreet tellus. Quisque hendrerit, leo sit amet consequat accumsan...</p>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                            <div className='row pt-3'>
                                <div className='col-lg-4'>
                                    <div className='blogIMG'>
                                        <img src={blog} className='img-fluid' />
                                    </div>

                                </div>
                                <div className='col-lg-8'>
                                    <div className='BLogContent detail'>
                                        <h6>19 October</h6>
                                        <h5><Link to="/blogdetail">What You Need As A Pharmacy Student To Achieve Success</Link></h5>
                                        <p>Quisque ac sollicitudin libero, eget laoreet tellus. Quisque hendrerit, leo sit amet consequat accumsan...</p>
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
export default Blogdetail