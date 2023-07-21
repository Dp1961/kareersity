import { useState } from 'react';
import { TbFileUpload } from "react-icons/tb";
import './Learners.css';
import { Link } from "react-router-dom/dist";
import { AiOutlineRight } from 'react-icons/ai'
import Select from 'react-select';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



const Sendmail = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const [selectedOption, setSelectedOption] = useState(null);


    return (
        <div className="Categorypage">
            <div className="PageTit ">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h3>Mail</h3>
                            <p><Link to="/dashboard">Dasboard</Link> <i><AiOutlineRight /></i> <Link to="/">Learners</Link> <i><AiOutlineRight /></i> <Link to="/">Mail</Link></p>
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

                            <div className='ExpertSBacKG'>
                                <div className="row">
                                    <div className="col-12">
                                        <form>
                                            <div className='row'>
                                                <div className='col-3'>
                                                    <label>Email id's</label>
                                                </div>
                                                <div className='col-9'>
                                                    <Select
                                                        isMulti
                                                        defaultValue={selectedOption}
                                                        onChange={setSelectedOption}
                                                        options={options}
                                                    />
                                                </div>
                                            </div>
                                            <div className='row pt-5'>
                                                <div className='col-3'>
                                                    <label>Message</label>
                                                </div>
                                                <div className='col-9'>
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
                                                <div className="col-3">
                                                    <div className="SHortsForm1">
                                                        <button className="Grn-Btn ">send</button>

                                                    </div>

                                                </div>
                                                <div className="col-3">
                                                    <div className="SHortsForm1">

                                                        <button className="WHt-Btn ">cancel</button>
                                                    </div>

                                                </div>

                                            </div>


                                        </form>
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
export default Sendmail