import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { baseUrl } from '../../../hooks/url';
import Footer from '../../Footer/Footer';
import Menu from '../../Header/Menu';
import TopHeader from '../../TopHeader/TopHeader';
import CareerHero from '../CareerHero/CareerHero';

const CarieerDetails = () => {
    const{id}=useParams();
    const [job, setJob] = useState([]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [expected_salary, setExpected_salary] = useState(0);
    const [cv, setCv] = useState(null);


    useEffect(()=>{
        window.scrollTo(0,0)
      },[]);
    

    //Get Carieer
    useEffect(() => {
        const perUrl = `${baseUrl}/api/vaccancies/${id}`;
        fetch(perUrl, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setJob(data.data);
            })
    }, []);

    //handle ContactForm
  const handleApplicationForm = async(e) =>{
    e.preventDefault();
    

    const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('vaccancy_id', id);
        formData.append('expected_salary', expected_salary);
        formData.append('cv',cv, cv.name);

        // console.log(formData)
    
        const url = `${baseUrl}/api/jobapplications/store`;
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });
    
        const result = await response.json();
    
        if (result.error) {
            console.log(result.error);
            toast.error("Application Failed");
        } else {
            console.log(result);
            e.target.reset();
            toast.success(result.message);
        }

  } ;


console.log(job)
    return (
       <>
        <TopHeader />
        <Menu />
        <CareerHero>Job Details</CareerHero>
       
        <div className='my-5'>
            <Container>
                <div>
                    <h4 className='fw-bold mb-3'>Designation: {job?.designation}</h4>

                    <p className=' my-0'><span className='fw-bold '>Job Type:</span> {job?.type}</p>
                    <p className=' my-0'><span className='fw-bold '>Skills:</span> {job?.skills}</p>
                    <p className=' mt-0'><span className='fw-bold'>Salary Range:</span> {job?.salary_range}</p>
                    <p className=' my-0'><span className='fw-bold mb-4'>Job Description:</span></p>
                    <div  dangerouslySetInnerHTML={{ __html: job?.description }} />
                </div>


                <div>
                <Row className='mt-5'>
                    <Col md={12} sm={12}>
                        <div className="bg-white  rounded ">
                        <h3 className=' px-3 fw-bold text-center mb-3'>Application Form</h3>

                            <form className='row form-container  mb-3' onSubmit={handleApplicationForm} >

                                <div className="col-12 col-md-6 mb-3">
                                    <label for="subject" className="form-label fw-bold">Name</label>
                                    <input type="text" className="form-control" id="subject"  required placeholder='Name *' onChange={e=>setName(e.target.value)} />
                                </div>

                                <div className="col-12 col-md-6 mb-3">
                                    <label for="subject" className="form-label fw-bold">Email</label>
                                    <input type="email" className="form-control" id="subject" required placeholder='Email *' onChange={e=>setEmail(e.target.value)} />
                                </div>

                                <div className="col-12 col-md-6 mb-3">
                                    <label for="subject" className="form-label fw-bold">Phone</label>
                                    <input type="tel" className="form-control" id="subject" required placeholder='Phone *' onChange={e=>setPhone(e.target.value)} />
                                </div>

                                <div className="col-12 col-md-6 mb-3">
                                    <label for="subject" className="form-label fw-bold">Expected Salary</label>
                                    <input type="number" className="form-control" id="subject" placeholder='Expected Salary' onChange={e=>setExpected_salary(e.target.value)} />
                                </div>

                                <div className="col-12 mb-3 ">
                                    <label for="doc" className="form-label fw-bold">CV</label>
                                    <input type="file" className="form-control " id="doc" required onChange={e=>setCv(e.target.files[0])}  />
                                    <p><small>* Please add Doc Or Pdf file only.</small></p>
                                </div>

                                <div className="col-12 text-center ">
                                    <button className='main-btn' type="submit">Apply</button>
                                </div>

                            </form>
                        </div>
                    </Col>


           
                </Row>
                </div>
            </Container>
        </div>
        <Footer />
       </>
    );
};

export default CarieerDetails;