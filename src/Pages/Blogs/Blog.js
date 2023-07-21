import React from 'react';
import './Blog.css';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import blog from "../../assets/images/blog.png"

const Blog = () => {
    return (
        <div className='BlogLIst'>
            <Header />
            <div className='PageHEaders'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='PageTi pt-5'>
                                <p><Link to="/">Home</Link> <i><FaAngleRight /></i><Link to="/blog">Blogs</Link></p>
                                <h2>Blogs</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='BloGSestion pt-5 pb-5'>
                <div className='container'>
                    <div className='row pt-3 pb-3'>
                        <div className='col-lg-6 col-md-12'>
                            <div className='row'>
                                <div className='col-lg-5'>
                                    <div className='blogIMG'>
                                        <img src={blog} className='img-fluid' />
                                    </div>

                                </div>
                                <div className='col-lg-7'>
                                    <div className='BLogContent'>
                                        <h6>19 October</h6>
                                        <h5><Link to="/blogdetail">What You Need As A Pharmacy Student To Achieve Success</Link></h5>
                                        <p>Quisque ac sollicitudin libero, eget laoreet tellus. Quisque hendrerit, leo sit amet consequat accumsan...</p>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <div className='row'>
                                <div className='col-lg-5'>
                                    <div className='blogIMG'>
                                        <img src={blog} className='img-fluid' />
                                    </div>

                                </div>
                                <div className='col-lg-7'>
                                    <div className='BLogContent'>
                                        <h6>19 October</h6>
                                        <h5><Link to="/blogdetail">What You Need As A Pharmacy Student To Achieve Success</Link></h5>
                                        <p>Quisque ac sollicitudin libero, eget laoreet tellus. Quisque hendrerit, leo sit amet consequat accumsan...</p>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <div className='row'>
                                <div className='col-lg-5'>
                                    <div className='blogIMG'>
                                        <img src={blog} className='img-fluid' />
                                    </div>

                                </div>
                                <div className='col-lg-7'>
                                    <div className='BLogContent'>
                                        <h6>19 October</h6>
                                        <h5><Link to="/">What You Need As A Pharmacy Student To Achieve Success</Link></h5>
                                        <p>Quisque ac sollicitudin libero, eget laoreet tellus. Quisque hendrerit, leo sit amet consequat accumsan...</p>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <div className='row'>
                                <div className='col-lg-5'>
                                    <div className='blogIMG'>
                                        <img src={blog} className='img-fluid' />
                                    </div>

                                </div>
                                <div className='col-lg-7'>
                                    <div className='BLogContent'>
                                        <h6>19 October</h6>
                                        <h5><Link to="/">What You Need As A Pharmacy Student To Achieve Success</Link></h5>
                                        <p>Quisque ac sollicitudin libero, eget laoreet tellus. Quisque hendrerit, leo sit amet consequat accumsan...</p>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <div className='row'>
                                <div className='col-lg-5'>
                                    <div className='blogIMG'>
                                        <img src={blog} className='img-fluid' />
                                    </div>

                                </div>
                                <div className='col-lg-7'>
                                    <div className='BLogContent'>
                                        <h6>19 October</h6>
                                        <h5><Link to="/">What You Need As A Pharmacy Student To Achieve Success</Link></h5>
                                        <p>Quisque ac sollicitudin libero, eget laoreet tellus. Quisque hendrerit, leo sit amet consequat accumsan...</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <div className='row'>
                                <div className='col-lg-5'>
                                    <div className='blogIMG'>
                                        <img src={blog} className='img-fluid' />
                                    </div>

                                </div>
                                <div className='col-lg-7'>
                                    <div className='BLogContent'>
                                        <h6>19 October</h6>
                                        <h5><Link to="/">What You Need As A Pharmacy Student To Achieve Success</Link></h5>
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
export default Blog