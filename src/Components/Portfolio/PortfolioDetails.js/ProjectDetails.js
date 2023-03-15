import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../../hooks/url';
import CareerHero from '../../Career/CareerHero/CareerHero';
import Footer from '../../Footer/Footer';
import Menu from '../../Header/Menu';
import TopHeader from '../../TopHeader/TopHeader';

const ProjectDetails = () => {
    const{id}=useParams();
    const[project,setProject]=useState({})

    // Get Single Blog
    useEffect(() => {
        const projUrl=`${baseUrl}/api/projects/show/${id}`;
        fetch(projUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                setProject(data?.data)
            })
    }, [id]);
    return (
        <div>
            <TopHeader />
            <Menu />
            <CareerHero>Project Details</CareerHero>
            <div className='my-5'>
            <Container>
                <div>
                    <h3 className='fw-bold mb-0'>Project Title: {project?.name}</h3>
                    <p className=' mb-3'>Service Name: {project?.service?.name}</p>

                    <div className='project_img'>
                       <img src={`${baseUrl}/${project?.cover}`} alt={project?.name} srcset="" />
                    </div>

                    <p className=' mt-2 mb-0'><span className='fw-bold '>Client Name:</span> {project?.client_name}</p>
                    <p className=' my-0'><span className='fw-bold '>Client Type:</span> {project?.client_type}</p>
                    <p className=' my-0'><span className='fw-bold '>Client Origin:</span> {project?.client_origin}</p>

                    <p className=' my-3'><span className='fw-bold mb-4'>project Short Description:</span> {project?.short_description}</p>

                    <p className=' my-3'><span className='fw-bold mb-4'>project Description:</span> {project?.description}</p>
                </div>

                <div>
                    <p className=' my-3'>
                        <span className='fw-bold mb-4 me-2'>Video:</span> 
                        <a href={`${project?.video}`} target="_blank" rel="noopener noreferrer">Watch Video</a>
                    </p>
                    <Row >
                        {
                            project?.image_1 &&  <Col md={4} sm={12} >
                                <img src={`${baseUrl}/${project?.image_1}`} alt="" srcset="" />
                            </Col>
                        }
                        {
                            project?.image_2 &&  <Col md={4} sm={12} >
                                <img src={`${baseUrl}/${project?.image_2}`} alt="" srcset="" />
                            </Col>
                        }
                        {
                            project?.image_3 &&  <Col md={4} sm={12} >
                                <img src={`${baseUrl}/${project?.image_3}`} alt="" srcset="" />
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