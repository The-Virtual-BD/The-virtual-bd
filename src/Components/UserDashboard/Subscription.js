import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import { baseUrl } from '../../hooks/url';
import useToken from '../../hooks/useToken';
import useUser from '../../hooks/useUser';
import BlogCard from './BlogCard';
import './UserDashboard.css';

const Subscription = () => {
    const [token]=useToken();
    const [user]=useUser();
    const{id}=user;
    // console.log(id);
    const[services,setServices]=useState([]);

    //Subscription Form
    const [service_id, setService_id] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    // const [scheduleT, setSchedule] = useState(new Date());
    const [schedule, setSchedule] = useState();
    const [attachment, setAttachment] = useState(null);

    // console.log(attachment?.file?.name);

     //Get Services
     useEffect(()=>{
        const sUrl = `${baseUrl}/api/services/activeservices`;
        fetch(sUrl, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                "Authorization": `Bearer ${token}`
            }})
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[token]);




    //handle Subcription Request 
    const handleSubcription = e => {
        e.preventDefault();

        /* const subcriptions = { service_id, subject,description, schedule,attachment};
        console.log(subcriptions);
 */

        const subcriptions = new FormData();
        subcriptions.append('service_id', service_id);
        subcriptions.append('subject', subject);
        subcriptions.append('description', description);
        subcriptions.append('schedule',schedule);
        subcriptions.append('attachment', attachment);

        //Send To Backend
        const url = `${baseUrl}/api/subscriptions/store/${id}`;
        fetch(url, {
            method: 'POST',
            headers: {
                // 'content-type': 'application/json',
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${token}`
            },
            // body: JSON.stringify(subcriptions)
            body:subcriptions
        })
            .then(res => res.json())
            .then(result => {

              if(result.error){
                console.log(result.error);
                toast.error("Subcriptions Add Failed");
              } else{
                console.log(result);
                e.target.reset();
                toast.success("Subcriptions Added Successfully");
              }
               
            })
    };


   


    // console.log(services?.data)



    return (
        <Row>
            <Col md={9} sm={12}>
                <div className="bg-white  p-sm-4 p-2 mb-sm-3 mb-5  rounded ">

                    <form className='row form-container p-3 mb-3' onSubmit={handleSubcription} enctype="multipart/form-data">

                        <div className="col-12 mb-3">
                            <label for="services" className="form-label fw-bold">Services</label>
                            <select onChange={(e) => setService_id(e.target.value)} className="form-control custom-select" id="services" aria-label="form-select-lg example" required>
                                <option selected disabled >Select Service </option>
                                {
                                    services?.data?.map(service=><option value={service.id}>{service.name}</option>)
                                }
                             
                            </select>
                        </div>


                        <div className="col-12 mb-3">
                            <label for="subject" className="form-label fw-bold">Subject</label>
                            <input type="text" className="form-control" id="subject" onChange={(e) => setSubject(e.target.value)} required />
                        </div>

                        <div className="mb-3 col-12">
                            <label for="desc" className="form-label fw-bold">Description</label>
                            <textarea className="form-control" id="desc" rows="3" onChange={(e) => setDescription(e.target.value)} required></textarea>
                        </div>

                        <div className="col-12 mb-3">
                            <label for="schedule" className="form-label fw-bold">Metting Schedule</label>
                            <input 
                                type="datetime-local" 
                                className="form-control" 
                                id="schedule" 
                                onChange={(e) => setSchedule(e.target.value)} required/>
                        </div>


                        <div className="col-12 mb-3 ">
                            <label for="doc" className="form-label fw-bold">Documents</label>
                            <input type="file" className="form-control " id="doc" onChange={(e) => setAttachment(e.target.files[0])} />
                        </div>

                        <div className="col-12 text-center ">
                            <button className='main-btn' type="submit">Submit</button>
                        </div>

                    </form>
                </div>
            </Col>


            <Col md={3} sm={12} >
                <BlogCard />
            </Col>
        </Row>
    );
};

export default Subscription;