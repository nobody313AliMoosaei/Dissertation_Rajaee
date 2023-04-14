import { Route, Routes } from "react-router-dom";
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
      {/* <Home /> */}
      <Meno />
      <div className="md:w-3/4 w-full flex flex-col">
        <Header />
        <div className="flex justify-center items-center">
          {/* <PreRegistration /> */}
          {/* <ThesisStatus /> */}
          <Routes>
            <Route path="preregistration" element={<PreRegistration />} />
            <Route path="thesisstatus" element={<ThesisStatus />} />
            <Route path="correspondence" element={<Correspondence />} />
            <Route path="profile" element={<Profile />} />
            {/* <Route path="preregistration" element={<PreRegistration />} /> */}
            {/* </Route> */}
          </Routes>
          {/* <p>dksssssssssssssssssssssssssssssssssssssssssssssssssssss</p> */}
        </div>
      </div>
    </div>
  );
};

export default Student;
