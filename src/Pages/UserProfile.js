import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../Components/Footer/Footer';
import Menu from '../Components/Header/Menu';
import TopHeader from '../Components/TopHeader/TopHeader';
import UserDashboard from '../Components/UserDashboard/UserDashboard';

const UserProfile = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      },[]);
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>The Virtual BD || Dashboard</title>
                <link rel="canonical" href="http://mysite.com/example" />
           </Helmet>
            <TopHeader />
            <Menu />
            <UserDashboard />
            <Footer />
        </div>
    );
};

export default UserProfile;