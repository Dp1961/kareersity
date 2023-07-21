
import './Adminlist.css';
import { Link } from "react-router-dom/dist";
import { AiOutlineRight } from 'react-icons/ai'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { BsThreeDotsVertical } from "react-icons/bs";

const Permission = () => {


    return (
        <div className="Categorypage">
            <div className="PageTit ">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h3>Assign Permissions</h3>
                            <p><Link to="/dashboard">Dasboard</Link> <i><AiOutlineRight /></i> <Link to="/">Admin Roles</Link> <i><AiOutlineRight /></i> <Link to="/">Admin Permission</Link></p>
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
                                        <th>View</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Dashboard</td>
                                        <td className="ddFlAR ">
                                        <div className="OnOfF">
                                                    <Form>
                                                        <Form.Check // prettier-ignore
                                                            type="switch"
                                                            id="custom-switch"

                                                        />

                                                    </Form>
                                                </div>


                                        </td>
                                        <td className="ddFlAR ">
                                        <div className="OnOfF">
                                                    <Form>
                                                        <Form.Check // prettier-ignore
                                                            type="switch"
                                                            id="custom-switch"

                                                        />

                                                    </Form>
                                                </div>


                                        </td>
                                        <td className="ddFlAR ">
                                        <div className="OnOfF">
                                                    <Form>
                                                        <Form.Check // prettier-ignore
                                                            type="switch"
                                                            id="custom-switch"

                                                        />

                                                    </Form>
                                                </div>


                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Category</td>
                                        <td className="ddFlAR ">
                                        <div className="OnOfF">
                                                    <Form>
                                                        <Form.Check // prettier-ignore
                                                            type="switch"
                                                            id="custom-switch"

                                                        />

                                                    </Form>
                                                </div>


                                        </td>
                                        <td className="ddFlAR ">
                                        <div className="OnOfF">
                                                    <Form>
                                                        <Form.Check // prettier-ignore
                                                            type="switch"
                                                            id="custom-switch"

                                                        />

                                                    </Form>
                                                </div>


                                        </td>
                                        <td className="ddFlAR ">
                                        <div className="OnOfF">
                                                    <Form>
                                                        <Form.Check // prettier-ignore
                                                            type="switch"
                                                            id="custom-switch"

                                                        />

                                                    </Form>
                                                </div>


                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Courses</td>
                                        <td className="ddFlAR ">
                                        <div className="OnOfF">
                                                    <Form>
                                                        <Form.Check // prettier-ignore
                                                            type="switch"
                                                            id="custom-switch"

                                                        />

                                                    </Form>
                                                </div>


                                        </td>
                                        <td className="ddFlAR ">
                                        <div className="OnOfF">
                                                    <Form>
                                                        <Form.Check // prettier-ignore
                                                            type="switch"
                                                            id="custom-switch"

                                                        />

                                                    </Form>
                                                </div>


                                        </td>
                                        <td className="ddFlAR ">
                                        <div className="OnOfF">
                                                    <Form>
                                                        <Form.Check // prettier-ignore
                                                            type="switch"
                                                            id="custom-switch"

                                                        />

                                                    </Form>
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
export default Permission