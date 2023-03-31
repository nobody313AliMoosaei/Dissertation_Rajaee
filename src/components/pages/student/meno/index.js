import React, { useState, useEffect } from "react";

// import { Link } from "react-router-dom";
//SVG
import { ReactComponent as Hamburger } from "../../../../assets/svg/hamburger.svg";
import { ReactComponent as CloseCircle } from "../../../../assets/svg/closeCircle.svg";
import { ReactComponent as Logout } from "../../../../assets/svg/logout.svg";
import { ReactComponent as Condition } from "../../../../assets/svg/condition (2).svg";
import { ReactComponent as Correspondence } from "../../../../assets/svg/Correspondence.svg";
import { ReactComponent as Forms } from "../../../../assets/svg/forms.svg";
import { ReactComponent as Writerinformation } from "../../../../assets/svg/writerinformation.svg";
import { ReactComponent as Profile } from "../../../../assets/svg/profile-circle2.svg";

//PNG
import Logo from "../../../../assets/image/logo.png";
import { Link } from "react-router-dom";
const Meno = () => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const [isOpenmodalExit, setIsOpenmodalExit] = useState(false);
  const [scrollPosition, setScrollPosition] = useState();

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
  const toggleModslStatusHandler = () => {
    setIsOpenmodalExit(!isOpenmodalExit);
  };
  // const refreshPage = () => {
  //   setTimeout(() => {
  //     window.location.reload(false);
  //   }, 50);
  //   console.log("page to reload");
  // };
  const clickHandler = (e) => {};
  const [params, setParams] = useState(window.location.pathname);

  const changeBackground = () => {
    setParams(window.location.pathname);
  };
  useEffect(() => {
    window.addEventListener("click", changeBackground);
  }, []);
  return (
    <div
      className={`${
        scrollPosition > 200
          ? "fixed z-50 top-0 right-0 w-full rounded-none px-5 py-1"
          : "top-0 left-0 right-0  w-full rounded-none px-10 md:px-0 "
      }   bg-[#fff] shadow-[0_2px_7px_0px_rgba(6,23,48,0.1)] lg:w-3/12 md:w-4/12 md:h-[100vh]`}
    >
      <div
        className={`w-[100vw] h-[100vh] bg-[#504f4f99] absolute text-center flex justify-center items-center ${
          isOpenmodalExit ? "flex" : "hidden"
        }`}
      >
        <div className="bg-[#fff] p-5 rounded-sm">
          <p className="mb-5 font-medium">
            آیا میخواهید از پنل کاربری خود خارج شوید؟
          </p>
          <div className="flex flex-row-reverse justify-between">
            <Link to={"/"}>
              <button className="px-4 py-1 text-[#fff] border-solid border-2 rounded-md bg-[#003B7E]">
                خروج
              </button>
            </Link>
            <button
              onClick={toggleModslStatusHandler}
              className="px-4 py-1 border-solid border-2 rounded-md border-[#003B7E]"
            >
              بستن
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between container mx-auto ">
        <div className="flex flex-row justify-between  w-full h-20 mb-3">
          <div className="flex justify-center pr-4 items-center font-medium">
            <img src={Logo} alt="LOGo" />
            <span className="hidden md:block">
              سامانه پایان‌نامه شهید رجایی
            </span>
          </div>
          <button
            onClick={toggleNavbarStatusHandler}
            className="block md:hidden  rounded-lg"
          >
            <Hamburger />
          </button>
        </div>
        <div className="hidden md:flex text-[#003B7E] text-lg flex-col gap-y-16 mt-6 pr-8 mr-3 grow">
          <span className="flex focus:bg-white  items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer">
            <Forms />
            فرم های اولیه
            {/* <ArrowDown className="w-5" /> */}
          </span>
          <Link
            className={`${
              params === "/student/preregistration"
                ? "bg-[#003B7E] text-[#fff] w-fit p-2 px-4 rounded-md stroke-white"
                : "bg-inherit"
            }`}
            to={"preregistration"}
          >
            <span className="flex items-center gap-x-2 duration-150 hover:cursor-pointer">
              <Writerinformation className="" />
              پیش ثبت نام
              {/* <ArrowDown className="w-5" /> */}
            </span>{" "}
          </Link>
          <Link
            className={`${
              params === "/student/thesisstatus"
                ? "bg-[#003B7E] text-[#fff] w-fit p-2 px-4 rounded-md stroke-white"
                : "bg-inherit"
            }`}
            to={"thesisstatus"}
          >
            <span className="flex items-center gap-x-2 duration-150 hover:cursor-pointer">
              <Condition />
              وضعیت پایان‌نامه
              {/* <ArrowDown className="w-5" /> */}
            </span>
          </Link>
          <Link
            to={"correspondence"}
            className={`${
              params === "/student/correspondence"
                ? "bg-[#003B7E] text-white w-fit p-2 px-4 rounded-md stroke-white"
                : "bg-inherit"
            }`}
          >
            <span className="flex items-center gap-x-2 duration-150 hover:cursor-pointer">
              <Correspondence />
              مکاتبات
            </span>
          </Link>
          <span
            onClick={toggleModslStatusHandler}
            className="flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer"
          >
            <Logout />
            خروج
          </span>
        </div>
        {/* <div className="flex justify-left items-center gap-x-7 xl:gap-x-10 py-3 text-[#52575C]">
          {/* <button
            onClick={toggleNavbarStatusHandler}
            className="block lg:hidden  rounded-lg"
          >
            <Hamburger />
          </button> *
          <div onClick={refreshPage} to={"/auth"}>
            <button className="w-48 font-medium text-sm hidden md:block bg-[#003B7E] border-2 border-[#003B7E] hover:bg-white hover:text-[#003B7E] duration-200 text-white py-3 px-4 rounded-lg">
              ورود
            </button>
          </div>
        </div> */}

        {/* mobile view Navbar */}
        <div
          onClick={toggleNavbarStatusHandler}
          className={`${
            isOpenNavbar ? "left-0" : "left-full"
          } duration-200 z-[90] fixed block md:hidden bg-black bg-opacity-70 backdrop-blur-sm top-0 right-0 bottom-0 left-0 overflow-hidden`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-9/12 sm:w-7/12 md:w-5/12 h-full bg-white"
          >
            <div className="w-full flex flex-col items-center gap-y-5 p-5 sm:p-10 text-[#52575C]">
              <button onClick={toggleNavbarStatusHandler} className="self-end">
                <CloseCircle />
              </button>
              {/* <Link
                    className="w-16 h-16 md:w-24 md:h-24"
                    onClick={toggleNavbarStatusHandler}
                    to={"/"}
                  >
                    <img src={Logo} alt="mahak" />
                  </Link> */}
              <div className="self-start text-[#003B7E] flex flex-col items-start gap-y-10 my-10">
                <span
                  onClick={clickHandler}
                  className="flex focus:bg-white  items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer"
                >
                  <Forms />
                  فرم های اولیه
                  {/* <ArrowDown className="w-5" /> */}
                </span>
                <Link
                  to={"preregistration"}
                  className={`${
                    params === "/student/preregistration"
                      ? "bg-[#003B7E] text-[#fff] w-fit p-2 px-4 rounded-md stroke-white"
                      : "bg-inherit"
                  }`}
                >
                  <span className="flex items-center gap-x-2 duration-150 hover:cursor-pointer">
                    <Writerinformation />
                    پیش ثبت نام
                    {/* <ArrowDown className="w-5" /> */}
                  </span>{" "}
                </Link>
                <Link
                  to={"thesisstatus"}
                  className={`${
                    params === "/student/thesisstatus"
                      ? "bg-[#003B7E] text-[#fff] w-fit p-2 px-4 rounded-md stroke-white"
                      : "bg-inherit"
                  }`}
                >
                  <span className="flex items-center gap-x-2  duration-150 hover:cursor-pointer">
                    <Condition />
                    وضعیت پایان‌نامه
                    {/* <ArrowDown className="w-5" /> */}
                  </span>
                </Link>
                <Link
                  to={"correspondence"}
                  className={`${
                    params === "/student/correspondence"
                      ? "bg-[#003B7E] text-[#fff] w-fit p-2 px-4 rounded-md stroke-white"
                      : "bg-inherit"
                  }`}
                >
                  <span className="flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer">
                    <Correspondence />
                    مکاتبات
                  </span>
                </Link>
                <span className="flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer">
                  <Profile />
                  پروفایل
                </span>
                <span className="flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer">
                  <Logout />
                  خروج
                </span>
              </div>
              {/* <div
                onClick={refreshPage}
                to={"/auth"}
                className="block md:hidden font-medium text-sm w-full text-center bg-[#003B7E] border-2 border-[#003B7E] hover:bg-white hover:text-[#003B7E] duration-200 text-white py-3 px-4 rounded"
              >
                ورود
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meno;
