import { Navigate, createBrowserRouter } from 'react-router-dom';
import Login from './views/login';
import SignUp from './views/SignUp';
import Users from './views/Users';
import NotFound from './views/NotFound';
import DefaultLayout from './components/DefaultLayout';
import GuestsLayout from './components/GuestsLayout';
import Dashboard from './views/Dashboard';

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {
                path: "/",
                element: <Navigate to="/users" />
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/users',
                element: <Users/>
            }
        ]
    },
    {
        path: "/",
        element: <GuestsLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            }
        ]
    },
   
    {
        path: '*',
        element: <NotFound/>
    }
])

export default router;