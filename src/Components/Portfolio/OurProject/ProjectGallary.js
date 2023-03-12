import React, { useEffect, useState } from "react";
import "./ProjectGallary.css";
import { Col, Container, Row } from "react-bootstrap";
import galaryImg from "./ProjectGallaryData";
import { baseUrl } from "../../../hooks/url";
import { useNavigate } from "react-router-dom";

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
  const handleViewJob = id => {
    navigate(`/career/${id}`)
  };

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
            <button
              className="btn_gap"
              onClick={() => filterItem("GraphicDesign")}
            >
              Graphic Design
            </button>
            <button
              className="btn_gap"
              onClick={() => filterItem("UI/UXDesign")}
            >
              UI/UX Design
            </button>
            <button
              className="btn_gap"
              onClick={() => filterItem("DigitalMarketing")}
            >
              Digital Marketing
            </button>
            <button className="btn_gap" onClick={() => filterItem("Partners")}>
              Partners
            </button>
            <button className="btn_gap" onClick={() => setItems(galaryImg)}>
              All
            </button>
          </div>
          <Row>
            {items.map((data) => {
              const { id, projectNmae, frameWork, clint, category, img } = data;
              return (
                <Col md={4} sm={12} key={id}>
                  <div className="glarry_img">
                    <img src={img} alt="" />
                    <div className="project_details">
                      <div className="project_info">
                        <div className="project_text">
                          <h3>
                            Project: {projectNmae}
                          </h3>
                          <p>This web site created by {frameWork}</p>
                          <small>Client: {clint}</small>
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
