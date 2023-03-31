// SVG
import { ReactComponent as Backward } from "../../../../../assets/svg/backward.svg";

const UploadThesis = ({ stepForwardHandler, stepBackwardHandler }) => {
  return (
    <div className="bg-[#fff] mt-10 p-5 rounded-md">
      <div className="flex flex-col">
        <div className="flex flex-row border-solid border-2 rounded-md w-fit border-[#003b7e73] mb-4 px-2 py-1 items-center">
          <Backward />
          <button
            onClick={stepBackwardHandler}
            className=" pr-2 text-lg text-[#003B7E]"
          >
            بازگشت
          </button>
        </div>
        <div className="flex flex-col gap-6 justify-around">
          <div className="flex flex-col">
            <label
              for="thesis"
              className="bg-[003b7e29] cursor-pointer p-2 rounded-md text-[#003B7E] "
            >
              انتخاب پایان‌نامه:
            </label>
            <input
              className="text-sm text-grey-500 file:mr-5 file:py-2 file:px-5 file:rounded-lg file:border-0 file:text-md  file:text-white file:bg-gradient-to-r file:bg-[#003B7E]  hover:file:cursor-pointer hover:file:opacity-80"
              id="thesis"
              type="file"
              accept=".rar , .zip"
            />
          </div>
          <div className="flex flex-col">
            <label
              for="Proceedings"
              className="bg-[003b7e29] cursor-pointer p-2 rounded-md text-[#003B7E] "
            >
              انتخاب صورت جلسه:
            </label>
            <input
              accept=""
              className=" text-sm text-grey-500 file:mr-5 file:py-2 file:px-5 file:rounded-lg file:border-0 file:text-md  file:text-white file:bg-gradient-to-r file:bg-[#003B7E]  hover:file:cursor-pointer hover:file:opacity-80"
              id="Proceedings"
              type="file"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between">
          <button
            onClick={stepForwardHandler}
            className="bg-[#003b7e29] sm:px-4 self-end p-2 mt-6 rounded-md text-lg text-[#003B7E]"
          >
            ثبت نهایی
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadThesis;
