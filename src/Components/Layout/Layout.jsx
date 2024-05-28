import Navbar from "./../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container w-screen px-4 p-md-0">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
