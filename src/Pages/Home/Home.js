import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video';

import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";


import "./Home.css"
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import banner from "../../assets/images/banner1.png";
import { Link } from "react-router-dom";
import { FaAngleRight, FaPlay } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { HiChevronDoubleRight } from "react-icons/hi";
import { TiTick } from "react-icons/ti";

// import Tabs from 'react-bootstrap/Tabs';
// import Tab from 'react-bootstrap/Tab';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// images
import c1 from "../../assets/images/course.png"
import courseimg from "../../assets/images/coursebanner.png"
import abt from "../../assets/images/abt.png"
import master from "../../assets/images/masterIMG.png"
import educator from "../../assets/images/educator.png"
import blog from "../../assets/images/blog.png"
import p1 from "../../assets/images/p1.png"
import p2 from "../../assets/images/p2.png"
import p3 from "../../assets/images/p3.png"
import p4 from "../../assets/images/p4.png"
import p5 from "../../assets/images/p5.png"
import e1 from "../../assets/images/e1.png"
import quotes from "../../assets/images/quote.png"


const Home = () => {

    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);

    const openModal = () => {
        setModal(!modal);
    };

    const spinner = () => {
        setVideoLoading(!videoLoading);
    };


    const [isOpen, setOpen] = useState(false);


    var course = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
        ],
    };

    var popular = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
        ],
    };

    var pharma = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        slidesToShow: 5,
        arrows: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
        ],
    };

    var experts = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        slidesToShow: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
        ],
    };

    var testimonial = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        slidesToShow: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
        ],
    };
    var Image = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        slidesToShow: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
        ],
    };



    return (
        <div className="HomEPage">
            <Header />
            {/* header banner */}
            <div className="SliderS">
                <Carousel>
                    <Carousel.Item>
                        <img src={banner} className='img-fluid' />
                        <Carousel.Caption>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className='bannerContenT'>
                                        <h1>3000+</h1>
                                        <h2>Pharmaceutical Companies Offer Endless Opportunities</h2>
                                        <Link to="/" >View Course <i><FaAngleRight /></i></Link>
                                    </div>
                                </div>
                            </div>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={banner} className='img-fluid' />
                        <Carousel.Caption>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className='bannerContenT'>
                                        <h1>3000+</h1>
                                        <h2>Pharmaceutical Companies Offer Endless Opportunities</h2>
                                        <Link to="/" >View Course <i><FaAngleRight /></i></Link>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={banner} className='img-fluid' />
                        <Carousel.Caption>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className='bannerContenT'>
                                        <h1>3000+</h1>
                                        <h2>Pharmaceutical Companies Offer Endless Opportunities</h2>
                                        <Link to="/" >View Course <i><FaAngleRight /></i></Link>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* header banner end */}
            {/* free course */}
            <div className='COurSe pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='PAgeTit pt-3 pb-3'>
                                <h2>Free Courses</h2>

                            </div>
                        </div>
                        <div className='col-12'>
                            <Slider {...course}>

                                <div className='MainCOurSEdIV'>
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
                                <div className='MainCOurSEdIV'>
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

                                <div className='MainCOurSEdIV'>
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
                                <div className='MainCOurSEdIV'>
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




                            </Slider>

                        </div>
                    </div>
                </div>
            </div>
            {/* free course end */}
            {/* image Section */}
            <div className='IMAgeSession pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-12 pt-3 pb-3'>
                            <Slider {...Image}>
                                <Link to="/"><img src={courseimg} className='img-fluid' /></Link>
                                <Link to="/"><img src={courseimg} className='img-fluid' /></Link>
                                <Link to="/"><img src={courseimg} className='img-fluid' /></Link>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            {/* image section end */}
            {/* Explore category */}
            <div className='ExplorCAtegory pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='PAgeTit pt-3 pb-3'>
                                <h2>EXPLORE OUR CATEGORIES</h2>
                                <p>Aliquam mollis felis at ipsum iaculis, in iaculis nibh iaculis. Duis consectetur ullamcorper tellus vitae dapibus.</p>

                            </div>
                        </div>
                    </div>
                    <div className='row pt-2'>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='CAteGorey'>
                                <h5>Industry Overview</h5>
                                <p>Take your journey with this course</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='CAteGorey'>
                                <h5>R&D</h5>
                                <p>Take your journey with this course</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='CAteGorey'>
                                <h5>Manufacturing</h5>
                                <p>Take your journey with this course</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='CAteGorey'>
                                <h5>Sales</h5>
                                <p>Take your journey with this course</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='CAteGorey'>
                                <h5>Marketing</h5>
                                <p>Take your journey with this course</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='CAteGorey'>
                                <h5>International Business</h5>
                                <p>Take your journey with this course</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='CAteGorey'>
                                <h5>Soft Skills</h5>
                                <p>Take your journey with this course</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='CAteGorey'>
                                <h5>Supply Chain</h5>
                                <p>Take your journey with this course</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='CAteGorey'>
                                <h5>Allied Industries</h5>
                                <p>Take your journey with this course</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end explore category */}
            {/* counter */}
            <div className='COUnters pt-5 pb-5'>
                <div className='container'>
                    <div className='row '>
                        <div className='PAgeTit pt-3 pb-3'>
                            <h2>KAREERSITY FACTS</h2>
                            <p>Aliquam mollis felis at ipsum iaculis, in iaculis nibh iaculis. Duis consectetur ullamcorper tellus vitae dapibus.</p>
                        </div>
                    </div>
                    <div className='row pt-3 pb-3'>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='COuntErs'>

                                <div style={{ fontSize: '35px' }}>
                                    <CountUp
                                        start={0}
                                        end={50000}
                                        duration={3}
                                    />

                                    <h6>Courses + Quizzes Signed Up</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='COuntErs'>

                                <div style={{ fontSize: '35px' }}>
                                    <CountUp
                                        start={0}
                                        end={48000}
                                        duration={3}
                                    />

                                    <h6>Learners</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='COuntErs'>

                                <div style={{ fontSize: '35px' }}>
                                    <CountUp
                                        start={0}
                                        end={440}
                                        duration={3}
                                    />

                                    <h6>Courses</h6>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='COuntErs'>
                                <div style={{ fontSize: '35px' }}>
                                    <CountUp
                                        start={0}
                                        end={4}
                                        duration={3}
                                    />

                                    <h6>Average Rating out of 5</h6>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            {/* counter end */}
            {/* subcribe */}
            <div className='SubSrcibe pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='PAgeTit pt-3 pb-3'>
                                <h2>SUBSCRIPTION PLAN</h2>
                                <p>Aliquam mollis felis at ipsum iaculis, in iaculis nibh iaculis. Duis consectetur ullamcorper tellus vitae dapibus.</p>

                            </div>
                        </div>
                    </div>
                    <div className='row pt-4 pb-5'>
                        <div className='col-lg-4 col-md-12 pt-5'>
                            <div className='BasIC'>
                                <div className='BAsicHEad blue'>
                                    <h6>Basic</h6>
                                </div>
                                <div className='BAsicContainer'>
                                    <h1>₹ 109</h1>
                                    <span>Per Month</span>
                                    <ul className='LiSTSUB pt-4 pb-4'>
                                        <li><i><TiTick /></i>Aenean quis suscipit  suscipit</li>
                                        <li><i><TiTick /></i>Aenean quis suscipit  suscipit </li>
                                        <li><i><TiTick /></i>Aenean quis suscipit  suscipit</li>
                                    </ul>
                                    <Link to="/" className='PLanChse'>CHOOSE PLAN <i><FaAngleRight /></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12'>
                            <div className='BasIC ylw'>
                                <div className='BAsicHEad ylw'>
                                    <h6>STANDARD</h6>
                                </div>
                                <div className='BAsicContainer ylw'>
                                    <h1>₹ 209</h1>
                                    <span>Per Month</span>
                                    <ul className='LiSTSUB pt-4 pb-4'>
                                        <li><i><TiTick /></i>Aenean quis suscipit  suscipit</li>
                                        <li><i><TiTick /></i>Aenean quis suscipit  suscipit </li>
                                        <li><i><TiTick /></i>Aenean quis suscipit  suscipit </li>
                                        <li><i><TiTick /></i>Aenean quis suscipit  suscipit </li>
                                        <li><i><TiTick /></i>Aenean quis suscipit  suscipit </li>
                                        <li><i><TiTick /></i>Aenean quis suscipit  suscipit </li>
                                    </ul>
                                    <Link to="/" className='PLanChse'>CHOOSE PLAN <i><FaAngleRight /></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12 pt-5'>
                            <div className='BasIC'>
                                <div className='BAsicHEad grn'>
                                    <h6>PREMIUM</h6>
                                </div>
                                <div className='BAsicContainer grn
                                '>
                                    <h1>₹ 299</h1>
                                    <span>Per Month</span>
                                    <ul className='LiSTSUB pt-4 pb-4'>
                                        <li><i><TiTick /></i>Aenean quis suscipit  suscipit</li>
                                        <li><i><TiTick /></i>Aenean quis suscipit  suscipit </li>
                                        <li><i><TiTick /></i>Aenean quis suscipit  suscipit</li>
                                    </ul>
                                    <Link to="/" className='PLanChse'>CHOOSE PLAN <i><FaAngleRight /></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* subscribe end */}
            {/* about session */}
            <div className='AbtSEssion pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-12'>
                            <div className='PAgeTit pt-3 pb-3'>
                                <h2>WHY STUDENTS CHOOSE US FOR GAIN THEIR KNOWLEDGE</h2>

                            </div>
                            <p>We are an EdTech organization, with an aim to introduce Industry perspective in Pharma education. We intend to boost careers by facilitating intellect exchange between academia and industry.</p>
                            <p>To ensure that those who enter the industry are better prepared and ready from day one, we create a paradigm change from a "Supply stipulated" system to a "Demand determined" model.</p>
                            <ul className='LiSt'>
                                <li><i>-</i> Free for physically handcraft</li>
                                <li><i>-</i> Easy to enroll courses</li>
                                <li><i>-</i> Course certificate for particular course</li>

                            </ul>
                        </div>
                        <div className='col-lg-5 col-md-12'>
                            <img src={abt} className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            {/* about session end */}
            {/* Master class */}
            <div className='MASterClass pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12'>
                            <div className='MSterClssContent'>
                                <h2>MASTER CLASS</h2>
                                <h3>SEASON 2 Starts from</h3>
                                <h4>19<sup>TH</sup> MAY 2023</h4>
                                <Link to="/" className='MstwhiTE mt-4'>
                                    Enroll NOw <i><FaAngleRight /></i>
                                </Link>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <div className='MaSTERimg'>
                                <img src={master} className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* master class end */}
            {/* popular course */}
            <div className='COurSe pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='PAgeTit pt-3 pb-3'>
                                <h2>PopulAR Courses</h2>
                                <p>Aliquam mollis felis at ipsum iaculis, in iaculis nibh iaculis. Duis consectetur ullamcorper tellus vitae dapibus.</p>

                            </div>
                        </div>
                        <div className='col-12'>
                            <Slider {...popular}>

                                <div className='MainCOurSEdIV'>
                                    <div className="couRSeImg">
                                        <img
                                            src={c1}
                                            alt="Hepatology"
                                            className="img-fluid oragnsTop categriesImg"
                                        />
                                    </div>
                                    <div className='COurseConTEnt'>
                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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
                                <div className='MainCOurSEdIV'>
                                    <div className="couRSeImg">
                                        <img
                                            src={c1}
                                            alt="Hepatology"
                                            className="img-fluid oragnsTop categriesImg"
                                        />
                                    </div>
                                    <div className='COurseConTEnt'>
                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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

                                <div className='MainCOurSEdIV'>
                                    <div className="couRSeImg">
                                        <img
                                            src={c1}
                                            alt="Hepatology"
                                            className="img-fluid oragnsTop categriesImg"
                                        />
                                    </div>
                                    <div className='COurseConTEnt'>
                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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
                                <div className='MainCOurSEdIV'>
                                    <div className="couRSeImg">
                                        <img
                                            src={c1}
                                            alt="Hepatology"
                                            className="img-fluid oragnsTop categriesImg"
                                        />
                                    </div>
                                    <div className='COurseConTEnt'>
                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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




                            </Slider>

                        </div>
                    </div>
                </div>
            </div>
            {/* popular course end */}
            {/* listen experts */}

            <div className="ExPertS pt-5 pb-5">

                <div className="container">

                    <div className="row">

                        <div className="col-12">

                            <div className="PAgeTit pt-3 pb-3">

                                <h2>LISTEN TO EXPERTS</h2>

                                <p>

                                    Aliquam mollis felis at ipsum iaculis, in iaculis nibh

                                    iaculis. Duis consectetur ullamcorper tellus vitae dapibus.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-12">

                            <Slider {...experts}>

                                <div className="ExPErt">

                                    <div className="eXpImg">

                                        <img src={e1} className="img-fluid ExPert" />

                                        <div className="ExPertCont">

                                            <h6>

                                                What You Need As A Pharmacy Student To Achieve Success

                                            </h6>

                                        </div>




                                        <button className="btn-primary PlY" onClick={openModal}>

                                            <FaPlay />

                                        </button>

                                    </div>

                                </div>

                                <div className="ExPErt">

                                    <div className="eXpImg">

                                        <img src={e1} className="img-fluid ExPert" />

                                        <div className="ExPertCont">

                                            <h6>

                                                What You Need As A Pharmacy Student To Achieve Success

                                            </h6>

                                        </div>




                                        <button className="btn-primary PlY" onClick={openModal}>

                                            <FaPlay />

                                        </button>

                                    </div>

                                </div>

                                <div className="ExPErt">

                                    <div className="eXpImg">

                                        <img src={e1} className="img-fluid ExPert" />

                                        <div className="ExPertCont">

                                            <h6>

                                                What You Need As A Pharmacy Student To Achieve Success

                                            </h6>

                                        </div>




                                        <button className="btn-primary PlY" onClick={openModal}>

                                            <FaPlay />

                                        </button>

                                    </div>

                                </div>

                                <div className="ExPErt">

                                    <div className="eXpImg">

                                        <img src={e1} className="img-fluid ExPert" />

                                        <div className="ExPertCont">

                                            <h6>

                                                What You Need As A Pharmacy Student To Achieve Success

                                            </h6>

                                        </div>




                                        <button className="btn-primary PlY">

                                            <FaPlay />

                                        </button>

                                    </div>

                                </div>

                            </Slider>

                            {modal ? (

                                <section className="modal__bg">

                                    <div className="modal__align">

                                        <div className="modal__content" modal={modal}>

                                            <IoCloseOutline

                                                className="modal__close"

                                                arial-label="Close modal"

                                                onClick={openModal}

                                            />

                                            <div className="modal__video-align">

                                                {videoLoading ? (

                                                    <div className="modal__spinner">

                                                        {/* <BiLoaderAlt

                                                                    className="modal__spinner-style"

                                                                    fadeIn="none"

                                                                /> */}

                                                    </div>

                                                ) : null}

                                                <iframe

                                                    className="modal__video-style"

                                                    onLoad={spinner}

                                                    loading="lazy"

                                                    width="800"

                                                    height="500"

                                                    src="https://www.youtube.com/embed/4UZrsTqkcW4"

                                                    title="YouTube video player"

                                                    frameBorder="0"

                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

                                                    allowfullscreen

                                                ></iframe>

                                            </div>

                                        </div>

                                    </div>

                                </section>

                            ) : null}

                        </div>

                    </div>

                </div>

            </div>

            {/* listen experts end */}
            {/* testimonials */}
            <div className='TeStimonial pt-2 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='PAgeTit pt-3 pb-3'>
                                <h2>WHAT STUDENTS THINK AND SAY ABOUT KAREERSITY</h2>
                                <p>Sed eu tellus porta, aliquet sem at, lobortis dui. Nunc ut elit ac nisl dictum vulputate a ut enim.</p>

                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <Slider {...testimonial}>

                                <div className='TestimoniaLS'>
                                    <div className='QuoTEImg pb-3'>
                                        <img src={quotes} className='img-fluid' />
                                    </div>
                                    <div className='TestiMoniAlSConTENT'>
                                        <p>There is a need to incorporate more business and management training into their curricula to better prepare graduates for working in the pharmaceutical industry A Great initiative, this concept will be a career booster for our students</p>
                                        <div className='DetILSTEsti'>
                                            <h5>Vineeth Sharma</h5>
                                            <h6>B Pharma.,</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='TestimoniaLS'>
                                    <div className='QuoTEImg pb-3'>
                                        <img src={quotes} className='img-fluid' />
                                    </div>
                                    <div className='TestiMoniAlSConTENT'>
                                        <p>There is a need to incorporate more business and management training into their curricula to better prepare graduates for working in the pharmaceutical industry A Great initiative, this concept will be a career booster for our students</p>
                                        <div className='DetILSTEsti'>
                                            <h5>Vineeth Sharma</h5>
                                            <h6>B Pharma.,</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='TestimoniaLS'>
                                    <div className='QuoTEImg pb-3'>
                                        <img src={quotes} className='img-fluid' />
                                    </div>
                                    <div className='TestiMoniAlSConTENT'>
                                        <p>There is a need to incorporate more business and management training into their curricula to better prepare graduates for working in the pharmaceutical industry A Great initiative, this concept will be a career booster for our students</p>
                                        <div className='DetILSTEsti'>
                                            <h5>Vineeth Sharma</h5>
                                            <h6>B Pharma.,</h6>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>

            </div>
            {/* testimonial end */}
            {/* blogs */}
            <div className='BLOgs pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='PAgeTit pt-3 pb-3'>
                                <h2>OUR BLOG</h2>
                                <p>Aliquam mollis felis at ipsum iaculis, in iaculis nibh iaculis. Duis consectetur ullamcorper tellus vitae dapibus.</p>

                            </div>

                        </div>
                        <div className='row pt-3 pb-3'>
                            <div className='col-lg-7 col-md-12'>
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <div className='blogIMG'>
                                            <img src={blog} className='img-fluid' />
                                        </div>

                                    </div>
                                    <div className='col-lg-8'>
                                        <div className='BLogContent'>
                                            <h6>19 October</h6>
                                            <h5>What You Need As A Pharmacy Student To Achieve Success</h5>
                                            <p>Quisque ac sollicitudin libero, eget laoreet tellus. Quisque hendrerit, leo sit amet consequat accumsan...</p>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <div className='blogIMG'>
                                            <img src={blog} className='img-fluid' />
                                        </div>

                                    </div>
                                    <div className='col-lg-8'>
                                        <div className='BLogContent'>
                                            <h6>19 October</h6>
                                            <h5>What You Need As A Pharmacy Student To Achieve Success</h5>
                                            <p>Quisque ac sollicitudin libero, eget laoreet tellus. Quisque hendrerit, leo sit amet consequat accumsan...</p>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <div className='blogIMG'>
                                            <img src={blog} className='img-fluid' />
                                        </div>

                                    </div>
                                    <div className='col-lg-8'>
                                        <div className='BLogContent'>
                                            <h6>19 October</h6>
                                            <h5>What You Need As A Pharmacy Student To Achieve Success</h5>
                                            <p>Quisque ac sollicitudin libero, eget laoreet tellus. Quisque hendrerit, leo sit amet consequat accumsan...</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='col-lg-5 col-md-12'>
                                <div className='BLOGImg'>
                                    <img src={blog} className='img-fluid' />
                                </div>
                                <div className='BLogContent larGE'>
                                    <h6>19 October</h6>
                                    <h5>What You Need As A Pharmacy Student To Achieve Success</h5>
                                    <p>Quisque ac sollicitudin libero, eget laoreet tellus. Quisque hendrerit, leo sit amet consequat accumsan...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* blogs end */}
            {/* become educator */}
            <div className='EDucatoR d-flex'>
                <div className='EduCatorImg'>
                    <img src={educator}></img>
                </div>
                <div className='EDuCtORCOntEnt'>
                    <h3>BECOME AN EDUCATOR & SPREAD YOUR KNOWLEDGE</h3>
                    <p>Join one of the world’s largest online learning marketplaces. Our Instructor Support Team is ready to help you while our Teaching Center</p>
                    <Link to="/" className='MstwhiTE mt-3'> GEt started<i><FaAngleRight /></i></Link>
                </div>
            </div>
            {/* educator end */}

            {/* course selection */}
            {/* <div className='cOURseSele pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='PAgeTit pt-3 pb-3'>
                                <h2>A BROAD SELECTION OF COURSESs</h2>
                                <p>Aliquam mollis felis at ipsum iaculis, in iaculis nibh iaculis. Duis consectetur ullamcorper tellus vitae dapibus.</p>

                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='COUrseSelecT'>
                                <Tabs defaultActiveKey="individual">
                                    <Tab eventKey="individual" title="Marketing">
                                        <div className='row pt-4'>
                                            <Slider {...course}>

                                                <div className='MainCOurSEdIV'>
                                                    <div className="couRSeImg">
                                                        <img
                                                            src={c1}
                                                            alt="Hepatology"
                                                            className="img-fluid oragnsTop categriesImg"
                                                        />
                                                    </div>
                                                    <div className='COurseConTEnt'>
                                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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
                                                <div className='MainCOurSEdIV'>
                                                    <div className="couRSeImg">
                                                        <img
                                                            src={c1}
                                                            alt="Hepatology"
                                                            className="img-fluid oragnsTop categriesImg"
                                                        />
                                                    </div>
                                                    <div className='COurseConTEnt'>
                                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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

                                                <div className='MainCOurSEdIV'>
                                                    <div className="couRSeImg">
                                                        <img
                                                            src={c1}
                                                            alt="Hepatology"
                                                            className="img-fluid oragnsTop categriesImg"
                                                        />
                                                    </div>
                                                    <div className='COurseConTEnt'>
                                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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
                                                <div className='MainCOurSEdIV'>
                                                    <div className="couRSeImg">
                                                        <img
                                                            src={c1}
                                                            alt="Hepatology"
                                                            className="img-fluid oragnsTop categriesImg"
                                                        />
                                                    </div>
                                                    <div className='COurseConTEnt'>
                                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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




                                            </Slider>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="Sales" title="Sales">
                                        <div className='row pt-4'>
                                            <Slider {...course}>

                                                <div className='MainCOurSEdIV'>
                                                    <div className="couRSeImg">
                                                        <img
                                                            src={c1}
                                                            alt="Hepatology"
                                                            className="img-fluid oragnsTop categriesImg"
                                                        />
                                                    </div>
                                                    <div className='COurseConTEnt'>
                                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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
                                                <div className='MainCOurSEdIV'>
                                                    <div className="couRSeImg">
                                                        <img
                                                            src={c1}
                                                            alt="Hepatology"
                                                            className="img-fluid oragnsTop categriesImg"
                                                        />
                                                    </div>
                                                    <div className='COurseConTEnt'>
                                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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

                                                <div className='MainCOurSEdIV'>
                                                    <div className="couRSeImg">
                                                        <img
                                                            src={c1}
                                                            alt="Hepatology"
                                                            className="img-fluid oragnsTop categriesImg"
                                                        />
                                                    </div>
                                                    <div className='COurseConTEnt'>
                                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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
                                                <div className='MainCOurSEdIV'>
                                                    <div className="couRSeImg">
                                                        <img
                                                            src={c1}
                                                            alt="Hepatology"
                                                            className="img-fluid oragnsTop categriesImg"
                                                        />
                                                    </div>
                                                    <div className='COurseConTEnt'>
                                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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




                                            </Slider>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="Quality Assurance" title="Quality Assurance">
                                        <div className='row pt-4'>
                                            <Slider {...course}>

                                                <div className='MainCOurSEdIV'>
                                                    <div className="couRSeImg">
                                                        <img
                                                            src={c1}
                                                            alt="Hepatology"
                                                            className="img-fluid oragnsTop categriesImg"
                                                        />
                                                    </div>
                                                    <div className='COurseConTEnt'>
                                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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
                                                <div className='MainCOurSEdIV'>
                                                    <div className="couRSeImg">
                                                        <img
                                                            src={c1}
                                                            alt="Hepatology"
                                                            className="img-fluid oragnsTop categriesImg"
                                                        />
                                                    </div>
                                                    <div className='COurseConTEnt'>
                                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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

                                                <div className='MainCOurSEdIV'>
                                                    <div className="couRSeImg">
                                                        <img
                                                            src={c1}
                                                            alt="Hepatology"
                                                            className="img-fluid oragnsTop categriesImg"
                                                        />
                                                    </div>
                                                    <div className='COurseConTEnt'>
                                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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
                                                <div className='MainCOurSEdIV'>
                                                    <div className="couRSeImg">
                                                        <img
                                                            src={c1}
                                                            alt="Hepatology"
                                                            className="img-fluid oragnsTop categriesImg"
                                                        />
                                                    </div>
                                                    <div className='COurseConTEnt'>
                                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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




                                            </Slider>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="Manufacturing" title="Manufacturing">
                                        <div className='row pt-4'>
                                            <Slider {...course}>

                                                <div className='MainCOurSEdIV'>
                                                    <div className="couRSeImg">
                                                        <img
                                                            src={c1}
                                                            alt="Hepatology"
                                                            className="img-fluid oragnsTop categriesImg"
                                                        />
                                                    </div>
                                                    <div className='COurseConTEnt'>
                                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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
                                                <div className='MainCOurSEdIV'>
                                                    <div className="couRSeImg">
                                                        <img
                                                            src={c1}
                                                            alt="Hepatology"
                                                            className="img-fluid oragnsTop categriesImg"
                                                        />
                                                    </div>
                                                    <div className='COurseConTEnt'>
                                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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

                                                <div className='MainCOurSEdIV'>
                                                    <div className="couRSeImg">
                                                        <img
                                                            src={c1}
                                                            alt="Hepatology"
                                                            className="img-fluid oragnsTop categriesImg"
                                                        />
                                                    </div>
                                                    <div className='COurseConTEnt'>
                                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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
                                                <div className='MainCOurSEdIV'>
                                                    <div className="couRSeImg">
                                                        <img
                                                            src={c1}
                                                            alt="Hepatology"
                                                            className="img-fluid oragnsTop categriesImg"
                                                        />
                                                    </div>
                                                    <div className='COurseConTEnt'>
                                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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




                                            </Slider>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="GPAT" title="GPAT">
                                        <div className='row pt-4'>
                                            <Slider {...course}>

                                                <div className='MainCOurSEdIV'>
                                                    <div className="couRSeImg">
                                                        <img
                                                            src={c1}
                                                            alt="Hepatology"
                                                            className="img-fluid oragnsTop categriesImg"
                                                        />
                                                    </div>
                                                    <div className='COurseConTEnt'>
                                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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
                                                <div className='MainCOurSEdIV'>
                                                    <div className="couRSeImg">
                                                        <img
                                                            src={c1}
                                                            alt="Hepatology"
                                                            className="img-fluid oragnsTop categriesImg"
                                                        />
                                                    </div>
                                                    <div className='COurseConTEnt'>
                                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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

                                                <div className='MainCOurSEdIV'>
                                                    <div className="couRSeImg">
                                                        <img
                                                            src={c1}
                                                            alt="Hepatology"
                                                            className="img-fluid oragnsTop categriesImg"
                                                        />
                                                    </div>
                                                    <div className='COurseConTEnt'>
                                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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
                                                <div className='MainCOurSEdIV'>
                                                    <div className="couRSeImg">
                                                        <img
                                                            src={c1}
                                                            alt="Hepatology"
                                                            className="img-fluid oragnsTop categriesImg"
                                                        />
                                                    </div>
                                                    <div className='COurseConTEnt'>
                                                        <h5>Grow Personal pharmacist Security Thinking & Principles</h5>
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




                                            </Slider>
                                        </div>
                                    </Tab>

                                </Tabs>
                            </div>

                        </div>
                    </div>
                </div>
            </div> */}
            {/* course selection end */}
            {/* pharma industry */}
            <div className='PharmaCARo pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='PAgeTit pt-3 pb-3'>
                                <h2>TRUSTED BY OUR PHARMA INDUSTRY</h2>
                                <p>Aliquam mollis felis at ipsum iaculis, in iaculis nibh iaculis. Duis consectetur ullamcorper tellus vitae dapibus.</p>

                            </div>
                        </div>
                    </div>
                    <div className='row pb-3'>
                        <div className='col-12'>
                            <Slider {...pharma}>

                                <div className='phaRMa'>
                                    <div className="couRSeImg">
                                        <img
                                            src={p1}
                                            className="img-fluid"
                                        />
                                    </div>

                                </div>
                                <div className='phaRMa'>
                                    <div className="couRSeImg">
                                        <img
                                            src={p2}
                                            className="img-fluid"
                                        />
                                    </div>

                                </div>
                                <div className='phaRMa'>
                                    <div className="couRSeImg">
                                        <img
                                            src={p3}
                                            className="img-fluid"
                                        />
                                    </div>

                                </div>
                                <div className='phaRMa'>
                                    <div className="couRSeImg">
                                        <img
                                            src={p4}
                                            className="img-fluid"
                                        />
                                    </div>

                                </div>
                                <div className='phaRMa'>
                                    <div className="couRSeImg">
                                        <img
                                            src={p5}
                                            className="img-fluid"
                                        />
                                    </div>

                                </div>
                                <div className='phaRMa'>
                                    <div className="couRSeImg">
                                        <img
                                            src={p1}
                                            className="img-fluid"
                                        />
                                    </div>

                                </div>






                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            {/* pharama end */}
            <Footer />


        </div >
    )
}
export default Home