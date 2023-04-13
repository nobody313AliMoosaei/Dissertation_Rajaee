import { useState } from "react";
// SVG
import { ReactComponent as Backward } from "../../../../../assets/svg/backward.svg";
import { ReactComponent as Trash } from "../../../../../assets/svg/close.svg";

const UploadThesis = ({ stepForwardHandler, stepBackwardHandler }) => {
  const [dissertationFile, setDissertationFile] = useState();
  const [proceedingsFile, setProceedingsFile] = useState();
  const changeHandler = (e) => {
    if (e.target.id === "thesis") {
      setDissertationFile(e.target.files[0]);
    } else {
      setProceedingsFile(e.target.files[0]);
      // console.log("Proceedings");
    }
  };

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
            {dissertationFile ? (
              <div className="flex items-center p-3 gap-6 w-full h-24 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 ">
                <div
                  onClick={() => setDissertationFile("")}
                  className="flex items-center gap-1 stroke-white text-white bg-[#003B7E] px-2 py-1 rounded-md "
                >
                  <Trash />
                  <span>حذف</span>
                </div>
                <span>{dissertationFile.name}</span>
              </div>
            ) : (
              <div className="flex items-center justify-center w-full">
                <label
                  for="thesis"
                  className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-medium text-sm text-grey-500 mr-5 py-2 px-5 rounded-lg border-0 text-md  text-white bg-gradient-to-r bg-[#003B7E]  hover:cursor-pointer hover:opacity-80 ">
                        انتخاب فایل
                      </span>
                    </p>
                  </div>
                  <input
                    onChange={(e) => changeHandler(e)}
                    id="thesis"
                    accept=".rar , .zip"
                    type="file"
                    className="hidden"
                  />
                </label>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label
              for="Proceedings"
              className="bg-[003b7e29] cursor-pointer p-2 rounded-md text-[#003B7E] "
            >
              انتخاب صورت جلسه:
            </label>
            {proceedingsFile ? (
              <div className="flex items-center p-3 gap-6 w-full h-24 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 ">
                <div
                  onClick={() => setProceedingsFile("")}
                  className="flex items-center gap-1 stroke-white text-white bg-[#003B7E] px-2 py-1 rounded-md "
                >
                  <Trash />
                  <span>حذف</span>
                </div>
                <span>{proceedingsFile.name}</span>
              </div>
            ) : (
              <div className="flex items-center justify-center w-full">
                <label
                  for="Proceedings"
                  className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-medium text-sm text-grey-500 mr-5 py-2 px-5 rounded-lg border-0 text-md  text-white bg-gradient-to-r bg-[#003B7E]  hover:cursor-pointer hover:opacity-80 ">
                        انتخاب فایل
                      </span>
                    </p>
                  </div>
                  <input
                    id="Proceedings"
                    accept=".rar , .zip"
                    type="file"
                    className="hidden"
                    onChange={(e) => changeHandler(e)}
                  />
                </label>
              </div>
            )}
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
