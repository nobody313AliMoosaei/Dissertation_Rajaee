import { useState, useEffect } from "react";
//SVG
import { ReactComponent as Search } from "../../../../assets/svg/search-normal.svg";

//Components
import Loding from "../../../common/loding";
import SingleList from "./singlelist";
import Pagination from "../../../common/pagination";

const ThesisList = ({ check }) => {
  const [searchStudentNumber, setSearchStudentNumber] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [indexList, setIndexList] = useState(1);

  // useEffect(() => {
  //   console.log(searchStudentNumber);
  // });

  const searchHandler = () => {
    setSearchStudentNumber(document.getElementById("studentNumber").value);
    setSearchTitle(document.getElementById("title").value);
  };

  const thesis = [
    {
      id: "1",
      name: "علی",
      family: "محجوب",
      number: "3981231096",
      title: " پایان‌نامه",
    },
    {
      id: "2",
      name: "علی",
      family: "محجوب",
      number: "3981231095",
      title: "سامانه پایان‌نامه",
    },
    {
      id: "3",
      name: "علی",
      family: "محجوب",
      number: "3981231094",
      title: "سامانه پایان‌نامه",
    },
    {
      id: "4",
      name: "علی",
      family: "محجوب",
      number: "3981231093",
      title: " پایان‌نامه",
    },
    {
      id: "5",
      name: "علی",
      family: "محجوب",
      number: "3981231093",
      title: " پایان‌نامه",
    },
  ];
  return (
    <div className="container mx-auto w-10/12">
      <div className="flex items-center justify-between">
        <div className="sm:my-14 my-8  flex gap-2 text-lg">
          <span>داشبورد</span>
          <span>/</span>
          <span>پایان‌نامه ها</span>
        </div>
        {/* <div className="flex gap-5">
          <button className="bg-[#2080F6] flex flex-row-reverse h-10 justify-center items-center mt-3 px-6 gap-2 rounded-md text-white">
            پایان‌نامه های رد شده
          </button>
          <button className="bg-[#2080F6] flex flex-row-reverse h-10 justify-center items-center mt-3 px-6 gap-2 rounded-md text-white">
            پایان نامه های تایید شده
          </button>
        </div> */}
      </div>
      <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-8">
        <div className="flex flex-col">
          <span>عنوان</span>
          <input
            id="title"
            type={"text"}
            className="border-2 p-2 bg-white rounded-md h-10 mb-3 "
          />
        </div>
        <div className="flex flex-col">
          <span>شماره دانشجویی</span>
          <input
            id="studentNumber"
            className="border-2 p-2 bg-white rounded-md h-10 mb-3 "
            type={"text"}
          />
        </div>
        <div>
          <button
            onClick={searchHandler}
            className="bg-[#2080F6] flex flex-row-reverse h-10 justify-center items-center mt-3 px-6 gap-2 rounded-md text-white"
          >
            جستجو
            <Search />
          </button>
        </div>
      </div>
      <div className="bg-white min-h-[19rem] p-4 my-5 rounded-md">
        <div className="grid md:grid-cols-7 sm:grid-cols-6 grid-cols-5 font-medium bg-[#F8F9FA]  p-3 rounded-sm">
          <span className="col-span-1">#</span>
          <span className="hidden lg:block">نام</span>
          <span className="hidden md:block">نام خانوادگی</span>
          <span className="col-span-2 lg:col-span-1">شماره دانشجویی</span>
          <span className="hidden sm:block sm:col-span-2">عنوان</span>
        </div>
        {Array.isArray(thesis) &&
          thesis.map((item, index) => (
            <SingleList
              check={check}
              key={index}
              id={item.id}
              name={item.name}
              family={item.family}
              number={item.number}
              title={item.title}
            />
          ))}
      </div>
      <Pagination
        count={thesis.length}
        setIndexList={setIndexList}
        pageNumber={indexList}
      />
      {/* <Loding /> */}
    </div>
  );
};

export default ThesisList;
