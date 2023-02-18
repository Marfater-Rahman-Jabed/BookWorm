import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContexts } from '../../Contexts/AuthContext';
import NavBar from '../../Home/Navbar/Navbar';
import useAdmin from '../../Hooks/useAdmin';
import useBuyer from '../../Hooks/useBuyer';
import useSeller from '../../Hooks/useSeller';

const DashbordLayout = () => {
    const { user } = useContext(AuthContexts);
    const [admin] = useAdmin(user?.email);
    const [seller] = useSeller(user?.email);
    const [buyer] = useBuyer(user?.email)
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
                    <ul className="menu p-4 w-56 bg-base-100 text-base-content">

                        {buyer && <li><Link to='/bookings'>My Orders</Link></li>}
                        {admin &&
                            <>
                                <li><Link to='/dashboard/allseller'>All Seller</Link></li>
                                <li><Link to='/dashboard/allbuyer'>All Buyer</Link></li>
                                <li><Link to='/dashboard/alluser'>All User</Link></li>
                            </>
                        }
                        {seller && <>
                            <li><Link to='/addproducts'>Add Products</Link></li>
                            <li><Link to='/myproducts'>My Products</Link></li>

                        </>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashbordLayout;