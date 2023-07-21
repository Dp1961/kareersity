import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './Purchase.css';
import { Link } from "react-router-dom/dist";
import { AiOutlineRight } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import { BsThreeDotsVertical } from "react-icons/bs";


const Purchase = () => {

    const [show, setShow] = useState(false);
    const [showview, setShowview] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose1 = () => setShowview(false);
    const handleShow1 = () => setShowview(true);

    return (
        <div className="Categorypage">
            <div className="PageTit ">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h3>Purchase history List</h3>
                            <p><Link to="/dashboard">Dasboard</Link> <i><AiOutlineRight /></i> <Link to="/">Purchase history</Link></p>
                        </div>
                        <div className="col-6">
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="CateCont">
                <div className="container">
                    <div className="row">

                        <div className="CateGorTab">
                            <div className='col-12'>
                                <div className='searchBtNs'>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-4'>
                                            <div className='BtNSSearcH'>
                                                <InputGroup className="mb-3">
                                                    <Form.Control
                                                        placeholder="Search"
                                                        aria-describedby="basic-addon2"
                                                    />
                                                    <Button variant="outline-secondary" id="button-addon2">
                                                        <BsSearch />
                                                    </Button>
                                                </InputGroup>
                                            </div>
                                        </div>

                                        <div className='col-lg-4 col-md-3'>
                                            <div className='BtNSSearcH d-flex'>
                                                <div className='WhitBg'>
                                                <input type="checkbox" />
                                                <label> All</label>
                                                </div>
                                                <div className='WhitBg'>
                                                <input type="checkbox" />
                                                <label> Course</label>
                                                </div>
                                                <div className='WhitBg'>
                                                <input type="checkbox" />
                                                <label> Subscription</label>
                                                </div>
                                            </div>
                                        </div>

                                      
                                        <div className='col-2'>
                                            <div className='BtNSSearcH pur'>
                                                <button className='Grn-Btn'>Export as PDF</button>
                                            </div>

                                        </div>
                                        <div className='col-2'>
                                            <div className='BtNSSearcH pur'>
                                                <button className='Grn-Btn'>Export as Excel</button>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>

                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" /></th>
                                        <th>Order ID</th>
                                        <th>Name</th>
                                        <th>Email Address</th>
                                        <th>Course Name</th>
                                        <th>Subscription</th>
                                        <th>Paid Amount</th>
                                        <th>Payment Method</th>
                                        <th>Purchase Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>#5478595</td>
                                        <td>Ravi Shankar</td>
                                        <td>ravishankar21@gmail.com</td>
                                        <td>What You Need As A Pharmacy Student To...</td>
                                        <td >-</td>
                                        <td>₹199 </td>
                                        <td>Paytm </td>
                                        <td>20-11-22</td>
                                    </tr>

                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>#5478595</td>
                                        <td>Ravi Shankar</td>
                                        <td>ravishankar21@gmail.com</td>
                                        <td>What You Need As A Pharmacy Student To...</td>
                                        <td >Basic</td>
                                        <td>₹199 </td>
                                        <td>Paytm </td>
                                        <td>20-11-22</td>
                                    </tr>

                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>#5478595</td>
                                        <td>Ravi Shankar</td>
                                        <td>ravishankar21@gmail.com</td>
                                        <td>What You Need As A Pharmacy Student To...</td>
                                        <td >-</td>
                                        <td>₹199 </td>
                                        <td>Paytm </td>
                                        <td>20-11-22</td>
                                    </tr>

                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>#5478595</td>
                                        <td>Ravi Shankar</td>
                                        <td>ravishankar21@gmail.com</td>
                                        <td>What You Need As A Pharmacy Student To...</td>
                                        <td >Standard</td>
                                        <td>₹199 </td>
                                        <td>Paytm </td>
                                        <td>20-11-22</td>
                                    </tr>
                                    



                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>


            {/* Modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add FAQ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Question</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        autoFocus
                                    />
                                </Form.Group>
                            </div>

                        </div>




                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Answer</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder=""
                                autoFocus
                                style={{ height: '150px' }}
                            />
                        </Form.Group>
                        <div className='d-flex'>
                            <button className="Grn-Btn Half">add</button>
                            <button className="WHt-Btn Half">cancel</button>
                        </div>

                    </Form>
                </Modal.Body>

            </Modal>

            {/* view modal */}
            <Modal show={showview} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit FAQ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Question</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        autoFocus
                                    />
                                </Form.Group>
                            </div>

                        </div>




                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Answer</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder=""
                                autoFocus
                                style={{ height: '150px' }}
                            />
                        </Form.Group>
                        <div className='d-flex'>
                            <button className="Grn-Btn Half">add</button>
                            <button className="WHt-Btn Half">cancel</button>
                        </div>

                    </Form>
                </Modal.Body>

            </Modal>

        </div>
    )
}
export default Purchase