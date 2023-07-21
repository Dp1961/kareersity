import React from "react";
import './Changepassword.css';
import LImg from '../../assets/images/login-image.png';
import Logo from '../../assets/images/akareersity-logo.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {AiOutlineMail, AiFillLock} from "react-icons/ai"

const Changepassword = () => {
    return (
        <>
            <div className="LoGinPaGe">
                <div className="container">
                    <div className="MainDIV">
                        <div className="row">
                            <div className="col-lg-7 col-md-6 col-sm-12 Logn">
                                <div className="LoGInImage">
                                    <img src={LImg} className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-12 Logn">
                                <div className="LoginForm">
                                    <div className="LogO">
                                        <img src={Logo} className="img-fluid" alt="" />
                                    </div>
                                    <div className="FoRmLog">
                                        <form>
                                            <h4>Change Password</h4>
                                            <div className="col-12">
                                                <InputGroup className="mb-3">
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="New Password"
                                                        aria-describedby="basic-addon2"
                                                    />
                                                    <Button variant="outline-secondary" id="button-addon2">
                                                        <i><AiFillLock/></i>
                                                    </Button>
                                                </InputGroup>
                                            </div>
                                            <div className="col-12">
                                                <InputGroup className="mb-3">
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Confirm Password"
                                                        aria-describedby="basic-addon2"
                                                    />
                                                    <Button variant="outline-secondary" id="button-addon2">
                                                        <i><AiFillLock/></i>
                                                    </Button>
                                                </InputGroup>
                                            </div>
                                           
                                            <div className="col-12">
                                                <button type="submit" className="Grn-Btn">submit</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Changepassword