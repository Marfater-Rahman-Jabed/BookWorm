import { createBrowserRouter } from "react-router-dom";
import AllBuyer from "../../Dashboard/AllBuyer/AllBuyer";
import Allseller from "../../Dashboard/AllSeller/Allseller";
import Alluser from "../../Dashboard/AllUser/Alluser";
import AddProduct from "../../Dashboard/Buyer/AddProduct/AddProduct";
import MyProduct from "../../Dashboard/Buyer/MyProduct/MyProduct";
import Dashboard from "../../Dashboard/Dashboard";
import Blog from "../../Home/Blog/Blog";
import BookCategoryDetails from "../../Home/BookCategoryDetails/BookCategoryDetails";
import Home from "../../Home/Home/Home";
import Login from "../../Home/LogIn/Login";
import SignUp from "../../Home/SignUp/SignUp";
import DashbordLayout from "../../Layout/DashbordLayout/DashbordLayout";
import Main from "../../Layout/Main";
import NotFound404 from "../../NotFound404/NotFound404";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import SellerAdminRoute from "../SellerAdminRoute/SellerAdminRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/book/:id',
                element: <PrivateRoutes><BookCategoryDetails></BookCategoryDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)

            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashbordLayout></DashbordLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/alluser',
                element: <AdminRoute><Alluser></Alluser></AdminRoute>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><Allseller></Allseller></AdminRoute>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path: '/dashboard/addproducts',
                element: <SellerAdminRoute><AddProduct></AddProduct></SellerAdminRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerAdminRoute><MyProduct></MyProduct></SellerAdminRoute>
            },
        ]
    }, {
        path: '*',
        element: <NotFound404></NotFound404>
    }
])