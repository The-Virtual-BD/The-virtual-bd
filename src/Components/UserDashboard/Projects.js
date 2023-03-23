import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { BsEyeFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Table from './Table';
import './UserDashboard.css';
import { Col, Row } from 'react-bootstrap';
import { baseUrl } from '../../hooks/url';
import useUser from '../../hooks/useUser';
import useToken from '../../hooks/useToken';
import Loading from '../../hooks/Loading';
import { toast } from 'react-toastify';
import moment from 'moment';
import Rater from 'react-rater';
import Skeleton from 'react-loading-skeleton';
import { useQuery } from 'react-query';

const Projects = ({ loading, setLoading ,token}) => {
    const [getId, setGetId] = useState('');
    const [user] = useUser();
    const { id } = user;

    //Get projects
    const { data:projects, isLoading, refetch } = useQuery('project', () => fetch(`${baseUrl}/api/subscriptions/mysubscriptions`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            "Authorization": `Bearer ${token}`
        }
    }).then(res => res.json()));
    const recentProjects = projects?.data ? [...(projects.data)].reverse() : [];

    // console.log(projects)
  
    //Handle Project View
    const handleProjectView = (id) => {
        console.log("clicked", id);
        setGetId(id)
    };

    const PROJECT_COLUMNS = () => {
        return [
            {
                Header: "SL",
                id: 'index',
                accessor: (_row, i) => i + 1
            },
            {
                Header: "Project Title",
                accessor: "subject",
                sortType: 'basic',
            },
            {
                Header: "Service",
                accessor: "service.name",
                sortType: 'basic',
            },
            {
                Header: "Meeting Time",
                accessor: "schedule",
                sortType: 'basic',
                Cell: ({ row }) => {
                    const { schedule } = row.original;
                    return (
                       <div>
                         { moment(schedule).format('DD MMM YYYY hh:mm A')}
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
                        {status===1?<p className='text-warning  fw-bold '>Pendding</p>
                        :status===2?<p className='text-success fw-bold'>Approved</p>
                        :status===3?<p className='text-success fw-bold'>Approved</p>
                        :status===4?<p className='text-danger fw-bold'>Declined</p>:""}

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
                        <button className='project-action-btn project-view-btn' onClick={() => handleProjectView(id)} >
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
                    {isLoading ? (<Skeleton count={10} /> ) :recentProjects.length !==0?
                        <Table columns={PROJECT_COLUMNS()} data={recentProjects} headline={"Projects and Communications"} />:<p className='p-3 bg-white rounded fw-bold'>You Don't Have any project</p>
                    }
                </div>
            }

            <div>
                {getId && <ProductDetails getId={getId} token={token} loading={loading} setLoading={setLoading} />}
            </div>

           
             
        </>
    );
};

export default Projects;






const ProductDetails = ({ getId, token }) => {
    const [project, setProject] = useState([]);
    const [message, setMessage] = useState('');
    const [attachment, setAttachment] = useState(null);

    useEffect(() => {
        const url = `${baseUrl}/api/subscriptions/show/${getId}`;
        fetch(url, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProject(data?.data)
            })
    }, [getId]);



    console.log(project);


    //Handle Message Form
    const handleSubMessageForm = async (e) => {
        e.preventDefault();

        const msgData = new FormData();
        msgData.append("message", message);
        msgData.append("attachment", attachment);
        msgData.append("subscription_id", getId);
        msgData.append("type", 1);

        const url = `${baseUrl}/api/subchat/store`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: msgData
        });

        const result = await response.json();

        if (result.error) {
            console.log(result.error);
            toast.error("Message Sent Failed");
        } else {
            // console.log(result);
            setProject(result.data)
            e.target.reset();
            toast.success("Message Sent");
        }

    };



    return (
        <>
            <div className='bg-white p-4 px-5 rounded '>
                <div>
                    <h3 className=' fw-bold text-start '>View Subscription Details</h3>
                    <hr className=' text-bgclr' />
                </div>

                <Row >
                    <Col md={12} sm={12} >
                        <div className='d-flex flex-column align-items-start '>

                            <div>
                                <p><span className='fw-bold'>Project Title:</span> {project?.subject}</p>
                                <p><span className='fw-bold'>Service Name: </span>{project?.service?.name}</p>
                                <p><span className='fw-bold'>Meeting Time: </span>{
                                    moment(project?.schedule).format(' hh:mm A, DD/MM/YYYY')
                                }
                                </p>

                                <p><span className='fw-bold me-2'> Status:</span>
                                {
                                  project?.status === 1 ?
                                (<span className='text-warning'>Pendding</span>) : project?.status === 2 ?
                                    (<span className='text-success'>Approved</span>) : project?.status == "4" ?
                                        (<span className='text-danger'>Declined</span>) : project?.status == "3" ?
                                            (<span className='text-success'>Approved</span>) : ""
                                }
                                    
                                </p>


                                <div className='text-start'>
                                    <p className='fw-bold mb-0'>Description:</p>
                                    <p className='text-labelclr'>{project?.description}</p>
                                </div>

                                <p>
                                    <span className='fw-bold me-2'>Documents:</span>
                                    <a href={`${baseUrl}/${project?.attachment}`} download >Download</a>
                                </p>
                            </div>


                          {/*   Message Section */}

                            <section className='conversation-container '>

                                <div className='conversation-container-msg'>
                                    {
                                          project?.chats?.map(chat=>{
                                            const {message,attachment,type,created_at}=chat;
                                            const cmntDate= moment(created_at).format('hh:mm A DD/MM/YY');
                                        return(
                                                <div className={`${type ===1 ? "user-msg": "admin-msg"} my-0 `} >
                                                <p className='mb-0 fw-bold'>
                                                    {
                                                    type ===1?`${project?.applicant?.first_name}`:"Admin"
                                                   }
                                                </p>

                                                   <div> 
                                                         <div className='bg-white p-2 rounded  my-0 '>
                                                            <p className='my-0'>{message}</p>
                                                            { attachment && 
                                                                <a title="Click For Download" href={`${baseUrl}/${attachment}`} download> attachment </a>}
                                                        </div>

                                                        <p className={`time-msg ${type==1 ? "text-start": "text-end"}`}>{cmntDate}</p>
                                                   </div>
                                                </div>
                                            ) } )}
                                </div>

                                    <div className="bg-white mt-3 ">
                                        <form className="row form-container" onSubmit={handleSubMessageForm}>
                                            <div className=" col-12">
                                                <label for="bio" className="form-label fw-bold">Message</label>
                                                <textarea
                                                    className="form-control mb-2"
                                                    required
                                                    id="bio"
                                                    rows="3"
                                                    placeholder='Write Message'
                                                    onChange={e => setMessage(e.target.value)}
                                                />
                                                <input type="file" className="form-control " id="doc"
                                                    onChange={(e) => setAttachment(e.target.files[0])}
                                                />
                                            </div>
                                            <div className="col-12 text-center">
                                                <button className='main-btn' type="submit">Send</button>
                                            </div>
                                        </form>
                                </div>
                            </section>

                        </div>
                    </Col>


                    {/*   <Col md={5} sm={12} >
                        <img src={`${baseUrl}/${project?.cover}`} alt="" srcset="" style={{ width: "100%" }} />
                    </Col> */}
                </Row>
            </div>

            <div className='mt-5'>
                <Review token={token} getId={getId} />
            </div>
        </>
    )
};



const Review=({token,getId})=>{

    // const [subscription_id]=useState(getId);
    const [body,setReview]=useState('');
    const [quantity,setRating]=useState(null);

    //Get Ratting
    function handleRate({ rating }) {
        setRating(rating);
      };

       
    //Handle Review Form
    const handleReviewForm=async(e)=>{
        e.preventDefault();
       
        const reviewData = new FormData();
        reviewData.append('subscription_id', getId);
        reviewData.append('body', body);
        reviewData.append('quantity', quantity);

        const url = `${baseUrl}/api/reviews/store`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body:reviewData
        });
    
        const result = await response.json();
    
        if (result.error) {
            console.log(result.error);
            toast.error("Review Submit Failed");
        } else {
            console.log(result);
            e.target.reset();
            toast.success(result.message);
        }
    };


    return(
    <div className="bg-white mt-3 p-3 rounded user-dashboard-font">
        <h4 className="px-3 fw-bold mb-3">Give a Review</h4>

       <form className="row form-container px-3" onSubmit={handleReviewForm}>
            <div className="col-12 mb-2">
                <label for="bloggerName" className="form-label fw-bold mb-0">
                   Rating
                </label>
                <Rater 
                    total={5} 
                    className="fs-1 d-flex mt-0"
                    onRate={handleRate} />
            </div>
           

            <div className="col-12">
                    <label for="bio" className="form-label fw-bold">Review</label>
                    <textarea
                    className="form-control mb-2"
                    required
                    id="bio"
                    rows="3"
                    placeholder='Write Review'
                    onChange={e => setReview(e.target.value)}
                />
            </div>

           <div className="col-12 text-center">
              <button className='main-btn' type="submit">Submit</button>
           </div>
       </form>
   </div>
    )
};


