import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import apply from "./ApplyData";
import "./Apply.css";
import { ExternalLink } from "react-external-link";
import { baseUrl } from "../../../hooks/url";
import { useNavigate } from "react-router-dom";
import Loading from "../../../hooks/Loading";
import { useQuery } from "react-query";
import Skeleton from "react-loading-skeleton";

function Apply() {
  const navigate = useNavigate();

  //Get Jobs
  const { data:jobs, isLoading, refetch } = useQuery('jobs', () => fetch(`${baseUrl}/api/vaccancies/activevaccancies`).then(res => res.json()));
  const recentJobs = jobs?.data ? [...(jobs.data)].reverse() : [];

  //Handle View job
  const handleViewJob = id => {
    navigate(`/career/${id}`)
  };

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

          {
            isLoading? <Skeleton count={10} />:
            <div>
              {
                recentJobs?.map((data) => (
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
                        <div dangerouslySetInnerHTML={{ __html: data?.description.slice(0, 300) }} />
  
                        </div>
                      </Col>
                      <Col md={3} sm={12}>
                        <div className="job_apply">
                          <button onClick={() => handleViewJob(data?.id)}>
                            Apply
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                )) 
              }
          </div>
          }
        </Container>

        {
          recentJobs.length===0 &&  <div className="d-flex align-items-center justify-content-center" style={{height:"200px"}}>
          <p className="text-center fw-bold" >No Job available</p>
     </div>
        }
       
      </section>
    </>
  );
}

export default Apply;
