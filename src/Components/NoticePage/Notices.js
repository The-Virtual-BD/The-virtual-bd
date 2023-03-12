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
  const [token] = useToken();
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(false);
  const allNotices = [...notices].reverse();


  //Get Notices
  useEffect(() => {
    const perUrl = `${baseUrl}/api/notices/allnotice`;
    setLoading(true);
    fetch(perUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setLoading(false);
        setNotices(data.data);

      })
  }, []);




 


  const NOTICE_COLUMNS = () => {
    return [
      {
        Header: "SL",
        id: 'index',
        accessor: (_row, i) => i + 1
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
          const { id, document } = row.original;
          return (<div className='download'><a href={`${baseUrl}/${document}`} download  >
            <FiDownload className=' ' />
          </a>
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
          loading ? <Loading loading={loading} /> : <Table columns={NOTICE_COLUMNS()} data={allNotices} headline={" "} />
        }
      </Container>
      
      {/* {
        notices.length===0 && <p className='text-center fw-bold'>No Notice Available</p>
      } */}

      
      <Footer />
    </>
  );
};

export default Notices;