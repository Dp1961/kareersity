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

import { TbFileUpload } from "react-icons/tb";


const Viewlearners = () => {

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
                            <h3>Ravi Shankar</h3>
                            <p><Link to="/dashboard">Dasboard</Link> <i><AiOutlineRight /></i> <Link to="/">Learners</Link> <i><AiOutlineRight /></i> <Link to="/">Ravi Shankar</Link></p>
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
                            <div className='CorsELiSTab'>
                                <div className='row'>
                                    <div className='col-3'>
                                        <div className="ThumBnail">

                                            <div className='upLoad'>

                                                <label for="file-upload" className="custom-file-upload ">
                                                    <span className="text-center">
                                                        <TbFileUpload className="uploadIcon" />
                                                    </span>
                                                    <p>Upload Thumbnail</p>
                                                </label>
                                                <input id="file-upload" type="file" className="fileUpload" />
                                            </div>
                                        </div>
                                        <div className='ViewCon'>
                                            <label>Status</label><br />
                                            <select >
                                                <option value="active">Active</option>
                                                <option value="inacctive">In Active</option>
                                                <option value="pending">Pending</option>

                                            </select>
                                            <div class="Grn-Btnmanin flLef"><button class="Grn-Btn">add category</button></div>
                                        </div>
                                    </div>

                                    <div className='col-9'>
                                        <div className='CorsELiSTab pt-4 pb-4'>
                                            <Table striped bordered hover>

                                                <tbody>
                                                    <tr>

                                                        <td className='CatCOlr'>Name</td>
                                                        <td>Ravi Shankar</td>
                                                    </tr>
                                                    <tr>

                                                        <td className='CatCOlr'>Learner Type</td>
                                                        <td>Student</td>
                                                    </tr>
                                                    <tr>

                                                        <td className='CatCOlr'>Email Address</td>
                                                        <td>ravishankar21@gmail.com</td>
                                                    </tr>
                                                    <tr>

                                                        <td className='CatCOlr'>Mobile Number</td>
                                                        <td>9876543210</td>
                                                    </tr>
                                                    <tr>

                                                        <td className='CatCOlr'>Password</td>
                                                        <td>*********</td>
                                                    </tr>
                                                    <tr>

                                                        <td className='CatCOlr'>Pincode</td>
                                                        <td>630058</td>
                                                    </tr>
                                                    <tr>

                                                        <td className='CatCOlr'>City</td>
                                                        <td>Salem</td>
                                                    </tr>
                                                    <tr>

                                                        <td className='CatCOlr'>State</td>
                                                        <td>Tamilnadu</td>
                                                    </tr>
                                                    <tr>

                                                        <td className='CatCOlr'>Country</td>
                                                        <td>India</td>
                                                    </tr>

                                                    <tr>

                                                        <td className='CatCOlr'>Name of the College</td>
                                                        <td>Kamaraj National College</td>
                                                    </tr>
                                                    <tr>

                                                        <td className='CatCOlr'>Year of the College</td>
                                                        <td>2020</td>
                                                    </tr>
                                                    <tr>

                                                        <td className='CatCOlr'>Degree of Stream</td>
                                                        <td>M.Pharm</td>
                                                    </tr>
                                                    <tr>

                                                        <td className='CatCOlr'>City</td>
                                                        <td>Chennai</td>
                                                    </tr>
                                                    <tr>

                                                        <td className='CatCOlr'>Pincode</td>
                                                        <td>620078</td>
                                                    </tr>
                                                    <tr>

                                                        <td className='CatCOlr'>Name of the Company</td>
                                                        <td>Sysco Pharma Tech</td>
                                                    </tr>

                                                    <tr>

                                                        <td className='CatCOlr'>Designation</td>
                                                        <td>Marketing</td>
                                                    </tr>
                                                    <tr>

                                                        <td className='CatCOlr'>Degree of Stream</td>
                                                        <td>M.Pharm</td>
                                                    </tr>

                                                    <tr>

                                                        <td className='CatCOlr'>City</td>
                                                        <td>Chennai</td>
                                                    </tr>
                                                    <tr>

                                                        <td className='CatCOlr'>Pincode</td>
                                                        <td>620078</td>
                                                    </tr>



                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                            </div>



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
export default Viewlearners