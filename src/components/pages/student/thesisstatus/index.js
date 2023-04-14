const ThesisStatus = () => {
  return (
    <div className="flex sm:px-8 py-4 w-full">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1">
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
      <div>
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default ThesisStatus;
