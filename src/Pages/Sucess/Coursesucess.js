import React from 'react';
import './Sucess.css';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import like from '../../assets/images/like.png';
import { Link } from "react-router-dom";


const Coursesucess = () => {
    return (
        <div className='ProFILE'>
            <Header />

            <div className='ProfileTabs pt-5 pb-5 '>
                <div className='container'>
                    <div className='row'>

                        <div className='col-lg-12'>
                            <div className='SuceSSBoxCouRs mb-3'>
                                <div className='SuccImg'>
                                    <img src={like} className='img-fluid' />
                                </div>
                                <h4>Congratulations</h4>
                                <h5>You have sucessfully purchased the course</h5>
                            </div>
                        </div>

                        <div className='col-12 mt-5'>
                            <div className='SuceeLink'>
                                    <Link to="">VIEW ORDER DETAILS</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Coursesucess