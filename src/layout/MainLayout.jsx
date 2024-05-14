import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Outlet */}
      <div className="min-h-[calc(100vh-306px)] my-24 mx-20">
        <Outlet></Outlet>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
