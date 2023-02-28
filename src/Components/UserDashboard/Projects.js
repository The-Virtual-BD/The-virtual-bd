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

const Projects = ({loading,setLoading}) => {
    const [projects, setProjects] = useState([]);
    const[getId,setGetId]=useState('');

    const [user] = useUser();
    const [token] = useToken();
    // const [isLoading,setIsLoading]=useState(false);

    const {id}=user;
    // console.log(id)
    const navigate = useNavigate();
  



    //Get My All Projects
    useEffect(() => {
        const url = `${baseUrl}/api/projects/myprojects`;
        setLoading(true);
        fetch(url ,{
            method:"GET",
            headers: {
                'content-type': 'application/json',
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data =>{
                setLoading(false);
                setProjects(data.data);
            } )
     }, [id,token]);

    // console.log(projects)


    //Handle Project View
    const handleProjectView = (id) => {
        console.log("clicked", id);
        setGetId(id)
    };

    // console.log(projects);

   


    const PROJECT_COLUMNS = () => {
        return [
            {
                Header: "SL",
                accessor: "id",
                sortType: 'basic',

            },
            {
                Header: "Project Title",
                accessor: "name",
                sortType: 'basic',

            },
            {
                Header: "Start Date",
                accessor: "starting_date",
                sortType: 'basic',

            },
            {
                Header: "End Date",
                accessor: "ending_date",
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
                        <button className='project-action-btn project-view-btn' onClick={()=>handleProjectView(id)} >
                            <div> <BsEyeFill /></div>
                        </button>
                    </div>);
                },

            },
        ];
    };


    if(loading){
        return(<Loading loading={loading} />)
    };

    return (
        <>
           {!getId &&
                <div >
                    {projects?.length ===0 ? (
                         <p className='p-3 bg-white rounded fw-bold'>You Don't Have any project</p>
                    ):
                    <Table columns={PROJECT_COLUMNS()} data={projects} headline={"All Projects List"} />
                    }
                </div>
            }
           
            <div>
                {getId && <ProductDetails getId={getId} token={token}  loading={loading} setLoading={setLoading}/>}
            </div>
        </>
    );
};

export default Projects;






const ProductDetails = ({ getId,token }) => {

    const [project,setProject]=useState([]);
    useEffect(()=>{
        const url = `${baseUrl}/api/projects/show/${getId }`;
        fetch(url ,{
            method:"GET",
            headers: {
                'content-type': 'application/json',
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setProject(data?.data)
            })
    }, [getId]);

     //Download Documents
     const downloadFile = () => {
        // const getDoc = notices.find(notice => notice.id === id);

        fetch(`${baseUrl}/${project?.documents}`)
       
          .then((response) => response.blob())
          .then((blob) => {
            saveAs(blob, `${project?.name}.doc`);
          });
      };

    console.log(project)

/* 
    if(loading){
        return(<p>Loading......</p>)
    };
 */

    return (
        <>
            <div className='bg-white p-4 px-5 rounded '>
                <div>
                    <h3 className=' fw-bold text-start '>View Project</h3>
                    <hr className=' text-bgclr' />
                </div>

                <Row >
                    <Col md={7} sm={12} >
                        <div className='d-flex flex-column align-items-start '>
                            <p><span className='fw-bold'>Project Title:</span> {project?.name}</p>
                            <p><span className='fw-bold'>Client Name: </span>{project?.client_name}</p>


                            <p><span className='fw-bold'>Starting Date: </span>{project?.starting_date}</p>
                            <p><span className='fw-bold'>Ending Date:</span> {project?.ending_date}</p>

                            <p><span className='fw-bold me-2'> Status:</span>
                           <span>{project?.progress}</span></p>

                             

                            <p><span className='fw-bold'> Budget:</span> {project?.value}</p>
                            <p><span className='fw-bold'> Paid:</span> {project?.value_paid}</p>

                            {/* <p><span className='fw-bold'> Due:</span> {project?.value_payable}</p> */}

                            <div className='text-start my-2'>
                                <p className='fw-bold' >Short Description:</p>
                                <p className='text-labelclr'>{project?.short_description}</p>
                            </div>
                            <div className='text-start'>
                                <p className='fw-bold'>Description:</p>
                                <p className='text-labelclr'>{project?.description}</p>

                            </div>

                            <p><span className='fw-bold'>Documents:</span> <p className='file-downloda-btn'  onClick={downloadFile}>{`${project?.name}`}</p> </p>


                        </div>

                    </Col>


                    <Col md={5} sm={12} >
                        <img src={`${baseUrl}/${project?.cover}`} alt="" srcset="" style={{ width: "100%" }} />
                    </Col>
                </Row>
            </div>
        </>
    )
}


