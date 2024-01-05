import { useState, useEffect } from "react";
//SVG
import { ReactComponent as Search } from "../../../../assets/svg/search-normal.svg";

//Components
import Loding from "../../../common/loding";
import SingleList from "./singlelist";
import Pagination from "../../../common/pagination";
import {
  GetAllDissertations,
  GetSelfDissertationAutomatic,
} from "../../../../services/employees";
import { Cookies } from "react-cookie";

const ThesisList = ({}) => {
  const [searchStudentNumber, setSearchStudentNumber] = useState("");
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);
  const [searchData, setSearchData] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const [isFinish, setIsFinish] = useState(false);
  const [data, setData] = useState([]);
  const [erorr, setError] = useState({});
  // const [indexList, setIndexList] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get("token");
  const role = cookies.get("role");

  useEffect(() => {
    if (role === "GuideMaster") {
      asyncGetSelfDissertationAutomatic();
    } else {
      asyncGetAllDissertations();
    }
  }, []);
  const asyncGetSelfDissertationAutomatic = async (num = 1) => {
    setIsLoading(true);
    setError({});

    const pageSize = 5;
    const response = await GetSelfDissertationAutomatic(token, num, pageSize);

    if (response.status === 200) {
      // console.log(response);
      setData(response.data);
      if (response.data.length < 5) {
        setIsFinish(true);
      }
    } else {
      //error occurre
      console.log("response : ", response);
    }

    setIsLoading(false);
  };
  const asyncGetAllDissertations = async (num = 1) => {
    setIsLoading(true);
    setError({});

    const pageSize = 5;
    const response = await GetAllDissertations(token, num, pageSize);

    if (response.status === 200) {
      // console.log(response);
      setData(response.data);
      if (response.data.length < 5) {
        setIsFinish(true);
      } else {
        setIsFinish(false);
      }
    } else {
      //error occurre
      console.log("response : ", response);
    }

    setIsLoading(false);
  };
  const updateData = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    });
  };
  // const thesis = [
  //   {
  //     id: "1",
  //     name: "علی",
  //     family: "محجوب",
  //     number: "3981231096",
  //     title: " پایان‌نامه",
  //   },
  //   {
  //     id: "2",
  //     name: "علی",
  //     family: "محجوب",
  //     number: "3981231095",
  //     title: "سامانه پایان‌نامه",
  //   },
  //   {
  //     id: "3",
  //     name: "علی",
  //     family: "محجوب",
  //     number: "3981231094",
  //     title: "سامانه پایان‌نامه",
  //   },
  //   {
  //     id: "4",
  //     name: "علی",
  //     family: "محجوب",
  //     number: "3981231093",
  //     title: " پایان‌نامه",
  //   },
  //   {
  //     id: "5",
  //     name: "علی",
  //     family: "محجوب",
  //     number: "3981231093",
  //     title: " پایان‌نامه",
  //   },
  // ];
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
      <div className="flex flex-col items-start sm:gap-5 my-3">
        <div className="flex flex-col items-start sm:flex-row sm:items-center sm:gap-8 ">
          <div className="flex flex-col ">
            <span>نام و نام خانوادگی</span>
            <input
              name="fullName"
              type={"text"}
              className="h-10 p-2 mb-3 bg-white border-2 rounded-md "
              onChange={updateData}
            />
          </div>
          <div className="flex flex-col">
            <span>شماره دانشجویی</span>
            <input
              name="userName"
              className="h-10 p-2 mb-3 bg-white border-2 rounded-md "
              type={"text"}
              onChange={updateData}
            />
          </div>
          <div className="flex gap-x-10">
            <button
              onClick={asyncGetSelfDissertationAutomatic}
              className="bg-[#435bf1] flex flex-row-reverse h-10 justify-center items-center mt-3 px-6 gap-2 rounded-md text-white"
            >
              جستجو
              <Search />
            </button>
            {/* <button
                onClick={asyncGetAllUser}
                className="bg-[#435bf1] flex flex-row-reverse h-10 justify-center items-center mt-3 px-6 gap-2 rounded-md text-white"
              >
                نمایش همه
              </button> */}
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="bg-white min-h-[10rem] min-w-[30rem]  p-4 my-5 rounded-md">
          <div className="grid grid-cols-12  font-medium bg-[#F8F9FA]  p-3 rounded-sm">
            <span className="col-span-1">#</span>
            {/* <span className="hidden lg:block">نام</span>
          <span className="hidden md:block">نام خانوادگی</span>
          <span className="col-span-2 lg:col-span-1">شماره دانشجویی</span> */}
            <span className="text-center col-span-3">وضعیت</span>
            <span className="col-span-4 text-center">عنوان</span>
            <span className="col-span-2 text-center"> ترم</span>
          </div>
          {data.length > 0 ? (
            Array.isArray(data) &&
            data.map((item, index) => (
              <SingleList key={index} id={index} singleDissertation={item} />
            ))
          ) : (
            <div className="flex justify-center mt-5">
              <span className="flex justify-center text-white bg-[#237ad6] w-fit px-10 py-4 rounded-md text-xl  ">
                هیچ اطلاعاتی یافت نشد
              </span>
            </div>
          )}
        </div>
      </div>
      <Pagination
        action={(num) => {
          role === "GuideMaster"
            ? asyncGetSelfDissertationAutomatic(num)
            : asyncGetAllDissertations(num);
        }}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        isFinish={isFinish}
      />
      {/* <Loding /> */}
    </div>
  );
};

export default ThesisList;
