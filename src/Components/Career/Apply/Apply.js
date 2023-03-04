import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import apply from "./ApplyData";
import "./Apply.css";
import { ExternalLink } from "react-external-link";
import { baseUrl } from "../../../hooks/url";
import { useNavigate } from "react-router-dom";

function Apply() {
  const [jobs, setJobs] = useState([]);
  const navigate=useNavigate();

   //Get Carieer
   useEffect(() => {
    const perUrl = `${baseUrl}/api/vaccancies/activevaccancies`;
    fetch(perUrl, {
        method: "GET",
        headers: {
            'content-type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setJobs(data.data);
        })
}, []);

//Handle View job

const handleViewJob=id=>{
  navigate(`/career/${id}`)
};

if(!jobs){
  return(<p>Loading....</p>)
}

  return (
    <>
      <section className="apply_area">
        <Container>
          <div className="apply_text">
            <p>Career Plan</p>
            <h2>
              Become a part of our big family <br />
              to inspire and get inspired by
              <br /> professional experts.
            </h2>
          </div>




          {jobs.map((data) => (
            <div className="get_job">
              <Row>
                <Col md={3} sm={12}>
                  <div className="job_expertis">
                    <small>{data?.skills}</small>
                  </div>

                  <div className="job_name">
                    <h2>
                      {data?.designation} <span>/ <small>{data?.type}</small></span>
                    </h2>
                  </div>

                  <div className="selary">
                    <p>Expected Salary - {data?.salary_range}</p>
                  </div>
                </Col>
                <Col md={6} sm={12}>
                  <div className="job_text">
                    <p>{data?.description.slice(0,300)}</p>

                  </div>
                </Col>
                <Col md={3} sm={12}>
                  <div className="job_apply">
                    <button onClick={()=>handleViewJob(data?.id)}>
                      Apply
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}

export default Apply;
