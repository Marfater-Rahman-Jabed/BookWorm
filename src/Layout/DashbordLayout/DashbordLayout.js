import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../../Home/Navbar/Navbar';

const DashbordLayout = () => {
    return (
        <div>
            <NavBar></NavBar>

            <div className="drawer drawer-mobile">
                <input id="Dashbord-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="Dashbord-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard/mybooking'>My Booking</Link></li>
                        <li><Link to='/dashboard/alluser'>All User</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashbordLayout;