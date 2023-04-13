import { useState } from "react";
const PersonalInformation = ({ stepForwardHandler }) => {
  const [selected, setSelected] = useState();

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };
  const options = [
    {
      label: "Mango",
      value: "mango",
    },
    {
      label: "Apple",
      value: "apple",
    },
    {
      label: "Banana",
      value: "banana",
    },
    {
      label: "Pineapple",
      value: "pineapple",
    },
  ];
  return (
    <div className="bg-[#fff] my-10 px-5 py-8 rounded-md">
      <div className="flex flex-col">
        <div className=" grid grid-cols-1 md:grid-cols-12 lg:gap-x-8 gap-x-2 md:gap-y-10 gap-y-5">
          <div className="flex flex-col md:col-span-5">
            <span className="sm:text-base font-medium text-sm">نام </span>
            <input
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
              placeholder="نام خود را وارد کنید"
              type={"text"}
              required
            />
          </div>
          <div className="flex flex-col md:col-span-5">
            <span className="sm:text-base font-medium text-sm">
              نام خانوادگی
            </span>
            <input
              required
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
              placeholder=" نام‌خانوادگی خود را وارد کنید"
              type={"text"}
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <span className="sm:text-base font-medium text-sm">شماره ترم</span>
            <input
              required
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
              // placeholder=" شماره ترم خود را وارد کنید"
              type={"text"}
            />
          </div>
          <div className="flex flex-col md:col-span-6">
            <span className="sm:text-base font-medium text-sm">دانشکده</span>
            <select
              value={selected}
              onChange={handleChange}
              defaultValue={""}
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
            >
              <option value="">دانشکده مورد نظر خود را انتخاب کنید</option>
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
              defaultValue={"DEFAULT"}
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
            >
              <option disabled selected value="DEFAULT" className="">
                استاد راهنما مورد نظر خود را انتخاب کنید
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
              استاد راهنمای دوم (اختیاری)
            </span>
            <select
              defaultValue={"DEFAULT"}
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
            >
              <option selected disabled={true} value="DEFAULT" className="">
                استاد راهنما مورد نظر خود را انتخاب کنید
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
              استاد راهنمای سوم (اختیاری)
            </span>
            <select
              defaultValue={"DEFAULT"}
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
            >
              <option selected disabled={true} value="DEFAULT" className="">
                استاد راهنما مورد نظر خود را انتخاب کنید
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          onClick={stepForwardHandler}
          className="bg-[#003b7e29] sm:px-4 self-end p-2 mt-6 rounded-md text-lg text-[#003B7E]"
        >
          مرحله بعدی
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;
