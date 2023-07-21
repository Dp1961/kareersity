
import { TbFileUpload } from "react-icons/tb";
import './Blogs.css';
import { Link } from "react-router-dom/dist";
import { AiOutlineRight } from 'react-icons/ai'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



const Editblog = () => {


    return (
        <div className="Categorypage">
            <div className="PageTit ">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h3>Edit Blog</h3>
                            <p><Link to="/dashboard">Dasboard</Link> <i><AiOutlineRight /></i> <Link to="/">Blogs</Link> <i><AiOutlineRight /></i> <Link to="/">Edit Blog</Link></p>
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
                                <h4>Edit Blog</h4>
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
                                                    <label>Short Description</label><br></br>
                                                        <textarea rows="5" cols="72" class="FormShorts"></textarea>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="CKEditTors">
                                            <label>Detail Description</label><br></br>
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
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-3">
                                        <div className="SHortsForm1">
                                            <button className="Grn-Btn ">Update</button>

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
    )
}
export default Editblog