import React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// import userImg from '../../Images/user.png';
import './UserDashboard.css';
import Settings from './Settings';
import Subscription from './Subscription';
import Blogger from './Blogger';
import Projects from './Projects';
import { BsCheckCircleFill } from 'react-icons/bs';
import useToken from '../../hooks/useToken';
import { useNavigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import moment from 'moment/moment';
import image1 from '../../Images/blank_user.png';


const UserDashboard = () => {
  const navigate = useNavigate();
  const[loading,setLoading]=useState(false);

  //Blogger Auth
  const [isBlogger, setIsBlogger] = useState(true);

  //Get Token & User from Hooks
  const [token] = useToken();
  const [user,setUser] = useUser();
  console.log(user);

  const { id, first_name, last_name, email, birth_date, nationality, phone, profession, bio } = user;
  
  const birthDate = moment(birth_date).format('DD MMM YYYY')





  return (
    <div className="user-dashboard-container ">
      <Container >
        <Tabs>

          <div className="bg-white px-5 py-3  mt-sm-3 mt-5 rounded ">
            <div className='d-flex  align-items-center   '>
              <img src={image1} alt='user img' style={{ width: "100px", height: "100px", borderRadius: "100%" }} />
              <div className='d-flex flex-column  ms-3'>

                <h5 className=' d-flex align-items-center justify-space-between gap-2 mb-0'><span className='fw-bolder'>{`${first_name} ${last_name}`}</span> <BsCheckCircleFill className='blue-clr' /></h5>
                <p className='mb-0'>{profession}</p>

              </div>
            </div>
          </div>

          <div>
            <TabList className="text-start bg-white pb-2">
              <Tab>Subscription</Tab>
              <Tab>Projects</Tab>
              <Tab>{isBlogger ? "Blog" : "Blogger"}  </Tab>
              <Tab>My Profile</Tab>
              <Tab>Settings</Tab>


            </TabList>
          </div>



          <div className="tabPanel_gap mb-5 mt-5">
           

            <TabPanel>
              <Subscription loading={loading} setLoading={setLoading} />
            </TabPanel>

            <TabPanel>
              <Projects loading={loading} setLoading={setLoading} />
            </TabPanel>

            <TabPanel>
              <Blogger isBlogger={isBlogger} />
            </TabPanel>

            <TabPanel>
              <Row >
                <Col lg={7} sm={12} >
                  <div className="bg-white p-sm-5 p-3 rounded  mb-3">
                    <h3 className='fw-bold user-dashboard-font mb-3'>About Me</h3>
                    {
                      bio ? <p>{bio}</p> : <p>Please Write Your Bio....</p>
                    }
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
              <Settings user={user} setUser={setUser} />
            </TabPanel>

          </div>
        </Tabs>
      </Container>
    </div>
  );
};

export default UserDashboard;