import React from "react";
import "./Provide.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Container, Row, Col } from "react-bootstrap";
import "react-tabs/style/react-tabs.css";
import ServiceBtn from "./serviceBtn/ServiceBtn";
import { baseUrl } from "../../hooks/url";
import { useQuery } from "react-query";
import Loading from "../../hooks/Loading";
import Skeleton from "react-loading-skeleton";
import { useCollection } from '../../context';

function Provide() {
  const { services, servicesLoading } = useCollection();
  if (servicesLoading) {
    return <div class="d-flex justify-content-center">
      <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  };

  if (!servicesLoading && services.length === 0) {
    return <p>No Service Avaiable</p>
  };


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
              {services?.data?.map(servceTab => <Tab>{servceTab?.name}</Tab>)}
            </TabList>

            <div className="tabPanel_gap">
              {
                services?.map(servceContent => <TabPanel>
                  <Row>
                    <Col md={7} sm={12}>
                      <div className="service_poster">
                        <img src={`${baseUrl}/${servceContent?.cover}`} alt={servceContent?.name} />
                      </div>
                    </Col>

                    <Col md={5} sm={12}>
                      <div className="service_content text-start">
                        <div className='service-text' dangerouslySetInnerHTML={{ __html: servceContent?.description }} />

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
