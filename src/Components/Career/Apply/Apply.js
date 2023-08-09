import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Apply.css";
import { useNavigate } from "react-router-dom";
import { useCollection } from "../../../context";

function Apply() {
  const navigate = useNavigate();
  const { carieer, carieerLoading } = useCollection();


  if (carieerLoading) {
    return <p>Loading...</p>
  };
  
  if (!carieerLoading && carieer.length === 0) {
    return <p>No Carieer Avaiable</p>
  };


  const recentJobs = [...carieer].reverse();

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

        </Container>
      </section>
    </>
  );
}

export default Apply;
