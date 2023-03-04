import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import BlogCard from "./BlogCard";
import { CKEditor } from "ckeditor4-react";
import "./UserDashboard.css";
import { toast } from "react-toastify";
import { baseUrl } from "../../hooks/url";
import useToken from "../../hooks/useToken";
import useUser from "../../hooks/useUser";



const Blogger = ({ isBlogger }) => {
  const [token] = useToken();
  const [user] = useUser();
  const { id } = user;

  console.log(user)
  

  const[catagory,setCatagory]=useState([])

  //Be a blogger Form
  const [name, setName] = useState("");
  const [subject, setBlogSub] = useState("");
  const [expertise, setBlogExArea] = useState("");
  const [description, setBlogDesc] = useState("");

  //show sent msg
  const [isbloggerAppSent, setIsbloggerAppSent] = useState("");

  //Create a Blog Form
  // const [authorName, setAuthorName] = useState("");

  const [title, setBlogTitle] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [short_description, setBlogsShortDesc] = useState("");
  const [cover, setCover] = useState(null);
  const [category_id ,setCatagory_id] = useState("");
  const [charCount,setCharCount]=useState(0);

  // console.log(charCount);

  const extraChar=(charCount - 200);
  


      //Get Catagory
      useEffect(() => {
        const cUrl = `${baseUrl}/api/categories/catlist`;
        fetch(cUrl, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setCatagory(data?.data))
    }, [token]);



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
  const handleCreateBlogForm = async(e) => {
    e.preventDefault();
    if(charCount <= 200){
      const newPostData = new FormData();
      newPostData.append('title', title);
      newPostData.append('short_description', short_description);
      newPostData.append('descriptions', descriptions);
      newPostData.append('category_id', category_id );
      newPostData.append('cover', cover, cover.name);

  
      const url = `${baseUrl}/api/posts/store`;
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              "Authorization": `Bearer ${token}`
          },
          body: newPostData
      });
  
      const result = await response.json();
      // console.log(result);
  
      if (result.error) {
          console.log(result.error);
          toast.error("Subscriptions Add Failed");
      } else {
          // console.log(result);
          e.target.reset();
          setDescriptions('');
          setCharCount(0)
          toast.success(result.message);
      }
  }
    else{
      console.log("LIMIT CROOSED");
      toast.error("You Have Crossed Charecters Limits");
      return
    }

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
                      required
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
                      required
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
                      required
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
                      required
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
                  required
                  onChange={(e) => setBlogTitle(e.target.value)}
                />
              </div>

              <div className="col-12 mb-3">
                <label for="subTitle" className="form-label fw-bold">
                  Category
                </label>
                <select
                  onChange={(e) => setCatagory_id(e.target.value)}
                  className="form-control form-select"
                  id="subTitle"
                  required
                  aria-label="form-select-lg example"
                >
                  <option selected disabled>
                    Select Category{" "}
                  </option>
                  { catagory?.map(service => <option value={service.id}>{service.name}</option>) }
                </select>
              </div>

              <div className="col-12 mb-3">
                <label for="blogsSDesc" className="form-label fw-bold">
                Title Description
                </label>
                <textarea
                  maxLength={200}
                  className="form-control mb-1"
                  id="blogsSDesc"
                  rows="5"
                  required
                  
                  onChange={(e) =>{
                    setBlogsShortDesc(e.target.value) 
                    setCharCount(e.target.value.length)
                  }}
                ></textarea>
                {
                  charCount < 200?
                  <p ><small>Maximum 200 Characters & You Have Used {charCount}</small></p>:
                  <p className="text-danger">You have reached maximum limits.</p>
                }
                
              </div>

              <div className="col-12 mb-3">
                <label for="blogsDesc" className="form-label fw-bold">
                  Description
                </label>

                <CKEditor
                  data={descriptions}
                  onChange={(e) => setDescriptions(e.editor.getData())}
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
                            <label for="doc" className="form-label fw-bold">Image</label>
                            <input type="file" className="form-control " id="doc" onChange={(e) => setCover(e.target.files[0])} />
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
