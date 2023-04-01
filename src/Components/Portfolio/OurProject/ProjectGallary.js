import React, { useEffect, useState } from "react";
import "./ProjectGallary.css";
import { Col, Container, Row } from "react-bootstrap";
import galaryImg from "./ProjectGallaryData";
import { baseUrl } from "../../../hooks/url";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useQuery } from "react-query";

function ProjectGallary() {
      const navigate = useNavigate();
      const [showProjects, setShowProjects] = useState(6);
       const [selectedTab, setSelectedTab] = useState('all');
      const [filteredProjects, setFilteredProjects] = useState([]);
      
      //Slide to Top
      useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

      //Get Jobs
      const { data:projects, isLoading, refetch } = useQuery('jobs', () => fetch(`${baseUrl}/api/projects/activeprojects`).then(res => res.json()));

     useEffect(() => {
       if(projects){
        setFilteredProjects([...projects?.data].reverse())
       }
     }, [projects  ])
     


      
      //12-web, 13-Graphic, 14-Android, 15-Digital, 16-Cyber, 18-Data Analysis, 



      const filterItem = (tab) => {
        setSelectedTab(tab);
    
        if (tab === 'all') {
          setFilteredProjects([...projects?.data].reverse());
        } else {
          const filtered = projects?.data?.filter((project) => project?.service?.id === tab);
          setFilteredProjects([...filtered].reverse());
        }
      };


        //Handle View job
        const handleViewProject = id => {
          navigate(`/portfolio/${id}`)
        };
  
        if(isLoading){
          return <Skeleton count={10} />
        };

        console.log(filteredProjects)
      




  return (
    <>
      <section className="gallary">
        <div className="galarry_text">
          <p>our ALl Project</p>
          <h2>Have a look at our work!</h2>
        </div>

        <Container>
          <div className="overLine">
            <hr />
          </div>

          <div className="galary_btn">
            <button className="btn_gap galary_btn_button" onClick={() => filterItem("all")}>
              All
            </button>

            <button className="btn_gap galary_btn_button" onClick={() => filterItem(12)}>
              Web Design & Development
            </button>

            <button className="btn_gap galary_btn_button" onClick={() => filterItem(14)}>
              Android App Development
            </button>

            <button className="btn_gap galary_btn_button" onClick={() => filterItem(13)}>
              Graphic & UI/UX Design
            </button>


            <button className="btn_gap galary_btn_button" onClick={() => filterItem(15)}>
              Digital Marketing
            </button>

            <button className="btn_gap galary_btn_button" onClick={() => filterItem(18)}>
              Data Analysis
            </button>

            <button className="btn_gap galary_btn_button" onClick={() => filterItem(16)}>
              Cyber Security
            </button>

            
          </div>

          <Row>
            {filteredProjects?.map((data) => {
              const { id, name, client_name, service, cover } = data;

              return (
                <Col md={4} sm={12} key={id}>
                  <div className="glarry_img">
                    <img src={`${baseUrl}/${cover}`} alt="" />

                    <div className="project_details">
                      <div className="project_info" onClick={() => handleViewProject(id)}>
                        <div className="project_text">
                          <h3> Project: {name}</h3>
                          <small>Client: {client_name}</small>
                          <p>Service: {service?.name}</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>

          {
            filteredProjects?.length >6 && <div className="loadMore">
              <button className='blog-btn' onClick={()=>setShowProjects(showProjects+5)}>Load More</button></div>
          }
        </Container>
      </section>
    </>
  );
}

export default ProjectGallary;
