import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './Experts.css';
import { Link } from "react-router-dom/dist";
import { AiOutlineRight } from 'react-icons/ai'
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';

import { BsThreeDotsVertical } from "react-icons/bs";


const Experts = () => {

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
                            <h3>Shorts List</h3>
                            <p><Link to="/dashboard">Dasboard</Link> <i><AiOutlineRight /></i> <Link to="/">List to Experts</Link></p>
                        </div>
                        <div className="col-6">
                            <div className="Grn-Btnmanin">
                                <Link to="/add_experts" className="Grn-Btn" onClick={handleShow}>add Shorts</Link>
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
                                        <th>Title</th>
                                        <th>Video URL</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td className='DivWidth faq'>What You Need As A Pharmacy Student To Achieve Success</td>
                                        <td className='DivWidth faq'>https://www.youtube.com/watch?v=XIMLoLxmTDw</td>
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
                                                        <li><Link to="/edit_experts">View</Link></li>
                                                        <li>Delete</li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td className='DivWidth faq'>What You Need As A Pharmacy Student To Achieve Success</td>
                                        <td className='DivWidth faq'>https://www.youtube.com/watch?v=XIMLoLxmTDw</td>
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
                                    <tr>
                                        <td>3</td>
                                        <td className='DivWidth faq'>What You Need As A Pharmacy Student To Achieve Success</td>
                                        <td className='DivWidth faq'>https://www.youtube.com/watch?v=XIMLoLxmTDw</td>
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
export default Experts