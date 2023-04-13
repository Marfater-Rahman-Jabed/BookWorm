import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imgLogo from '../../Assets/BookLogo.jpg'
import { AuthContexts } from '../../Contexts/AuthContext';
import useAdmin from '../../Hooks/useAdmin';
import useBuyer from '../../Hooks/useBuyer';
import useSeller from '../../Hooks/useSeller';
import { toast } from 'react-hot-toast';

const NavBar = () => {

    const { user, LogOut } = useContext(AuthContexts);
    const searchRef = useRef();
    const nevigate = useNavigate()
    // console.log(user)

    const [buyer] = useBuyer(user?.email);
    const [seller] = useSeller(user?.email);
    const [Admin] = useAdmin(user?.email);
    // console.log(buyer)
    const [search, setSearch] = useState('');




    useEffect(() => {
        fetch(`http://localhost:5000/booksearch?search=${search}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)


                if (data?.length === 1) {
                    toast.success('We redirect you in this page where you can find your items');
                    nevigate(`/Book/${data[0]?._categoryid}`)

                }
                else if (data?.length === 0) {
                    toast.error('Something Wrong!!! . Search in valid items')
                }


            })
    }, [search]);


    const handleSearch = () => {
        setSearch(searchRef.current.value);
        // console.log(books.length);

    }

    const handleLogOut = () => {
        LogOut()
            .then(result => {
                console.log('logOut successfull')
            })
            .catch(error => console.log(error))
    }


    const menuItems = <>
        <li className='font-semibold  hover:bg-blue-600 rounded-lg hover:text-white'><Link to='/'>Home</Link></li>


        <div className="flex-none">
            <ul className='font-semibold  hover:bg-blue-600 rounded-t-lg hover:text-white menu menu-horizontal '>
                <li tabIndex={0}>
                    <li> <a> Book Categories
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                    </a>
                    </li>

                    <ul className=" bg-sky-400 z-40 pt-4  ">

                        <li className='hover:bg-blue-600 rounded-lg px-4   font-semibold'>
                            <Link to='/Book/63e63c0c1e93df93066df547'> Religious Book</Link>
                        </li>
                        <li className='hover:bg-blue-600 rounded-lg px-4  font-semibold'>
                            <Link to='/Book/63e63c0c1e93df93066df548'>Novel Book</Link>
                        </li>
                        <li className='hover:bg-blue-600 rounded-lg px-4  font-semibold'>
                            <Link to='/Book/63e63c0c1e93df93066df549'> Science Fiction Book</Link>
                        </li>
                        <li className='hover:bg-blue-600 rounded-lg px-4  font-semibold'>
                            <Link to='/Book/63e63c0c1e93df93066df54a'>Academic Book</Link>
                        </li>
                        <li className='hover:bg-blue-600 rounded-lg px-4  font-semibold'>
                            <Link to='/Book/63e63c0c1e93df93066df54b'> Kids Book</Link>
                        </li>
                        <li className='hover:bg-blue-600 rounded-lg px-4  font-semibold mb-2'>
                            <Link to='/Book/63e63c0c1e93df93066df54c'> Magazine</Link>
                        </li>

                    </ul>
                </li>



            </ul>
        </div>







        <div className="flex-none">
            <ul className='font-semibold  hover:bg-blue-600 rounded-t-lg hover:text-white menu menu-horizontal '>
                <li tabIndex={1}>
                    <li> <a> Dashboard
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                    </a>
                    </li>

                    <ul className="px-2 bg-sky-400 z-40 pt-4 ">
                        <li className='hover:bg-blue-600 rounded-b-md px-6'>
                            <Link to='/dashboard' className=''>Dashboard
                            </Link>
                        </li>
                        <li>
                            {user && <li className='font-semibold  hover:bg-blue-600 rounded-lg hover:text-white'><Link to='/dashboard'>My Orders</Link></li>}

                            {user && seller && <>
                                < ><Link to='/dashboard/addproducts' className='hover:bg-blue-600 mx-4'>Add Products</Link></>
                                <><Link to='/dashboard/myproducts' className='hover:bg-blue-600 mb-2 mx-4'>My Products</Link></>

                            </>}
                            {user && Admin &&
                                <>
                                    <><Link to='/dashboard/allseller' className='hover:bg-blue-600 px-10'>All Seller</Link></>
                                    < ><Link to='/dashboard/allbuyer' className='hover:bg-blue-600 mb-2 px-10'>All Buyer</Link></>
                                </>}
                        </li>

                    </ul>
                </li>



            </ul>
        </div>
        <li className='font-semibold  hover:bg-blue-600 rounded-lg hover:text-white'><Link to='/blog'>FAQ</Link></li>


        <input type="text" name="" id="" ref={searchRef} className='w-[100px] h-[40px] border-2 bg-slite-300 text-black px-1 mt-4 me-0 rounded-lg' placeholder='Search Book ' />
        <button className="btn btn-ghost btn-circle mt-3 bg-red-400 hover:bg-blue-700" onClick={handleSearch}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 " fill="none" viewBox="0 0 22 22" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>


        {user?.email ?
            <li className='font-semibold  hover:bg-blue-600 rounded-lg hover:text-white'><button onClick={handleLogOut}>LogOut</button></li>
            :
            <>
                <li className='font-semibold  hover:bg-blue-600 rounded-lg hover:text-white'><Link to='/register'>Register</Link></li>
                <li className='font-semibold  hover:bg-blue-600 rounded-lg hover:text-white'><Link to='/login'>Login</Link></li>

            </>

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


                <img src={imgLogo} className='lg:w-24 md:w-22   sm:w-20  rounded-full' alt="" />

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