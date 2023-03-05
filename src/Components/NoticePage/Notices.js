import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FiDownload } from 'react-icons/fi';
import { FaFileDownload } from 'react-icons/fa';
import CareerHero from '../Career/CareerHero/CareerHero';
import Menu from '../Header/Menu';
import TopHeader from '../TopHeader/TopHeader';
import Table from '../UserDashboard/Table';
import useToken from '../../hooks/useToken';
import { baseUrl } from '../../hooks/url';
import { saveAs } from "file-saver";
import './Notice.css';
import Loading from '../../hooks/Loading';
import Footer from '../Footer/Footer';

const Notices = () => {
    const[token]=useToken();
    const [notices, setNotices] = useState([]);
    const[loading,setLoading]=useState(false);
    

     //Get Notices
     useEffect(() => {
        const perUrl=`${baseUrl}/api/notices/allnotice`;
        setLoading(true);
        fetch(perUrl)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setLoading(false);
            setNotices(data.data);
            
          })
      }, []);


    //Download Documents
    /* const downloadFile = (url) => {

        fetch(url)
          .then((response) => response.blob())
          .then((blob) => {
            const blobURL=window.URL.createObjectURL(new Blob([blob]));
            const fileName=url.split("/").pop();
            const aTag=document.createElement("a");
            aTag.href=blobURL;
            aTag.setAttribute=("download",fileName);
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();

          });
      }; */

      const downloadFile = (id) => {
        const getDoc = notices.find(notice => notice.id === id);
      
        fetch(`${getDoc.document}`)
          .then((response) => response.blob())
          .then((blob) => {
            if (blob.size > 0) {
              saveAs(blob, `${getDoc.title}.pdf`);
            } else {
              console.error('Invalid or empty PDF file');
            }
          })
          .catch((error) => {
            console.error(error);
          });
      };
      


      const NOTICE_COLUMNS = () => {
        return [
            {
                Header: "SL",
                accessor: "id",
                sortType: 'basic',
            },
            {
                Header: "Title",
                accessor: "title",
                sortType: 'basic',

            },
            {
                Header: 'Download',
                accessor: 'action',
                Cell: ({ row }) => {
                    const { id,document } = row.original;
                    return (<div className='download'><button className='download-icon' onClick={() => downloadFile(id)}>
                        <FiDownload className=' ' />
                    </button>
                    </div>);
                },
            },
        ];
    };



    return (
        <>
            <TopHeader />
            <Menu />
            <CareerHero>Notice</CareerHero>
            <Container>
                {
                    loading? <Loading loading={loading} /> : <Table columns={NOTICE_COLUMNS()} data={notices} headline={" "} />
                }


              
            </Container>
            <Footer />
        </>
    );
};

export default Notices;