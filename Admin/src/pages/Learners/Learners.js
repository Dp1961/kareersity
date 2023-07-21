import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './Learners.css';
import { Link } from "react-router-dom/dist";
import { AiOutlineRight } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import { BsThreeDotsVertical } from "react-icons/bs";


const Learners = () => {

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
                            <h3>Learners List</h3>
                            <p><Link to="/dashboard">Dasboard</Link> <i><AiOutlineRight /></i> <Link to="/">Learners</Link></p>
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

                                        <div className='col-lg-3 col-md-3'>
                                            <div className='BtNSSearcH'>
                                                <select >
                                                    <option >Learners Type</option>
                                                    <option value="Student">Student</option>
                                                    <option value="Working Professional">Working Professional</option>
                                                  
                                                </select>
                                            </div>
                                        </div>

                                        <div className='col-lg-3 col-md-3'>
                                            <div className='BtNSSearcH'>
                                                <select>
                                                    <option >College Name</option>
                                                    <option value="c1">College 1</option>
                                                    <option value="c2">College 2</option>
                                                    <option value="c3">College 3</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className='col-2'>
                                            <div className='BtNSSearcH mt-1'>
                                                <Link to="/send_mail" className='Grn-Btn'>Send Mail</Link>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>

                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" /></th>
                                        <th>Name</th>
                                        <th>Email Address</th>
                                        <th>College Name</th>
                                        <th>Learners Type</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>Ravi Shankar</td>
                                        <td>ravishankar21@gmail.com</td>
                                        <td>Raja Ram Pharmaceutical</td>
                                        <td>Student</td>
                                        <td ><button className='GrnActn'>Active</button></td>
                                        <td className="d-flex ">
                                            <div className="Options">
                                                <i><BsThreeDotsVertical /></i>
                                                <ul class="hidden-list">
                                                    <li onClick={handleShow1}>View</li>
                                                    <li ><Link to="/view_learners">Edit</Link></li>
                                                    <li>Delete</li>

                                                </ul>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>Ravi Shankar</td>
                                        <td>ravishankar21@gmail.com</td>
                                        <td>Raja Ram Pharmaceutical</td>
                                        <td>Student</td>
                                        <td ><button className='RedDel'>In Active</button></td>
                                        <td className="d-flex ">
                                            <div className="Options">
                                                <i><BsThreeDotsVertical /></i>
                                                <ul class="hidden-list">
                                                    <li onClick={handleShow1}>View</li>
                                                    <li ><Link to="/view_learners">Edit</Link></li>
                                                    <li>Delete</li>

                                                </ul>
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>Ravi Shankar</td>
                                        <td>ravishankar21@gmail.com</td>
                                        <td>Raja Ram Pharmaceutical</td>
                                        <td>Student</td>
                                        <td ><button className='GrnActn'>Active</button></td>
                                        <td className="d-flex ">
                                            <div className="Options">
                                                <i><BsThreeDotsVertical /></i>
                                                <ul class="hidden-list">
                                                    <li onClick={handleShow1}>View</li>
                                                    <li ><Link to="/view_learners">Edit</Link></li>
                                                    <li>Delete</li>

                                                </ul>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>Ravi Shankar</td>
                                        <td>ravishankar21@gmail.com</td>
                                        <td>Raja Ram Pharmaceutical</td>
                                        <td>Student</td>
                                        <td ><button className='GrnActn'>Active</button></td>
                                        <td className="d-flex ">
                                            <div className="Options">
                                                <i><BsThreeDotsVertical /></i>
                                                <ul class="hidden-list">
                                                    <li onClick={handleShow1}>View</li>
                                                    <li ><Link to="/view_learners">Edit</Link></li>
                                                    <li>Delete</li>

                                                </ul>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>Ravi Shankar</td>
                                        <td>ravishankar21@gmail.com</td>
                                        <td>Raja Ram Pharmaceutical</td>
                                        <td>Student</td>
                                        <td ><button className='GrnActn'>Active</button></td>
                                        <td className="d-flex ">
                                            <div className="Options">
                                                <i><BsThreeDotsVertical /></i>
                                                <ul class="hidden-list">
                                                    <li onClick={handleShow1}>View</li>
                                                    <li ><Link to="/view_learners">Edit</Link></li>
                                                    <li>Delete</li>

                                                </ul>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>Ravi Shankar</td>
                                        <td>ravishankar21@gmail.com</td>
                                        <td>Raja Ram Pharmaceutical</td>
                                        <td>Student</td>
                                        <td ><button className='RedDel'>In Active</button></td>
                                        <td className="d-flex ">
                                            <div className="Options">
                                                <i><BsThreeDotsVertical /></i>
                                                <ul class="hidden-list">
                                                    <li onClick={handleShow1}>View</li>
                                                    <li ><Link to="/view_learners">Edit</Link></li>
                                                    <li>Delete</li>

                                                </ul>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>Ravi Shankar</td>
                                        <td>ravishankar21@gmail.com</td>
                                        <td>Raja Ram Pharmaceutical</td>
                                        <td>Student</td>
                                        <td ><button className='RedDel'>In Active</button></td>
                                        <td className="d-flex ">
                                            <div className="Options">
                                                <i><BsThreeDotsVertical /></i>
                                                <ul class="hidden-list">
                                                    <li onClick={handleShow1}>View</li>
                                                    <li>Delete</li>

                                                </ul>
                                            </div>

                                        </td>
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
export default Learners