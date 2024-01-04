import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
//Services
import { PostUserDataSignUp } from "../../../../services/auth";
//Cookies
import { useCookies } from "react-cookie";
//Components
import LoadingBtn from "../../../common/loadingBtn";

const SignUp = () => {
  const [cookies, setCookies] = useCookies(["token"]);
  const [dataSingUp, serDataSignUp] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const updateData = (e) => {
    serDataSignUp({
      ...dataSingUp,
      [e.target.name]: e.target.value,
    });
  };

  const asyncPostUserData = async () => {
    setIsLoading(true);
    setError({});

    const { userName, nationalCode, email } = dataSingUp;

    const response = await PostUserDataSignUp({
      userName,
      nationalCode,
      email,
    });

    if (response.status === 200) {
      toast.success("اطلاعات با موفقیت ثبت شد");
      // setCookies("token", response.data.token);
      // console.log(response);
      navigate("/login");
    } else {
      //error occurre
      toast.error("اطلاعات ثبت نشد");
      console.log("response : ", response);
    }

    setIsLoading(false);
  };

  return (
    <div className="flex justify-center container mx-auto mt-36">
      <div className="bg-[#fff] sm:p-10 px-5 py-8 rounded-lg w-[40rem] mx-8">
        <div className="flex justify-center">
          <span className="sm:text-2xl text-base text-center font-bold">
            ثبت نام در سامانه ثبت پایان‌نامه
          </span>
        </div>
        <div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-6">
            <div className="flex flex-col">
              <span className="sm:text-base font-medium text-sm">
                شماره دانشجویی
              </span>
              <input
                name="userName"
                onChange={updateData}
                className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
                placeholder=" شماره دانشجویی خود را وارد کنید"
                type={"text"}
              />
            </div>
            <div className="flex flex-col">
              <span className="md:text-base font-medium text-sm">کدملی</span>
              <input
                name="nationalCode"
                onChange={updateData}
                className="border-2 border-[#9B9B9B] focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
                placeholder="کدملی خود را وارد کنید"
                type={"text"}
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <span className="md:text-base font-medium text-sm">ایمیل</span>
              <input
                name="email"
                onChange={updateData}
                className="border-2 border-[#9B9B9B] focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
                placeholder="ایمیل خود را وارد کنید"
                type={"text"}
              />
            </div>
          </div>
          <LoadingBtn
            className={"bg-[#003B7E]"}
            action={asyncPostUserData}
            isLoading={isLoading}
            text="ورود به سامانه"
          />
          <ToastContainer />
          <div className="mt-5">
            <span>آیا قبلا در سامانه ثبت نام کرده‌اید؟</span>
            <Link to={"/login"} className="text-[#003B7E] mr-1 font-medium ">
              ورود{" "}
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default SignUp;
