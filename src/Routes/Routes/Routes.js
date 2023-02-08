import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import Login from "../../Home/LogIn/Login";
import Main from "../../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])