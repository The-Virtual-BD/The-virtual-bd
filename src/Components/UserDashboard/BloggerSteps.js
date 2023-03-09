import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './BloggerSteps.css'

const BloggerSteps = () => {
    return (
        <div>

             <section>
                  <h4 className='text-center mb-5'>Your Application Tracking</h4>
                    <div class="col-rt-12 all-steps">
                        
                        <div class="Scriptcontent">
                                        
                            <div class="step">
                                <div>
                                    <div class="circle"><i class="fa fa-check"></i></div>
                                </div>
                                <div>
                                    <div class="title">First Step</div>
                                    <div class="caption">Application sent</div>
                                </div>
                            </div>

                            <div class="step step-active">
                                    <div>
                                        <div class="circle">2</div>
                                    </div>
                                    <div>
                                        <div class="title">Second Step</div>
                                        <div class="caption">Application in review</div>
                                    </div>
                            </div>
                            
                                            
                            <div class="step">
                                <div>
                                    <div class="circle">3</div>
                                </div>
                                <div>
                                    <div class="title">Finish</div>
                                    <div class="caption">Application approved or reject</div>
                                </div>
                            </div>
                                        
                                    
                        </div>
                    </div>
            </section>














           {/*  <div className='mb-5'>
                <h4 className='text-center '>Your Application Tracking</h4>
            </div>
            <div class="stepper-wrapper ">
                <div class="stepper-item completed">
                    <div class="step-counter">1</div>
                    <div class="step-name">Application sent</div>
                </div>
                <div class="stepper-item completed">
                    <div class="step-counter">2</div>
                    <div class="step-name">Application in review</div>
                </div>
                <div class="stepper-item">
                    <div class="step-counter">3</div>
                    <div class="step-name">Application approved or reject</div>
                </div>
            </div> */}


                {/* <div class="wrapper">
                <ul class="StepProgress">
                <li class="StepProgress-item is-done"><strong>Post a contest</strong></li>
               
                <li class="StepProgress-item current"><strong>Post a contest</strong></li>
                <li class="StepProgress-item"><strong>Provide feedback</strong></li>
                </ul>
                </div> */}



        </div>
    );
};

export default BloggerSteps;