import FormData from 'form-data';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { baseUrl } from '../../hooks/url';
import useToken from '../../hooks/useToken';
import useUser from '../../hooks/useUser';
import BlogCard from './BlogCard';
import './UserDashboard.css';
import moment from 'moment';
import Skeleton from 'react-loading-skeleton';

const Subscription = ({loading,setLoading,blog,isLoading}) => {
    const [token] = useToken();
    const [user] = useUser();
    const { id } = user;
    const [services, setServices] = useState([]);
    const [cardPost, setCardPost] = useState([]);

    //Subscription Form
    const [service_id, setService_id] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [attachment, setAttachment] = useState(null);
    const [ schedule, setSchedule] = useState('');

    const [isSending,setIsSending]=useState(false);
   
   
   
   

  

    //Get Services
    useEffect(() => {
        const sUrl = `${baseUrl}/api/services/activeservices`;
        // setLoading(true);

        fetch(sUrl, {
            method: 'GET',
            headers: { 
                'content-type': 'application/json',
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // setLoading(false)
                setServices(data)
            })
    }, [token]);



    //Handle Subscription Form
    const handleSubscription = async (e) => {
        e.preventDefault();
        setIsSending(true)
      
        const formData = new FormData();
        formData.append('service_id', service_id);
        formData.append('subject', subject);
        formData.append('description', description);
        formData.append('schedule', schedule);
        formData.append('attachment', attachment, attachment.name);

        const url = `${baseUrl}/api/subscriptions/store`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: formData
        });
    
        const result = await response.json();
    
        if (result.error) {
            console.log(result.error);
            toast.error("Subscriptions Add Failed");
        } else {
            console.log(result);
            e.target.reset();
            toast.success("Your application for subscription is under review. We will communicate with you soon.");
        };
        setIsSending(false);
    };

    
    

    return (
        <Row>
            <Col md={9} sm={12}>
                <div className="bg-white  p-sm-4 p-2 mb-sm-3 mb-5  rounded ">
                <h4 className=' px-3 fw-bold'>Sent us your query !</h4>

                    <form className='row form-container p-3 mb-3' onSubmit={handleSubscription} >

                        <div className="col-12 mb-3">
                            <label for="services" className="form-label fw-bold">Services</label>
                            <select onChange={(e) => setService_id(e.target.value)} className="form-control custom-select" id="services" aria-label="form-select-lg example" required>
                                <option selected disabled >Select Service </option>
                                {
                                    services?.data?.map(service => <option value={service.id} key={service.id}>{service.name}</option>)
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
                                selected={schedule}
                                className="form-control"
                                type={'datetime-local'}
                                onChange={e=>setSchedule(e.target.value)} required/>
                        </div>

                        <div className="col-12 mb-3 ">
                            <label for="doc" className="form-label fw-bold">Documents</label>
                            <input type="file" className="form-control " id="doc" onChange={(e) => setAttachment(e.target.files[0])} required/>
                        </div>

                        <div className="col-12 text-center ">
                            <button className='main-btn' type="submit" disabled={isSending}>Submit</button>
                        </div>
                    </form>
                </div>
            </Col>


            <Col md={3} sm={12} >
                <BlogCard blog={blog} isLoading={isLoading}/>
            </Col>
        </Row>
    );
};

export default Subscription;