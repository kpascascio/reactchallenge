import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Dashboard = (props) => {
    return (
        <div>
            <Navbar emailValueFromApp={props.emailValueFromApp}/>
            Dashboard Component
            <Footer />
        </div>
    )
}

export default Dashboard;