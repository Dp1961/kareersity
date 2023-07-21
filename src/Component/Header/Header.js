import { useState } from 'react';
import Logo from "../../assets/images/logo.png"
import { MdCall } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaInstagramSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import InputGroup from 'react-bootstrap/InputGroup';
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser, AiOutlineLock, AiOutlineClose } from "react-icons/ai";
import Form from 'react-bootstrap/Form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Signin from "../../assets/images/signinimg.png"
import Forgotpass from "../../assets/images/forgotpass.png"
import { Link } from "react-router-dom";
import './Header.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import Modal from 'react-bootstrap/Modal';
import popup from '../../assets/images/popup.png';

const Header = () => {

    const [lgShow, setLgShow] = useState(false);
    const [pop1, setPop1] = useState(false);

    const [modalforgotpass, setModalforgotpass] = useState(false);
    const toggleforgotpass = () => setModalforgotpass(!modalforgotpass);


    const [mobile, setMobile] = useState(false)

    const [showcontent, setShowcontent] = useState(0)

    // Model sign up 

    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);

    const toggle = () => setModal(!modal);
    const toggleNested = () => {
        setNestedModal(!nestedModal);
        setCloseAll(false);
    };
    const toggleAll = () => {
        setNestedModal(!nestedModal);
        setCloseAll(true);
    };
    // modal sign up end


    // modal sign in
    const [modalsignin, setModalsignin] = useState(false);
    const [nestedModalsignin, setNestedModalsignin] = useState(false);
    const [closeAllsignin, setCloseAllsignin] = useState(false);

    const togglesignin = () => setModalsignin(!modalsignin);
    const toggleNestedsignin = () => {
        setNestedModalsignin(!nestedModalsignin);
        setCloseAllsignin(false);
    };
    const toggleAllsignin = () => {
        setNestedModalsignin(!nestedModalsignin);
        setCloseAllsignin(true);
    };

    // modal sign in end



    return (
        <div className="hEAD">
            <div className="header">
                <div className="container">
                    <div className="hTOp">
                        <div className="row">

                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="Logo">
                                    <Link to="/"><img src={Logo} alt="" className="img-fluid" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-2 CallHaed">
                                <div className="HeADcaLL d-flex">
                                    <div className="CallIcon">
                                        <i> <MdCall /> </i>
                                    </div>
                                    <div className="CallNUmber">
                                        <p>Call Us</p>
                                        <a href="tel:+919004214077">+91 90042 14077</a>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="MailUS d-flex">
                                    <div className="MailIcons">
                                        <i> <GrMail /> </i>
                                    </div>
                                    <div className="MAilConTEnet">
                                        <p>Mail Us</p>
                                        <a href="mailto:askus@kareersity.com">askus@kareersity.com</a>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div class="input-group">
                                    <input type="text" class="form-control search" placeholder="Search" />
                                    <button class="btn btn-outline-secondary" type="button"><FiSearch /></button>

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="d-flex float-end">
                                    <div className="hEAderIcons d-flex">
                                        <div className="Icons">
                                            <a href="#" class="notification">
                                                <span><IoMdNotificationsOutline /></span>
                                                <span class="badge">3</span>
                                            </a>
                                        </div>
                                        <div className="Icons ml-2">
                                            <a href="#" class="notification">
                                                <span><AiOutlineHeart /></span>
                                                <span class="badge">3</span>
                                            </a>

                                        </div>
                                        <div className="Icons ml-2">
                                            <a href="#" class="notification">
                                                <span><AiOutlineShoppingCart /></span>
                                                <span class="badge">3</span>
                                            </a>

                                        </div>
                                    </div>
                                    <div className="SignUpBtn">
                                        <button href="#" className="BTNtopHead" onClick={toggle}>
                                            <i><AiOutlineUser /></i> Sign In / Sign Up

                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>






                    </div>
                </div>
            </div>
            <div className="MEnu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu">
                                <ul className={mobile ? "mobile-lIstmeNu" : "justify-content-center d-flex"} onClick={() => setMobile(false)}>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/course">Course</Link></li>
                                    <li><Link to="">Live Programs</Link></li>
                                    <li><Link to="/blog">Blogs</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    <li><Link to="">Join as Educator</Link></li>
                                    <div className="socialMEDia">
                                        <li><Link to="https://www.facebook.com/kareersity"><FaFacebookF /></Link></li>
                                        <li><Link to=""><FaLinkedinIn /></Link></li>
                                        <li><Link to=""><FaInstagramSquare /></Link></li>
                                        <li><Link to=""><FaTwitter /></Link></li>
                                        <li><Link to=""><FaYoutube /></Link></li>
                                    </div>
                                </ul>
                                <button className='mobile-menu' onClick={() => setMobile(!mobile)}>
                                    {mobile ? (
                                        <AiOutlineClose />
                                    ) : (
                                        <GiHamburgerMenu />
                                    )}

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Modals sign up*/}

            <Modal isOpen={modal} toggle={toggle}>

                <ModalBody>
                    <div className='PopUppage d-flex'>
                        <div className='popImg'>
                            <img src={popup} className='img-fluid' />
                        </div>
                        <div className='PopConteNt'>
                            <div className='LogO'>
                                <img src={Logo} alt='' className='img-fluid' />
                            </div>
                            <form>
                                {showcontent == 0 ? (

                                    <div className='POPrigh pt-2'>
                                        <h2>Sign Up</h2>
                                        <p>Welcome please enter your details</p>
                                        <input type="radio" />
                                        <label >Student</label>
                                        <input type="radio" />
                                        <label >Working Professional</label>
                                        <InputGroup className="mb-3 mt-3">
                                            <Form.Control
                                                placeholder="Username"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                            <InputGroup.Text id="basic-addon1"><AiOutlineUser /></InputGroup.Text>

                                        </InputGroup>
                                        <InputGroup className="mb-3 mt-3">
                                            <Form.Control
                                                placeholder="Email"
                                                aria-label="Email"
                                                aria-describedby="basic-addon1"
                                            />
                                            <InputGroup.Text id="basic-addon1"><GrMail /></InputGroup.Text>

                                        </InputGroup>
                                        <InputGroup className="mb-3 mt-3">
                                            <Form.Control
                                                placeholder="Phone Number"
                                                aria-label="Phone Number"
                                                aria-describedby="basic-addon1"
                                            />
                                            <InputGroup.Text id="basic-addon1"><MdCall /></InputGroup.Text>

                                        </InputGroup>

                                        <Button color="success" onClick={() => setShowcontent(1)}>
                                            Next
                                        </Button>


                                        <div className='pt-5 SUbLow'>
                                            <p>Already have an account yet? <Link to="/" onClick={togglesignin}>SIGN IN</Link></p>
                                        </div>
                                    </div>
                                ) : showcontent == 1 ?
                                    <div className='POPrigh OnE pt-2'>
                                        <h2>Reason for Sign Up</h2>
                                        <p>Welcome please enter your details</p>
                                        <div className='PopCheCkBOX'>
                                            <input type="radio" />
                                            <label >Praesent lectus dolor, pulvinar eu</label><br />
                                            <input type="radio" />
                                            <label >Praesent lectus dolor, pulvinar eu</label><br />
                                            <input type="radio" />
                                            <label >Praesent lectus dolor, pulvinar eu</label><br />
                                            <input type="radio" />
                                            <label >Praesent lectus dolor, pulvinar eu</label><br />
                                            <input type="radio" />
                                            <label >Praesent lectus dolor, pulvinar eu</label><br />


                                        </div>


                                        <button onClick={() => { setShowcontent(2) }}>NEXT</button>
                                        <div className='pt-5 SUbLow'>
                                            <p>Already have an account yet? <Link to="/" onClick={togglesignin}>SIGN IN</Link></p>
                                        </div>
                                    </div> :
                                    showcontent == 2 ?
                                        <div className='POPrigh pt-2'>
                                            <h2>Password for Sign Up</h2>
                                            <p>Welcome please enter your details</p>

                                            <InputGroup className="mb-3 mt-3">
                                                <Form.Control
                                                    placeholder="Password"
                                                    aria-label="password"
                                                    aria-describedby="basic-addon1"
                                                />
                                                <InputGroup.Text id="basic-addon1"><AiOutlineLock /></InputGroup.Text>

                                            </InputGroup>
                                            <InputGroup className="mb-3 mt-3">
                                                <Form.Control
                                                    placeholder="Confirm Password"
                                                    aria-label="password"
                                                    aria-describedby="basic-addon1"
                                                />
                                                <InputGroup.Text id="basic-addon1"><AiOutlineLock /></InputGroup.Text>

                                            </InputGroup>


                                            <Button color="success" className='mt-5' >
                                                Sign up
                                            </Button>


                                            <div className='pt-5 SUbLow'>
                                                <p>Already have an account yet? <Link to="/" onClick={togglesignin}>SIGN IN</Link></p>
                                            </div>
                                        </div>
                                        : null
                                }


                            </form>

                        </div>
                    </div>
                    <br />


                </ModalBody>

            </Modal>
            {/* modal sign up end */}

            {/* modal for signin */}
            <Modal isOpen={modalsignin} toggle={togglesignin}>

                <ModalBody>
                    <div className='PopUppage d-flex'>

                        <div className='PopConteNt'>
                            <div className='LogO'>
                                <img src={Logo} alt='' className='img-fluid' />
                            </div>
                            <form>
                                <div className='POPrigh pt-2'>
                                    <h2>Sign In</h2>
                                    <p>Welcome back please enter your details</p>

                                    <InputGroup className="mb-3 mt-3">
                                        <Form.Control
                                            placeholder="Email"
                                            aria-label="Email"
                                            aria-describedby="basic-addon1"
                                        />
                                        <InputGroup.Text id="basic-addon1"><GrMail /></InputGroup.Text>


                                    </InputGroup>
                                    <InputGroup className="mb-3 mt-3">
                                        <Form.Control
                                            placeholder="Confirm Password"
                                            aria-label="password"
                                            aria-describedby="basic-addon1"
                                        />
                                        <InputGroup.Text id="basic-addon1"><AiOutlineLock /></InputGroup.Text>

                                    </InputGroup>
                                    <div className='d-flex signup'>
                                        <input type="radio" />
                                        <label >Remember Me</label>

                                        <div className='Fpas'>
                                            <Link onClick={toggleforgotpass}>Forgot Password</Link>
                                        </div>
                                    </div>


                                    <button color="success" className="mt-5" type="submit">
                                        Sign In
                                    </button>


                                    <div className='pt-5 SUbLow'>
                                        <p>Don't have an account yet?  <Link to="/" onClick={toggle}>SIGN UP</Link></p>
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div className='popImg'>
                            <img src={Signin} className='img-fluid' />
                        </div>
                    </div>

                </ModalBody>

            </Modal>
            {/* end modal for sign in */}

            {/* forgot password */}

            <Modal isOpen={modalforgotpass} toggle={toggleforgotpass} >

                <ModalBody>
                    <div className='PopUppage d-flex'>

                        <div className='PopConteNt'>
                            <div className='LogO'>
                                <img src={Logo} alt='' className='img-fluid' />
                            </div>
                            <form>
                                {showcontent == 0 ? (

                                    <div className='POPrigh pt-2'>
                                        <h2>Forgot Password</h2>
                                        <p>Enter your email address to reset password</p>


                                        <InputGroup className="mb-3 mt-3">
                                            <Form.Control
                                                placeholder="Email"
                                                aria-label="Email"
                                                aria-describedby="basic-addon1"
                                            />
                                            <InputGroup.Text id="basic-addon1"><GrMail /></InputGroup.Text>

                                        </InputGroup>


                                        <Button color="success" onClick={() => setShowcontent(2)}>
                                            Next
                                        </Button>


                                        <div className='pt-5 SUbLow'>
                                            <p>Don't have an account yet? <Link to="/" onClick={toggle}>SIGN UP</Link></p>
                                        </div>
                                    </div>
                                ) : showcontent == 1 ?
                                    <div className='POPrigh OnE pt-2'>
                                        <h2>Set New Password</h2>
                                        <p>Enter new password</p>
                                        <InputGroup className="mb-3 mt-3">
                                            <Form.Control
                                                placeholder="New Password"
                                                aria-label="newpassword"
                                                aria-describedby="basic-addon1"
                                            />
                                            <InputGroup.Text id="basic-addon1"><AiOutlineLock /></InputGroup.Text>

                                        </InputGroup>
                                        <InputGroup className="mb-3 mt-3">
                                            <Form.Control
                                                placeholder="Confirm Password"
                                                aria-label="confirmpassword"
                                                aria-describedby="basic-addon1"
                                            />
                                            <InputGroup.Text id="basic-addon1"><AiOutlineLock /></InputGroup.Text>

                                        </InputGroup>


                                        <button onClick={() => { setShowcontent(2) }}>Submit</button>
                                        <div className='pt-5 SUbLow'>
                                            <p>Don't have an account yet? <Link to="/" onClick={togglesignin}>SIGN UP</Link></p>
                                        </div>
                                    </div> :
                                    showcontent == 2 ?
                                       <div className='POPrigh OnE pt-2'>
                                        <h2>Set New Password</h2>
                                        <p>Enter new password</p>
                                        <InputGroup className="mb-3 mt-3">
                                            <Form.Control
                                                placeholder="New Password"
                                                aria-label="newpassword"
                                                aria-describedby="basic-addon1"
                                            />
                                            <InputGroup.Text id="basic-addon1"><AiOutlineLock /></InputGroup.Text>

                                        </InputGroup>
                                        <InputGroup className="mb-3 mt-3">
                                            <Form.Control
                                                placeholder="Confirm Password"
                                                aria-label="confirmpassword"
                                                aria-describedby="basic-addon1"
                                            />
                                            <InputGroup.Text id="basic-addon1"><AiOutlineLock /></InputGroup.Text>

                                        </InputGroup>


                                        <button onClick={() => { setShowcontent(2) }}>Submit</button>
                                        <div className='pt-5 SUbLow'>
                                            <p>Don't have an account yet? <Link to="/" onClick={togglesignin}>SIGN UP</Link></p>
                                        </div>
                                    </div>
                                        : null
                                }


                            </form>

                        </div>
                        <div className='popImg'>
                            <img src={Forgotpass} className='img-fluid' />
                        </div>
                    </div>
                    <br />


                </ModalBody>


            </Modal>

            {/* frgot password end */}






        </div>

    )

}
export default Header