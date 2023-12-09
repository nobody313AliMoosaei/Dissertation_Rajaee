import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
import { Cookies } from "react-cookie";

const urls_menu = [
  {
    id: 1,
    url: "/Student",
    text: "فرم های اولیه",
    icon: <Forms />,
  },
  {
    id: 2,
    url: "/Student/preregistration",
    text: "پیش ثبت نام",
    icon: <Writerinformation />,
  },
  {
    id: 3,
    url: "/Student/thesisstatus",
    text: "وضعیت پایان‌نامه",
    icon: <Condition />,
  },
  {
    id: 3,
    url: "/Student/correspondence",
    text: "مکاتبات",
    icon: <Correspondence />,
  },
];

const urls_menu_mobile = [
  {
    id: 1,
    url: "/Student",
    text: "فرم های اولیه",
    icon: <Forms />,
  },
  {
    id: 2,
    url: "/Student/preregistration",
    text: "پیش ثبت نام",
    icon: <Writerinformation />,
  },
  {
    id: 3,
    url: "/Student/thesisstatus",
    text: "وضعیت پایان‌نامه",
    icon: <Condition />,
  },
  {
    id: 3,
    url: "/Student/correspondence",
    text: "مکاتبات",
    icon: <Correspondence />,
  },
  {
    id: 3,
    url: "/Student/profile",
    text: "پروفایل",
    icon: <Correspondence />,
  },
];
const Meno = () => {
  let location = useLocation();
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const [isOpenmodalExit, setIsOpenmodalExit] = useState(false);
  const cookies = new Cookies();
  const [token, setCookie, removeCookie] = useState(cookies.get("token"));

  const toggleNavbarStatusHandler = () => {
    setIsOpenNavbar(!isOpenNavbar);
  };
  const toggleModslStatusHandler = () => {
    setIsOpenmodalExit(!isOpenmodalExit);
  };

  return (
    <div
      className={`${"top-0 left-0 right-0  w-full rounded-none px-10 md:px-0 "}   bg-[#fff] shadow-[0_2px_7px_0px_rgba(6,23,48,0.1)] lg:w-3/12 md:w-4/12  `}
    >
      <div
        className={`w-full h-full right-0 fixed bg-[#504f4f99] z-[100] text-center flex justify-center items-center ${
          isOpenmodalExit ? "flex" : "hidden"
        }`}
      >
        <div className="bg-[#fff] p-5 rounded-sm">
          <p className="mb-5 font-medium">
            آیا میخواهید از پنل کاربری خود خارج شوید؟
          </p>
          <div className="flex flex-row-reverse justify-between">
            <Link
              onClick={() => {
                sessionStorage.clear();
                removeCookie();
              }}
              to={"/"}
            >
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
          {urls_menu.map((item, index) => (
            <Link
              key={index}
              className={`${
                location.pathname === item.url
                  ? "bg-[#003B7E] text-[#fff] w-fit p-2 px-4 rounded-md"
                  : "bg-inherit"
              }`}
              to={item.url}
            >
              <span className="flex items-center gap-x-2 duration-150 hover:cursor-pointer">
                {item.icon}
                {item.text}
              </span>
            </Link>
          ))}
          <span
            onClick={toggleModslStatusHandler}
            className="flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer"
          >
            <Logout />
            خروج
          </span>
        </div>

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
              <div className="self-start text-[#003B7E] flex flex-col items-start gap-y-10 my-10">
                {urls_menu_mobile.map((item, index) => (
                  <Link
                    key={index}
                    className={`${
                      location.pathname === item.url
                        ? "bg-[#003B7E] text-[#fff] w-fit p-2 px-4 rounded-md"
                        : "bg-inherit"
                    }`}
                    to={item.url}
                  >
                    <span className="flex items-center gap-x-2 duration-150 hover:cursor-pointer">
                      {item.icon}
                      {item.text}
                    </span>
                  </Link>
                ))}
                <span
                  onClick={toggleModslStatusHandler}
                  className="flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer"
                >
                  <Logout />
                  خروج
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meno;
