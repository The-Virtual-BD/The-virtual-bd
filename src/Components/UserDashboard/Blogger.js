import React from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import BlogCard from "./BlogCard";
import { CKEditor } from "ckeditor4-react";
import "./UserDashboard.css";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { toast } from "react-toastify";
import { baseUrl } from "../../hooks/url";
import useToken from "../../hooks/useToken";
import useUser from "../../hooks/useUser";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const Blogger = ({ isBlogger }) => {
  const [token] = useToken();
  const [user] = useUser();
  const { id } = user;
  console.log(id);

  //Be a blogger Form
  const [name, setName] = useState("");
  const [subject, setBlogSub] = useState("");
  const [expertise, setBlogExArea] = useState("");
  const [description, setBlogDesc] = useState("");

  //show sent msg
  const [isbloggerAppSent, setIsbloggerAppSent] = useState("");

  //Create a Blog Form
  // const [authorName, setAuthorName] = useState("");

  const [blogTitle, setBlogTitle] = useState("");
  const [blogSubTitle, setBlogSubTitle] = useState("");
  const [blogsShortDesc, setBlogsShortDesc] = useState("");
  const [blogImg, setBlogImg] = useState([]);
  const [blogsDesc, setBlogsDesc] = useState("");

  // const [blogDate, setBlogDate] = useState();

  //Handle Blogger Form

  const handleBloggerForm = (e) => {
    e.preventDefault();
    const BloggerReqSent = { name, subject, expertise, description };

    //Send To Backend
    const url = `${baseUrl}/api/blogger/store/${id}`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(BloggerReqSent)
    })
      .then(res => res.json())
      .then(result => {
        if (result.error) {
          console.log(result.error);
          toast.error("Blogger Req Failed");
        } else {
          console.log(result);
          e.target.reset();
          toast.success("Your Applications has been Submitted");
          setIsbloggerAppSent(result.message);
        }

      });

  };




  //Handle create blog Form
  const handleCreateBlogForm = (e) => {
    e.preventDefault();

    const addNewBlog = { blogTitle, blogSubTitle, blogsShortDesc, blogsDesc, blogImg, };
    console.log(addNewBlog);



    //Send To Backend
    const url = `${baseUrl}/api/subscriptions/store`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(addNewBlog)
    })
      .then(res => res.json())
      .then(result => {

        if (result.error) {
          console.log(result.error);
          toast.error("Add Blog  Failed");
        } else {
          console.log(result);
          //  e.target.reset();
          toast.success("Add Blog Successfully");
        }

      });

  };



  // Classic Editor Toolbar

  const editorToolbar = [
    {
      name: "basicstyles",
      groups: ["basicstyles", "cleanup"],
      items: [
        "Bold",
        "Italic",
        "Underline",
        "Strike",
        "Subscript",
        "Superscript",
        "-",
        "RemoveFormat",
      ],
    },
    {
      name: "paragraph",
      groups: ["list", "indent", "blocks", "align", "bidi"],
      items: ["NumberedList", "BulletedList", "-", "Outdent", "Indent"],
    },
    { name: "links", items: ["Link", "Unlink"] },
    {
      name: "insert",
      items: ["SpecialChar"],
    },
  ];


  return (
    <Row>
      <Col md={9} sm={12}>
        {!isBlogger ? (
          <>
            {!isbloggerAppSent ? (
              <div className="bg-white p-sm-4 p-2 rounded  mb-sm-3 mb-5 headline-text">
                <h3 className="px-2 fw-bold ">Become a blogger</h3>
                <form
                  className="row form-container p-2 mb-3"
                  onSubmit={handleBloggerForm}
                >
                  <div className="col-12 mb-3">
                    <label for="bloggerName" className="form-label fw-bold">
                      Blogger Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="bloggerName"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="mb-3 col-12">
                    <label for="blogSubject" className="form-label fw-bold">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="blogSubject"
                      onChange={(e) => setBlogSub(e.target.value)}
                    />
                  </div>

                  <div className="col-12 mb-3">
                    <label for="exArea" className="form-label fw-bold">
                      Expert Areas
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exArea"
                      onChange={(e) => setBlogExArea(e.target.value)}
                    />
                  </div>

                  <div className="col-12 mb-3">
                    <label for="blogDesc" className="form-label fw-bold">
                      Descriptions
                    </label>
                    <textarea
                      className="form-control"
                      id="blogDesc"
                      rows="5"
                      onChange={(e) => setBlogDesc(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="col-12 text-center ">
                    <button className="main-btn" type="submit">
                      Apply
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-white  min-h-screen p-5 ">
                <h4 className="px-3 rounded  fw-bolder">
                  {isbloggerAppSent}
                </h4>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white p-sm-4 p-2   mb-sm-3 mb-5 rounded headline-text">
            <h3 className="px-2 fw-bold">Create a blog</h3>
            <form
              className="row form-container p-2 mb-3"
              onSubmit={handleCreateBlogForm}
            >
              <div className="mb-3 col-12">
                <label for="blogTitle" className="form-label fw-bold">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="blogTitle"
                  onChange={(e) => setBlogTitle(e.target.value)}
                />
              </div>

              <div className="col-12 mb-3">
                <label for="subTitle" className="form-label fw-bold">
                  Subject
                </label>
                <select
                  onChange={(e) => setBlogSubTitle(e.target.value)}
                  className="form-control form-select"
                  id="subTitle"
                  aria-label="form-select-lg example"
                >
                  <option selected disabled>
                    Select Subject{" "}
                  </option>
                  <option value="1">one</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className="col-12 mb-3">
                <label for="blogsSDesc" className="form-label fw-bold">
                  Short Description
                </label>
                <textarea
                  className="form-control"
                  id="blogsSDesc"
                  rows="5"
                  onChange={(e) => setBlogsShortDesc(e.target.value)}
                ></textarea>
              </div>

              <div className="col-12 mb-3">
                <label for="blogsDesc" className="form-label fw-bold">
                  Description
                </label>

                <CKEditor
                  data={blogsDesc}
                  onChange={(e) => setBlogsDesc(e.editor.getData())}
                  config={{ toolbar: editorToolbar }}
                  className="form-control"
                /*  config={{
                                          height: '200px',
                                          toolbar: [
                                              'bold',
                                              'italic',
                                              'bulletedList',
                                              'numberedList',
                                              'link',
                                              'CodeSnippet'
                                          ],
                                      }} */
                />
              </div>

              <div className="col-12 mb-3 ">
                <label for="blogDesc" className="form-label fw-bold">
                  Image
                </label>
                <FilePond
                  allowMultiple={true}
                  files={blogImg}
                  onupdatefiles={setBlogImg}
                  maxFiles={3}
                  allowReorder={true}
                  server=""
                  name="imgs"
                  labelIdle='Drag & Drop your Images or <span className="filepond--label-action">Browse</span>'
                  className={"img-input-field"}
                />
              </div>

              <div className="col-12 text-center ">
                <button className="main-btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </Col>

      <Col md={3} sm={12}>
        <div>
          <BlogCard />
        </div>
      </Col>
    </Row>
  );
};

export default Blogger;
