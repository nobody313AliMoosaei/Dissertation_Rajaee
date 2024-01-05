import { useRef, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

//Services
import { PostUserData } from "../../../../services/auth";
//cookie
import { Cookies, useCookies } from "react-cookie";
//Components
import LoadingBtn from "../../../common/loadingBtn";

const Login = () => {
  const [cookies, setCookie] = useCookies(["token", "role", "fullName"]);
  const navigate = useNavigate();
  const recaptcha = useRef();
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [dataLogin, setDataLogin] = useState({});
  const updateData = (e) => {
    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value,
    });
  };

  const asyncPostUserData = async () => {
    setIsLoading(true);
    setError({});
    const { userName, password } = dataLogin;
    const captchaValue = recaptcha.current.getValue();
    if (!captchaValue) {
      toast.error("برار سرد و گرمم ثابت کن ربات نیستی");
    } else {
      // make form submission
      const response = await PostUserData({
        userName,
        password,
      });

      // console.log("response : ", response.status);

      if (response.status === 200) {
        setCookie("token", response.data.token, { path: "/" });
        setCookie("fullName", response.data.fullName, { path: "/" });
        setCookie("role", response.data.role, { path: "/" });
        console.log(response);
        if (response.data.role === "Administrator") {
          toast.error("اطلاعات وارد شده صحیح نمی باشد");
        } else if (response.data.role === "Student") {
          toast.success("با موفقیت وارد شدید");
          navigate(`/${response.data.role}`);
        } else {
          toast.success("با موفقیت وارد شدید");
          navigate("/employees");
        }
      } else {
        //error occurre
        toast.error(response.data.errors.message);
        if (response.data.errors !== undefined) {
          if (response.data.errors.Password !== undefined) {
            toast.error(response.data.errors.Password[0]);
          }
          if (response.data.errors.UserName !== undefined) {
            toast.error(response.data.errors.UserName[0]);
          }
        }
        console.log("response : ", response);
      }
    }

    setIsLoading(false);
  };

  return (
    <div className="flex justify-center container mx-auto mt-36 ">
      <div className="bg-[#fff] sm:p-10 px-5 py-8 rounded-lg w-[40rem] mx-8">
        <div className="flex justify-center">
          <span className="sm:text-2xl text-base text-center font-bold">
            ورود به سامانه ثبت پایان نامه
          </span>
        </div>
        <div className="mt-8">
          <div className="flex flex-col my-5">
            <span className="sm:text-base text-sm font-medium">نام کاربری</span>
            <input
              name="userName"
              onChange={updateData}
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:font-medium md:h-12 h-10 p-1 sm:text-base text-sm "
              placeholder=" شماره دانشجویی خود را وارد کنید"
              type={"text"}
            />
          </div>
          <div className="flex flex-col my-5">
            <span className="md:text-base text-sm font-medium">رمز عبور</span>
            <input
              name="password"
              onChange={updateData}
              className="border-2 border-[#9B9B9B] focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 rounded-md mt-1 sm:font-medium sm:h-12 h-10 p-1 sm:text-base text-sm "
              placeholder="کدملی خود را وارد کنید"
              type={"password"}
            />
          </div>
          <ReCAPTCHA
            ref={recaptcha}
            sitekey="6LcnubclAAAAABYr52Z02fiCaWrT-Cyc-3W4N-z8"
          />
          <LoadingBtn
            className={"bg-[#003B7E]"}
            action={asyncPostUserData}
            isLoading={isLoading}
            text="ورود به سامانه"
          />
          {/* <ToastContainer /> */}
          <div className="mt-5">
            <span>آیا تا به حال ثبت نام نکرده‌اید؟</span>
            <Link to={"/register"} className="text-[#003B7E] mr-1 font-medium">
              ثبت نام
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Login;
