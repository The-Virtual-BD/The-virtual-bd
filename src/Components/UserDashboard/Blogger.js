import React from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import BlogCard from './BlogCard';
import { CKEditor } from 'ckeditor4-react';
import './UserDashboard.css';

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { toast } from 'react-toastify';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const Blogger = () => {
    //Be a blogger Form
    const [bloggerName, setBloggerName] = useState('');
    const [blogSub, setBlogSub] = useState('');
    const [blogExArea, setBlogExArea] = useState('');
    const [blogDesc, setBlogDesc] = useState('');

    //show sent msg
    const [isbloggerAppSent, setIsbloggerAppSent] = useState(false);

    //Blogger Auth
    const [isBlogger, setIsBlogger] = useState(true);

    //Create a Blog Form
    const [authorName, setAuthorName] = useState('');
    const [blogTitle, setBlogTitle] = useState('');
    const [blogSubTitle, setBlogSubTitle] = useState('');
    const [blogsDesc, setBlogsDesc] = useState('');
    const [blogsShortDesc, setBlogsShortDesc] = useState('');

    const [blogDate, setBlogDate] = useState();

    const [blogImg, setBlogImg] = useState([]);


    //Handle Blogger Form
    const handleBloggerForm = e => {
        e.preventDefault();
        const BloggerData = { bloggerName, blogSub, blogExArea, blogDesc, blogImg };
        toast.success("Your Applications has been Submitted");
        setIsbloggerAppSent(true);

    };

    //Handle create blog Form
    const handleCreateBlogForm = e => {
        e.preventDefault();
        const addNewBlog = { blogTitle, blogSubTitle, blogsDesc, blogImg };
        console.log(addNewBlog);
        e.target.reset();
        toast.warn("Your Blog has Submitted for permission");

    };
    return (
        <Row >
            <Col md={9} sm={12}>

                {
                    (!isBlogger) ?

                        <>
                            {
                                (!isbloggerAppSent) ?
                                    <div className="bg-white p-3  rounded">
                                        <h3 className='px-3 fw-bold'>Become a blogger</h3>
                                        <form className='form-container p-3' onSubmit={handleBloggerForm} >
                                            <div class="col-12 mb-3">
                                                <label for="bloggerName" class="form-label fw-bold">Blogger Name</label>
                                                <input type="text" class="form-control" id="bloggerName" onChange={(e) => setBloggerName(e.target.value)} />
                                            </div>

                                            <div class="mb-3 col-12">
                                                <label for="blogSubject" class="form-label fw-bold">Subject</label>
                                                <input type="text" class="form-control" id="blogSubject" onChange={(e) => setBlogSub(e.target.value)} />
                                            </div>

                                            <div class="col-12 mb-3">
                                                <label for="exArea" class="form-label fw-bold">Expert Areas</label>
                                                <input type="text" class="form-control" id="exArea" onChange={(e) => setBlogExArea(e.target.value)} />
                                            </div>

                                            <div class="col-12 mb-3">
                                                <label for="blogDesc" class="form-label fw-bold">Descriptions</label>
                                                <textarea class="form-control" id='blogDesc' rows="5" onChange={(e) => setBlogDesc(e.target.value)}></textarea>
                                            </div>

                                            <div class="col-12 text-center mt-3">
                                                <button className='main-btn' type="submit">Apply</button>
                                            </div>
                                        </form>
                                    </div>
                                    :
                                    <div className='bg-white  min-h-screen p-5 '>
                                        <h4 class="px-3 rounded  fw-bolder">Your Applications has been Submitted</h4>
                                    </div>
                            }
                        </>
                        :
                        <div className="bg-white p-3  rounded">
                            <h3 className='px-3 fw-bold'>Create a blog</h3>
                            <form className='form-container p-2' onSubmit={handleCreateBlogForm} >

                                <div class="mb-3 col-12">
                                    <label for="blogTitle" class="form-label fw-bold">Title</label>
                                    <input type="text" class="form-control" id="blogTitle" onChange={(e) => setBlogTitle(e.target.value)} />
                                </div>


                                <div class="col-12 mb-3">
                                    <label for="subTitle" class="form-label fw-bold">Subject</label>
                                    <select onChange={(e) => setBlogSubTitle(e.target.value)} class="form-control custom-select" id="subTitle" aria-label="form-select-lg example">
                                        <option selected disabled >Select Subject </option>
                                        <option value="1">one</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>



                                <div class="col-12 mb-3">
                                    <label for="blogsSDesc" class="form-label fw-bold">Short Description</label>
                                    <textarea class="form-control" id='blogsSDesc' rows="5" onChange={(e) => setBlogsShortDesc(e.target.value)}></textarea>
                                </div>


                                <div class="col-12 mb-3">
                                    <label for="blogsDesc" class="form-label fw-bold">Description</label>
                                    <CKEditor
                                        initData="<p>Write Your Blog Description here</p>"

                                        onChange={(event, editor) => {
                                            console.log(editor, event);
                                            const data = editor?.getData();
                                            setBlogsDesc({ event, editor, data });
                                        }}
                                    />
                                </div>





                                {/*   <div class="col-12 mb-3">
                            <label for="blogDate" class="form-label fw-bold">Date</label>
                                <input type="date" class="form-control" id="blogDate" onChange={(e) => setBlogDate(e.target.value)} value={blogDate} />
                         </div> */}

                                <div class="col-12 mb-3 ">
                                    <label for="blogDesc" class="form-label fw-bold">Image</label>
                                    <FilePond
                                        allowMultiple={true}
                                        files={blogImg}
                                        maxFiles={5}
                                        allowReorder={true}
                                        server=""
                                        className={"img-input-field"}
                                    />
                                </div>


                                <div class="col-12 text-center mt-3">
                                    <button className='main-btn' type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                }


            </Col>


            <Col md={3} sm={12} >
                <div>
                    <BlogCard />
                </div>
            </Col>
        </Row>

    );
};

export default Blogger;