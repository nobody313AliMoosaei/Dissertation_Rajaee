import { Outlet, Route, Routes } from "react-router-dom";
//Components
import Meno from "../../components/pages/student/meno";
import PreRegistration from "../../components/pages/student/preregistration";
import ThesisStatus from "../../components/pages/student/thesisstatus";
import Correspondence from "../../components/pages/student/correspondence";
import Header from "../../components/pages/student/header";
import Profile from "../../components/pages/student/profile";

const Student = () => {
  return (
    <div className="md:flex h-full min-h-screen bg-[#F5F6FA]">
      <Meno />
      <div className="md:w-3/4 w-full flex flex-col">
        <Header />
        <Outlet />
        <div className="flex justify-center items-center">
          {/* <Routes>
            
          </Routes> */}
        </div>
      </div>
    </div>
  );
};

export default Student;
