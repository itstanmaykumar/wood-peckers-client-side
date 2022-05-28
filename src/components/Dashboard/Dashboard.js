import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import useUsers from '../../hooks/useUsers';
import DashNav from './DashNav';
import Profile from './Profile';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    return (
        <div className="container">
            <div className="row">
                <DashNav></DashNav>
                <Profile></Profile>
            </div>
        </div>
    );
};

export default Dashboard;