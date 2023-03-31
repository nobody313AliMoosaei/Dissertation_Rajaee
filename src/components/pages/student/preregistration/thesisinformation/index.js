// SVG
import { ReactComponent as Backward } from "../../../../../assets/svg/backward.svg";

const ThesisInformation = ({ stepBackwardHandler, stepForwardHandler }) => {
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
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:gap-x-8 gap-x-2 gap-y-6">
          <div className="flex flex-col">
            <sapn className="sm:text-base font-medium text-sm">
              عنوان پایان‌نامه(فارسی){" "}
            </sapn>
            <input
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
              placeholder="عنوان پایان‌نامه را وارد کنید"
              type={"text"}
            />
          </div>
          <div className="flex flex-col">
            <sapn className="sm:text-base font-medium text-sm">
              عنوان پایان‌نامه(انگلیسی){" "}
            </sapn>
            <input
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
              placeholder="عنوان پایان‌نامه را وارد کنید"
              type={"text"}
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <sapn className="sm:text-base font-medium text-sm">چکیده</sapn>
            <textarea
              className="border-2 min-h-24 max-h-24 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
              name="postContent"
              rows={4}
            />
          </div>
          <div className="flex flex-col">
            <sapn className="sm:text-base font-medium text-sm">
              واژگان(فارسی){" "}
            </sapn>
            <textarea
              className="border-2 min-h-12 max-h-20 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
              name="postContent"
              placeholder="واژگان را وارد کنید"
              rows={4}
            />
          </div>
          <div className="flex flex-col">
            <sapn className="sm:text-base font-medium text-sm">
              واژگان(انگلیسی){" "}
            </sapn>
            <textarea
              className="border-2 min-h-12 max-h-20 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
              name="postContent"
              placeholder="واژگان را وارد کنید"
              rows={4}
            />
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between">
          <button
            onClick={stepForwardHandler}
            className="bg-[#003b7e29] sm:px-4 self-end p-2 mt-6 rounded-md text-lg text-[#003B7E]"
          >
            مرحله بعدی
          </button>
          {/* <button
            onClick={stepBackwardHandler}
            className="bg-[#003b7e29] sm:px-4 self-start p-2 mt-6 rounded-md text-lg text-[#003B7E]"
          >
            بازگشت
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ThesisInformation;
