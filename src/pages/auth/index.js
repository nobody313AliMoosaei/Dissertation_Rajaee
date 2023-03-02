import { Outlet } from "react-router-dom";
import Login from "../../components/pages/login";

const Auth = () => {
  return (
    <div>
      <Login />
      <Outlet />
    </div>
  );
};
export default Auth;
