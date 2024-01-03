import { useState, useEffect } from "react";
//toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../../../App.css";

//services
import {
  GetAllTeacher,
  GetAllCollage,
  GetUserById,
} from "../../../../../services/student";

const PersonalInformation = ({ stepForwardHandler, id = 0 }) => {
  const [information, setInformation] = useState({});
  const [teachers, setTeachers] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [filterTeachers, setFilterTeachres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSelectTeacher1, setIsSelectTeacher1] = useState(true);
  const [isSelectTeacher2, setIsSelectTeacher2] = useState(true);

  const updateData = (e) => {
    setInformation({
      ...information,
      [e.target.name]: e.target.value,
    });
  };

  const filterteachers = (e) => {
    console.log(e.target.value);
    console.log(teachers[0].collegRef);
    const result = teachers.filter(
      (item) => Number(item.collegRef) === Number(e.target.value)
    );
    setFilterTeachres(result);
    updateData(e);
  };

  useEffect(() => {
    if (id) {
      asyncGetUserById();
    }
    asyncGetCollageList();
    const data = sessionStorage.getItem("information");
    if (data && Object.keys(data).length > 0) {
      setInformation({ ...JSON.parse(data) });
      setIsSelectTeacher1(false);
      if (information.Teacher_2 !== "" && information.Teacher_2 !== undefined) {
        setIsSelectTeacher2(false);
      }
    }
    asyncGetTeacherList();
  }, []);

  const asyncGetTeacherList = async () => {
    setIsLoading(true);
    try {
      const response = await GetAllTeacher();

      //check repsonse status
      if (response.status === 200) {
        setTeachers([...response.data]);
        setFilterTeachres([...response.data]);
        // console.log(response);
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const asyncGetUserById = async () => {
    setIsLoading(true);
    try {
      const response = await GetUserById(id);

      //check repsonse status
      if (response.status === 200) {
        console.log(response);
        setInformation(response.data);
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const asyncGetCollageList = async () => {
    setIsLoading(true);
    try {
      const response = await GetAllCollage();

      //check repsonse status
      if (response.status === 200) {
        setColleges([...response.data]);
        // console.log(response);
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const notify = () => toast.error("اطلاعات کامل وارد نشده است!!", {});

  const handelStoreInformation = () => {
    // console.log(information);
    if (
      information.FirstName === "" ||
      information.LastName === "" ||
      information.Term_Number === "" ||
      information.College === "" ||
      information.Teacher_1 === "" ||
      Object.keys(information).length < 5
    ) {
      notify();
    } else if (
      information.Teacher_1 === information.Teacher_2 ||
      information.Teacher_1 === information.Teacher_3 ||
      (information.Teacher_2 === information.Teacher_3 &&
        information.Teacher_2 !== undefined)
    ) {
      toast.error("استاد راهنمای تکراری وجود دارد!!", {});
    } else {
      if (information.Teacher_2 === "") {
        delete information["Teacher_2"];
      }
      if (information.Teacher_3 === "") {
        delete information["Teacher_3"];
      }
      sessionStorage.setItem("information", JSON.stringify(information));
      stepForwardHandler();
    }
  };

  return (
    <div className="bg-[#fff] my-10 px-5 py-8 rounded-md">
      <div className="flex flex-col">
        <div className=" grid grid-cols-1 md:grid-cols-12 lg:gap-x-8 gap-x-2 md:gap-y-10 gap-y-5">
          <div className="flex flex-col md:col-span-5">
            <span className="sm:text-base font-medium text-sm">نام </span>
            <input
              onChange={updateData}
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
              placeholder="نام خود را وارد کنید"
              type={"text"}
              name="FirstName"
              value={information.FirstName || ""}
              required
            />
          </div>
          <div className="flex flex-col md:col-span-5">
            <span className="sm:text-base font-medium text-sm">
              نام خانوادگی
            </span>
            <input
              onChange={updateData}
              required
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
              placeholder=" نام‌خانوادگی خود را وارد کنید"
              type={"text"}
              value={information.LastName || ""}
              name="LastName"
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <span className="sm:text-base font-medium text-sm">شماره ترم</span>
            <input
              onChange={updateData}
              required
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
              // placeholder=" شماره ترم خود را وارد کنید"
              type={"text"}
              value={information.Term_Number || ""}
              name="Term_Number"
            />
          </div>
          <div className="flex flex-col md:col-span-6">
            <span className="sm:text-base font-medium text-sm">دانشکده</span>
            <select
              onChange={filterteachers}
              name="CollegeRef"
              value={information.CollegeRef || ""}
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
            >
              <option disabled selected value="">
                دانشکده مورد نظر خود را انتخاب کنید
              </option>
              {colleges.map((option) => (
                <option key={option.code} value={option.id}>
                  {option.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col md:col-span-6">
            <span className="sm:text-base font-medium text-sm">
              استاد راهنما (اجباری)
            </span>
            <select
              name="Teacher_1"
              value={information.Teacher_1 || ""}
              onChange={(e) => {
                updateData(e);
                setIsSelectTeacher1(false);
              }}
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
            >
              <option disabled selected value="" className="">
                استاد راهنما مورد نظر خود را انتخاب کنید
              </option>
              {filterTeachers.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.firstName + " "}
                  {option.lastName}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col md:col-span-6">
            <span className="sm:text-base font-medium text-sm">
              استاد راهنمای دوم (اختیاری)
            </span>
            <select
              name="Teacher_2"
              disabled={isSelectTeacher1}
              value={information.Teacher_2 || ""}
              onChange={(e) => {
                updateData(e);
                setIsSelectTeacher2(false);
              }}
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
            >
              <option value="" className="">
                استاد راهنما مورد نظر خود را انتخاب کنید
              </option>
              {filterTeachers.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.firstName + " "}
                  {option.lastName}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col md:col-span-6">
            <span className="sm:text-base font-medium text-sm">
              استاد راهنمای سوم (اختیاری)
            </span>
            <select
              name="Teacher_3"
              disabled={isSelectTeacher2}
              value={information.Teacher_3 || ""}
              onChange={(e) => {
                updateData(e);
                // setIsSelectTeacher2(false);
              }}
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
            >
              <option className="">
                استاد راهنما مورد نظر خود را انتخاب کنید
              </option>
              {filterTeachers.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.firstName + " "}
                  {option.lastName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          onClick={handelStoreInformation}
          className="bg-[#003b7e29] sm:px-4 self-end p-2 mt-6 rounded-md text-lg text-[#003B7E]"
        >
          مرحله بعدی
        </button>
        <ToastContainer bodyClassName="toast-message" />
      </div>
    </div>
  );
};

export default PersonalInformation;
