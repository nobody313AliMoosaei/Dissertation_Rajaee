const Newletter = () => {
  const options = [
    {
      label: "استاد راهنما",
      value: "1",
    },
    {
      label: "کارشناس آموزش",
      value: "2",
    },
    {
      label: "کارشناس تحصیلات تکمیلی",
      value: "3",
    },
    {
      label: "کارشناس امور پایان‌نامه",
      value: "4",
    },
  ];
  return (
    <div
      className={`flex flex-col gap-3 bg-white   rounded-md md:w-3/4 p-8 mt-10`}
    >
      <div className="flex flex-col w-fit gap-2 ">
        <span className="sm:text-base font-medium text-sm">گیرنده</span>

        <select className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm ">
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2 sm:w-3/4 md:w-full lg:w-3/4 w-full ">
        <span className="sm:text-base font-medium text-sm">عنوان</span>
        <input className="border-2 h-10 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md p-1 sm:text-base text-sm " />
      </div>
      <div className="flex flex-col gap-2 sm:w-3/4 md:w-full lg:w-3/4 w-full ">
        <span className="sm:text-base font-medium text-sm">متن</span>
        <textarea
          className="border-2  focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-36 resize-none h-28 p-1 sm:text-base text-sm "
          name="postConteant"
          rows={4}
        />
      </div>
      <button className="bg-[#003b7e29] sm:px-4 self-end p-2 mt-4 rounded-md text-lg text-[#003B7E]">
        ارسال پیام
      </button>
    </div>
  );
};

export default Newletter;
