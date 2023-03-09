import React, { useEffect, useState } from "react";
import "./Provide.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Container, Row, Col } from "react-bootstrap";
import web from "./ServiceTab/img/web-min.jpg";
import graphic from "./ServiceTab/img/Graphic-min.jpg";
import marketing from "./ServiceTab/img/marketing-min.jpg";
import dataAnalicis from "./ServiceTab/img/Data-analysis-min.jpg";
import cyber from "./ServiceTab/img/cyber-min.jpg";
import app from "./ServiceTab/img/app-min.jpg";
import "react-tabs/style/react-tabs.css";
import ServiceBtn from "./serviceBtn/ServiceBtn";
import { baseUrl } from "../../hooks/url";

function Provide() {
  const [services, setServices] = useState([]);
    
    useEffect(() => {
        const blogUrl=`${baseUrl}/api/services/activeservices`;
        fetch(blogUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data.data)
            })
    }, []);
  return (
    <>
      <div className="provide_service">
        <div className="provide_service_head">
          <p>Know More About Our Services</p>
          <h2>Services We Provide</h2>
        </div>

        <Container>
            <Tabs>
              <TabList>
                {
                  services.map(servceTab=><Tab>{servceTab?.name}</Tab>)
                }
                
               
              </TabList>
              
              <div className="tabPanel_gap">
                {
                  services.map(servceContent=> <TabPanel>
                    <Row>
                      <Col md={7} sm={12}>
                        <div className="service_poster">
                          <img src={`${baseUrl}/${servceContent?.cover}`} alt={servceContent?.name} />
                        </div>
                      </Col>

                      <Col md={5} sm={12}>
                        <div className="service_content text-start">
                          <div className='service-text' dangerouslySetInnerHTML={{ __html: servceContent?.description}} />
                          
                          <ServiceBtn />
                        </div>
                      </Col>
                    </Row>
                  </TabPanel>)
                }
               
  
              

              </div>
            </Tabs>
          </Container>
      </div>
    </>
  );
}

export default Provide;
