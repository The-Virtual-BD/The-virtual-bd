import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer';
import Menu from '../Header/Menu';
import TopHeader from '../TopHeader/TopHeader';
import './WordCounter.css';
import img1 from "../../Images/data_analysis.jpg";
import { Link } from 'react-router-dom';
import {HiArrowNarrowRight} from 'react-icons/hi';
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
const client_ID="client_2moMXzVCLAKipUbS1CaY7o"

const WordCounter = () => {
    const [wordCount, setWordCount] = useState(0);
    const [charsCount,setCharsCount]=useState(0);
    const [paraCount,setParaCount]=useState(0);
    const [sentenceCount,setSentenceCount]=useState(0);

     //Slide to Top
     useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    //Get Count Number
    const countWords = (text) => {
        //Charectars Count
        // const charectar = text.length;
        const charectar = text.replace(/[^\x20-\x7E]/g, "").length;
        setCharsCount(charectar);

        //Word Count
        if (text.trim() === '') {
            setWordCount(0)
          }else{
            const words = text.trim().split(/\s+/);
            setWordCount(words.length);
          };


          // Paragraph Count
            const trimmedText = text.trim();
            if (trimmedText === '') {
            setParaCount(0);
            } else {
            const paragraphs = trimmedText.split(/\n\n+/);
            setParaCount(paragraphs.length);
            }

        //Sentence Count
        const sentences = text.split(/[.!?\n]+/);
        setSentenceCount(sentences.length-1);

        if (text.trim() === '') {
            setSentenceCount(0)
          }else{
            // const sentences = text.split(/[.!?]/);
            const sentences = text.trim().split(/[.!?\n]+/);
            setSentenceCount(sentences.length-1);
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
                            <div className='settings-container-wordcounter col-12'>
                                <Link to={"/sign-in"} className="btn btn-sm text-light">
                                    Proof Reading
                                    <HiArrowNarrowRight className='ms-1 fs-6'/>
                                </Link>
                            </div>
                            

                        <div className=" mb-1">
                            <GrammarlyEditorPlugin clientId={client_ID} config={{ documentDialect: "british" }}>
                                <textarea
                                    className="form-control word-counter-textarea"
                                    id="blogDesc"
                                    rows="10"
                                    required
                                    placeholder='Start typing or copy & paste your document here....'
                                    onChange={(e) => countWords(e.target.value)}
                                >
                                  
                                </textarea>
                            </GrammarlyEditorPlugin>
                            <div className='gramarly-container '>
                                  <grammarly-button ></grammarly-button>
                            </div>
                           
                        </div>

                        <div className="word-Counter-user ">
                           <h4 className='fw-bold text-center'> Total Usages of Our Sites: 100</h4>
                        </div>

                    </div>
                </Col>

                <Col md={3} sm={12}>
                    <div>
                        <div>
                           <Link to={"/contact"}>
                                <img src={img1} alt="" srcset="" style={{height:"275px",width:"260px",marginTop:"20px"}} />
                           </Link>
                        </div>

                        <div className='mt-3 details-container'>
                            <h4 className='text-center fw-bold'>Details</h4>
                            
                            <div className='count-details-item mb-0'>
                                <p className='fw-bold'>Words:</p>
                                <p className='bg-item  px-2 text-light rounded'>{wordCount}</p>
                            </div>
                            <div className='count-details-item my-0'>
                                <p className='fw-bold'>Characters:</p>
                                <p className='bg-item  px-2 text-light rounded'>{charsCount}</p>
                            </div>
                            <div className='count-details-item my-0'>
                                <p className='fw-bold'>Sentences:</p>
                                <p className='bg-item px-2 text-light rounded'>{sentenceCount}</p>
                            </div>
                            <div className='count-details-item my-0'>
                                <p className='fw-bold'>Paragraphs:</p>
                                <p className='bg-item  px-2 text-light rounded'>{paraCount}</p>
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