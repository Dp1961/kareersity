import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './Testimonial.css';
import { Link } from "react-router-dom/dist";
import { AiOutlineRight } from 'react-icons/ai'
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';

import { BsThreeDotsVertical } from "react-icons/bs";


const Testimonial = () => {

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
                            <h3>Testimonial List</h3>
                            <p><Link to="/dashboard">Dasboard</Link> <i><AiOutlineRight /></i> <Link to="/">Testimonial</Link></p>
                        </div>
                        <div className="col-6">
                            <div className="Grn-Btnmanin">
                                <button className="Grn-Btn" onClick={handleShow}>add testimonial</button>
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
                                        <th>Name</th>
                                        <th>Qualification</th>
                                        <th>Short Desicription</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Vineeth Sharma</td>
                                        <td>B Pharma</td>
                                        <td className='DivWidth'>There is a need to incorporate more business and management training into their curricula to better prepare graduates for working in the pharmaceutical industry A Great initiative, this concept will be a career booster for our students</td>
                                        <td className="d-flex">
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
                    <Modal.Title>Add Testimonial</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        autoFocus
                                    />
                                </Form.Group>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Qualification</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        autoFocus
                                    />
                                </Form.Group>
                            </div>
                        </div>




                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Feedback</Form.Label>
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
                    <Modal.Title>Edit Testimonial</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        autoFocus
                                    />
                                </Form.Group>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Qualification</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        autoFocus
                                    />
                                </Form.Group>
                            </div>
                        </div>




                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Feedback</Form.Label>
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
export default Testimonial