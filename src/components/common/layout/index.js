//react-router-dom
import { Outlet } from "react-router-dom";
//PNG
import Back_graduation from "./../../../assets/image/graduation.png";

//components
import Header from "./header";
import Footer from "./footer";

const Layout = () => {
  return (
    <div className="flex flex-col bg-[#F5F6FA] ">
      <div className="sm:px-10 relative mb-40 z-10">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
