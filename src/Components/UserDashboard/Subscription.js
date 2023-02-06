import React from 'react';
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import BlogCard from './BlogCard';
import './UserDashboard.css';

const Subscription = () => {
    //Subscription Form
    const [services, setServices] = useState('');
    const [subject, setSubject] = useState('');
    const [desc, setDesc] = useState('');
    const [schedule, setSchedule] = useState(new Date());
    const [doc, setDoc] = useState([]);

    //handle Subcription
    const handleSubcription = e => {
        e.preventDefault();
        const date=new Date(schedule)
        const meeting_date=date.toLocaleString("en-US", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
          });

          
        const subcriptions = { services, subject, desc, doc, meeting_date};

        console.log(subcriptions);
        e.target.reset();
        toast.success("Subcriptions Added Successfully");
    };

    return (
        <Row>
            <Col md={9} sm={12}>
                <div className="bg-white  p-sm-4 p-2 mb-sm-3 mb-5  rounded ">

                    <form className='row form-container p-3 mb-3' onSubmit={handleSubcription}>

                        <div className="col-12 mb-3">
                            <label for="services" className="form-label fw-bold">Services</label>
                            <select onChange={(e) => setServices(e.target.value)} className="form-control custom-select" id="services" aria-label="form-select-lg example">
                                <option selected disabled >Select Service  </option>
                                <option value="1">Two</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>


                        <div className="col-12 mb-3">
                            <label for="subject" className="form-label fw-bold">Subject</label>
                            <input type="text" className="form-control" id="subject" onChange={(e) => setSubject(e.target.value)} />
                        </div>

                        <div className="mb-3 col-12">
                            <label for="desc" className="form-label fw-bold">Description</label>
                            <textarea className="form-control" id="desc" rows="3" onChange={(e) => setDesc(e.target.value)} value={desc}></textarea>
                        </div>



                        <div className="col-12 mb-3">
                            <label for="schedule" className="form-label fw-bold">Metting Schedule</label>
                            <input 
                                type="datetime-local" 
                                className="form-control" 
                                id="schedule" 
                                value={schedule}
                                onChange={(e) => setSchedule(e.target.value)} />
                        </div>


                        <div className="col-12 mb-3 ">
                            <label for="doc" className="form-label fw-bold">Documents</label>
                            <input type="file" className="form-control " id="doc" onChange={(e) => setDoc(e.target.value)} />
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