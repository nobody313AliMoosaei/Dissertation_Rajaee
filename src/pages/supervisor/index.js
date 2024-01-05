import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import HeaderSupervisor from "../../components/pages/supervisor/headersupervisor";
import ThesisDetails from "../../components/pages/supervisor/thesisdetails";
import ThesisList from "../../components/pages/supervisor/thesislist";
import { Cookies, useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { GetRefreshToken } from "../../services/employees";

const Supervisor = () => {
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
    <div className={`bg-[#F5F6FA] w-full pb-10 min-h-screen h-full `}>
      {isLogin ? (
        <>
          <HeaderSupervisor />
          <Outlet />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Supervisor;
