import React from 'react';
import Footer from '../Components/Footer/Footer';
import Menu from '../Components/Header/Menu';
import TopHeader from '../Components/TopHeader/TopHeader';
import UserDashboard from '../Components/UserDashboard/UserDashboard';

const UserProfile = () => {
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