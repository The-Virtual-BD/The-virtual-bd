import React from "react";
import "./Faq.css";
import { Tabs, Tab, Container, Col, Row, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

function Faq() {
  return (
    <>
      <Container>
        <div className="provide_top ">
          <p>Questions</p>
          <h2>Frequently Ask Questions</h2>
        </div>
        <div className="provide_tabs">
          <Tabs
            defaultActiveKey="web"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="web" title="Web Design & Development">
              <div className="provide_content">
                <Row>
                  <Col md={6}>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header className="accordion_gap">
                        What services does The Virtual BD offer for web design and development?
                        </Accordion.Header>
                        <Accordion.Body>
                        The Virtual BD offers a range of web design and development services to help clients create and maintain their website. These services may include website design, website development, e-commerce solutions, mobile responsive design, content management systems, website maintenance, and search engine optimization (SEO). The Virtual BD's team of experts will work closely with clients to understand their needs and goals, and provide personalized solutions to help them achieve digital success and measurable results.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          How do you determine the cost of a web design project?
                        </Accordion.Header>
                        <Accordion.Body>
                        The cost of a web design project is determined by several factors including the scope of the project, the complexity of design and functionality requirements, the number of pages and features needed, the use of third-party integrations or tools, and the expertise and experience of the web design team. Other factors such as the timeline for delivery and the level of customization can also impact the cost. A reliable web design company like The Virtual BD would provide an accurate estimate after considering all these factors and would communicate openly about the cost and timeline for delivery.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          How long does it take to design and develop a website?
                        </Accordion.Header>
                        <Accordion.Body>
                        The timeline for designing and developing a website can vary based on the size and complexity of the project, as well as the client's specific needs and requirements. On average, a basic website can take 4-6 weeks to design and develop, while a more complex, custom website can take several months. It is important to have a clear project scope and timeline agreed upon between the client and The Virtual BD in order to ensure a smooth and efficient process.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          What is the process for designing and developing a website with The Virtual BD?
                        </Accordion.Header>
                        <Accordion.Body>
                         <p>The process for designing and developing a website with The Virtual BD typically involves the following steps:</p>
                         <ul className="faqs-steps">
                          <li><span className="fw-bold">Consultation:</span>   Our team will meet with you to understand your goals, requirements, and preferences for your website.</li>
                          <li><span className="fw-bold"> Requirements gathering and analysis: </span> Based on the consultation, our team will gather and analyze the requirements for your website.</li>
                          <li><span className="fw-bold"> Design Concept:</span>  Our designers will create a design concept that meets your requirements, goals and preferences.</li>
                          <li><span className="fw-bold"> Development: </span> Our developers will build the website using the design concept, ensuring that it is functional and meets the required standards.</li>

                          <li> <span className="fw-bold">Testing and Quality Assurance:</span>  Our team will thoroughly test the website to ensure that it is functioning properly and is free of any bugs or errors.</li>

                          <li><span className="fw-bold">Deployment: </span> Once the website has been fully tested and approved, it will be deployed and made live for the public to access.</li>
                         </ul>
                         <p>Ongoing Maintenance and Support: Our team will provide ongoing maintenance and support services to ensure that your website remains up-to-date and secure.</p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                  <Col md={6}>
                    <div className="faq_content">
                      <p>
                        Bringing your ideas to live, website designs is our
                        forte. We carve perfect designs to build creative
                        websites that engage users on both desktop & mobile
                        devices with its ultra modern responsive UI.
                      </p>
                      <div className="faq_button">
                        <Link to="/">Get Started</Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>


            <Tab eventKey="android " title="Android Application Development">
              <div className="provide_content">
                <Row>
                  <Col md={6}>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>

                  <Col md={6}>
                    <div className="faq_content">
                      <p>
                        Bringing your ideas to live, website designs is our
                        forte. We carve perfect designs to build creative
                        websites that engage users on both desktop & mobile
                        devices with its ultra modern responsive UI.
                      </p>
                      <div className="faq_button">
                        <Link to="/">Get Started</Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>


            <Tab eventKey="graphic" title="UI & Graphic Design Service">
              <div className="provide_content">
                <Row>
                  <Col md={6}>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>

                  <Col md={6}>
                    <div className="faq_content">
                      <p>
                        Bringing your ideas to live, website designs is our
                        forte. We carve perfect designs to build creative
                        websites that engage users on both desktop & mobile
                        devices with its ultra modern responsive UI.
                      </p>
                      <div className="faq_button">
                        <Link to="/">Get Started</Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>


            <Tab eventKey="marketing" title="Digital Marketing Service">
              <div className="provide_content">
                <Row>
                  <Col md={6}>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>

                  <Col md={6}>
                    <div className="faq_content">
                      <p>
                        Bringing your ideas to live, website designs is our
                        forte. We carve perfect designs to build creative
                        websites that engage users on both desktop & mobile
                        devices with its ultra modern responsive UI.
                      </p>
                      <div className="faq_button">
                        <Link to="/">Get Started</Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>

              
          </Tabs>
        </div>
      </Container>
    </>
  );
}

export default Faq;
