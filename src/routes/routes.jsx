import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import Plants from "../pages/Plants";
import Profile from "../pages/Profile";
import SignUp from "../pages/Register";
import Register from "../pages/Register";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: '/plants',
                Component: Plants
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/profile',
                Component: Profile
            },
        ]
    }
])

export default router