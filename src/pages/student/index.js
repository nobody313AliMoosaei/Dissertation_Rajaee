import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
//Components
import Meno from "../../components/pages/student/meno";
import PreRegistration from "../../components/pages/student/preregistration";
import ThesisStatus from "../../components/pages/student/thesisstatus";
import Correspondence from "../../components/pages/student/correspondence";
import Header from "../../components/pages/student/header";
import Profile from "../../components/pages/student/profile";
import { useEffect } from "react";
//Services
import { GetRefreshToken } from "../../services/student";
//Cookies
import { Cookies, useCookies } from "react-cookie";
import { toast } from "react-toastify";
const Student = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  useEffect(() => {
    asyncRefreshToken();
  }, []);
  const asyncRefreshToken = async () => {
    const response = await GetRefreshToken(cookies.token);

    // console.log("response : ", response.status);

    if (response.data) {
      setIsLogin(true);
      console.log(response);
    } else {
      //error occurre
      navigate("/login");
      toast.error("قبل از اسفاده از سایت وارد شوید.");
      console.log("response : ", response);
    }
  };

  return (
    <>
      {isLogin ? (
        <div className="md:flex h-full min-h-screen bg-[#F5F6FA]">
          <Meno />
          <div className="md:w-3/4 w-full flex flex-col">
            <Header />
            <Outlet />
            <div className="flex justify-center items-center">
              {/* <Routes>
            
          </Routes> */}
              {/* سشیبیسبیس */}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Student;
