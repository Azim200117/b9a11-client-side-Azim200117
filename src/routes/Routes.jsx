import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';
import Home from '../pages/Home';
import Rooms from '../pages/Rooms';
import MyRooms from '../pages/MyRooms';
import Contact from '../pages/Contact';
import Error from '../pages/Error';
import AboutUs from '../pages/AboutUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/aboutus',
        element: <AboutUs />,
      },
      {
        path: '/rooms',
        element: <Rooms />,
      },
      {
        path: '/myrooms',
        element: <MyRooms />,
      },
      {
        path: '/rooms',
        element: <Rooms />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

export default router;
