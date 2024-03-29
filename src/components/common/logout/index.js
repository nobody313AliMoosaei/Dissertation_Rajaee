import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const nvaigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([
    "token",
    "role",
    "fullName",
  ]);
  useEffect(() => {
    console.log(cookies);
    removeCookie("token", { path: "/" });
    removeCookie("role", { path: "/" });
    removeCookie("fullName", { path: "/" });
    nvaigate("/");
  }, []);
  return <div>logout0</div>;
};
export default Logout;
