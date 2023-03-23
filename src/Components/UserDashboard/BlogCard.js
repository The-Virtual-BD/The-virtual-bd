import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../hooks/url';
import card1 from "../../Images/cardImg-1.png";
import "./UserDashboard.css"
import blnakUser from '../../Images/blank_user.png';
import { useEffect } from 'react';

const BlogCard = () => {
    const navigate = useNavigate();
    const [blog, setBlog] = useState({});

     //Get recentPost
     const { data:posts, isLoading, refetch } = useQuery('recentBlog', () => fetch(`${baseUrl}/api/posts/activeposts`).then(res => res.json()));

     useEffect(() => {
        if(posts){
            const post=[...(posts?.data)]
            const recentBlog = post[post?.length - 1];
            setBlog(recentBlog);
         }

        

     }, [posts]);

    //  console.log(blog)


    const handleSingleBlogs = (id) => {
        navigate(`/blog/${id}`)
    };


    return (
        <>
        {
            isLoading ? <Skeleton count={10} /> :  <Card onClick={() => handleSingleBlogs(blog?.id)} className="blog-card prev-blog-card">
            <Card.Img variant="top" style={{height:"235px"}} src={`${baseUrl}/${blog?.cover}`} />

                <Card.Body>
                    <span className='blog-catagory'>{blog?.category?.name}</span>
                       <Card.Title className='fw-bold my-1'>{blog?.title}</Card.Title>
                        <Card.Text> {blog?.short_description?.slice(0,120)}</Card.Text>
                 </Card.Body>

                 <Card.Footer style={{border:"none",backgroundColor:"transparent"}}>
                    <div className='d-flex align-items-center justify-content-start gap-2'>
                        {
                            blog?.author?.photo ?
                             <img src={`${baseUrl}/${blog?.author?.photo}`} alt="" srcset="" style={{width:"35px",height:"35px",  borderRadius:"100%"}} />
                                :
                             <img src={blnakUser} alt="" srcset="" style={{width:"32px",borderRadius:"100%"}} />
                        }

                        <div className='mt-3'>
                                <h6 className='blog-author fw-bold mb-0'>{blog?.author?.blogger_name}</h6>
                                <p><small className='fs-6 fw-light mt-1'>{moment(blog?.updated_at).format('DD MMMM, YYYY')}</small></p>
                        </div>             

                                            
                    </div>

                </Card.Footer>
        </Card>
        }
            
                                        
        </>
        
    );
};

export default BlogCard;