import moment from 'moment';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { BsEyeFill } from 'react-icons/bs';
import Skeleton from 'react-loading-skeleton';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { baseUrl } from '../../hooks/url';
import useUser from '../../hooks/useUser';
import Table from './Table';

const BlogList = ({token}) => {
    const [getId, setGetId] = useState('');
    const [user] = useUser();
    const { id } = user;


        //Get projects
        const { data:blogs, isLoading, refetch } = useQuery('bloglist', () => fetch(`${baseUrl}/api/posts/myposts`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                "Authorization": `Bearer ${token}`
            }
        }).then(res => res.json()));
        const recentBlogs = blogs?.data ? [...(blogs?.data)].reverse() : [];
        // console.log(recentBlogs)


         //Handle Project View
    const handleBlogView = (id) => {
        console.log("clicked", id);
        setGetId(id)
    };

    const BLOGLIST_COLUMNS = () => {
        return [
            {
                Header: "SL",
                id: 'index',
                accessor: (_row, i) => i + 1
            },
            {
                Header: "Blog Title",
                accessor: "title",
                sortType: 'basic',
                Cell: ({ row }) => {
                    const { title } = row.original;
                    return (<>
                        {title?.slice(0, 30)}
                    </>);
                },
            },
            {
                Header: "Category",
                accessor: "category.name",
                sortType: 'basic',
            },
            {
                Header: "Posted Time",
                accessor: "created_at",
                sortType: 'basic',
                Cell: ({ row }) => {
                    const { created_at } = row.original;
                    return (
                       <div>
                         { moment(created_at).format('DD MMM, YYYY')}
                       </div>
                    );
                },
            },

            {
                Header: 'Status',
                accessor: 'status',
                Cell: ({ row }) => {
                    const {status} = row.original;
                    return (<div className='d-flex justify-content-start pt-1 align-items-center'>
                        {status===1?<p className='text-warning  fw-bold '>Pending</p>
                        :status===2?<p className='text-success fw-bold'>Approved</p>
                        :status===3?<p className='text-danger fw-bold'>Declined</p>:""}
                    </div>);
                },
            },
            {
                Header: "Action",
                accessor: "action",
                sortType: 'basic',
                Cell: ({ row }) => {
                    const { id
                    } = row.original;
                    return (<div>
                        <button className='project-action-btn project-view-btn' onClick={() =>handleBlogView(id)} >
                            <div> <BsEyeFill /></div>
                        </button>
                    </div>);
                },

            },
        ];
    };


    return (
        <>
        {!getId &&
            <div >
                {isLoading ? (<Skeleton count={10} /> ) : recentBlogs?.length !==0?
                    <Table columns={BLOGLIST_COLUMNS()} data={recentBlogs} headline={"Blog List"} />: recentBlogs?.length === 0?<p className='p-3 bg-white rounded fw-bold'>You Don't Have any Blogs</p>: ""
                }
            </div>
        }

        <div>
            {getId && <BlogDetails getId={getId} token={token}  />}
        </div>

       
         
    </>
    );
};

export default BlogList;


const BlogDetails = ({ getId, token }) => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const url = `${baseUrl}/api/posts/activeposts/${getId}`;
        fetch(url, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBlog(data?.data)
            })
    }, [getId]);



    // console.log(blog);


  


    return (
        <>
            <div className='bg-white p-4 px-5 rounded '>
                <div>
                    <h3 className=' fw-bold text-start '>View Blog Details</h3>
                    <hr className=' text-bgclr' />
                </div>

                <Row >
                    <Col md={7} sm={12} >
                        <div className='d-flex flex-column align-items-start '>

                            <div>
                                <p><span className='fw-bold'>Blog Title:</span> {blog?.title}</p>
                                <p><span className='fw-bold'>Blogger Name: </span>{`${blog?.author?.first_name} ${blog?.author?.last_name}`}</p>
                                <p><span className='fw-bold'>Subject: </span>{blog?.category?.name}</p>
                                <p><span className='fw-bold'>Posted Date: </span>
                                      { moment(blog?.created_at).format('DD MMMM, YYYY')}
                                </p>
                                    

                                <p><span className='fw-bold me-2'> Status:</span>
                                {
                                  blog?.status === 1 ?
                                (<span className='text-warning'>Pending</span>) : blog?.status === 2 ?
                                    (<span className='text-success'>Approved</span>) : blog?.status == "3" ?
                                        (<span className='text-danger'>Declined</span>) : ""
                                }
                                </p>


                                <div className='text-start'>
                                    <p className='fw-bold mb-0'>Short Description:</p>
                                    <p className='text-labelclr'>{blog?.short_description}</p>
                                </div>
                                <div className='text-start'>
                                    <p className='fw-bold mb-0'>Description:</p>
                                    <div className='text-labelclr' dangerouslySetInnerHTML={{ __html: blog?.description }} />
                                </div>
                            </div>
                        </div>
                    </Col>


                      <Col md={5} sm={12} >
                        <img src={`${baseUrl}/${blog?.cover}`} alt={blog?.title} srcset="" style={{ width: "100%" }} />
                    </Col>
                </Row>
            </div>

           
        </>
    )
};