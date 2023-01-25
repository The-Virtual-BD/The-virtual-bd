import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { BsEyeFill } from 'react-icons/bs';
import { RiEditBoxFill } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Table from './Table';
import './UserDashboard.css';
import { Col, Container, Row } from 'react-bootstrap';

const Projects = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [getId, setGetId] = useState("")

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    const handleProjectView = (id) => {
        console.log("clicked", id);
        setGetId(id)
        // navigate(`/user-dashboard/${id}`);
    };

    // console.log(projects);




    const PROJECT_COLUMNS = () => {
        return [
            {
                Header: "SL",
                accessor: "_id",
                sortType: 'basic',

            },
            {
                Header: "Project Title",
                accessor: "projectName",
                sortType: 'basic',

            },
            {
                Header: "Client Name",
                accessor: "name",
                sortType: 'basic',

            },
            {
                Header: "Start Date",
                accessor: "startDate",
                sortType: 'basic',

            },
            {
                Header: "End Date",
                accessor: "endDate",
                sortType: 'basic',

            },
            {
                Header: "Status",
                accessor: "status",
                sortType: 'basic',

            },

            {
                Header: 'Action',
                accessor: 'action',
                Cell: ({ row }) => {
                    const { _id } = row.original;
                    return (<div className='d-flex justify-content-center align-items-center  gap-2 '>

                        <button className='project-action-btn project-view-btn' onClick={() => handleProjectView(_id)}>
                            <div> <BsEyeFill className=' ' /></div>
                        </button>

                        <button className='project-action-btn project-edit-btn'>
                            <div> <RiEditBoxFill className='' /></div>
                        </button>

                        <button className='project-action-btn project-delete-btn'>
                            <div> <AiFillDelete className='' /></div>
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
                    {projects.length && (
                        <Table columns={PROJECT_COLUMNS()} data={projects} headline={"All Projects List"} />
                    )}
                </div>
            }
            <div>
                {getId && <ProductDetails getId={getId} projects={projects} />}
            </div>
        </>
    );
};

export default Projects;


const ProductDetails = ({ getId, projects }) => {
    const getProjectsDeatils = projects?.find(pro => pro._id === getId);
    console.log(projects);
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
                            <p><span className='fw-bold'>Project Title:</span> {getProjectsDeatils?.projectName}</p>
                            <p><span className='fw-bold'>Client Name: </span>{getProjectsDeatils?.name}</p>

                            <p><span className='fw-bold'>Starting Date: </span>{getProjectsDeatils?.startDate}</p>
                            <p><span className='fw-bold'>Ending Date:</span> {getProjectsDeatils?.endDate}</p>
                            <p><span className='fw-bold'> Status:</span> {getProjectsDeatils?.status}</p>
                            <p><span className='fw-bold'> Budget:</span> {getProjectsDeatils?.budget}</p>

                            <div className='text-start my-2'>
                                <p className='fw-bold' >Short Description:</p>
                                <p className='text-labelclr'>{getProjectsDeatils?.blogShortDesc}</p>
                            </div>
                            <div className='text-start'>
                                <p className='fw-bold'>Description:</p>
                                <p className='text-labelclr'>{getProjectsDeatils?.blogDesc}</p>
                            </div>

                            <p><span className='fw-bold'>Documents:</span> <a className='text-blue cursor-pointer' href={`${getProjectsDeatils?.doc}`} target="_blank" rel="noopener noreferrer">{getProjectsDeatils?.doc}</a> </p>


                        </div>

                    </Col>


                    <Col md={5} sm={12} >
                        <img src={getProjectsDeatils?.blogImg} alt="" srcset="" style={{ width: "100%" }} />
                    </Col>
                </Row>
            </div>
        </>
    )
}


