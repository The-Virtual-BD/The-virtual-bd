import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer';
import Menu from '../Header/Menu';
import TopHeader from '../TopHeader/TopHeader';
import './WordCounter.css';
import img1 from "../../Images/cardImg-1.png";

const WordCounter = () => {
    const [wordCount, setWordCount] = useState(0);
    const [charsCount,setCharsCount]=useState(0)

    //Get Count Number
    const countWords = (text) => {
        const charectar=text.length;
        setCharsCount(charectar);

        if (text.trim() === '') {
            setWordCount(0)
          }else{
            const words = text.trim().split(/\s+/);
            setWordCount(words.length);
          };
    };

    return (
       <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>The Virtual BD || Word Counter</title>
                <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <TopHeader />
        <Menu />
        <Container className='pt-3 pb-5'>
            <Row>
                <Col md={9} sm={12}>
                    <div className='col-12'>
                        <div className="mb-3 word-Counter-result ps-3 ">
                            <h3 className='fw-bold'>
                                <span>{wordCount} </span> {(wordCount) === 1 ?"word":"words" }
                                <span> {charsCount} {charsCount=== 1?"character":"characters"}</span> </h3>
                        </div>

                        <div className=" mb-1">
                            <textarea
                                className="form-control word-counter-textarea"
                                id="blogDesc"
                                rows="10"
                                required
                                placeholder='Start typing or copy & paste your document here....'
                                onChange={(e) => countWords(e.target.value)}
                             ></textarea>
                        </div>

                        <div className="mb-3 word-Counter-result ps-3">
                           <h4 className='fw-bold'> Total Usages of Our Sites: 100</h4>
                        </div>

                    </div>
                </Col>

                <Col md={3} sm={12}>
                    <div>
                        <div>
                            <img src={img1} alt="" srcset="" style={{height:"230px",width:"260px",marginTop:"20px"}} />
                        </div>

                        <div className='mt-3 details-container'>
                            <h4 className='text-center fw-bold'>Details</h4>
                            
                            <div className='count-details-item mb-0'>
                                <p className='fw-bold'>Words:</p>
                                <p className='bg-success  px-2 text-light rounded'>{wordCount}</p>
                            </div>
                            <div className='count-details-item my-0'>
                                <p className='fw-bold'>Characters:</p>
                                <p className='bg-success  px-2 text-light rounded'>{charsCount}</p>
                            </div>
                            <div className='count-details-item my-0'>
                                <p className='fw-bold'>Sentences:</p>
                                <p className='bg-success px-2 text-light rounded'>{wordCount}</p>
                            </div>
                            <div className='count-details-item my-0'>
                                <p className='fw-bold'>Paragraphs:</p>
                                <p className='bg-success  px-2 text-light rounded'>{wordCount}</p>
                            </div>

                        </div>

                    </div>
                </Col>
            </Row>

            
        </Container>
        <Footer />
       </>
    );
};

export default WordCounter;