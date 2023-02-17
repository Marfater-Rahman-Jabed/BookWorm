import { createBrowserRouter } from "react-router-dom";
import Alluser from "../../Dashboard/AllUser/Alluser";
import Dashboard from "../../Dashboard/Dashboard";
import BookCategoryDetails from "../../Home/BookCategoryDetails/BookCategoryDetails";
import Home from "../../Home/Home/Home";
import Login from "../../Home/LogIn/Login";
import SignUp from "../../Home/SignUp/SignUp";
import DashbordLayout from "../../Layout/DashbordLayout/DashbordLayout";
import Main from "../../Layout/Main";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

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
        element: <DashbordLayout></DashbordLayout>,
        children: [
            {
                path: '/dashboard/mybooking',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/alluser',
                element: <Alluser></Alluser>
            }
        ]
    }
])