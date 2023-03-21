import React from 'react';
import { Container } from 'react-bootstrap';
import { FiDownload } from 'react-icons/fi';
import CareerHero from '../Career/CareerHero/CareerHero';
import Menu from '../Header/Menu';
import TopHeader from '../TopHeader/TopHeader';
import Table from '../UserDashboard/Table';
import { baseUrl } from '../../hooks/url';
import './Notice.css';
import Footer from '../Footer/Footer';
import { useQuery } from "react-query";
import Skeleton from 'react-loading-skeleton';
import { Helmet } from 'react-helmet';

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
     <Helmet>
                <meta charSet="utf-8" />
                <title>The Virtual BD || Notice</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <TopHeader />
      <Menu />
      <CareerHero>Notice</CareerHero>
      <div>
          {
            isLoading? <Skeleton count={10} />:
                <Container>
                  {
                     recentNotices.length !==0 ?   <Table columns={NOTICE_COLUMNS()} data={recentNotices} headline={" "} />:<div className="d-flex align-items-center justify-content-center" style={{height:"200px"}}>
                     <p className="text-center fw-bold" >No Notice available</p>
                    </div>
                  }
                    
                </Container>
          }
      </div>
      <Footer />
    </>
  );
};

export default Notices;