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
                  <Col md={12}>
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
                         <ul className="faqs-steps-in-line">
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

                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                        Do you provide ongoing website maintenance and support services?
                        </Accordion.Header>
                        <Accordion.Body>
                        Yes, The Virtual BD provides ongoing website maintenance and support services to ensure the smooth functioning and up-to-date features of the website.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="5">
                        <Accordion.Header>
                        Can you help with search engine optimization (SEO) for my website?
                        </Accordion.Header>
                        <Accordion.Body>
                        Yes, The Virtual BD offers search engine optimization (SEO) services to help improve the visibility and ranking of your website in search engine results pages. Our team can implement various techniques such as keyword research, on-page optimization, backlink building, and others to boost your website's SEO performance and attract more qualified traffic to your site.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="6">
                        <Accordion.Header>
                        What is your approach to mobile-responsive design for websites?
                        </Accordion.Header>
                        <Accordion.Body>
                        The Virtual BD takes a modern and proactive approach to mobile-responsive design, ensuring that all websites we develop are optimized for optimal viewing on any device. This includes considering the latest design trends and technologies, as well as taking into account the specific requirements of our clients, such as their target audience and the goals they want to achieve with their website. We use responsive design techniques to ensure that the website automatically adjusts to the screen size of the device being used, providing an optimal viewing experience for users regardless of whether they are accessing the site from a desktop, tablet, or mobile device.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="7">
                        <Accordion.Header>
                        Can you integrate e-commerce functionality into my website?
                        </Accordion.Header>
                        <Accordion.Body>
                        Yes, The Virtual BD can integrate e-commerce functionality into your website. Our team has experience in developing e-commerce websites and can provide a seamless solution for your online store needs. We will work with you to understand your requirements and create a customized e-commerce platform that fits your business goals and provides a positive user experience for your customers.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="8">
                        <Accordion.Header>
                        Do you offer custom web design services or do you use templates?
                        </Accordion.Header>
                        <Accordion.Body>
                        The Virtual BD offers both custom web design services and the use of templates, depending on the specific needs and preferences of the client. If a client wants a unique and customized website that reflects their brand, we offer custom web design services. However, if a client needs a website quickly and at a lower cost, we can also provide templates that can be easily customized to meet the client's specific requirements.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="9 ">
                        <Accordion.Header>
                        How do you ensure the security of my website and protect my data? 
                        </Accordion.Header>
                        <Accordion.Body>
                        The Virtual BD takes website security and data protection very seriously. We implement various measures to ensure the security of our clients' websites and protect their data. This includes regularly updating the software and platforms used to build websites, implementing secure connections (HTTPS), and utilizing firewalls and other security measures to prevent unauthorized access. We also follow industry-standard security practices for storing and handling sensitive data. Additionally, we encourage clients to regularly backup their websites and maintain secure passwords for their accounts.
                        </Accordion.Body>
                      </Accordion.Item>


                    </Accordion>
                  </Col>
                 {/*  <Col md={6}>
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
                  </Col> */}
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
