import React from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useBlogs from '../../hooks/useBlogs';
import './BlogPage.css';


const BlogPage = () => {
    const [blogs] = useBlogs();
    const [showBlog, setShowBlog] = useState(6);
    const handleShowMoreBlogs = () => {
        setShowBlog(prevState => prevState + 3)
        console.log("clicked");
    }

    //Recent Blog
    const recentBlog = blogs[blogs?.length - 1];
    //As You Like Blogs
    const asYouLikeBlog = blogs.filter(blog => blog?.blogCatagory.toLowerCase() === recentBlog?.blogCatagory.toLowerCase());





    console.log(showBlog)
    return (
        <div>
            <section className="blog_hero">
                <Container>
                    <div className="blog_text">
                        <h2>Blogs</h2>
                    </div>
                </Container>
            </section>
            <Container >
                <div className='mt-5 blog-section'>
                    <h6 className='fw-bold'>WHATS NEW</h6>
                    <Row >
                        <Col md={7} sm={12} gap-3>
                            <div className='blog-recent-img-container'>
                                <img src={recentBlog?.blogImg} alt="" srcset="" />
                            </div>
                        </Col>

                        <Col md={5} sm={12}>
                            <div>
                                <span className='blog-catagory'>{recentBlog?.blogCatagory}</span>
                                <h3 className='fw-bolder mt-2'>{recentBlog?.blogTitle}</h3>
                                <p>{recentBlog?.blogsShortDesc}</p>
                                <h4 className='fw-bold mt-4'>{recentBlog?.blogSubTitle}</h4>
                                <p>{recentBlog?.blogsDesc}</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-start gap-3'>
                                <img src={recentBlog?.bloggerImg} alt="" srcset="" />
                                <div className='mt-3'>
                                    <h6 className='mb-0 fw-bold'>{recentBlog?.bloggerName}</h6>
                                    <p><small className='fs-6 fw-light'>{recentBlog?.blogDate}</small></p>
                                </div>

                            </div>
                        </Col>

                    </Row>
                </div>

                <div className='mt-5 blog-section'>
                    <h6 className='fw-bold'>PREVIOUS POST </h6>
                    <div>
                        <Row xs={1} md={3} className="g-4">
                            {blogs?.map(blog => {
                                const { _id, blogCatagory, blogTitle, blogsShortDesc, bloggerName, blogImg } = blog;
                                return (
                                    <Col key={_id}>
                                        <Card>
                                            <Card.Img variant="top" src={blogImg} />
                                            <Card.Body>
                                                <span className='blog-catagory'>{blogCatagory}</span>
                                                <Card.Title className='fw-bold my-2'>{blogTitle}</Card.Title>
                                                <Card.Text>
                                                    {blogsShortDesc}
                                                </Card.Text>
                                                <p className='blog-author'>by {bloggerName}</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                )
                            }).slice(0, showBlog)}
                        </Row>
                    </div>

                    <div className='text-center'>
                        <button className='blog-btn' onClick={handleShowMoreBlogs}>Load More</button>
                    </div>
                </div>
            </Container>


            <div className='blog-you-may-like-section blog-section'>

                <Container >
                    <h6 className='fw-bold'>YOU MAY ALSO LIKE THIS </h6>
                    <Row xs={1} md={5} className="g-2 ">
                        {asYouLikeBlog?.map(likeblog => {
                            const { _id, blogCatagory, blogTitle, bloggerName, blogImg } = likeblog;
                            return (
                                <Col key={_id}>
                                    <Card>
                                        <Card.Img variant="top" src={blogImg} />
                                        <Card.Body>
                                            {/* <span className='blog-catagory'>{blogCatagory}</span> */}
                                            <Card.Title className='fw-bold my-2'>{blogTitle}</Card.Title>
                                            <p className='blog-author mt-3'>by {bloggerName.slice(0,20)}</p>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            )
                        }).slice(0, 5)}
                    </Row>
                </Container>


            </div>
        </div>
    );
};

export default BlogPage;