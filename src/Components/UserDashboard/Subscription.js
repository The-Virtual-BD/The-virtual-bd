import React from 'react';
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import BlogCard from './BlogCard';
import './UserDashboard.css';

const Subscription = () => {
    //Subscription Form
    const [services, setServices] = useState('');
    const [subject, setSubject] = useState('');
    const [desc, setDesc] = useState('');
    const [schedule, setSchedule] = useState('');
    const [doc, setDoc] = useState([]);

    //handle Subcription
    const handleSubcription = e => {
        e.preventDefault();
        const subcriptions = { services, subject, desc, doc, schedule };

        console.log(subcriptions);
        e.target.reset();
        toast.success("Subcriptions Added Successfully");
    };

    return (
        <Row>
            <Col md={9} sm={12}>
                <div className="bg-white  p-sm-4 p-2 mb-sm-3 mb-5  rounded ">

                    <form className='row form-container p-3 mb-3' onSubmit={handleSubcription}>

                        <div class="col-12 mb-3">
                            <label for="services" class="form-label fw-bold">Services</label>
                            <select onChange={(e) => setServices(e.target.value)} class="form-control custom-select" id="services" aria-label="form-select-lg example">
                                <option selected disabled >Select Service  </option>
                                <option value="1">Two</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>


                        <div class="col-12 mb-3">
                            <label for="subject" class="form-label fw-bold">Subject</label>
                            <input type="text" class="form-control" id="subject" onChange={(e) => setSubject(e.target.value)} />
                        </div>

                        <div class="mb-3 col-12">
                            <label for="desc" class="form-label fw-bold">Description</label>
                            <textarea class="form-control" id="desc" rows="3" onChange={(e) => setDesc(e.target.value)} value={desc}></textarea>
                        </div>



                        <div class="col-12 mb-3">
                            <label for="schedule" class="form-label fw-bold">Metting Schedule</label>
                            <input type="datetime-local" class="form-control" id="schedule" onChange={(e) => setSchedule(e.target.value)} />
                        </div>

                        <div class="col-12 mb-3 ">
                            <label for="doc" class="form-label fw-bold">Documents</label>
                            <input type="file" class="form-control  " id="doc" onChange={(e) => setDoc(e.target.value)} />


                        </div>

                        <div class="col-12 text-center ">
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