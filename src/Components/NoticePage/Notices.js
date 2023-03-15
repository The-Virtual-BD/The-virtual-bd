import React from 'react';
import { Container } from 'react-bootstrap';
import { FiDownload } from 'react-icons/fi';
import CareerHero from '../Career/CareerHero/CareerHero';
import Menu from '../Header/Menu';
import TopHeader from '../TopHeader/TopHeader';
import Table from '../UserDashboard/Table';
import { baseUrl } from '../../hooks/url';
import './Notice.css';
import Loading from '../../hooks/Loading';
import Footer from '../Footer/Footer';
import { useQuery } from "react-query";

const Notices = () => {
  //Get Notices
  const { data:notices, isLoading, refetch } = useQuery('notice', () => fetch(`${baseUrl}/api/notices/allnotice`).then(res => res.json()));
  const recentNotices = notices?.data ? [...(notices.data)].reverse() : [];


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
      {
         isLoading? <Loading />:
            <Container>
          {
            notices?.length !==0 ?
                <Table columns={NOTICE_COLUMNS()} data={recentNotices} headline={" "} />:
                <p className='text-center fw-bold'>No Notice Available</p>
          }
          </Container>
      }
      
      <Footer />
    </>
  );
};

export default Notices;