import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './Faq.css';
import { Link } from "react-router-dom/dist";
import { AiOutlineRight } from 'react-icons/ai'
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';

import { BsThreeDotsVertical } from "react-icons/bs";


const Faq = () => {

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
                            <h3>FAQ List</h3>
                            <p><Link to="/dashboard">Dasboard</Link> <i><AiOutlineRight /></i> <Link to="/">Faq</Link></p>
                        </div>
                        <div className="col-6">
                            <div className="Grn-Btnmanin">
                                <button className="Grn-Btn" onClick={handleShow}>add faq</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="CateCont">
                <div className="container">
                    <div className="row">
                        <div className="CateGorTab">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Question</th>
                                        <th>Answer</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td className='DivWidth faq'>7 Reasons Why You Should Get A the certificate In Pharmacy</td>
                                        <td className='DivWidth faq'>Curabitur aliquet eros sed lorem egestas euismod. Suspendisse accumsan pretium ante, in vehicula ante scelerisque vel. Duis finibus id nibh a iaculis. Etiam vel purus lectus. Proin dictum imperdiet neque, eget condimentum arcu porta sed. Aenean interdum leo quis enim bibendum, nec imperdiet magna gravida. Maecenas faucibus justo at enim commodo fermentum.</td>
                                        <td className="d-flex ">
                                            <div className="col-6">
                                                <div className="OnOfF">
                                                    <Form>
                                                        <Form.Check // prettier-ignore
                                                            type="switch"
                                                            id="custom-switch"

                                                        />

                                                    </Form>
                                                </div>

                                            </div>
                                            <div className="col-6">
                                                <div className="Options">
                                                    <i><BsThreeDotsVertical /></i>
                                                    <ul class="hidden-list">
                                                        <li onClick={handleShow1}>View</li>
                                                        <li>Delete</li>

                                                    </ul>
                                                </div>
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
export default Faq