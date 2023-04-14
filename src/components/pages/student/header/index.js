import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//SVG
import { ReactComponent as Profile } from "../../../../assets/svg/profile-circle.svg";
import { ReactComponent as ArrowDown } from "../../../../assets/svg/arrow-down.svg";

const Header = () => {
  const [openProfile, setOpenprofile] = useState(false);
  const [isOpenmodalExit, setIsOpenmodalExit] = useState(false);

  const toggleModslStatusHandler = () => {
    setIsOpenmodalExit(!isOpenmodalExit);
  };

  const toggleOpenProfile = () => {
    setOpenprofile(!openProfile);
  };

  // const [Time, setTime] = useState(new Date().toLocaleTimeString("fa-IR"));
  // useEffect(() => {
  //   setInterval(() => {
  //     setTime(new Date().toLocaleTimeString("fa-IR"));
  //   }, 1000);
  // });

  let options = { year: "numeric", month: "long", day: "numeric" };
  let today = new Date().toLocaleDateString("fa-IR", options);
  // console.log(today);
  return (
    <div className="hidden md:flex bg-[#fff] h-20 px-10  justify-between items-center">
      <div
        className={`z-20 w-[100vw] h-[100vh] bg-[#504f4f99] top-0 right-0 absolute text-center flex justify-center items-center ${
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
      <div className="flex flex-row gap-4">
        <p>
          سلام ،<span className="px-2"> کاربر عزیز</span>عزیز خوش آمدی&#128075;
        </p>
        <span className="font-bold text-lg">|</span>
        <div className="flex gap-4 ">
          {/* <span>{Time}</span> */}
          <span className="">{today}</span>
        </div>
      </div>
      <div
        onClick={toggleOpenProfile}
        className="z-10 flex justify-center items-center gap-1 flex-row-reverse"
      >
        <ArrowDown
          className={`h-4 w-4 cursor-pointer ${
            openProfile ? "rotate-180 duration-300" : "duration-300"
          }`}
        />
        <Profile className="cursor-pointer" />
        <div
          className={`absolute flex flex-col top-[5.4rem] left-5 shadow-lg rounded-md to bg-[#fff] p-2 gap-3 ${
            openProfile ? "" : "hidden"
          }`}
        >
          <Link onClick={toggleOpenProfile} to={"profile"}>
            <span className="cursor-pointer">پروفایل</span>
          </Link>
          <span className="cursor-pointer" onClick={toggleModslStatusHandler}>
            خروج از اکانت
          </span>
          {/* <span></span> */}
        </div>
      </div>
    </div>
  );
};
export default Header;
