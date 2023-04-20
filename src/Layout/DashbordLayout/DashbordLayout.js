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
                {/* className='hover:bg-Blue-700' */}
                <div className="drawer-side ">
                    <label htmlFor="Dashbord-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-56 bg-base-100 text-base-content ">

                        {user && <li ><Link to='/dashboard' className='hover:bg-blue-700 hover:text-white selection:bg-orange-700' >{buyer ? 'My Profile' : 'My Orders'}</Link></li>}
                        {(seller || admin) && <>
                            <li><Link to='/dashboard/myproducts' className='hover:bg-blue-700 hover:text-white'>My Profile</Link></li>
                            <li><Link to='/dashboard/addproducts' className='hover:bg-blue-700 hover:text-white'>Add Products</Link></li>


                        </>}
                        {admin &&
                            <>
                                <li><Link to='/dashboard/allseller' className='hover:bg-blue-700 hover:text-white'>All Seller</Link></li>
                                <li><Link to='/dashboard/allbuyer' className='hover:bg-blue-700 hover:text-white'>All Buyer</Link></li>
                                <li><Link to='/dashboard/alluser' className='hover:bg-blue-700 hover:text-white'>All User</Link></li>
                                <li><Link to='/dashboard/allorders' className='hover:bg-blue-700 hover:text-white'>All Orders</Link></li>
                                <li><Link to='/dashboard/alladvertise' className='hover:bg-blue-700 hover:text-white'>All Advertisement</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashbordLayout;