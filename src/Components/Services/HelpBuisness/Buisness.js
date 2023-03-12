import React from "react";
import "./Buisness.css";
import { Container, Row, Col } from "react-bootstrap";

function Buisness() {
  return (
    <>
      <section className="buisness_area">
        <Container>
          <div className="buisness_content">
            <p>How We Work</p>
            <h2>How we help your business succeed</h2>
          </div>
          <Row>
            <Col md={3} className="content_gap">
              <div className="content_sl">
                <div className="number">
                  <h1>1</h1>
                </div>
              </div>
              <div className="discussion">
                <h3>1. Discussion</h3>
                <p>
                The project team and the client engage in a discussion to understand the client's requirements, business objectives, target audience, and other crucial aspects of the project.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="content_sl">
                <div className="number">
                  <h1>2</h1>
                </div>
              </div>
              <div className="discussion">
                <h3>2. Concepts & Initatives</h3>
                <p>
                The team creates a detailed plan that includes various concepts, initiatives, and strategies that will be implemented throughout the project.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="content_sl">
                <div className="number">
                  <h1>3</h1>
                </div>
              </div>
              <div className="discussion">
                <h3>3. Testing & Trying</h3>
                <p>
                The team tests and tries out different concepts, initiatives, and strategies that were identified in the previous phase. This is a critical step to ensure that the project meets the client's requirements.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="last_content">
                <div className="number">
                  <h1>4</h1>
                </div>
              </div>
              <div className="discussion">
                <h3>4. Execute & install</h3>
                <p>
                The team executes the plan created in the previous phase and installs the necessary tools and systems required for the project.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Buisness;
