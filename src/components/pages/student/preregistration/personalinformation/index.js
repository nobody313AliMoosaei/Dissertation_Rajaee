const PersonalInformation = ({ stepForwardHandler }) => {
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
            <sapn className="sm:text-base font-medium text-sm">نام </sapn>
            <input
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
              placeholder="نام خود را وارد کنید"
              type={"text"}
              required
            />
          </div>
          <div className="flex flex-col md:col-span-5">
            <sapn className="sm:text-base font-medium text-sm">
              نام خانوادگی
            </sapn>
            <input
              required
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
              placeholder=" نام‌خانوادگی خود را وارد کنید"
              type={"text"}
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <sapn className="sm:text-base font-medium text-sm">شماره ترم</sapn>
            <input
              required
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
              // placeholder=" شماره ترم خود را وارد کنید"
              type={"text"}
            />
          </div>
          <div className="flex flex-col md:col-span-6">
            <sapn className="sm:text-base font-medium text-sm">دانشکده</sapn>
            <select className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm ">
              <option disabled={true} selected value="" className="">
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
            <sapn className="sm:text-base font-medium text-sm">
              استاد راهنما (اجباری)
            </sapn>
            <select className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm ">
              <option disabled selected value="" className="">
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
            <sapn className="sm:text-base font-medium text-sm">
              استاد راهنمای دوم (اختیاری)
            </sapn>
            <select className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm ">
              <option selected disabled={true} value="" className="">
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
            <sapn className="sm:text-base font-medium text-sm">
              استاد راهنمای سوم (اختیاری)
            </sapn>
            <select className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm ">
              <option selected disabled={true} value="" className="">
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