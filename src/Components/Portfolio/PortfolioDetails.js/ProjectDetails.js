import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../../hooks/url';
import CareerHero from '../../Career/CareerHero/CareerHero';
import Footer from '../../Footer/Footer';
import Menu from '../../Header/Menu';
import TopHeader from '../../TopHeader/TopHeader';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState({})

    // Get Single Blog
    useEffect(() => {
        const projUrl = `${baseUrl}/api/projects/show/${id}`;
        fetch(projUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                setProject(data?.data)
            })
    }, [id]);

    //Slide to Top
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    return (
        <div>
            <TopHeader />
            <Menu />
            <CareerHero>Project Details</CareerHero>
            <div className='my-5'>
                <Container>
                    <div>
                        <h3 className='fw-bold mb-0'>Project Title: {project?.name}</h3>
                        <p className='  my-0'><span className='fw-bold '>Service Name: </span> {project?.service?.name}</p>
                        <p className='  my-0'><span className='fw-bold '>Client Name:</span> {project?.client_name}</p>
                        <p className=' my-0'><span className='fw-bold '>Client Type:</span> {project?.client_type}</p>
                        <p className=' mb-3'><span className='fw-bold '>Client Origin:</span> {project?.client_origin}</p>

                        <div className='project_img'>
                            <img src={`${baseUrl}/${project?.cover}`} alt={project?.name} srcset="" />
                        </div>



                        <p className=' my-3'><span className='fw-bold mb-4'>Project Short Description:</span> {project?.short_description}</p>

                        <p className=' my-3'><span className='fw-bold mb-4'>Project Description:</span> {project?.description}</p>
                    </div>

                    <div>
                        { project?.video && 
                            <p className=' my-3'>
                            <span className='fw-bold mb-4 me-2'>Video:</span>
                            <iframe width="560" height="315" src={`${project?.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            {/* <a href={`${project?.video}`} target="_blank" rel="noopener noreferrer">Watch Video</a> */}
                        </p>
                        }
                        <Row >
                            {
                                project?.image_1 && <Col md={3} sm={12} >
                                    <div className='proj_details_img'>
                                        <img src={`${baseUrl}/${project?.image_1}`} alt="" srcset="" />
                                    </div>
                                </Col>

                            }
                            {
                                project?.image_2 && <Col md={3} sm={12} >
                                    <div className='proj_details_img'>
                                        <img src={`${baseUrl}/${project?.image_2}`} alt="" srcset="" />
                                    </div>
                                </Col>
                            }
                            {
                                project?.image_3 && <Col md={3} sm={12} >
                                    <div className='proj_details_img'>
                                        <img src={`${baseUrl}/${project?.image_3}`} alt="" srcset="" />
                                    </div>
                                </Col>
                            }

                        </Row>


                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectDetails;