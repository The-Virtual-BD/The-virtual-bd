import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import userImg from '../../Images/user.png';
import './UserDashboard.css';
import Settings from './Settings';
import Subscription from './Subscription';
import Blogger from './Blogger';
import Projects from './Projects';


const UserDashboard = () => {

  return (
    <div className="user-dashboard-container ">
      <Container >
        <Tabs>

          <div className="bg-white px-5 py-3   rounded">
            <div className='d-flex  align-items-center   '>
              <img src={userImg} alt='user img' />
              <div className='d-flex flex-column  ms-3'>
                <h3 className='fw-bold'>Ishtiuq Ahmed Chowdhury</h3>
                <p>User</p>
              </div>
            </div>
          </div>

          <TabList className="text-start bg-white pb-2">
            <Tab>My Profile</Tab>
            <Tab>Settings</Tab>
            <Tab>Subscription</Tab>
            <Tab>Projects</Tab>
            <Tab>Blog</Tab>
          </TabList>



          <div className="tabPanel_gap mb-5 mt-5">
            <TabPanel>
              <Row >
                <Col md={7} sm={12} >
                  <div className="bg-white p-5 rounded  ">
                    <h3 className='fw-bold user-dashboard-font mb-3'>About Me</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>

                </Col>

                <Col md={5} sm={12}>
                  <div className="bg-white p-5 rounded user-dashboard-font">
                    <h3 className='fw-bold mb-4'>Contact Information</h3>

                    <div className='d-flex align-items-center justify-space-between gap-3 '>
                      <div>
                        <p className='mb-1 fw-bold'>Email:</p>
                        <p className='mb-1 fw-bold'>Profession:</p>
                        <p className='mb-1 fw-bold'>Phone:</p>
                        <p className='mb-1 fw-bold'>Date of Birth:</p>
                        <p className='mb-1 fw-bold'>Nationality:</p>
                      </div>
                      <div>
                        <p className='mb-1'>ahmedishtiuq@gmail.com</p>
                        <p className='mb-1'>Graphic & UI/UX Designer</p>
                        <p className='mb-1'>+880 1674 668 544</p>
                        <p className='mb-1'>02.10.1990</p>
                        <p className='mb-1'>Bangladeshi</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </TabPanel>

            <TabPanel>
              <Settings />
            </TabPanel>

            <TabPanel>
              <Subscription />
            </TabPanel>

            <TabPanel>
              <Projects />
            </TabPanel>

            <TabPanel>
              <Blogger />
            </TabPanel>

          </div>
        </Tabs>
      </Container>
    </div>
  );
};

export default UserDashboard;