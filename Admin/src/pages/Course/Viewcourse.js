import { useState } from 'react';
import './Course.css';
import { Link } from "react-router-dom/dist";
import { AiOutlineRight } from 'react-icons/ai'
import { MdEdit, MdDelete } from 'react-icons/md'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';



const Viewcourse = () => {

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
                            <h3>View Course</h3>
                            <p><Link to="/dashboard">Dasboard</Link> <i><AiOutlineRight /></i> <Link to="/">View Course</Link></p>
                        </div>
                        <div className="col-6">
                            {/* <div className="Grn-Btnmanin">
                                <Link to="/add_course" className="Grn-Btn" >add New course</Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="CateCont">
                <div className="container">
                    <div className="row">
                        <div className="CateGorTab">
                            <div className="row">
                                <div className="col-12">
                                    <Tabs defaultActiveKey="first">
                                        <Tab eventKey="first" title="Course Detail">
                                            <div className='CorsELiSTab pt-4 pb-4'>
                                                <Table striped bordered hover>

                                                    <tbody>
                                                        <tr>

                                                            <td className='CatCOlr'>Category</td>
                                                            <td>International Business</td>
                                                        </tr>
                                                        <tr>

                                                            <td className='CatCOlr'>Course title</td>
                                                            <td>What You Need As A Pharmacy Student To Achieve Successt</td>
                                                        </tr>
                                                        <tr>

                                                            <td className='CatCOlr'>Short description</td>
                                                            <td>Quisque ac sollicitudin libero, eget laoreet tellus. Quisque hendrerit, leo sit consequat accumsan, purus tortor iaculis est, nec semper metus tellus eget lectus.</td>
                                                        </tr>
                                                        <tr>

                                                            <td className='CatCOlr'>Price</td>
                                                            <td>₹200</td>
                                                        </tr>
                                                        <tr>

                                                            <td className='CatCOlr'>Duration</td>
                                                            <td>1 hour 30 minute</td>
                                                        </tr>
                                                        <tr>

                                                            <td className='CatCOlr'>Level</td>
                                                            <td>Intermediate</td>
                                                        </tr>
                                                        <tr>

                                                            <td className='CatCOlr'>Educators Name</td>
                                                            <td>Sivaramakrishnan</td>
                                                        </tr>
                                                        <tr>

                                                            <td className='CatCOlr'>Educators Designation</td>
                                                            <td>Advanced Pharma Educator</td>
                                                        </tr>
                                                        <tr>

                                                            <td className='CatCOlr'>Educators Short description</td>
                                                            <td>Quisque ac sollicitudin libero, eget laoreet tellus. Quisque hendrerit, leo sit consequat accumsan, purus tortor iaculis est, nec semper metus tellus eget lectus.</td>
                                                        </tr>

                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="second" title="Course Overview">
                                            <div className='CorsELiSTab pt-4 pb-4'>
                                                <Table striped bordered hover>

                                                    <tbody>
                                                        <tr>

                                                            <td className='CatCOlr'>Course description</td>
                                                            <td>Vestibulum eget dui quis purus ornare elementum tincidunt ut ante. Sed facilisis tortor nibh. Nam et quam auctor, egestas augue nec, sodales nibh. Donec eget arcu risus. Aliquam eu elit placerat, suscipit enim at, varius purus. Integer convallis nisl velit, ut consequat arcu rutrum sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam ac porttitor sem. Maecenas ut ante dui. Aliquam sit amet augue ac neque sollicitudin consequat sit amet ac odio. Vestibulum turpis felis, suscipit ac aliquam interdum, posuere non risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean at lorem justo. Morbi euismod tellus quam, nec mollis enim aliquam vitae. Sed malesuada eget eros a dictum. Fusce eu lorem sagittis, volutpat tortor id, dapibus enim. Aliquam ornare enim a accumsan interdum. Vestibulum iaculis, lorem viverra porta semper, quam risus rhoncus quam, a pellentesque tellus nibh id enim. </td>
                                                        </tr>
                                                        <tr>

                                                            <td className='CatCOlr'>What you'll learn</td>
                                                            <td>Vestibulum eget dui quis purus ornare elementum tincidunt ut ante. Sed facilisis tortor nibh. Nam et quam auctor, egestas augue nec, sodales nibh. Donec eget arcu risus. Aliquam eu elit placerat, suscipit enim at, varius purus. Integer convallis nisl velit, ut consequat arcu rutrum sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam ac porttitor sem. Maecenas ut ante dui. Aliquam sit amet augue ac neque sollicitudin consequat sit amet ac odio. Vestibulum turpis felis, suscipit ac aliquam interdum, posuere non risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean at lorem justo. Morbi euismod tellus quam, nec mollis enim aliquam vitae. Sed malesuada eget eros a dictum. Fusce eu lorem sagittis, volutpat tortor id, dapibus enim. Aliquam ornare enim a accumsan interdum. Vestibulum iaculis, lorem viverra porta semper, quam risus rhoncus quam, a pellentesque tellus nibh id enim. Phasellus odio sem, placerat vel maximus vel, molestie et erat. Proin vel auctor dolor, vitae elementum purus. Duis tellus elit, ornare tincidunt sollicitudin vel, Mollis at massa. Donec dictum dignissim eros et sodales. Nam eu pulvinar velit, ac semper nisi. Morbi pulvinar commodo purus non tincidunt. Cras placerat sem accumsan mollis bibendum. Sed nec erat sollicitudin, feugiat neque ut, tristique ex. Donec sagittis ipsum et venenatis tincidunt. Cras eu ante ac erat blandit tempus. Vivamus aliquet ac dolor in ultrices. Aenean fermentum consectetur lorem. Maecenas gravida nec dolor a dapibus. Nam augue justo, lobortis eu tempus nec, mattis in justo. </td>
                                                        </tr>
                                                        <tr>

                                                            <td className='CatCOlr'>Certifications</td>
                                                            <td>Quisque ac sollicitudin libero, eget laoreet tellus. Quisque hendrerit, leo sit consequat accumsan, purus tortor iaculis est, nec semper metus tellus eget lectus.</td>
                                                        </tr>
                                                        <tr>

                                                            <td className='CatCOlr'>Who this course is for</td>
                                                            <td>Vestibulum eget dui quis purus ornare elementum tincidunt ut ante. Sed facilisis tortor nibh. Nam et quam auctor, egestas augue nec, sodales nibh. Donec eget arcu risus. Aliquam eu elit placerat, suscipit enim at, varius purus. Integer convallis nisl velit, ut consequat arcu rutrum sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam ac porttitor sem. Maecenas ut ante dui. Aliquam sit amet augue ac neque sollicitudin consequat sit amet ac odio. Vestibulum turpis felis, suscipit ac aliquam interdum, posuere non risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean at lorem justo. Morbi euismod tellus quam, nec mollis enim aliquam vitae. Sed malesuada eget eros a dictum. Fusce eu lorem sagittis, volutpat tortor id, dapibus enim. Aliquam ornare enim a accumsan interdum. Vestibulum iaculis, lorem viverra porta semper, quam risus rhoncus quam, a pellentesque tellus nibh id enim. Phasellus odio sem, placerat vel maximus vel, molestie et erat. Proin vel auctor dolor, vitae elementum purus. Duis tellus elit, ornare tincidunt sollicitudin vel, Mollis at massa. Donec dictum dignissim eros et sodales. Nam eu pulvinar velit, ac semper nisi. Morbi pulvinar commodo purus non tincidunt. Cras placerat sem accumsan mollis bibendum. Sed nec erat sollicitudin, feugiat neque ut, tristique ex. Donec sagittis ipsum et venenatis tincidunt. Cras eu ante ac erat blandit tempus. Vivamus aliquet ac dolor in ultrices. Aenean fermentum consectetur lorem. Maecenas gravida nec dolor a dapibus. </td>
                                                        </tr>
                                                        <tr>

                                                            <td className='CatCOlr'>Course Includes</td>
                                                            <td>
                                                                <ul className='PAdinGUl'>
                                                                    <li>12 hrs Video</li>
                                                                    <li>12 hrs Video</li>
                                                                    <li>12 hrs Video</li>
                                                                    <li>12 hrs Video</li>
                                                                </ul>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="third" title="Course Content">
                                            <div className="CorCountenT">

                                                <div className='row justify-content-center  '>
                                                    <div className='col-12'>
                                                        <div className='DulBG'>
                                                            <div className='d-flex'>
                                                                <div className='DuLLBg'>
                                                                    <p><span>Session 1 :</span> Grow Personal pharmacist Security Thinking & Principles</p>
                                                                </div>

                                                            </div>
                                                            <div className='row mt-5'>
                                                                <div className='col-12'>
                                                                    <div className='LeSSonSesion'>
                                                                        <div className="d-flex">
                                                                            <div className='LesSNp'>
                                                                                <p><span>Lesson 1 :</span>Definition and scope of the pharmaceutical industry (3m)</p>

                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row'>
                                                                <div className='col-12'>
                                                                    <div className='LeSSonSesion'>
                                                                        <div className="d-flex">
                                                                            <div className='LesSNp'>
                                                                                <p><span>Lesson 2 :</span>Definition and scope of the pharmaceutical industry (3m)</p>

                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row'>
                                                                <div className='col-12'>
                                                                    <div className='LeSSonSesion'>
                                                                        <div className="d-flex">
                                                                            <div className='LesSNp'>
                                                                                <p><span>Lesson 3 :</span>Definition and scope of the pharmaceutical industry (3m)</p>

                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>

                                                    </div>

                                                </div>
                                                <div className='row justify-content-center mt-5'>
                                                    <div className='col-12'>
                                                        <div className='DulBG'>
                                                            <div className='d-flex'>
                                                                <div className='DuLLBg'>
                                                                    <p><span>Session 2 :</span> Grow Personal pharmacist Security Thinking & Principles</p>
                                                                </div>

                                                            </div>
                                                            <div className='row mt-5'>
                                                                <div className='col-12'>
                                                                    <div className='LeSSonSesion'>
                                                                        <div className="d-flex">
                                                                            <div className='LesSNp'>
                                                                                <p><span>Lesson 1 :</span>Definition and scope of the pharmaceutical industry (3m)</p>

                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row'>
                                                                <div className='col-12'>
                                                                    <div className='LeSSonSesion'>
                                                                        <div className="d-flex">
                                                                            <div className='LesSNp'>
                                                                                <p><span>Lesson 2 :</span>Definition and scope of the pharmaceutical industry (3m)</p>

                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row'>
                                                                <div className='col-12'>
                                                                    <div className='LeSSonSesion'>
                                                                        <div className="d-flex">
                                                                            <div className='LesSNp'>
                                                                                <p><span>Lesson 3 :</span>Definition and scope of the pharmaceutical industry (3m)</p>

                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="four" title="Assessment">
                                            <div className="CorCountenT">

                                                <div className='row justify-content-center  '>
                                                    <div className='col-12'>
                                                        <div className='DulBG'>
                                                            <div className='d-flex'>
                                                                <div className='DuLLBg'>
                                                                    <p><span>Session 1 :</span> Grow Personal pharmacist Security Thinking & Principles</p>
                                                                </div>

                                                            </div>
                                                            <div className='row mt-5'>
                                                                <div className='col-12'>
                                                                    {/* <div className='LeSSonSesion'> */}
                                                                    <Accordion defaultActiveKey="0">
                                                                        <Accordion.Item eventKey="0">
                                                                            <Accordion.Header>What Importance and impact of the industry on global health and economy</Accordion.Header>
                                                                            <Accordion.Body>
                                                                                <form>
                                                                                    <input type="checkbox" />
                                                                                    <label className='AccCheck'> Security Thinking</label><br />
                                                                                    <input type="checkbox" />
                                                                                    <label className='AccCheck'> Grow Personal</label><br />
                                                                                    <input type="checkbox" />
                                                                                    <label className='AccCheck'> Industry structure and players</label><br />
                                                                                    <input type="checkbox" />
                                                                                    <label className='AccCheck'> Pharmacy Student</label><br />
                                                                                    
                                                                                </form>
                                                                            </Accordion.Body>
                                                                        </Accordion.Item>
                                                                        <Accordion.Item eventKey="1">
                                                                            <Accordion.Header>What Importance and impact of the industry on global health and economy</Accordion.Header>
                                                                            <Accordion.Body>
                                                                            <form>
                                                                                    <input type="checkbox" />
                                                                                    <label className='AccCheck'> Security Thinking</label><br />
                                                                                    <input type="checkbox" />
                                                                                    <label className='AccCheck'> Grow Personal</label><br />
                                                                                    <input type="checkbox" />
                                                                                    <label className='AccCheck'> Industry structure and players</label><br />
                                                                                    <input type="checkbox" />
                                                                                    <label className='AccCheck'> Pharmacy Student</label><br />
                                                                                    
                                                                                </form>
                                                                            </Accordion.Body>
                                                                        </Accordion.Item>
                                                                    </Accordion>

                                                                </div>
                                                            </div>


                                                        </div>

                                                    </div>

                                                </div>
                                                <div className='row justify-content-center mt-5'>
                                                    <div className='col-12'>
                                                        <div className='DulBG'>
                                                            <div className='d-flex'>
                                                                <div className='DuLLBg'>
                                                                    <p><span>Session 2 :</span> Grow Personal pharmacist Security Thinking & Principles</p>
                                                                </div>

                                                            </div>
                                                            <div className='row mt-5'>
                                                                <div className='col-12'>
                                                                <Accordion defaultActiveKey="0">
                                                                        <Accordion.Item eventKey="0">
                                                                            <Accordion.Header>What Importance and impact of the industry on global health and economy</Accordion.Header>
                                                                            <Accordion.Body>
                                                                                <form>
                                                                                    <input type="checkbox" />
                                                                                    <label className='AccCheck'> Security Thinking</label><br />
                                                                                    <input type="checkbox" />
                                                                                    <label className='AccCheck'> Grow Personal</label><br />
                                                                                    <input type="checkbox" />
                                                                                    <label className='AccCheck'> Industry structure and players</label><br />
                                                                                    <input type="checkbox" />
                                                                                    <label className='AccCheck'> Pharmacy Student</label><br />
                                                                                    
                                                                                </form>
                                                                            </Accordion.Body>
                                                                        </Accordion.Item>
                                                                        <Accordion.Item eventKey="1">
                                                                            <Accordion.Header>What Importance and impact of the industry on global health and economy</Accordion.Header>
                                                                            <Accordion.Body>
                                                                            <form>
                                                                                    <input type="checkbox" />
                                                                                    <label className='AccCheck'> Security Thinking</label><br />
                                                                                    <input type="checkbox" />
                                                                                    <label className='AccCheck'> Grow Personal</label><br />
                                                                                    <input type="checkbox" />
                                                                                    <label className='AccCheck'> Industry structure and players</label><br />
                                                                                    <input type="checkbox" />
                                                                                    <label className='AccCheck'> Pharmacy Student</label><br />
                                                                                    
                                                                                </form>
                                                                            </Accordion.Body>
                                                                        </Accordion.Item>
                                                                    </Accordion>
                                                                </div>
                                                            </div>
                                                           
                                                            


                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </Tab>

                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* Modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Session</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Session Title</Form.Label>
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
            <Modal show={showview} onHide={handleShow1}>
                <Modal.Header closeButton>
                    <Modal.Title>View Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Select Session</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Lesson Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                autoFocus
                            />
                        </Form.Group>
                        <div className='row'>
                            <div className='col-6'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Duration</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        autoFocus
                                    />
                                </Form.Group>
                            </div>
                            <div className='col-6'>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Video Upload</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                            </div>
                        </div>

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
export default Viewcourse