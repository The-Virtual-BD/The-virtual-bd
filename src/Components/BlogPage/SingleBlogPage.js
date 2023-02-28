import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useBlogs from '../../hooks/useBlogs';
import useToken from '../../hooks/useToken';
import useUser from '../../hooks/useUser';
import Footer from '../Footer/Footer';
import Menu from '../Header/Menu';
import Socialmedia from '../Socialmedia/Socialmedia';
import TopHeader from '../TopHeader/TopHeader';
import './BlogPage.css';
import BlogSocialmedia from './BlogSocialMedia';
import './BlogPage';
import image1 from '../../Images/blank_user.png';

const SingleBlogPage = () => {
    const { id } = useParams();
    const [blogs] = useBlogs();
    const navigate = useNavigate();
    const[subscribe_email,setSubscribe_email]=useState('')

    //Slide to Top
     useEffect(()=>{
        window.scrollTo(0,0)
      },[]);

    const singleBlog = blogs?.find(blogD => blogD._id === +id);
    const featureBlogs = blogs.filter(fetureBlog => fetureBlog.blogCatagory.toLowerCase() === singleBlog?.blogCatagory.toLowerCase());

    //Navigate to Single Blog Page
    const handleSingleBlogs = (id) => {
        navigate(`/blog/${id}`)
    };

   // Handle Subscribe Us Form
    const handleSubscribeForm=e=>{
        e.preventDefault();
        const email={subscribe_email};
        console.log(email)
    };

    return (
        <>
            <TopHeader />
            <Menu />
            <Container>
                <div className='blog-details-container  blog-section mt-sm-3 mt-5'>
                    <span className='blog-catagory'>{singleBlog?.blogCatagory}</span>
                    <h2 className='fw-bolder mt-2 '>{singleBlog?.blogTitle}</h2>
                    <p className='fs-4'>{singleBlog?.blogsShortDesc}</p>


                    <div className='d-flex align-items-center justify-content-start gap-3'>
                        <img src={singleBlog?.bloggerImg} alt="" srcset="" className='blogImg' />
                        <div className='mt-3'>
                            <h6 className='mb-0 fw-bold'>{singleBlog?.bloggerName}</h6>
                            <p><small className='fs-6 fw-light'>{singleBlog?.blogDate}</small></p>
                        </div>
                    </div>

                    <div className='blog-details-img-container'>
                        <img src={singleBlog?.blogImg} alt="" srcset="" />
                    </div>

                    <div className="mt-5">
                        <Row >
                            <Col md={9} sm={12} >
                                <h3 className='fw-bold'>{singleBlog?.blogSubTitle}</h3>
                                <p >{singleBlog?.blogsDesc}</p>

                                <div className='d-flex align-items-center'>
                                    <h3 className='fw-bold'>Share:</h3>
                                    <BlogSocialmedia />
                                </div>

                                <BlogCommentBox />

                            </Col>

                            <Col sm={12} md={3}>
                                <div>
                                    <h6 className='fw-bold blog-section-title mt-4'>Related Articles</h6>
                                    <div className='d-flex flex-column gap-1'>
                                        {
                                            featureBlogs.map(fBlog => <div onClick={() => handleSingleBlogs(fBlog._id)} className="card mb-3 blog-card" style={{ maxWidth: "540px" }}>
                                                <div className="row g-0">
                                                    <div className="col-md-5">
                                                        <img src={fBlog.blogImg} className="img-fluid rounded-start" alt={fBlog.bloggerName} style={{ height: "100%" }} />
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div className="card-body">
                                                            <h5 className="card-title fw-bold">{fBlog.blogTitle}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>).slice(0, 3)
                                        }
                                    </div>


                                    <div className='blog-newslatter-container  mt-4 text-white  py-4 px-4'>
                                        <h5 className=' blog-section-title text-uppercase'>Newsletter</h5>
                                        <p className='blog-newslatter-text'>Get all the latest
                                            posts delivered
                                            straight to your
                                            inbox.</p>

                                        <div >
                                            <form className='d-flex flex-column justify-content-center align-items-center blog-newslatter-input' onSubmit={handleSubscribeForm}>
                                                <input type="email" name="" id="" placeholder='Your email address' onChange={e=>setSubscribe_email(e.target.value)} required/>

                                                <button type='submit' className='subscribe-submit-btn'>Subscribe</button> 
                                            </form>
                                        </div>
                                    </div>


                                </div>
                            </Col>
                        </Row>

                    </div>
                </div>

            </Container>

            <Footer />
        </>
    );
};

export default SingleBlogPage;



const BlogCommentBox = () => {
    const [token]= useToken();
    const[user]=useUser();

    const[comment,setComment]=useState('');
    console.log(user)


    //Handle Comment
    const handleCommentForm=e=>{
        e.preventDefault();
        console.log(comment);
        e.target.reset();
    };


    return (
        <div className='blog-comment-box-container'>
            <h3 className='fw-bold '>Leave a Comment</h3>
            {/* <p>Your email address will not be published. Required fields are marked *</p> */}

            {
                (token && user)? 
                <div>
                <Form onSubmit={handleCommentForm}>
                    <Form.Group >
                        <Form.Control as="textarea" rows={4} placeholder="Write a Comment *" onChange={e=>setComment(e.target.value )}/>
                    </Form.Group>
                    <button type='submit' className='blog-btn mb-3'>Comment</button>
                </Form>
            </div>:
            <div>
                <p>Become a member of The Virtual BD to start commenting.  
                    <Link to={"/sign-in"} className="comment-login"> SignIn</Link> /
                    <Link to={"/register"} className="comment-login"> Register</Link>
                </p>
            </div>
            }
           
            <div>
                <div className='d-flex text-dark  justify-content-between align-items-center my-4'>
                    <h3 className='fw-bold '>Comments</h3>
                    <h4>3 Comments</h4>
                </div>

                <div>

                    <div className='d-flex align-items-start justify-content-start gap-2'>
                            <img src={image1} alt="" srcset="" style={{width:"32px",borderRadius:"100%"}} />
                           <div>
                                <p className='my-0'> <span className='fw-bolder'>Md. Akbor</span></p>
                                <p className='mt-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non alias, saepe esse molestiae odio consequuntur.</p>
                           </div>
                    </div>
                    <div className='d-flex align-items-start justify-content-start gap-2'>
                            <img src={image1} alt="" srcset="" style={{width:"32px",borderRadius:"100%"}} />
                           <div>
                                <p className='my-0'> <span className='fw-bolder'>Sorif Ahmed</span></p>
                                <p className='mt-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non alias, saepe esse molestiae odio consequuntur.</p>
                           </div>
                    </div>
                    <div className='d-flex align-items-start justify-content-start gap-2'>
                            <img src={image1} alt="" srcset="" style={{width:"32px",borderRadius:"100%"}} />
                           <div>
                                <p className='my-0'> <span className='fw-bolder'>John Cina</span></p>
                                <p className='mt-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non alias, saepe esse molestiae odio consequuntur.</p>
                           </div>
                    </div>

                </div>
            </div>

        </div>
    )
};