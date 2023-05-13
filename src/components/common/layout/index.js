//react-router-dom
import { Outlet } from "react-router-dom";
//PNG
import Back_graduation from "./../../../assets/image/graduation.png";

//components
import Header from "./header";
import Footer from "./footer";

const Layout = () => {
  return (
    <div className="flex flex-col bg-[#F5F6FA]  mx-auto ">
      <div className="">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
