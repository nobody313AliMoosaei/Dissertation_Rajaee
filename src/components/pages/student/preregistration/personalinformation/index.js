import { useState, useEffect } from "react";
//toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../../../App.css";

//services
import { GetAllTeacher } from "../../../../../services/student";
//Components

const options = [
  {
    label: "کامپیوتر",
    value: "کامپیوتر",
  },
  {
    label: "برق",
    value: "برق",
  },
  {
    label: "معماری",
    value: "معماری",
  },
  {
    label: "عمران",
    value: "عمران",
  },
];

const PersonalInformation = ({ stepForwardHandler }) => {
  const [information, setInformation] = useState({});
  const [teachers, setTeachers] = useState([]);
  const [filterTeachers, setFilterTeachres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const updateData = (e) => {
    setInformation({
      ...information,
      [e.target.name]: e.target.value,
    });
  };

  const filterteachers = (e) => {
    const result = teachers.filter((item) => item.college === e.target.value);
    setFilterTeachres(result);
    updateData(e);
  };

  useEffect(() => {
    const data = sessionStorage.getItem("information");
    if (data && Object.keys(data).length > 0) {
      setInformation({ ...JSON.parse(data) });
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
    } else {
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
              name="College"
              value={information.College || ""}
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
            >
              <option disabled selected value="">
                دانشکده مورد نظر خود را انتخاب کنید
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
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
              onChange={updateData}
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
              استاد راهنمای دوم (اختیاری)
            </span>
            <select
              name="Teacher_2"
              value={information.Teacher_2 || ""}
              onChange={updateData}
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
          <div className="flex flex-col md:col-span-6">
            <span className="sm:text-base font-medium text-sm">
              استاد راهنمای سوم (اختیاری)
            </span>
            <select
              name="Teacher_3"
              value={information.Teacher_3 || ""}
              onChange={updateData}
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
