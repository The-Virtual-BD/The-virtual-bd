import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const [projects, setProjects] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    const getProjectsDeatils = projects?.find(blog => blog._id === id);
    console.log(getProjectsDeatils);
    return (
        <Container>
            <div className='bg-white  my-2 rounded'>
                <div>
                    <h2 className='text-2xl fw-bold text-start my-3 px-4'>View Project</h2>
                    <hr className=' text-bgclr' />
                </div>

                <Row >
                    <Col md={7} sm={12} >
                        <div className='d-flex flex-column align-items-start gap-1'>
                            <h3><span className='fw-bold'>Project Title:</span> {getProjectsDeatils?.projectName}</h3>
                            <h3><span className='fw-bold'>Client Name: </span>{getProjectsDeatils?.name}</h3>

                            <p><span className='fw-bold'>Starting Date: </span>{getProjectsDeatils?.startDate}</p>
                            <p><span className='fw-bold'>Ending Date:</span> {getProjectsDeatils?.endDate}</p>
                            <p><span className='fw-bold'> Status:</span> {getProjectsDeatils?.status}</p>
                            <p><span className='fw-bold'> Budget:</span> {getProjectsDeatils?.budget}</p>

                            <div className='text-start my-3'>
                                <h3 className='fw-bold' >Short Description:</h3>
                                <p className='text-labelclr'>{getProjectsDeatils?.blogShortDesc}</p>
                            </div>
                            <div className='text-start'>
                                <h3 className='fw-bold'>Description:</h3>
                                <p className='text-labelclr'>{getProjectsDeatils?.blogDesc}</p>
                            </div>

                            <p><span className='fw-bold'>Documents:</span> <a className='text-blue cursor-pointer' href={`${getProjectsDeatils?.doc}`} target="_blank" rel="noopener noreferrer">{getProjectsDeatils?.doc}</a> </p>


                        </div>

                    </Col>


                    <Col md={5} sm={12} >
                            <img src={getProjectsDeatils?.blogImg} alt="" srcset="" style={{ height: "400px" }} />
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default ProjectDetails;