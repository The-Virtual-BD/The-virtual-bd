import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import useBlogs from '../../hooks/useBlogs';
import Footer from '../Footer/Footer';
import Menu from '../Header/Menu';
import Socialmedia from '../Socialmedia/Socialmedia';
import TopHeader from '../TopHeader/TopHeader';
import './BlogPage.css';
import BlogSocialmedia from './BlogSocialMedia';

const SingleBlogPage = () => {
    const { id } = useParams();
    const [blogs] = useBlogs();
    const navigate = useNavigate();

    const singleBlog = blogs?.find(blogD => blogD._id === +id);



    const featureBlogs = blogs.filter(fetureBlog => fetureBlog.blogCatagory.toLowerCase() === singleBlog?.blogCatagory.toLowerCase());

    const handleSingleBlogs = (id) => {
        navigate(`/blog/${id}`)
    }

    // console.log(typeof (id), singleBlog)
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
                                    <h6 className='fw-bold blog-section-title mt-4'>EDITORS CHOICE</h6>
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
                                            <form className='d-flex flex-column justify-content-center align-items-center blog-newslatter-input'>
                                                <input type="email" name="" id="" placeholder='Your email address' />
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
    return (
        <div className='blog-comment-box-container'>
            <h3 className='fw-bold '>Leave a Comment</h3>
            <p>Your email address will not be published. Required fields are marked *</p>
            <div className=''>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Control type="text" placeholder="*Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Control type="email" placeholder="*Email" />
                    </Form.Group>

                    <Form.Group >
                        <Form.Control as="textarea" rows={4} placeholder="*Comment" />
                    </Form.Group>

                    <button className='main-btn mb-3'>REGISTER NOW</button>
                    <p>Become a member of The Virtual BD to start commenting.</p>
                </Form>
            </div>
            <div>
                <div className='d-flex text-dark  justify-content-between align-items-center my-4'>
                    <h3 className='fw-bold '>Comments</h3>
                    <h4>3 Comments</h4>
                </div>
            </div>

        </div>
    )
}