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
        <li className='font-semibold  hover:bg-blue-600 rounded-lg hover:text-white'><Link to='/'>Home</Link></li>
        {user && <li className='font-semibold  hover:bg-blue-600 rounded-lg hover:text-white'><Link to='/dashboard'>My Orders</Link></li>}

        {user && seller && <>
            <li className='font-semibold  hover:bg-blue-600 rounded-lg hover:text-white'><Link to='/dashboard/addproducts'>Add Products</Link></li>
            <li className='font-semibold  hover:bg-blue-600 rounded-lg hover:text-white'><Link to='/dashboard/myproducts'>My Products</Link></li>

        </>}
        {user && Admin &&
            <>
                <li className='font-semibold  hover:bg-blue-600 rounded-lg hover:text-white'><Link to='/dashboard/allseller'>All Seller</Link></li>
                <li className='font-semibold  hover:bg-blue-600 rounded-lg hover:text-white'><Link to='/dashboard/allbuyer'>All Buyer</Link></li>
            </>}

        <li className='font-semibold  hover:bg-blue-600 rounded-lg hover:text-white'><Link to='/blog'>Blog</Link></li>
        <li className='font-semibold  hover:bg-blue-600 rounded-lg hover:text-white'><Link to='/dashboard'>Dashboard</Link></li>
        <li className='font-semibold  hover:bg-blue-600 rounded-lg hover:text-white'><Link to='/register'>Register</Link></li>
        {user?.email ?
            <li className='font-semibold  hover:bg-blue-600 rounded-lg hover:text-white'><button onClick={handleLogOut}>LogOut</button></li>
            :
            <li className='font-semibold  hover:bg-blue-600 rounded-lg hover:text-white'><Link to='/login'>Login</Link></li>

        }
    </>

    return (
        <div className="navbar  flex justify-between bg-sky-300 print:hidden">
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

                <Link className=" normal-case lg:text-5xl md:text-4xl  mx-4 font-bold" to='/'>Book <br /> <span className='text-yellow-500 ml-0'>Worm</span></Link>

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