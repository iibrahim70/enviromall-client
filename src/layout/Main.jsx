import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
