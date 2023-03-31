import { Link, Outlet } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="flex justify-center container mx-auto ">
      <div className="bg-[#fff] sm:p-10 px-5 py-8 rounded-lg w-[40rem] mx-8">
        <div className="flex justify-center">
          <span className="sm:text-2xl text-base text-center font-bold">
            ثبت نام در سامانه ثبت پایان‌نامه
          </span>
        </div>
        <div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-6">
            {/* <div className="flex flex-col">
              <sapn className="sm:text-base font-medium text-sm">نام </sapn>
              <input
                className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
                placeholder="نام خود را وارد کنید"
                type={"text"}
              />
            </div>
            <div className="flex flex-col">
              <sapn className="sm:text-base font-medium text-sm">
                نام خانوادگی
              </sapn>
              <input
                className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
                placeholder=" نام‌خانوادگی خود را وارد کنید"
                type={"text"}
              />
            </div> */}
            <div className="flex flex-col">
              <sapn className="sm:text-base font-medium text-sm">
                شماره دانشجویی
              </sapn>
              <input
                className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
                placeholder=" شماره دانشجویی خود را وارد کنید"
                type={"text"}
              />
            </div>
            <div className="flex flex-col">
              <sapn className="md:text-base font-medium text-sm">کدملی</sapn>
              <input
                className="border-2 border-[#9B9B9B] focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
                placeholder="کدملی خود را وارد کنید"
                type={"text"}
              />
            </div>
            {/* <div className="flex flex-col">
              <sapn className="md:text-base font-medium text-sm">
                شماره تلفن
              </sapn>
              <input
                className="border-2 border-[#9B9B9B] focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
                placeholder="شماره تلفن خود را وارد کنید"
                type={"text"}
              />
            </div> */}
            <div className="flex flex-col md:col-span-2">
              <sapn className="md:text-base font-medium text-sm">ایمیل</sapn>
              <input
                className="border-2 border-[#9B9B9B] focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
                placeholder="ایمیل خود را وارد کنید"
                type={"text"}
              />
            </div>
          </div>
          <button className="bg-[#003B7E] w-full sm:p-4 p-2 mt-6 rounded-md text-lg text-[#ffffff]">
            ثبت نام در سامانه
          </button>
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
