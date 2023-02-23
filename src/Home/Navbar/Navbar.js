import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import imgLogo from '../../Assets/BookLogo.jpg'
import { AuthContexts } from '../../Contexts/AuthContext';
import useAdmin from '../../Hooks/useAdmin';
import useBuyer from '../../Hooks/useBuyer';
import useSeller from '../../Hooks/useSeller';

const NavBar = () => {

    const { user, LogOut } = useContext(AuthContexts);
    // console.log(user)

    const [buyer] = useBuyer(user?.email);
    const [seller] = useSeller(user?.email);
    const [Admin] = useAdmin(user?.email);
    // console.log(buyer)

    const handleLogOut = () => {
        LogOut()
            .then(result => {
                console.log('logOut successfull')
            })
            .catch(error => console.log(error))
    }


    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        {buyer && <li><Link to='/dashboard/bookings'>My Orders</Link></li>}

        {seller && <>
            <li><Link to='/dashboard/addproducts'>Add Products</Link></li>
            <li><Link to='/dashboard/myproducts'>My Products</Link></li>

        </>}
        {Admin &&
            <>
                <li><Link to='/dashboard/allseller'>All Seller</Link></li>
                <li><Link to='/dashboard/allbuyer'>All Buyer</Link></li>
            </>}

        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/register'>Register</Link></li>
        {user?.email ?
            <li><button onClick={handleLogOut}>LogOut</button></li>
            :
            <li><Link to='/login'>Login</Link></li>

        }
    </>

    return (
        <div className="navbar  flex justify-between bg-sky-300">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>


                <img src={imgLogo} className='lg:w-24 md:w-22   sm:w-20  rounded-full   ' alt="" />

                <Link className=" normal-case lg:text-5xl md:text-4xl  mx-2 font-bold" to='/'>Book <span className='text-yellow-500 ml-0'>Worm</span></Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {menuItems}
                </ul>
            </div>
            <label tabIndex={1} htmlFor="Dashbord-drawer" className="btn btn-ghost lg:hidden drawer-button "><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
        </div>
    );
};

export default NavBar;