
import Form from 'react-bootstrap/Form';
import './Adminlist.css';
import { Link } from "react-router-dom/dist";
import { AiOutlineRight } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import { BsThreeDotsVertical } from "react-icons/bs";





const Adminrole = () => {





    return (
        <div className="Categorypage">
            <div className="PageTit ">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h3>Admin Roles</h3>
                            <p><Link to="/dashboard">Dasboard</Link> <i><AiOutlineRight /></i> <Link to="/">Admin Roles</Link></p>
                        </div>
                        <div className="col-6">
                            {/* <div className="Grn-Btnmanin">
                                <button className="Grn-Btn">add admin users</button>
                            </div> */}
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
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Super Admin</td>
                                        
                                        
                                        <td className="ddFlAR ">
                                            <div className="Options">
                                                <i><BsThreeDotsVertical /></i>
                                                <ul class="hidden-list Ar">
                                                    <li><Link to="/permission_list">Assign Permission </Link></li>
                                                    <li>Delete</li>

                                                </ul>
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Admin</td>
                                        
                                        
                                        <td className="ddFlAR ">
                                            <div className="Options">
                                                <i><BsThreeDotsVertical /></i>
                                                <ul class="hidden-list Ar">
                                                    <li><Link to="/permission_list">Assign Permission </Link></li>
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
export default Adminrole