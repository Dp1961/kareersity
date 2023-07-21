import React from 'react';
import './Educator.css';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import Form from 'react-bootstrap/Form';

const Educator = () => {
    return (
        <div className='EDucaTorPage'>
            <Header />
            <div className='PageHEaders edu'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>

                        </div>
                    </div>
                </div>
            </div>
            <div className='EduCatorFrom pt-5 pb-5'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-10'>
                            <div className='PAgeTit pt-3 pb-3'>
                                <h2>Educator Sign Up</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-10'>
                            <div className='eDUcAfo'>
                                <form>
                                    <div className='row'>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='EduCf'>
                                                <input type='text' className='inputFormF' placeholder='Name' />
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='EduCf'>
                                                <input type='text' className='inputFormF' placeholder='Email Address' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='EduCf'>
                                                <input type='text' className='inputFormF' placeholder='Mobile Number' />
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='EduCf'>
                                                <input type='text' className='inputFormF' placeholder='City' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='EduCf'>
                                                <select>
                                                    <option>Expertise</option>
                                                    <option value="e1">Expertise 1</option>
                                                    <option value="e2">Expertise 2</option>
                                                    <option value="e3">Expertise 3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='EduCf'>
                                                <Form.Group controlId="formFile" className="mb-3">
                                                    <Form.Control placeholder="Choose" type="file" />
                                                </Form.Group>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='EduCf'>
                                                <Form.Group controlId="formFile" className="mb-3">
                                                    <Form.Control placeholder="Choose" type="file" />
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='EduCf'>
                                                <Form.Group controlId="formFile" className="mb-3">
                                                    <Form.Control placeholder="Choose" type="file" />
                                                </Form.Group>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row justify-content-center'>
                                        
                                            <div className='col-12'>
                                            <div className='SIGBtn'>
                                                <div className='EduCf'>
                                                    <button>Sign Up</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    )
}
export default Educator