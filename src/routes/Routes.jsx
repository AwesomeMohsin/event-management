import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";
import Profile from "../pages/UserPages/Profile";
import PrivateRoute from "./PrivateRoute";
import ServiceItemDetails from "../pages/Services/ServiceItemDetails";
import Contact from "../pages/Contact/Contact";
import LoginRegisterRoute from "./LoginRegisterRoute";
import Gallery from "../pages/Gallery/Gallery";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LoginRegisterRoute><Login></Login></LoginRegisterRoute>

            },
            {
                path: '/register',
                element: <LoginRegisterRoute><Register></Register></LoginRegisterRoute>

            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><ServiceItemDetails></ServiceItemDetails></PrivateRoute>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/gallery',
                element:<PrivateRoute><Gallery></Gallery></PrivateRoute>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
        ]
    },
]);


export default router;