import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './Course.css';
import { Link } from "react-router-dom/dist";
import { AiOutlineRight } from 'react-icons/ai'
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { BsSearch } from 'react-icons/bs'
import Select from 'react-select';

import { BsThreeDotsVertical } from "react-icons/bs";




const Coursebundle = () => {

    const options = [
        { value: '7 Reasons Why You Should Get A the certificate In Pharmacy', label: '7 Reasons Why You Should Get A the certificate In Pharmacy' },
        { value: 'Grow Personal pharmacist Security Thinking', label: 'Grow Personal pharmacist Security Thinking' },
        { value: 'Less is More: Determining Essential Pediatric Pharmacy Knowledge', label: 'Less is More: Determining Essential Pediatric Pharmacy Knowledge' },
        { value: 'What You Need As A Pharmacy Student', label: 'What You Need As A Pharmacy Student' },

    ];

    const [selectedOption, setSelectedOption] = useState(null);

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
                            <h3>Course Bundle List</h3>
                            <p><Link to="/dashboard">Dasboard</Link> <i><AiOutlineRight /></i> <Link to="/">Manage Course Bundle</Link></p>
                        </div>
                        <div className="col-6">
                            <div className="Grn-Btnmanin">
                                <button className="Grn-Btn" onClick={handleShow}>add new course bundle</button>
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
                                        <div className='col-lg-12'>
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



                                    </div>

                                </div>
                            </div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Course Bundle Name</th>
                                        <th>Course</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Beginner to Expert</td>
                                        <td>
                                            <ul className='CourSEl'>
                                                <li>7 Reasons Why You Should Get A the certificate In Pharmacy</li>
                                                <li>Grow Personal pharmacist Security Thinking & Principles</li>
                                                <li>What You Need As A Pharmacy Student To Achieve Success</li>
                                            </ul>
                                        </td>
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
                                    <tr>
                                        <td>2</td>
                                        <td>Beginner to Expert</td>
                                        <td>
                                            <ul className='CourSEl'>
                                                <li>7 Reasons Why You Should Get A the certificate In Pharmacy</li>
                                                <li>Grow Personal pharmacist Security Thinking & Principles</li>
                                                <li>What You Need As A Pharmacy Student To Achieve Success</li>
                                            </ul>
                                        </td>
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
                    <Modal.Title>Add New Course Bundle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Course Bundle Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Select Courses</Form.Label>
                            <Select
                                isMulti
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
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
                    <Modal.Title>Edit New Course Bundle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Course Bundle Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Select Courses</Form.Label>
                            <Select
                                isMulti
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
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
export default Coursebundle