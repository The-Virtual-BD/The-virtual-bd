import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Form from 'react-bootstrap/Form';

import Button from '../../utilities/Button';
import userImg from '../../Images/user.png';
import './UserDashboard.css';
import {BsChevronDown } from 'react-icons/bs';

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import BlogCard from './BlogCard';
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);





const UserDashboard = () => {

  const[firstName,setFirstName]=useState("");
  const[lastName,setLastName]=useState('');
  const[email,setEmail]=useState('');
  const[profession,setProfession]=useState('');
  const[nationality,setNationality]=useState('');
  const[date,setDate]=useState('');
  const[phone,setPhone]=useState('');
  const[bio,setBio]=useState('');

  const[uploadImage,setUploadImage]=useState(null);
  const [imageUrl, setImageUrl] = useState(null);

 

  const[cngPass,setCngPass]=useState('');
  const[confirmPass,setConfirmPass]=useState('');

  //Subscription Form
  const[services,setServices]=useState('');
  const[subject,setSubject]=useState('');
  const[desc,setDesc]=useState('');
  const[schedule,setSchedule]=useState('');
  const [files, setFiles] = useState([]);
  


  //Be a blogger Form
  const[bloggerName,setBloggerName]=useState('');
  const[blogSub,setBlogSub]=useState('');
  const[blogExArea,setBlogExArea]=useState('');
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

  const todayDate= new Date().toLocaleDateString();
  const [blogDate, setBlogDate] = useState(todayDate);
  const [blogImg, setBlogImg] = useState(null);

  
  


  //Handle User Profile Form
  const handleUserProfileForm=e=>{
    e.preventDefault();
    const profileData={
      name: firstName+ " " +lastName,
      date,email,profession,nationality,phone,bio
    };
    console.log(profileData);
  };

  //Handle Change Password Form
  const handleCngPassword=e=>{
    e.preventDefault();
    if(cngPass===confirmPass){
      console.log(confirmPass + " is your new password")
    }else(
      console.log("password not matched!")
    );

    e.target.reset();
  };

  //handle Subcription
  const handleSubcription=e=>{
    e.preventDefault();
    const subcriptions={services,subject,desc,files,schedule};

    console.log(subcriptions);
    e.target.reset();
  };

  //Handle Blogger Form
  const handleBloggerForm=e=>{
    e.preventDefault();
    const BloggerData = { bloggerName, blogSub, blogExArea, blogDesc, blogImg };

    console.log(BloggerData);
    setIsbloggerAppSent(true);

  };

  //Handle create blog Form
  const handleCreateBlogForm=e=>{
    e.preventDefault();
    const addNewBlog = { authorName, blogTitle, blogSubTitle, blogsDesc,blogDate, blogImg };

    console.log(addNewBlog);
    e.target.reset();

  };



  //Preview updated Image
  useEffect(() => {
    if (uploadImage) {
      setImageUrl(URL.createObjectURL(uploadImage));}
  }, [uploadImage]);




    return (
        <div className="user-dashboard-container ">
           <Container >
          <Tabs>

            <div className="bg-white p-5  mt-5 rounded">
                <div className='d-flex  align-items-center   '>
                  <img src={userImg} alt='user img' />
                    <div className='d-flex flex-column  ms-3'>
                        <h3 className='fw-bold'>Ishtiuq Ahmed Chowdhury</h3>
                        <p>User</p>
                    </div>
                </div>
            </div>
           
            <TabList className="text-start bg-white pb-2">
              <Tab>My Profile</Tab>
              <Tab>Settings</Tab>
              <Tab>Subscription</Tab>
              <Tab>Blogger</Tab>
            </TabList>



            <div className="tabPanel_gap mb-5 mt-5">
              <TabPanel>
               <Row >
                    <Col md={7} sm={12} >
                    <div className="bg-white p-5 rounded  ">
                        <h3 className='fw-bold user-dashboard-font mb-3'>About Me</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                   
                    </Col>

                    <Col md={5} sm={12}>
                   <div   className="bg-white p-5 rounded user-dashboard-font">
                    <h3 className='fw-bold mb-4'>Contact Information</h3>

                        <div className='d-flex align-items-center justify-space-between gap-3 '>
                          <div>
                            <p className='mb-1 fw-bold'>Email:</p>
                            <p className='mb-1 fw-bold'>Profession:</p>
                            <p className='mb-1 fw-bold'>Phone:</p>
                            <p className='mb-1 fw-bold'>Date of Birth:</p>
                            <p className='mb-1 fw-bold'>Nationality:</p>
                          </div>
                          <div>
                            <p className='mb-1'>ahmedishtiuq@gmail.com</p>
                            <p  className='mb-1'>Graphic & UI/UX Designer</p>
                            <p  className='mb-1'>+880 1674 668 544</p>
                            <p  className='mb-1'>02.10.1990</p>
                            <p  className='mb-1'>Bangladeshi</p>

                          </div>



                        </div>



                   </div>
                    </Col>
               </Row>
              </TabPanel>

              <TabPanel>
                <Row>
                    <Col md={7} sm={12}>
                    <div  className="bg-white p-4  rounded user-dashboard-font">
                    <h3 className='px-3 fw-bold'>Information</h3>
                    <form className="row form-container p-3" onSubmit={handleUserProfileForm} >
                        <div class="col-md-6">
                            <label for="firstName" class="form-label fw-bold">First Name</label>
                            <input type="text" class="form-control" id="firstName" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
                        </div>

                      <div class="col-md-6">
                        <label for="lastName" class="form-label fw-bold">Last Name</label>
                        <input type="text" class="form-control" id="lastName" onChange={(e)=>setLastName(e.target.value)} value={lastName} />
                      </div>


                      <div class="col-md-12 my-3">
                        <label for="email" class="form-label fw-bold">Email</label>
                        <input type="email" class="form-control" id="email"  onChange={(e)=>setEmail(e.target.value)} value={email}/>
                      </div>
                     
                      <div class="col-12">
                        <label for="date" class="form-label fw-bold">Date Of Birth</label>
                        <input type="date" class="form-control" id="date" onChange={(e)=>setDate(e.target.value)} value={date}/>
                      </div>

                    

                      <div class="col-12 my-3">
                        <label for="profession" class="form-label fw-bold">Profession</label>
                        <input type="text" class="form-control" id="profession"  onChange={(e)=>setProfession(e.target.value)} value={profession} />
                      </div>

                      <div class="col-md-12">
                        <label for="phone" class="form-label fw-bold">Phone</label>
                        <input type="number" class="form-control" id="phone" onChange={(e)=>setPhone(e.target.value)} value={phone}/>
                      </div>

                      <div class="col-md-12 my-3">
                        <label for="nationality" class="form-label fw-bold">Nationality</label>
                        <input type="text" class="form-control" id="Nationality" onChange={(e)=>setNationality(e.target.value)} value={nationality} />
                      </div>
                      
                      <div class="mb-3">
                        <label for="bio" class="form-label fw-bold">Bio</label>
                        <textarea class="form-control" id="bio" rows="3" onChange={(e)=>setBio(e.target.value)} value={bio}></textarea>
                    </div>
                      
                      <div class="col-12 text-center">
                       <Button type="submit">Submit</Button>
                      </div>

                    </form>
                    </div>

                    <div className="bg-white p-3  rounded my-5">
                      
                      <h3 className='px-3 fw-bold'>Security</h3>
                      <form className='form-container p-3' onSubmit={handleCngPassword}>
                      <div class="col-12">
                        <label for="cngPass" class="form-label fw-bold">Change Password</label>
                        <input type="text" class="form-control" id="cngPass"  onChange={(e)=>setCngPass(e.target.value)} />
                      </div>
                      <div class="col-12 my-2">
                        <label for="conPass" class="form-label fw-bold">Confirm Password</label>
                        <input type="text" class="form-control" id="conPass" onChange={(e)=>setConfirmPass(e.target.value)}  />
                      </div>

                      <div class="col-12 text-center ">
                        <Button type="submit">Submit</Button>
                      </div>

                      </form>
                    </div>
                    </Col>



                  <Col  md={5} sm={12} >
                      <div class="bg-white p-3 rounded text-center">
                        {
                          uploadImage && imageUrl && (
                            <img src={imageUrl} alt='user img' />
                          )
                        }
                         

                          <div className='my-2'>
                            <label className="main-btn">Change Image 
                              <input type="file" style={{display: "none"}} required onChange={(e)=>setUploadImage(e.target.files[0])}/>
                            </label>
                          </div>

                          <p>
                            *Image size should be under 1MB image ratio 200px.
                          </p>

                      </div>
                  </Col>
                </Row>
              </TabPanel>

              <TabPanel>
                <Row>
                  <Col md={7} sm={12}>
                  <div className="bg-white p-3  rounded ">
                      
                      <form className='form-container p-4' onSubmit={handleSubcription}>

                      <div class="col-12 mb-3">
                          <label for="services" class="form-label fw-bold">Services</label>
                          <select onChange={(e)=>setServices(e.target.value)}  class="form-select" id="services" aria-label="form-select-lg example">
                            <option selected disabled >Select Service  </option>
                            <option value="1">Two</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                      </div>


                      <div class="col-12 mb-3">
                        <label for="subject" class="form-label fw-bold">Subject</label>
                        <input type="text" class="form-control" id="subject" onChange={(e)=>setSubject(e.target.value)}  />
                      </div>

                      <div class="mb-3 col-12">
                        <label for="desc" class="form-label fw-bold">Description</label>
                        <textarea class="form-control" id="desc" rows="3" onChange={(e)=>setDesc(e.target.value)} value={bio}></textarea>
                      </div>

                     

                      <div class="col-12 mb-3">
                        <label for="schedule" class="form-label fw-bold">Metting Schedule</label>
                        <input type="date" class="form-control" id="schedule" onChange={(e)=>setSchedule(e.target.value)}  />
                      </div>

                      <div class="col-12 mb-3">
                        <label for="doc" class="form-label fw-bold">Documents</label>
                       
                        <FilePond
                            allowMultiple={true}
                            files={files}
                            maxFiles={5}
                            allowReorder={true}
                            server="" 
                            className={"img-input-field"}
                          />
                      </div>

                      <div class="col-12 text-center mt-2">
                        <Button type="submit">Submit</Button>
                      </div>

                      </form>
                    </div>
                  </Col>
                  <Col  md={5} sm={12} >
                     <BlogCard />
                  </Col>
                </Row>
              </TabPanel>
 
              <TabPanel>
                <Row >
                  <Col md={7} sm={12}>
                    
                    {
                      (!isBlogger) ?
                   
                        <>
                          {
                            (!isbloggerAppSent) ?
                              <div className="bg-white p-3  rounded">
                                <h3 className='px-3 fw-bold'>Become a blogger</h3>
                                <form className='form-container p-4' onSubmit={handleBloggerForm} >
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
                                    <Button type="submit">Apply</Button>
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
                          <form className='form-container p-3' onSubmit={handleCreateBlogForm} >

                                  <div class="mb-3 col-12">
                                    <label for="blogTitle" class="form-label fw-bold">Title</label>
                                    <input type="text" class="form-control" id="blogTitle" onChange={(e) => setBlogTitle(e.target.value)} />
                                  </div>

                                  <div class="col-12 mb-3">
                                    <label for="subTitle" class="form-label fw-bold">Subject</label>
                                    <input type="text" class="form-control" id="subTitle" onChange={(e) => setBlogSubTitle(e.target.value)} />
                                  </div>

                                  <div class="col-12 mb-3">
                                    <label for="blogsDesc" class="form-label fw-bold">Description</label>
                                    <textarea class="form-control" id='blogsDesc' rows="5" onChange={(e) => setBlogsDesc(e.target.value)}></textarea>
                                  </div>

                                  <div class="col-12 mb-3">
                                    <label for="blogDate" class="form-label fw-bold">Date</label>
                                        <input type="date" class="form-control" id="blogDate" onChange={(e) => setBlogDate(e.target.value)} value={blogDate} />
                                 </div>
                                  
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
                                    <Button type="submit">Submit</Button>
                                  </div>
                          </form>
                        </div>
                    }
                        

                  </Col>


                  <Col  md={5} sm={12} >
                    <div>
                      <BlogCard />
                    </div>
                  </Col>
                </Row>
               
               
              </TabPanel>
              
            </div>
        </Tabs>

        </Container>
        </div>
    );
};

export default UserDashboard;