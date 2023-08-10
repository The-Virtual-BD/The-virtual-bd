import React from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './BlogPage.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper";
import { baseUrl } from '../../hooks/url';
import blnakUser from '../../Images/blank_user.png';
import moment from 'moment';
import Skeleton from 'react-loading-skeleton';
import { useCollection } from '../../context';


const BlogPage = () => {
    return (
        <div>
            <section className="blog_hero">
                <Container>
                    <div className="blog_text">
                        <h2>Blogs</h2>
                    </div>
                </Container>
            </section>
            <BlogSection />
        </div>
    );
};

export default BlogPage;



const BlogSection = () => {
    const navigate = useNavigate();
    const { blogs, blogsLoading } = useCollection();
    const [showBlog, setShowBlog] = useState(6);


    if (blogsLoading) {
        return <div class="d-flex justify-content-center">
            <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    };

    if (!blogsLoading && blogs.length === 0) {
        return <p>No Blogs Avaiable</p>
    };


    //Handle Show More btn
    const handleShowMoreBlogs = () => {
        setShowBlog(prevState => prevState + 3)
    };


    //Recent Blog
    const recentBlog = blogs[blogs?.length - 1];
    const rpostDate = moment(recentBlog?.updated_at).format('DD MMMM, YYYY');

    //Prev Blog
    const PrevBlog = blogs?.filter(pBlog => recentBlog.id !== pBlog.id);

    //As You Like Blogs
    const asYouLikeBlog = blogs?.filter(blog => blog?.category?.name.toLowerCase() === recentBlog?.category?.name.toLowerCase() && recentBlog?.id !== blog?.id);


    //Handle Single Page
    const handleSingleBlogs = (id) => {
        navigate(`/blog/${id}`)
    };

    return (
        <div>
            <Container >
                {
                    recentBlog && <div className='mt-5 recent-blog-section'>
                        <h6 className='fw-bold blog-section-title'>WHATS NEW</h6>
                        <Row className=''>
                            <Col md={7} sm={12} gap-3>
                                <div className='blog-recent-img-container'>
                                    <img src={`${baseUrl}/${recentBlog?.cover}`} alt="" srcset="" />
                                </div>
                            </Col>

                            <Col md={5} sm={12}>
                                <div className='recent-blog-content'>
                                    <div className='mt-3'>
                                        <span className='blog-catagory'>{recentBlog?.category?.name}</span>
                                        <h3 onClick={() => handleSingleBlogs(recentBlog?.id)} className='fw-bolder mt-2 blog-head'>{recentBlog?.title}</h3>
                                        <p className='mt-4 fs-5'>{recentBlog?.short_description}</p>
                                        {/* <div dangerouslySetInnerHTML={{ __html: recentBlog?.description.slice(0, 100) }} /> */}
                                    </div>

                                    <div className='d-flex align-items-center justify-content-start gap-3'>
                                        {
                                            recentBlog?.author?.photo ?
                                                <img src={`${baseUrl}/${recentBlog?.author?.photo}`} alt="" srcset="" style={{ width: "50px", height: "50px", borderRadius: "100%" }} />
                                                :
                                                <img src={blnakUser} alt="" srcset="" style={{ width: "50px", borderRadius: "100%" }} />
                                        }



                                        <div className='mt-3'>
                                            <h6 className='mb-0 fw-bold'>{recentBlog?.author?.blogger_name}</h6>
                                            <p><small className='fs-6 fw-light'>{rpostDate}</small></p>
                                        </div>

                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </div>
                }

                {
                    PrevBlog.length !== 0 ?
                        <div className='mt-5 blog-section mb-3'>
                            <h6 className='fw-bold blog-section-title'>PREVIOUS POST </h6>

                            <div>
                                <Row xs={1} md={3} className="g-4">
                                    {PrevBlog?.map(blog => {
                                        const { id, category, title, short_description, author, cover, updated_at } = blog;
                                        return (
                                            <Col key={id}>
                                                <Card onClick={() => handleSingleBlogs(id)} className="blog-card prev-blog-card">
                                                    <Card.Img variant="top" style={{ height: "235px" }} src={`${baseUrl}/${cover}`} />

                                                    <Card.Body>
                                                        <span className='blog-catagory'>{category?.name}</span>
                                                        <Card.Title className='fw-bold my-2'>{title}</Card.Title>
                                                        <Card.Text>
                                                            {short_description.slice(0, 200)}
                                                        </Card.Text>

                                                    </Card.Body>

                                                    <Card.Footer style={{ border: "none", backgroundColor: "transparent" }}>
                                                        <div className='d-flex align-items-center justify-content-start gap-2'>
                                                            {
                                                                author?.photo ?
                                                                    <img src={`${baseUrl}/${author?.photo}`} alt="" srcset="" style={{ width: "32px", height: "32px", borderRadius: "100%" }} />
                                                                    :
                                                                    <img src={blnakUser} alt="" srcset="" style={{ width: "32px", borderRadius: "100%" }} />
                                                            }

                                                            <div className='mt-3'>
                                                                <h5 className='blog-author mb-0'>{author?.blogger_name}</h5>
                                                                <p><small className='fw-light  blog-date'>{moment(updated_at).format('DD MMMM, YYYY')}</small></p>
                                                            </div>


                                                        </div>

                                                    </Card.Footer>
                                                </Card>
                                            </Col>

                                        )
                                    }).slice(0, showBlog)}
                                </Row>
                            </div>
                            {
                                PrevBlog?.length > 6 && <div className='text-center mt-3'>
                                    <button className='blog-btn' onClick={handleShowMoreBlogs}>Load More</button>
                                </div>
                            }



                        </div> : PrevBlog.length === 0 ? " " : <Skeleton />
                }
            </Container>

            {
                asYouLikeBlog.length !== 0 ? <div className='blog-you-may-like-section blog-section pb-5'>
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
                                    disableOnInteraction: true,
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
                                    const { id, title, cover, author } = likeblog;
                                    return (
                                        <SwiperSlide key={id} className="mb-3">
                                            <Card className='blog-card slide-blog-card mb-4 mx-1' onClick={() => handleSingleBlogs(id)}>
                                                <Card.Img variant="top" src={`${baseUrl}/${cover}`} style={{ height: "145px" }} />

                                                <Card.Body>
                                                    <Card.Title className='fw-bold mb-2'>{title}</Card.Title>
                                                </Card.Body>

                                                <Card.Footer style={{ border: "none", backgroundColor: "transparent" }}>
                                                    <div className='d-flex align-items-center justify-content-start gap-2'>
                                                        {
                                                            author?.photo ?
                                                                <img src={`${baseUrl}/${author?.photo}`} alt="" srcset="" style={{ width: "32px", borderRadius: "100%" }} />
                                                                :
                                                                <img src={blnakUser} alt="" srcset="" style={{ width: "32px", borderRadius: "100%" }} />
                                                        }

                                                        <p className='blog-author mt-3'> <span className='fw-bolder'>{author?.blogger_name}</span></p>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </SwiperSlide>
                                    )
                                })}

                            </Swiper>
                        </Row>
                    </Container>
                </div> : asYouLikeBlog.length === 0 ? " " : <Skeleton />
            }
        </div>
    )
};