
import Form from 'react-bootstrap/Form';
import './Blogs.css';
import { Link } from "react-router-dom/dist";
import { AiOutlineRight } from 'react-icons/ai'
import Table from 'react-bootstrap/Table';
import blog from '../../assets/images/blog-img.jpg'


import { BsThreeDotsVertical } from "react-icons/bs";


const Blogs= () => {


    return (
        <div className="Categorypage">
            <div className="PageTit ">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h3>Blogs List</h3>
                            <p><Link to="/dashboard">Dasboard</Link> <i><AiOutlineRight /></i> <Link to="/">Blogs</Link></p>
                        </div>
                        <div className="col-6">
                            <div className="Grn-Btnmanin">
                                <Link to="/add_blog" className="Grn-Btn">add blog</Link>
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
                                        <th> </th>
                                        <th>Title</th>
                                        <th>Short Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td className='TabImg'><img src={blog} className='img-fluid' /></td>
                                        <td className='DivWidth blog'>What You Need As A Pharmacy Student To Achieve Success</td>
                                        <td className='DivWidth blog'>Quisque ac sollicitudin libero, eget laoreet tellus. Quisque hendrerit, leo sit amet consequat accumsan sollicitudin libero, eget laoreet tellus</td>
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
                                                        <li><Link to="/edit_blog">View</Link></li>
                                                        <li>Delete</li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td className='TabImg'><img src={blog} className='img-fluid' /></td>
                                        <td className='DivWidth blog'>What You Need As A Pharmacy Student To Achieve Success</td>
                                        <td className='DivWidth blog'>Quisque ac sollicitudin libero, eget laoreet tellus. Quisque hendrerit, leo sit amet consequat accumsan sollicitudin libero, eget laoreet tellus</td>
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
                                                        <li><Link to="/edit_blog">View</Link></li>
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


           
        </div>
    )
}
export default Blogs