import { render } from "@testing-library/react";
import { useState, useEffect } from "react";
//toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../../../App.css";
// SVG
import { ReactComponent as Backward } from "../../../../../assets/svg/backward.svg";
import { ReactComponent as Trash } from "../../../../../assets/svg/close.svg";
//Services
import {
  UploadDissertation,
  UploadUpdateDissertation,
} from "../../../../../services/student";
//Cookies
import { Cookies } from "react-cookie";

const UploadThesis = ({
  stepForwardHandler,
  stepBackwardHandler,
  dis_Id = -1,
}) => {
  const [dissertationFile, setDissertationFile] = useState();
  const [proceedingsFile, setProceedingsFile] = useState();
  const [data, setData] = useState({});
  const cookies = new Cookies();
  const [token, setCookie] = useState(cookies.get("token"));

  const changeHandler = (event) => {
    if (event.target.id === "thesis") {
      setDissertationFile(event.target.files[0]);
    } else {
      setProceedingsFile(event.target.files[0]);
    }
  };
  useEffect(() => {
    const personalInfo = sessionStorage.getItem("information");
    const KeyWords_Persian = JSON.parse(
      sessionStorage.getItem("KeyWords_Persian")
    );
    const KeyWords_English = JSON.parse(
      sessionStorage.getItem("KeyWords_English")
    );
    const thesisInformation = sessionStorage.getItem("thesisInformation");
    if (
      personalInfo &&
      KeyWords_English &&
      KeyWords_Persian &&
      thesisInformation
    ) {
      setData({
        ...JSON.parse(personalInfo),
        ...JSON.parse(thesisInformation),
        KeyWords_English,
        KeyWords_Persian,
      });
    }
  }, []);

  const notify = () =>
    toast.error("اطلاعات کامل وارد نشده است!!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      // closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const httpUploadDisertation = async () => {
    const formData = new FormData();
    formData.append("DissertationFile", dissertationFile);
    formData.append("ProFile", proceedingsFile);
    try {
      var response;
      if (dis_Id) {
        response = await UploadUpdateDissertation({
          formData,
          data,
          token,
          dis_Id,
        });
      } else {
        response = await UploadDissertation({
          formData,
          data,
          token,
        });
      }

      if (response.status === 200) {
        console.log("با موفیت ثبت شد");
        stepForwardHandler();
      } else {
        console.log(response);
        toast.error("اضافه کردن پروژه ناموفق بود");
      }
    } catch (error) {
      console.log("error in upload dissertation : ", error);
    }
  };

  const handelStoreInformation = () => {
    if (!dissertationFile || !proceedingsFile) {
      notify();
    } else {
      httpUploadDisertation();
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
              htmlFor="thesis"
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
                  htmlFor="thesis"
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
                    accept=".rar , .zip , .pdf , .docx"
                    type="file"
                    className="hidden"
                  />
                </label>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="Proceedings"
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
                  htmlFor="Proceedings"
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
                    accept=".jpg , .png , .jpeg"
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
            onClick={handelStoreInformation}
            className="bg-[#003b7e29] sm:px-4 self-end p-2 mt-6 rounded-md text-lg text-[#003B7E]"
          >
            ثبت نهایی
          </button>
          <ToastContainer bodyClassName="toast-message" />
        </div>
      </div>
    </div>
  );
};

export default UploadThesis;
