import { createBrowserRouter } from "react-router-dom";
import BookCategoryDetails from "../../Home/BookCategoryDetails/BookCategoryDetails";
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
            , {
                path: '/book/:id',
                element: <BookCategoryDetails></BookCategoryDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)

            }
        ]
    }
])