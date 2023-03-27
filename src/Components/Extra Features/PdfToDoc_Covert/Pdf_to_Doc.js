import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Footer from '../../Footer/Footer';
import Menu from '../../Header/Menu';
import TopHeader from '../../TopHeader/TopHeader';
import { FileUploader } from "react-drag-drop-files";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';


pdfMake.vfs = pdfFonts.pdfMake.vfs;
const fileTypes = ["JPG", "PNG", "DOC"];

const PdftoDoc = () => {
    const [getPdf,setGetPdf]=useState(null);
    
    // Handle Covert File
    const handleConvert = async (file) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        const docxArray = reader.result;
        const docDefinition = {
          content: [{ image: docxArray, width: 500 }],
        };
        setGetPdf(pdfMake.createPdf(docDefinition))
      };
    };

    //Download File
    const handleDownload=()=>{
      getPdf.download();
    };

    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>The Virtual BD || Pdf to Doc Converter</title>
                <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <TopHeader />
        <Menu />
        <Container className='converter-container mb-5'>
           <h3 className='fw-bold word-Counter-result ps-2'>Convert Word To PDF</h3>
           <p>This PDF converter is your go-to solution to convert Word to PDF online. Convert Microsoft Word documents to the popular and practical Adobe PDF format. Convert DOC to PDF or DOCX to PDF.</p>

          <div className='convert-input-container'>
             <FileUploader 
             handleChange={handleConvert} 
             name="file" 
             types={fileTypes} 
             hoverTitle={"Drop Here"}
             required={true} />
          </div>

          <div className='text-center mt-3'>
               <button className='blog-btn'  onClick={handleDownload} >Download</button>
          </div>

       
        </Container>
        <Footer />
        </>
    );
};

export default PdftoDoc;