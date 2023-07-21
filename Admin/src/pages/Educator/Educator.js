
import Form from 'react-bootstrap/Form';

import './Educator.css';
import { Link } from "react-router-dom/dist";
import { AiOutlineRight } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import { BsThreeDotsVertical } from "react-icons/bs";


const Educators = () => {

  

    return (
        <div className="Categorypage">
            <div className="PageTit ">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h3>Educators List</h3>
                            <p><Link to="/dashboard">Dasboard</Link> <i><AiOutlineRight /></i> <Link to="/">Educators</Link></p>
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
                                        <div className='col-lg-10 col-md-9'>
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

                                        

                                        <div className='col-2 col-md-3'>
                                            <div className='BtNSSearcH'>
                                                <button className='Grn-Btn'>Send Mail</button>
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
                                        <th>Mobile Number</th>
                                        <th>Verification</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>Ravi Shankar</td>
                                        <td>ravishankar21@gmail.com</td>
                                        <td>9876543210</td>
                                        <td><button className='GrnActn'>Approved</button></td>
                                        <td ><button className='GrnActn'>Active</button></td>
                                        <td className="d-flex ">
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
                                        <td>9876543210</td>
                                        <td><button className='RedDel'>Pending</button></td>
                                        <td ><button className='GrnActn'>Active</button></td>
                                        <td className="d-flex ">
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
                                        <td>9876543210</td>
                                        <td><button className='RedDel'>Pending</button></td>
                                        <td ><button className='RejBtn'>Reject</button></td>
                                        <td className="d-flex ">
                                            <div className="Options">
                                                <i><BsThreeDotsVertical /></i>
                                                <ul class="hidden-list">
                                                    <li>View</li>
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


        </div>
    )
}
export default Educators