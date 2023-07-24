import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Login from "../Components/Page/Login";
import Signup from "../Components/Page/Signup";
import SinglePage from "../Components/Home/SinglePage";
import PraviteRoute from "./PraviteRoute";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/singlepage',
                element:<PraviteRoute><SinglePage></SinglePage></PraviteRoute>         
            }
        ])
    },
    
])