import React from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useBlogs from '../../hooks/useBlogs';
import './BlogPage.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper";


const BlogPage = () => {
    const [blogs] = useBlogs();
    const [showBlog, setShowBlog] = useState(6);
    const navigate = useNavigate();
    const handleShowMoreBlogs = () => {
        setShowBlog(prevState => prevState + 3)
    }

    //Recent Blog
    const recentBlog = blogs[blogs?.length - 1];

    //As You Like Blogs
    const asYouLikeBlog = blogs.filter(blog => blog?.blogCatagory.toLowerCase() === recentBlog?.blogCatagory.toLowerCase());


    const handleSingleBlogs = (id) => {
        navigate(`/blog/${id}`)
    }


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
                <div className='mt-5 recent-blog-section'>
                    <h6 className='fw-bold blog-section-title'>WHATS NEW</h6>
                    <Row className=''>
                        <Col md={7} sm={12} gap-3>
                            <div className='blog-recent-img-container'>
                                <img src={recentBlog?.blogImg} alt="" srcset="" />
                            </div>
                        </Col>

                        <Col md={5} sm={12}>
                            <div className='mt-3'>
                                <span className='blog-catagory'>{recentBlog?.blogCatagory}</span>
                                <h3 onClick={() => handleSingleBlogs(recentBlog?._id)} className='fw-bolder mt-2 blog-head'>{recentBlog?.blogTitle}</h3>
                                <p className='mt-4'>{recentBlog?.blogsShortDesc}</p>
                                <h4 className='fw-bold mt-4'>{recentBlog?.blogSubTitle}</h4>
                                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore non, sapiente dolor delectus dicta corporis totam ipsum! Culpa mollitia eaque veniam rem at totam repudiandae!</p>
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

                <div className='mt-5 blog-section mb-3'>
                    <h6 className='fw-bold blog-section-title'>PREVIOUS POST </h6>
                    
                    <div>
                        <Row xs={1} md={3} className="g-4">
                            {blogs?.map(blog => {
                                const { _id, blogCatagory, blogTitle, blogsShortDesc, bloggerName, blogImg,bloggerImg } = blog;
                                return (
                                    <Col key={_id}>
                                        <Card onClick={() => handleSingleBlogs(_id)} className="blog-card">
                                            <Card.Img variant="top" src={blogImg} />
                                            <Card.Body>
                                                <span className='blog-catagory'>{blogCatagory}</span>
                                                <Card.Title className='fw-bold my-2'>{blogTitle}</Card.Title>
                                                <Card.Text>
                                                    {blogsShortDesc}
                                                </Card.Text>
                                                <div className='d-flex align-items-center justify-content-start gap-2'>
                                                     <img src={bloggerImg} alt="" srcset="" style={{width:"32px",borderRadius:"100%"}} />

                                                     <p className='blog-author mt-3'> <span className='fw-bolder'>{bloggerName}</span></p>
                                                </div>
                                                {/* <p className='blog-author'>by {bloggerName}</p> */}
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
                    <h6 className='fw-bold blog-section-title pt-3'>YOU MAY ALSO LIKE THIS </h6>
                    <Row>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={20}
                            navigation={true}
                            loop={true}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            
                            breakpoints={{
                                350: {
                                    slidesPerView: 1,
                                },
                                640: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 5,
                                }
                            }}
                            modules={[Pagination, Autoplay, Navigation]}
                            className="mySwiper "
                        >
                            {asYouLikeBlog?.map(likeblog => {
                                const { _id, blogTitle, bloggerName, blogImg,bloggerImg } = likeblog;
                                return (
                                    <SwiperSlide key={_id} >
                                        <Card className='blog-card mb-4 mx-1'  onClick={() => handleSingleBlogs(_id)}>
                                            <Card.Img variant="top" src={blogImg} />
                                            <Card.Body>
                                                 {/* <span className='blog-catagory'>{blogCatagory}</span> */}
                                                <Card.Title className='fw-bold mb-2'>{blogTitle}</Card.Title>
                                                <div className='d-flex align-items-center justify-content-start gap-2'>
                                                     <img src={bloggerImg} alt="" srcset="" style={{width:"32px",borderRadius:"100%"}} />

                                                     <p className='blog-author mt-3'> <span className='fw-bolder'>{bloggerName.slice(0, 12)}</span></p>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                )
                            })}

                        </Swiper>
                    </Row>
                </Container>


            </div>
        </div>
    );
};

export default BlogPage;