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
import { Helmet } from 'react-helmet';
import moment from 'moment';
import { useCollection } from '../../context';

const Notices = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Virtual BD || Notice</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <TopHeader />
      <Menu />
      <CareerHero>Notice</CareerHero>
      <Container>
        <NoticeData />
      </Container>
      <Footer />
    </>
  );
};

export default Notices;


const NoticeData = () => {
  const { notices, noticesLoading } = useCollection();
  if (noticesLoading) {
    return <div class="d-flex justify-content-center">
      <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  };

  if (!noticesLoading && notices.length === 0) {
    return <p>No Notice Avaiable</p>
  };


  const recentData = [...notices].reverse();


  const NOTICE_COLUMNS = () => {
    return [
      {
        Header: "SL",
        id: 'index',
        accessor: (_row, i) => i + 1
      },

      {
        Header: "Name",
        accessor: "title",
        sortType: 'basic',
      },
      {
        Header: "Published Date",
        accessor: "created_at",
        sortType: 'basic',
        Cell: ({ row }) => {
          const { created_at } = row.original;
          return (
            <div>
              {moment(created_at).format('DD MMMM, YYYY')}
            </div>
          );
        },
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
    <div>
      {recentData.length !== 0 && <Table columns={NOTICE_COLUMNS()} data={recentData} headline={" "} />}
    </div>
  )
};