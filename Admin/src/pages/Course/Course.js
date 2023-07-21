import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './Course.css';
import { Link } from "react-router-dom/dist";
import { AiOutlineRight } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import { BsThreeDotsVertical } from "react-icons/bs";


const Courses = () => {


    return (
        <div className="Categorypage">
            <div className="PageTit ">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h3>Course List</h3>
                            <p><Link to="/dashboard">Dasboard</Link> <i><AiOutlineRight /></i> <Link to="/">Manage Courses</Link></p>
                        </div>
                        <div className="col-6">
                            <div className="Grn-Btnmanin">
                                <Link to="/add_course" className="Grn-Btn" >add New course</Link>
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
                                                    <option >Category</option>
                                                    <option value="Student">Student</option>
                                                    <option value="Working Professional">Working Professional</option>

                                                </select>
                                            </div>
                                        </div>

                                        <div className='col-lg-3 col-md-3'>
                                            <div className='BtNSSearcH'>
                                                <select>
                                                    <option >Educator</option>
                                                    <option value="c1">College 1</option>
                                                    <option value="c2">College 2</option>
                                                    <option value="c3">College 3</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className='col-2'>
                                            <div className='BtNSSearcH'>
                                                <select>
                                                    <option >Price</option>
                                                    <option value="c1">100</option>
                                                    <option value="c2">200</option>
                                                    <option value="c3">300</option>
                                                </select>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>

                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Course Name</th>
                                        <th>Category</th>
                                        <th>Educator</th>
                                        <th>Duration</th>
                                        <th>Price</th>
                                        <th>Level</th>
                                        <th>Verification</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>What You Need As A Pharmacy Student To</td>
                                        <td>International Business</td>
                                        <td>Sivaramakrishnan</td>
                                        <td>1hr 30m</td>
                                        <td>₹199</td>
                                        <td>Intermediate</td>
                                        <td ><button className='GrnActn'>Approved</button></td>
                                        <td className="d-flex ">
                                            <div className="Options">
                                                <i><BsThreeDotsVertical /></i>
                                                <ul class="hidden-list">
                                                    <li><Link to="/view_course">View</Link></li>
                                                    <li>Edit</li>
                                                    <li>Delete</li>

                                                </ul>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>What You Need As A Pharmacy Student To</td>
                                        <td>International Business</td>
                                        <td>Sivaramakrishnan</td>
                                        <td>1hr 30m</td>
                                        <td className='Grn'>Free</td>
                                        <td>Intermediate</td>
                                        <td ><button className='GrnActn'>Approved</button></td>
                                        <td className="d-flex ">
                                            <div className="Options">
                                                <i><BsThreeDotsVertical /></i>
                                                <ul class="hidden-list">
                                                    <li><Link to="/view_course">View</Link></li>
                                                    <li>Edit</li>
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
export default Courses