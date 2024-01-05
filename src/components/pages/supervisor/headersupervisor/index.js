import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
//SVG
import { ReactComponent as Hamburger } from "./../../../../assets/svg/hamburger.svg";
import { ReactComponent as CloseCircle } from "./../../../../assets/svg/closeCircle.svg";
import { ReactComponent as Profile } from "./../../../../assets/svg/profile-circle.svg";

//PNG
import Logo from "./../../../../assets/image/logo.png";
import { Cookies, useCookies } from "react-cookie";
const HeaderSupervisor = () => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const [isOpenmodalExit, setIsOpenmodalExit] = useState(false);
  const [scrollPosition, setScrollPosition] = useState();
  const [cookies] = useCookies(["fullName"]);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    setScrollPosition(winScroll);
  };

  const toggleNavbarStatusHandler = () => {
    setIsOpenNavbar(!isOpenNavbar);
  };
  const refreshPage = () => {
    setTimeout(() => {
      window.location.reload(false);
    }, 50);
    console.log("page to reload");
  };
  return (
    <div
      className={`${"bg-[#2A3042] text-[#fff] z-50 top-0 right-0 w-full rounded-none sm:py-1 py-4"} shadow-[0_2px_7px_0px_rgba(6,23,48,0.1)]`}
    >
      <div
        className={`z-20 w-[100vw] text-black h-[100vh] bg-[#504f4f99] top-0 right-0 fixed text-center flex justify-center items-center ${
          isOpenmodalExit ? "flex" : "hidden"
        }`}
      >
        <div className="bg-[#fff] p-5 rounded-sm">
          <p className="mb-5 font-medium">
            آیا میخواهید از پنل کاربری خود خارج شوید؟
          </p>
          <div className="flex flex-row-reverse justify-between">
            <Link
              className="px-4 py-1 text-[#fff] border-solid border-2 rounded-md bg-[#003B7E]"
              to={"/employees/logout"}
            >
              خروج
            </Link>
            <button
              onClick={() => setIsOpenmodalExit(!isOpenmodalExit)}
              className="px-4 py-1 border-solid border-2 rounded-md border-[#003B7E]"
            >
              بستن
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-10/12 justify-between items-center container mx-auto">
        <Link className="sm:mb-3 flex items-center" to={""}>
          {/* <img className="w-12 h-12 md:w-20 md:h-20" src={Logo} alt="LOGo" /> */}
          <span className="font-medium text-lg">
            سامانه پایان‌نامه دانشگاه شهید رجایی
          </span>
        </Link>
        {/* <div className="hidden md:flex justify-center gap-x-5 grow">
          <span className="flex items-center gap-x-2  duration-150 hover:cursor-pointer">
            پایان‌نامه ها
            {/* <ArrowDown className="w-5" /> /}
          </span> */}
        {/* <span className="flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer">
            اخبار و اطلاعیه ها
            {/* <ArrowDown className="w-5" /> /}
          </span>{" "}
          <span className="flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer">
            راهنمای دانشجویان
            {/* <ArrowDown className="w-5" /> /}
          </span>
          <span className="flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer">
            نمونه پایان‌نامه
          </span> */}
        {/* </div> */}
        <div className="flex justify-left items-center gap-x-7 xl:gap-x-10  text-[#52575C]">
          {/* <button
            onClick={toggleNavbarStatusHandler}
            className="block xl:hidden  rounded-lg"
          >
            <Hamburger />
          </button> */}
          <div className="group sm:flex text-[#fff] sm:py-3 justify-center items-center gap-3 relative">
            <Profile className="stroke-white hidden sm:block" />
            <span className="">{cookies.fullName}</span>
            <div className="absolute flex-col gap-3 hidden bg-white text-black group-hover:flex top-10 py-2 px-4 rounded-md shadow-md min-w-[6rem]">
              <span
                onClick={() => setIsOpenmodalExit(true)}
                className="cursor-pointer"
              >
                خروج
              </span>
              <Link to={"profile"}>
                <span className="cursor-pointer">پروفایل</span>
              </Link>
            </div>
          </div>
          {/* <Link onClick={refreshPage} to={"/login"}>
            <button className="w-48 font-medium text-sm hidden xl:block bg-[#003B7E] border-2 border-[#003B7E] hover:bg-white hover:text-[#003B7E] duration-200 text-white py-3 px-4 rounded-lg">
              ورود / ثبت نام
            </button>
          </Link> */}
        </div>

        {/* mobile view Navbar */}
        {/*<div
          onClick={toggleNavbarStatusHandler}
          className={`${
            isOpenNavbar ? "left-0" : "left-full"
          } duration-200 z-[90] fixed block xl:hidden bg-black bg-opacity-70 backdrop-blur-sm top-0 right-0 bottom-0 left-0 overflow-hidden`}
        >
           <div
            onClick={(e) => e.stopPropagation()}
            className="w-9/12 sm:w-7/12 md:w-5/12 h-full bg-white"
          >
            <div className="w-full flex flex-col items-center gap-y-5 p-5 sm:p-10 text-[#52575C]">
              <button onClick={toggleNavbarStatusHandler} className="self-end">
                <CloseCircle />
              </button> */}
        {/* <Link
                    className="w-16 h-16 md:w-24 md:h-24"
                    onClick={toggleNavbarStatusHandler}
                    to={"/"}
                  >
                    <img src={Logo} alt="mahak" />
                  </Link> */}
        {/* <div className="self-start flex flex-col items-start gap-y-10 my-10">
                <span className="flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer">
                  صفحه اصلی
                  {/* <ArrowDown className="w-5" /> /}
                </span>
                <span className="flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer">
                  اخبار و اطلاعیه ها
                  {/* <ArrowDown className="w-5" /> /}
                </span>{" "}
                <span className="flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer">
                  راهنمای دانشجویان
                  {/* <ArrowDown className="w-5" /> /}
                </span>
                <span className="flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer">
                  نمونه پایان نامه
                </span>
              </div>
              <Link
                onClick={refreshPage}
                to={"/login"}
                className="block xl:hidden font-medium text-sm w-full text-center bg-[#003B7E] border-2 border-[#003B7E] hover:bg-white hover:text-[#003B7E] duration-200 text-white py-3 px-4 rounded"
              >
                ورود / ثبت نام
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HeaderSupervisor;
