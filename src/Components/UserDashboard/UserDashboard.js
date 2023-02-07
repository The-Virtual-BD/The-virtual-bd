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
import { BsCheckCircleFill } from 'react-icons/bs';
import useToken from '../../hooks/useToken';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../hooks/url';
import { BiLogOutCircle } from 'react-icons/bi';
import { AiOutlineLogout } from 'react-icons/ai';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import useUser from '../../hooks/useUser';
import moment from 'moment/moment';


const UserDashboard = () => {
  const navigate=useNavigate()
  //Blogger Auth
  const [isBlogger, setIsBlogger] = useState(false);

  //Get Token & User from Hooks
  const [token]=useToken();
  const[user]=useUser();
  const{id,first_name,last_name, email,birth_date,nationality,phone,profession,bio}=user;

  const birthDate=moment(birth_date).format('DD MMM YYYY')



  

  return (
    <div className="user-dashboard-container ">
      <Container >
        <Tabs>

          <div className="bg-white px-5 py-3  mt-sm-3 mt-5 rounded ">
            <div className='d-flex  align-items-center   '>
              <img src={userImg} alt='user img' />
              <div className='d-flex flex-column  ms-3'>

                <h5 className=' d-flex align-items-center justify-space-between gap-2 mb-0'><span className='fw-bolder'>{`${first_name} ${last_name}`}</span> <BsCheckCircleFill className='blue-clr'/></h5>
                <p className='mb-0'>{profession}</p>
                
              </div>
            </div>
          </div>

          <div>
            <TabList className="text-start bg-white pb-2">
              <Tab>My Profile</Tab>
              <Tab>Settings</Tab>
              <Tab>Subscription</Tab>
              <Tab>Projects</Tab>
              <Tab>{isBlogger ? "Blog" : "Blogger"}  </Tab>
             
              
            </TabList>
          </div>



          <div className="tabPanel_gap mb-5 mt-5">
            <TabPanel>
              <Row >
                <Col lg={7} sm={12} >
                  <div className="bg-white p-sm-5 p-3 rounded  mb-3">
                    <h3 className='fw-bold user-dashboard-font mb-3'>About Me</h3>

                    {
                      bio? {bio}: <p>Please Write Your Bio....</p>
                    }

                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                  </div>

                </Col>

                <Col lg={5} sm={12}>
                  <div className="bg-white  p-sm-5 p-3 rounded user-dashboard-font">
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
                        <p className='mb-1'>{email}</p>
                        <p className='mb-1'>{profession}</p>
                        <p className='mb-1'>{phone}</p>
                        <p className='mb-1'>{birthDate}</p>
                        <p className='mb-1'>{nationality}</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </TabPanel>

            <TabPanel>
              <Settings user={user} />
            </TabPanel>

            <TabPanel>
              <Subscription />
            </TabPanel>

            <TabPanel>
              <Projects />
            </TabPanel>

            <TabPanel>
              <Blogger isBlogger={isBlogger} />
            </TabPanel>

          </div>
        </Tabs>
      </Container>
    </div>
  );
};

export default UserDashboard;