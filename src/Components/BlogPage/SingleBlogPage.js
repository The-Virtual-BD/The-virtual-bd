import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
import { baseUrl } from '../../hooks/url';
import { toast } from 'react-toastify';
import blnakUser from '../../Images/blank_user.png';
import moment from 'moment';

const BlogPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const[email,setSubscribe_email]=useState('');
    const [blog, setBlog] = useState([]);
    const [blogs, setBlogs] = useState([]);

   // Get Single Blog
    useEffect(() => {
        const blogUrl=`${baseUrl}/api/posts/activeposts/${id}`;
        fetch(blogUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBlog(data?.data)
            })
    }, [id]);

    useEffect(() => {
        const blogUrl=`${baseUrl}/api/posts/activeposts`;
        fetch(blogUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                setBlogs(data.data)
            })
    }, []);

    console.log(blog)

    //Slide to Top
     useEffect(()=>{
        window.scrollTo(0,0)
      },[]);

      const postDate= moment(blog?.updated_at).format('DD MMM YYYY')

    // const relatedblog = blog?.find(blogD => blogD.id == id);

    const featureBlogs = blogs?.filter(fetureBlog => fetureBlog?.category?.name?.toLowerCase() === blog?.category?.name?.toLowerCase());

    //Navigate to Single Blog Page
    const handleblogs = (id) => {
        navigate(`/blog/${id}`)
    };

   // Handle Subscribe Us Form
    const handleSubscribeForm=e=>{
        e.preventDefault();
        const emaiL={email};


        //send to backend
        const url=`${baseUrl}/api/newsSubscriber/store`;
        fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emaiL)
        })
        .then(res=>res.json())
        .then(result=>{
        console.log(result);
        if(result.message){
            toast.success(result.message);
            e.target.reset();
        }else{
            toast.error("Email Already Added");
        }
        })
    };

    //id, category, title, short_description, author, blogImg,cover

    return (
        <>
            <TopHeader />
            <Menu />
            <Container>
                <div className='blog-details-container  blog-section mt-sm-3 mt-5'>
                    <span className='blog-catagory'>{blog?.category?.name}</span>
                    <h2 className='fw-bolder mt-2 '>{blog?.title}</h2>
                    <p className='fs-4'>{blog?.short_description}</p>


                    <div className='d-flex align-items-center justify-content-start gap-3'>
                       

                        {
                          blog?.author?.photo ?
                                <img src={`${baseUrl}/${blog?.author?.photo}`} alt="" srcset="" style={{width:"50px",borderRadius:"100%"}} />:
                                              
                                <img src={blnakUser} alt="" srcset="" style={{width:"50px",borderRadius:"100%"}} />
                                            }


                        <div className='mt-3'>
                            <h6 className='mb-0 fw-bold'>{blog?.author?.first_name}</h6>
                            <p><small className='fs-6 fw-light'>{postDate}</small></p>
                        </div>
                    </div>

                    <div className='blog-details-img-container'>
                        <img src={`${baseUrl}/${blog?.cover}`} alt="" srcset=""  />
                    </div>

                    <div className="mt-5">
                        <Row >
                            <Col md={9} sm={12} >
                                {/* <h3 className='fw-bold'>{blog?.blogSubTitle}</h3> */}

                                <div  className='text-labelclr' dangerouslySetInnerHTML={{ __html: blog?.description}}/>
                                

                                <div className='d-flex align-items-center'>
                                    <h3 className='fw-bold'>Share:</h3>
                                    <BlogSocialmedia />
                                </div>

                                <BlogCommentBox id={blog?.id} comments={blog?.comments} />



                            </Col>

                            <Col sm={12} md={3}>
                                <div>
                                    <h6 className='fw-bold blog-section-title mt-4'>Related Articles</h6>
                                    <div className='d-flex flex-column gap-1'>
                                        {
                                            featureBlogs?.map(fBlog => <div onClick={() => handleblogs(fBlog?.id)} className="card mb-3 blog-card" style={{ maxWidth: "540px" }}>
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-md-5">
                                                        <img src={`${baseUrl}/${fBlog?.cover}`} className="img-fluid rounded-start" alt={"Blog Cover"} style={{ height: "88px" }} />
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div className="card-body">
                                                            <h5 className="card-title fw-bold">{fBlog?.title}</h5>
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

export default BlogPage;



const BlogCommentBox = ({id,comments}) => {
    const [token]= useToken();
    const[user]=useUser();
    console.log(comments);

     const post_id= id?.toString()

    const[body,setComment]=useState('');
    // console.log(user)


    //Handle Add Comment
    const handleCommentForm=e=>{
        e.preventDefault();
        const data={body,post_id};
        // console.log(data);

         //Send to Backend
        const formUrl=`${baseUrl}/api/comments/store`;
        fetch(formUrl,{
        method:"POST",
        headers:{
            "content-type":"application/json",
            "Authorization": `Bearer ${token}`
        },
        body:JSON.stringify(data)
        } )
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
            toast.success(result.message);
            e.target.reset();
        
        });
        
    };

    const approvedComment=comments?.filter(cmnt=>cmnt.status==="2");



    return (
        <div className='blog-comment-box-container'>
            <h3 className='fw-bold mb-0'>Leave a Comment</h3>
            {/* <p className='mt-0 mb-4'>Your email address will not be published. Required fields are marked *</p> */}

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
                    <h4>{approvedComment?.length} Comments</h4>
                </div>

                <div>
                    {
                        approvedComment?.map(comment=> <div className='d-flex align-items-start justify-content-start gap-2'>
                        <img src={image1} alt="" srcset="" style={{width:"30px",borderRadius:"100%"}} />
                       <div>
                            <p className='my-0 '> <span className='fw-bolder'>{comment?.commenter_name}</span></p>

                            <p className='mt-0 fs-6'>{comment?.body}</p>
                       </div>
                </div>)
                    }

                   
                   

                </div>
            </div>

        </div>
    )
};