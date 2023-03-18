import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { BsEyeFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Table from './Table';
import './UserDashboard.css';
import { Col, Container, Row } from 'react-bootstrap';
import { baseUrl } from '../../hooks/url';
import useUser from '../../hooks/useUser';
import useToken from '../../hooks/useToken';
import Loading from '../../hooks/Loading';
import { saveAs } from "file-saver";
import { toast } from 'react-toastify';

const Projects = ({ loading, setLoading }) => {
    const [projects, setProjects] = useState([]);
    const [getId, setGetId] = useState('');

    const [user] = useUser();
    const [token] = useToken();
    // const [isLoading,setIsLoading]=useState(false);

    const { id } = user;
    // console.log(id)
    const navigate = useNavigate();




    //Get My All subscriptions
    useEffect(() => {
        const url = `${baseUrl}/api/subscriptions/mysubscriptions`;
        setLoading(true);
        fetch(url, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setProjects(data.data);
            })
    }, [id, token]);

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
            },

            /* {
                Header: 'Status',
                accessor: 'status',
                Cell: ({ row }) => {
                    const {status} = row.original;
                    return (<div className='d-flex justify-content-start pt-1 align-items-center'>
                        {status==="1"?<p className='text-warning  fw-bold'>Pendding</p>
                        :status==="2"?<p className='text-success fw-bold'>Running</p>
                        :status==="3"?<p className='text-danger fw-bold'>Cancel</p>:""}

                    </div>);
                },
            }, */
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


    if (loading) {
        return (<Loading loading={loading} />)
    };

    return (
        <>
            {!getId &&
                <div >
                    {projects?.length === 0 ? (
                        <p className='p-3 bg-white rounded fw-bold'>You Don't Have any project</p>
                    ) :
                        <Table columns={PROJECT_COLUMNS()} data={projects} headline={"All Projects List"} />
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



    // console.log(project);


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
            console.log(result);
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
                                <p><span className='fw-bold'>Client Name: </span>{project?.service?.name}</p>
                                <p><span className='fw-bold'>Meeting Time: </span>{project?.schedule}</p>

                              


                                <p><span className='fw-bold me-2'> Status:</span>
                                {
                                  project?.status == "1" ?
                                (<span className='text-warnning'>Pendding</span>) : project?.status == "2" ?
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




                            <div >
                                <div className='conversation-container p-2'>
                                   {
                                    project?.chats?.map(chat=>{
                                        console.log(chat)
                                        const {message,attachment,type}=chat;
                                        return(
                                            <div className={`${type==1 ? "text-start": "text-end "} m-2 p-1 rounded bg-white`}>
                                                <p>{message}</p>
                                                {
                                                    attachment && <a href={`${baseUrl}/${attachment}`} download>attachment</a>
                                                }
                                            </div>
                                        )
                                    })

                                   }
                                </div>

                                <div className="bg-white   rounded user-dashboard-font">
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
                            </div>

                        </div>
                    </Col>


                    {/*   <Col md={5} sm={12} >
                        <img src={`${baseUrl}/${project?.cover}`} alt="" srcset="" style={{ width: "100%" }} />
                    </Col> */}
                </Row>
            </div>
        </>
    )
}


