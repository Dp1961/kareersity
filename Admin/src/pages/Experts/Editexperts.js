
import { TbFileUpload } from "react-icons/tb";
import './Experts.css';
import { Link } from "react-router-dom/dist";
import { AiOutlineRight } from 'react-icons/ai'



const Editexperts = () => {


    return (
        <div className="Categorypage">
            <div className="PageTit ">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h3>Edit Shorts</h3>
                            <p><Link to="/dashboard">Dasboard</Link> <i><AiOutlineRight /></i> <Link to="/">List to Experts</Link> <i><AiOutlineRight /></i> <Link to="/">Edit Shorts</Link></p>
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
                            <div className='TittlE'>
                                <h4>Edit Shorts</h4>
                            </div>
                            <div className='ExpertSBacKG'>
                                <div className='row'>
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
                                    <div className="col-lg-9 pt-3">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="SHortsForm">
                                                    <form>
                                                        <label>Tilte</label><br></br>
                                                        <input type="text" className="FormShorts" />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="SHortsForm">
                                                    <form>
                                                        <label>Video URL</label><br></br>
                                                        <input type="text" className="FormShorts" />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-3">
                                                <div className="SHortsForm1">
                                                    <button className="Grn-Btn ">Save</button>

                                                </div>

                                            </div>
                                            <div className="col-3">
                                                <div className="SHortsForm1">

                                                    <button className="WHt-Btn ">cancel</button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
export default Editexperts