import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './DashboardHome.css';

import useFirebase from '../../Hooks/useFirebase';
import NavMenu from '../../shared/Navbar/NavMenu';

const DashboardHome = () => {
    const [display, setDisplay] = useState({});
    // const { user, admin, handleSignOut, loding } = useAuth();
    const { handleSignOut } = useFirebase();

    const displayBlock = { display: 'block' };
    const displayNone = { display: 'none' };
    const btnClose = () => {
        setDisplay(displayNone);
    }
    const btnOpen = () => {
        setDisplay(displayBlock);
    }
    return (
        <div>
            <NavMenu />
            <div className="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left bg" style={display} id="mySidebar">
                <button className="w3-bar-item w3-button w3-large w3-hide-large" onClick={btnClose}>Close &times;</button>
                <Link to="/" className="w3-bar-item w3-button side-link mt-5">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-home"></i>
                        <h6 className="ms-4">Home</h6>
                    </div>
                </Link>
                <Link to="myOrders" className="w3-bar-item w3-button side-link">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-sign-out-alt"></i>
                        <h6 className="ms-4">My Orders</h6>
                    </div>
                </Link>
                <Link to="manageOrder" className="w3-bar-item w3-button side-link">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-cogs"></i>
                        <h6 className="ms-4">Manage Orders</h6>
                    </div>
                </Link>
                <Link to="addBook" className="w3-bar-item w3-button side-link">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-sign-out-alt"></i>
                        <h6 className="ms-4">Add Books</h6>
                    </div>
                </Link>
                <Link to="#" className="w3-bar-item w3-button side-link">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-sign-out-alt"></i>
                        <button onClick={handleSignOut} className="border-0 ms-4 fw-bold" style={{ backgroundColor: 'transparent' }}>Log Out</button>
                    </div>
                </Link>
            </div>

            <div className="w3-main" style={{ marginLeft: '200px' }}>
                <div style={{ color: '#14a6d0' }}>
                    <button style={{ border: '2px solid grey', color: 'grey', borderRadius: '6px' }} className="w3-button w3-xlarge w3-hide-large" onClick={btnOpen}>&#9776;</button>
                    <div className="w3-container shadow-sm">
                        <h3 className="text-center fw-bold my-3">Dashboard</h3>
                    </div>
                </div>

                <div className="w3-container mt-3">
                    <Outlet />
                </div>

            </div>
        </div >
    );
};

export default DashboardHome;