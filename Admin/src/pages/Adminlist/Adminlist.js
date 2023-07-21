
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './Adminlist.css';
import { Link } from "react-router-dom/dist";
import { AiOutlineRight } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import { BsThreeDotsVertical } from "react-icons/bs";


import Modal from 'react-bootstrap/Modal';


const Adminlist = () => {


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
                            <h3>Admin Users</h3>
                            <p><Link to="/dashboard">Dasboard</Link> <i><AiOutlineRight /></i> <Link to="/">Admin Users</Link></p>
                        </div>
                        <div className="col-6">
                            <div className="Grn-Btnmanin">
                                <button className="Grn-Btn" onClick={handleShow}>add admin users</button>
                            </div>
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
                                        <div className='col-lg-9 col-md-9'>
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
                                                <select>
                                                    <option >Role</option>
                                                    <option value="c1">Admin</option>
                                                    <option value="c2">Educator</option>
                                                </select>
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
                                        <th>Role</th>

                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>Ravi Shankar</td>
                                        <td>ravishankar21@gmail.com</td>
                                        <td>Educators</td>

                                        <td className='ddFl'>
                                            <div className="OnOfF">
                                                <Form>
                                                    <Form.Check // prettier-ignore
                                                        type="switch"
                                                        id="custom-switch"

                                                    />

                                                </Form>
                                            </div>
                                        </td>
                                        <td className="ddFl ">
                                            <div className="Options">
                                                <i><BsThreeDotsVertical /></i>
                                                <ul class="hidden-list">
                                                    <li>View</li>
                                                    <li>Delete</li>

                                                </ul>
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>Ravi Shankar</td>
                                        <td>ravishankar21@gmail.com</td>
                                        <td>Educators</td>

                                        <td className='ddFl'>
                                            <div className="OnOfF">
                                                <Form>
                                                    <Form.Check // prettier-ignore
                                                        type="switch"
                                                        id="custom-switch"

                                                    />

                                                </Form>
                                            </div>
                                        </td>
                                        <td className="ddFl ">
                                            <div className="Options">
                                                <i><BsThreeDotsVertical /></i>
                                                <ul class="hidden-list">
                                                    <li onClick={handleShow1}>View</li>
                                                    <li>Delete</li>

                                                </ul>
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>Ravi Shankar</td>
                                        <td>ravishankar21@gmail.com</td>
                                        <td>Educators</td>

                                        <td className='ddFl'>
                                            <div className="OnOfF">
                                                <Form>
                                                    <Form.Check // prettier-ignore
                                                        type="switch"
                                                        id="custom-switch"

                                                    />

                                                </Form>
                                            </div>
                                        </td>
                                        <td className="ddFl ">
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
                    <Modal.Title>Add admin user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Role</Form.Label><br></br>
                            <select>
                                <option value="admin">Admin</option>
                                <option value="Educator">Educator</option>
                            </select>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Status</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                autoFocus
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
                    <Modal.Title>View Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                                Category Name
                            </InputGroup.Text>
                            <Form.Control id="basicborder" aria-describedby="basic-addon3" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                                Category Short description
                            </InputGroup.Text>
                            <Form.Control id="basicborder" aria-describedby="basic-addon3" />
                        </InputGroup>
                    </Form>
                </Modal.Body>

            </Modal>


        </div>
    )
}
export default Adminlist