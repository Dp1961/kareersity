import { useState } from 'react';
import './Course.css';
import { Link } from "react-router-dom/dist";
import { AiOutlineRight , AiTwotoneDelete } from 'react-icons/ai'
import { MdEdit, MdDelete } from 'react-icons/md'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { TbFileUpload } from "react-icons/tb";
import Accordion from 'react-bootstrap/Accordion';
import { BiSolidPencil } from 'react-icons/bi'


const Addcourse = () => {

    const [show, setShow] = useState(false);
    const [showview, setShowview] = useState(false);
    const [showview1, setShowview1] = useState(false);
    const [showview3, setShowview3] = useState(false);
    const [rows, setRows] = useState([1]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose1 = () => setShowview(false);
    const handleShow1 = () => setShowview(true);

    const handleClose2 = () => setShowview1(false);
    const handleShow2 = () => setShowview1(true);

    const handleClose3 = () => setShowview3(false);
    const handleShow3 = () => setShowview3(true);


    const addRow = () => {

        const newRow = rows.length + 1;
    
        setRows([...rows, newRow]);
    
      };
    
    
    
    
      const removeRow = () => {
    
        if (rows.length > 1) {
    
          const updatedRows = rows.slice(0, -1);
    
          setRows(updatedRows);
    
        }
    
      };

    return (
        <div className="Categorypage">
            <div className="PageTit ">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h3>Add New Course</h3>
                            <p><Link to="/dashboard">Dasboard</Link> <i><AiOutlineRight /></i> <Link to="/">Add New Course</Link></p>
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
                                        <Tab eventKey="first" title="1. Basic">
                                            <div className='CorsELiSTab pt-4 pb-4'>
                                                <form>
                                                    <div className="row">
                                                        <div className="col-lg-3 col-3">
                                                            <label>Category</label>
                                                        </div>
                                                        <div className="col-lg-9 col-9">
                                                            <select>
                                                                <option value="C1">Category 1</option>
                                                                <option value="C2">Category 2</option>
                                                                <option value="C3">Category 3</option>
                                                                <option value="C4">Category 4</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-3 col-3">
                                                            <label>Course Title</label>
                                                        </div>
                                                        <div className="col-lg-9 col-9">
                                                            <input type="text" className="COrAdForm" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-3 col-3">
                                                            <label>Short Description</label>
                                                        </div>
                                                        <div className="col-lg-9 col-9">
                                                            <textarea rows="4" ></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-3 col-3">
                                                            <label>Duration</label>
                                                        </div>
                                                        <div className="col-lg-9 col-9">
                                                            <input type="text" className="COrAdForm" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-3 col-3">
                                                            <label>Level</label>
                                                        </div>
                                                        <div className="col-lg-9 col-9">
                                                            <select>
                                                                <option value="L1">Basic</option>
                                                                <option value="L2">Intermediate</option>
                                                                <option value="L3">Hard</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <hr>
                                                    </hr>
                                                    <div className="row">
                                                        <div className="col-lg-3 col-3">
                                                            <label>Course Description</label>
                                                        </div>
                                                        <div className="col-lg-9 col-9">
                                                            <CKEditor
                                                                editor={ClassicEditor}
                                                                data="<p> </p>"
                                                                onReady={editor => {
                                                                    // You can store the "editor" and use when it is needed.
                                                                    console.log('Editor is ready to use!', editor);
                                                                }}
                                                                onChange={(event, editor) => {
                                                                    const data = editor.getData();
                                                                    console.log({ event, editor, data });
                                                                }}
                                                                onBlur={(event, editor) => {
                                                                    console.log('Blur.', editor);
                                                                }}
                                                                onFocus={(event, editor) => {
                                                                    console.log('Focus.', editor);
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-3 col-3">
                                                            <label>What you'll learn</label>
                                                        </div>
                                                        <div className="col-lg-9 col-9">
                                                            <CKEditor
                                                                editor={ClassicEditor}
                                                                data="<p> </p>"
                                                                onReady={editor => {
                                                                    // You can store the "editor" and use when it is needed.
                                                                    console.log('Editor is ready to use!', editor);
                                                                }}
                                                                onChange={(event, editor) => {
                                                                    const data = editor.getData();
                                                                    console.log({ event, editor, data });
                                                                }}
                                                                onBlur={(event, editor) => {
                                                                    console.log('Blur.', editor);
                                                                }}
                                                                onFocus={(event, editor) => {
                                                                    console.log('Focus.', editor);
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-3 col-3">
                                                            <label>Certifications</label>
                                                        </div>
                                                        <div className="col-lg-9 col-9">
                                                            <CKEditor
                                                                editor={ClassicEditor}
                                                                data="<p> </p>"
                                                                onReady={editor => {
                                                                    // You can store the "editor" and use when it is needed.
                                                                    console.log('Editor is ready to use!', editor);
                                                                }}
                                                                onChange={(event, editor) => {
                                                                    const data = editor.getData();
                                                                    console.log({ event, editor, data });
                                                                }}
                                                                onBlur={(event, editor) => {
                                                                    console.log('Blur.', editor);
                                                                }}
                                                                onFocus={(event, editor) => {
                                                                    console.log('Focus.', editor);
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-3 col-3">
                                                            <label>Who this course is for</label>
                                                        </div>
                                                        <div className="col-lg-9 col-9">
                                                            <CKEditor
                                                                editor={ClassicEditor}
                                                                data="<p> </p>"
                                                                onReady={editor => {
                                                                    // You can store the "editor" and use when it is needed.
                                                                    console.log('Editor is ready to use!', editor);
                                                                }}
                                                                onChange={(event, editor) => {
                                                                    const data = editor.getData();
                                                                    console.log({ event, editor, data });
                                                                }}
                                                                onBlur={(event, editor) => {
                                                                    console.log('Blur.', editor);
                                                                }}
                                                                onFocus={(event, editor) => {
                                                                    console.log('Focus.', editor);
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row justify-content-center">
                                                        <div className="col-6">
                                                            <div class="Grn-Btnmanin">
                                                                <button type="submit" class="Grn-Btn" >Next</button>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </form>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="second" title="2. Course Content">
                                            <div className="CorCountenT">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-3 col-md-3">
                                                        <Link to="" className="BluEBUTn" onClick={handleShow} >+ Add Session</Link>
                                                    </div>

                                                    <div className="col-lg-3 col-md-3">
                                                        <Link to="" className="BluEBUTn" onClick={handleShow1}>+ Add Lesson</Link>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3">
                                                        <Link to="" className="BluEBUTn" onClick={handleShow3}>+ Add Assessment</Link>
                                                    </div>
                                                </div>
                                                <div className='row justify-content-center mt-5'>
                                                    <div className='col-12'>
                                                        <div className='DulBG'>
                                                            <div className='d-flex'>
                                                                <div className='DuLLBg'>
                                                                    <p><span>Session 1 :</span> Grow Personal pharmacist Security Thinking & Principles</p>
                                                                </div>
                                                                <div className='AcBtN'>
                                                                    <button type='submit' onClick={handleShow2} >View Assessment</button>
                                                                </div>
                                                                <div className='AcBtN Wh'>
                                                                    <button type='submit'>Edit Session</button>
                                                                </div>
                                                                <div className='AcBtN Wh'>
                                                                    <button type='submit'>Delete Session</button>
                                                                </div>
                                                            </div>
                                                            <div className='row mt-5'>
                                                                <div className='col-12'>
                                                                    <div className='LeSSonSesion'>
                                                                        <div className="d-flex">
                                                                            <div className='LesSNp'>
                                                                                <p><span>Lesson 1 :</span>Definition and scope of the pharmaceutical industry (3m)</p>

                                                                            </div>
                                                                            <div className='AcBtN'>
                                                                                <button><i><MdEdit /></i></button>
                                                                                <button><i><MdDelete /></i></button>
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
                                                                            <div className='AcBtN'>
                                                                                <button><i><MdEdit /></i></button>
                                                                                <button><i><MdDelete /></i></button>
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
                                                                            <div className='AcBtN'>
                                                                                <button><i><MdEdit /></i></button>
                                                                                <button><i><MdDelete /></i></button>
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
                                                                    <p><span>Session 1 :</span> Grow Personal pharmacist Security Thinking & Principles</p>
                                                                </div>
                                                                <div className='AcBtN'>
                                                                    <button type='submit'>View Assessment</button>
                                                                </div>
                                                                <div className='AcBtN Wh'>
                                                                    <button type='submit'>Edit Session</button>
                                                                </div>
                                                                <div className='AcBtN Wh'>
                                                                    <button type='submit'>Delete Session</button>
                                                                </div>
                                                            </div>
                                                            <div className='row mt-5'>
                                                                <div className='col-12'>
                                                                    <div className='LeSSonSesion'>
                                                                        <div className="d-flex">
                                                                            <div className='LesSNp'>
                                                                                <p><span>Lesson 1 :</span>Definition and scope of the pharmaceutical industry (3m)</p>

                                                                            </div>
                                                                            <div className='AcBtN'>
                                                                                <button><i><MdEdit /></i></button>
                                                                                <button><i><MdDelete /></i></button>
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
                                                                            <div className='AcBtN'>
                                                                                <button><i><MdEdit /></i></button>
                                                                                <button><i><MdDelete /></i></button>
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
                                                                            <div className='AcBtN'>
                                                                                <button><i><MdEdit /></i></button>
                                                                                <button><i><MdDelete /></i></button>
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
                                        <Tab eventKey="third" title="3. Pricing">
                                            <div className='CorsELiSTab'>
                                                <form>
                                                    <div className='row justify-content-center'>
                                                        <div className='col-lg-4 col-md-12 pt-4 d-flex'>
                                                            <input type="checkbox" />
                                                            <label className='TApadig'>Free for everyone</label><br />
                                                        </div>

                                                        <div className='col-lg-6 col-md-12 pt-4 d-flex'>
                                                            <input type="checkbox" />
                                                            <label className='TApadig'>Free for those who enrolled in 30 days</label><br />
                                                        </div>

                                                    </div>
                                                    <div className='row justify-content-center'>
                                                        <div className='col-lg-4 col-md-12 d-flex'>
                                                            <input type="checkbox" />
                                                            <label className='TApadig'>Free for based on Colleges</label><br />
                                                        </div>

                                                        <div className="col-lg-6 col-md-12 col-9">
                                                            <select>
                                                                <option value="L1">Basic</option>
                                                                <option value="L2">Intermediate</option>
                                                                <option value="L3">Hard</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-12 col-3">
                                                            <label>Course Price</label>
                                                        </div>
                                                        <div className="col-lg-9 col-9">
                                                            <input type="text" className="COrAdForm" />
                                                        </div>
                                                    </div>

                                                    <div className='row'>
                                                        <div className='col-lg-3 col-md-12'>

                                                        </div>

                                                        <div className="col-lg-6 col-md-12 col-9 d-flex">
                                                            <input type="checkbox" />
                                                            <label className='TApadig'>Check if this course has discount</label><br />
                                                        </div>

                                                    </div>

                                                    <div className="row">
                                                        <div className="col-lg-3  col-md-12 col-3">
                                                            <label>Discount Price</label>
                                                        </div>
                                                        <div className="col-lg-9 col-md-12 col-9">
                                                            <input type="text" className="COrAdForm" />
                                                            <p className='NotCa'>This course has <span>95.00% </span>Discount</p>
                                                        </div>
                                                    </div>

                                                    <div className="row justify-content-center">
                                                        <div className="col-3">
                                                            <div className="SHortsForm1">
                                                                <button className="Grn-Btn ">PREVIOUS</button>

                                                            </div>

                                                        </div>
                                                        <div className="col-3">
                                                            <div className="SHortsForm1">

                                                                <button className="Grn-Btn ">Next</button>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </form>


                                            </div>
                                        </Tab>
                                        <Tab eventKey="four" title="4. Educators">
                                            <div className='CorsELiSTab'>
                                                <form>
                                                    <div className='row'>
                                                        <div className='col-lg-3 pt-4'>
                                                            <label>Educator Photo</label>
                                                        </div>
                                                        <div className='col-lg-3'>
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
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-3 col-3">
                                                            <label>Educator Name</label>
                                                        </div>
                                                        <div className="col-lg-9 col-9">
                                                            <input type="text" className="COrAdForm" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-3 col-3">
                                                            <label>Designation</label>
                                                        </div>
                                                        <div className="col-lg-9 col-9">
                                                            <input type="text" className="COrAdForm" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-3 col-3">
                                                            <label>Short Description</label>
                                                        </div>
                                                        <div className="col-lg-9 col-9">
                                                            <textarea rows="4" ></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="row justify-content-center">
                                                        <div className="col-3">
                                                            <div className="SHortsForm1">
                                                                <button className="Grn-Btn ">PREVIOUS</button>

                                                            </div>

                                                        </div>
                                                        <div className="col-3">
                                                            <div className="SHortsForm1">

                                                                <button className="Grn-Btn ">Next</button>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </form>


                                            </div>
                                        </Tab>
                                        <Tab eventKey="five" title="5. Finish">
                                            <div className='CorsELiSTab'>
                                                <div className='row'>
                                                    <div className='col-12'>
                                                        <div className='CoConTenT'>
                                                            <h4>Thank You!</h4>
                                                            <h4>Your Course has been Created    </h4>
                                                            <div className='row justify-content-center'>
                                                                <div className='col-6'>
                                                                    <div class="Grn-Btnmanin">
                                                                        <Link class="Grn-Btn" >Finish</Link>
                                                                    </div>
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
            <Modal show={showview} onHide={handleClose1}>
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


            {/* view assesment */}
            <Modal show={showview1} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>View Assessment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className='DuLLBg'>
                            <p><span>Session 1 :</span> Grow Personal pharmacist Security Thinking & Principles</p>
                        </div>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What Importance and impact of the industry on global health and economy 
                                    <div className='Edit-tool'>
                                        <i><BiSolidPencil/></i>
                                        <i><AiTwotoneDelete/></i>
                                    </div>
                                </Accordion.Header>
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




                    </Form>
                </Modal.Body>

            </Modal>

            {/* add assesment */}
            <Modal show={showview3} onHide={handleClose3}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Assessment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className='col-12'>
                            <div className='assment-course'>
                                <label>Select Session</label>
                                <select>
                                    <option >Role</option>
                                    <option value="c1">Admin</option>
                                    <option value="c2">Educator</option>
                                </select>
                            </div>
                        </div>
                        {rows.map((row) => ( 
                        <div className='assment-course d-flex mt-4'>
                            <input type='text' className='add-course' placeholder='Question'/>
                            <p className='Add-row' onClick={addRow }>+</p>
                            <p className='del-row' onClick={removeRow}>-</p>
                        </div>
                         ))}






                    </Form>
                </Modal.Body>

            </Modal>






        </div>
    )
}
export default Addcourse