import React from 'react';
import { Card } from 'react-bootstrap';
import card1 from "../../Images/cardImg-1.png";
import "./UserDashboard.css"

const BlogCard = () => {
    return (
        <>
         {/*  <div class="card blog-card">
                <img src={card1} class="card-img-top" alt="..." />
                <div class="card-body">
                    <div className='d-flex align-items-center justify-content-between mb-2'>
                        <h6 class="card-subtitle  text-danger fw-bolder fs-6">Programming Language?</h6>
                        <p ></p>
                    </div>

                    <h5 class="card-title fw-bold"></h5>
                    <p class="card-text">A programming language is a way for programmers (developers) to communicate with computers. Programming languages consist of a set of rules that allows string values</p>
                    

                    <h5 class=" fw-bold "><a href="#" className='blog-card'> Read More</a></h5>
                </div>
          </div> */}


          <Card  className="blog-card bg-white">
                <Card.Img variant="top" src={card1} alt="card" />
                 <Card.Body >
                    <span className='blog-catagory'>Laravel</span>
                    <Card.Title className='fw-bold my-2 '>What is a Programming Language?</Card.Title>
                    <Card.Text>A programming language is a way for programmers (developers) to communicate with computers. Programming languages consist of a set of rules that allows string values </Card.Text>

                    <p className='blog-author mb-0'>by IshtiuqAhmed</p>
                    <p className='text-primary fs-6'>September 4, 2022</p>
                 </Card.Body>
          </Card>


          



        </>
        
    );
};

export default BlogCard;