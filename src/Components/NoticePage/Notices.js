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

const Notices = () => {
    const[token]=useToken();
    const [notices, setNotices] = useState([]);
    const[loading,setLoading]=useState(false);
    

     //Get Notices
     useEffect(() => {
        const perUrl=`${baseUrl}/api/admin/notices`;
        setLoading(true);
        fetch(perUrl,{
          method:"GET",
          headers: {
              'content-type': 'application/json',
              "Authorization": `Bearer ${token}`
          }
      })
          .then(res => res.json())
          .then(data => {
            console.log(data.data);
            setNotices(data.data);
            setLoading(false);
          })
      }, [token]);


    //Download Documents
    const downloadFile = (id) => {
        const getDoc = notices.find(notice => notice.id === id);

        fetch(`${getDoc.document}`)
          .then((response) => response.blob())
          .then((blob) => {
            saveAs(blob, `${getDoc.title}.doc`);
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
                Header: 'Action',
                accessor: 'action',
                Cell: ({ row }) => {
                    const { id } = row.original;
                    return (<div className='download'><button className='download-icon' onClick={() => downloadFile(id)}>
                        <FiDownload className=' ' />
                    </button>
                    </div>);
                },
            },
        ];
    };

  /*   if(loading){
        return(<Loading loading={loading} />)
    }; */



    return (
        <>
            <TopHeader />
            <Menu />
            <CareerHero>Notice</CareerHero>
            <Container>
                {
                    loading? <Loading loading={loading} /> : <Table columns={NOTICE_COLUMNS()} data={notices} headline={" "} />
                }


              {/*   {notices.length && (
                    <Table columns={NOTICE_COLUMNS()} data={notices} headline={" "} />
                )} */}
            </Container>
        </>
    );
};

export default Notices;