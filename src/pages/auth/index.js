import { Outlet } from "react-router-dom";
import Login from "../../components/pages/auth/login";
import SignUp from "../../components/pages/auth/signup";

const Auth = () => {
  return (
    <div>
      <SignUp />
      <Outlet />
    </div>
  );
};
export default Auth;
