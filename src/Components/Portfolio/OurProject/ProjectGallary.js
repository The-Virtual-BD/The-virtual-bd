import React, { useEffect, useState } from "react";
import "./ProjectGallary.css";
import { Col, Container, Row } from "react-bootstrap";
import galaryImg from "./ProjectGallaryData";
import { baseUrl } from "../../../hooks/url";
import { useNavigate } from "react-router-dom";
import Loading from "../../../hooks/Loading";

function ProjectGallary() {
  const navigate = useNavigate();
  const [projects,setProjects]=useState([]);

  const [loading, setLoading] = useState(false);
  const allProjects=[...projects].reverse();

  const [items, setItems] = useState(galaryImg);

  const filterItem = (catItem) => {
    const updatedItem = galaryImg.filter((cureEle) => {
      return cureEle.category === catItem;
    });
    setItems(updatedItem);
  };


   //Get Projects
   useEffect(() => {
    const perUrl = `${baseUrl}/api/projects/activeprojects`;
    // setLoading(true);
    fetch(perUrl, {
      method: "GET",
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.data);
        // setLoading(false);
        setProjects(data.data);
      })
  }, []);


  //Handle View job
  const handleViewProject = id => {
    navigate(`/portfolio/${id}`)
  };

  /* if( loading){
    return <Loading />
  }; */


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
            <button className="btn_gap" onClick={() => filterItem("web")}>
            Web Design & Development
            </button>

            <button className="btn_gap"  onClick={() => filterItem("GraphicDesign")}>
              Android App Development
            </button>

            <button className="btn_gap"  onClick={() => filterItem("UI/UXDesign")}>
              Graphic & UI/UX Design
            </button>

            
            <button  className="btn_gap"  onClick={() => filterItem("DigitalMarketing")}>
               Digital Marketing
            </button>
            
            <button className="btn_gap" onClick={() => filterItem("Partners")}>
             Data Analysis
            </button>

            <button className="btn_gap" onClick={() => filterItem("Partners")}>
             Cyber Security
            </button>

            <button className="btn_gap" onClick={() => setItems(galaryImg)}>
              All
            </button>
          </div>

          <Row>
            {allProjects?.map((data) => {
              const { id, name, client_name, service, cover} = data;
                
              return (
                <Col md={4} sm={12} key={id}>
                  <div className="glarry_img">
                    <img src={`${baseUrl}/${cover}`} alt=""  />
                    <div className="project_details">
                      <div className="project_info" onClick={()=>handleViewProject(id)}>
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

          <div className="loadMore">
            <button>Load More</button>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ProjectGallary;
