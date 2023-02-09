import React, { useEffect } from 'react';
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
            <TopHeader />
            <Menu />
            <UserDashboard />
            <Footer />
        </div>
    );
};

export default UserProfile;