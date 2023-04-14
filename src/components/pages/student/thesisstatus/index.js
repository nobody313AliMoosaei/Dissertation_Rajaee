const ThesisStatus = () => {
  return (
    <div className="flex flex-col gap-8 sm:px-8 py-4 w-full">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 px-2">
        <div className="">
          <span
            id="1"
            className={` px-2 ml-2 bg-[#fff]  rounded-full bg-[#fff]"
              }`}
          >
            1
          </span>
          <span className={``}>بارگزاری پایان‌نامه</span>
        </div>
        <div>
          <span
            id="2"
            className={` px-2 ml-2 bg-[#fff]  rounded-full bg-[#fff]" }`}
          >
            2
          </span>
          <span className={``}>تایید استاد راهنما</span>
        </div>
        <div>
          <span id="3" className={` px-2 ml-2 bg-[#fff]  rounded-full `}>
            3
          </span>
          <span className={``}> تایید کارشناس اموزش</span>
        </div>
        <div>
          <span id="3" className={` px-2 ml-2 bg-[#fff]  rounded-full `}>
            4
          </span>
          <span className={``}> تایید کارشناس تحصیلات تکمیلی</span>
        </div>
        <div>
          <span id="3" className={` px-2 ml-2 bg-[#fff]  rounded-full `}>
            5
          </span>
          <span className={``}> تایید کارشناس امور پایان‌نامه</span>
        </div>
      </div>
      <div className="flex flex-col self-center gap-5 my-5 sm:w-3/4 w-full px-2 ">
        <div className="flex flex-col bg-white text-center py-6 rounded-md shadow-md px-2">
          <span className="text-[#037724] text-lg font-medium">
            پایان‌نامه شما با موفقیت ثبت شد.
          </span>
          <span className="text-yellow-400 text-lg font-medium">
            پایان‌نامه خود را آپلود نکرده اید.
          </span>
        </div>
        <div className="flex flex-col bg-white text-center py-6 rounded-md shadow-md px-2">
          <span className="text-[#037724] text-lg font-medium">
            پایان‌نامه شما توسط استاد راهنما تایید شد.
          </span>
          <span className="text-yellow-400 text-lg font-medium">
            پایان‌نامه شما توسط استاد راهنما رد شد. پایان‌نامه را اصلاح مجدد
            ارسال کنید.
          </span>
        </div>
        <div className="flex flex-col bg-white text-center py-6 rounded-md shadow-md px-2">
          <span className="text-[#037724] text-lg font-medium">
            پایان‌نامه شما توسط کارشناس آموزش تایید شد.
          </span>
          <span className="text-yellow-400 text-lg font-medium">
            پایان‌نامه شما توسط کارشناس آموزش رد شد.
          </span>
        </div>
        <div className="flex flex-col bg-white text-center py-6 rounded-md shadow-md px-2">
          <span className="text-[#037724] text-lg font-medium">
            پایان‌نامه شما توسط کارشناس تحصیلات تکمیلی تایید شد.
          </span>
          <span className="text-yellow-400 text-lg font-medium">
            پایان‌نامه شما توسط کارشناس تحصیلات تکمیلی رد شد.
          </span>
        </div>
        <div className="flex flex-col bg-white text-center py-6 rounded-md shadow-md px-2">
          <span className="text-[#037724] text-lg font-medium">
            پایان‌نامه شما توسط کارشناس امور پایان‌نامه تایید شد.
          </span>
          <span className="text-yellow-400 text-lg font-medium">
            پایان‌نامه شما توسط کارشناس امور پایان‌نامه تایید رد شد.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThesisStatus;
