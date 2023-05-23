import { useState, useEffect } from "react";
//toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../../../App.css";
// SVG
import { ReactComponent as Backward } from "../../../../../assets/svg/backward.svg";
import { ReactComponent as Add } from "../../../../../assets/svg/add.svg";
import { ReactComponent as Close } from "../../../../../assets/svg/close.svg";

const ThesisInformation = ({ stepBackwardHandler, stepForwardHandler }) => {
  const [englishVocabulary, setEnglishVocabulary] = useState();
  const [listEnglishVocabulary, setListEnglishVocabulary] = useState([]);
  const [persianVocabulary, setPersianVocabulary] = useState();
  const [listPersianVocabulary, setListPersianVocabulary] = useState([]);
  const [thesisInformation, setThesisInformation] = useState({});
  const addCliclHandler = (name) => {
    if (
      englishVocabulary !== undefined &&
      englishVocabulary !== "" &&
      name === "english"
    ) {
      setListEnglishVocabulary((listEnglishVocabulary) => [
        englishVocabulary,
        ...listEnglishVocabulary,
      ]);
      setEnglishVocabulary("");
    }
    if (
      persianVocabulary !== undefined &&
      persianVocabulary !== "" &&
      name === "persian"
    ) {
      setListPersianVocabulary((listPersianVocabulary) => [
        persianVocabulary,
        ...listPersianVocabulary,
      ]);
      setPersianVocabulary("");
    }
  };
  const handleKeyDown = (event, name) => {
    if (event.key === "Enter") {
      addCliclHandler(name);
    }
  };
  const deletHandler = (e, index, name) => {
    console.log(index);
    if (name === "persian") {
      setListPersianVocabulary([
        ...listPersianVocabulary.slice(0, index),
        ...listPersianVocabulary.slice(index + 1),
      ]);
    }
    if (name === "english") {
      setListEnglishVocabulary([
        ...listEnglishVocabulary.slice(0, index),
        ...listEnglishVocabulary.slice(index + 1),
      ]);
    }
  };

  useEffect(() => {
    const data = sessionStorage.getItem("thesisInformation");
    const listEnglishVocabulary = sessionStorage.getItem("KeyWords_English");
    const listPersianVocabulary = sessionStorage.getItem("KeyWords_Persian");
    if (data && Object.keys(data).length > 0) {
      setThesisInformation({ ...JSON.parse(data) });
    }
    if (listEnglishVocabulary && listEnglishVocabulary.length > 0) {
      setListEnglishVocabulary([...JSON.parse(listEnglishVocabulary)]);
    }
    if (listPersianVocabulary && listPersianVocabulary.length > 0) {
      setListPersianVocabulary([...JSON.parse(listPersianVocabulary)]);
    }
  }, []);

  const notify = () =>
    toast.error("اطلاعات کامل وارد نشده است!!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const updateData = (e) => {
    setThesisInformation({
      ...thesisInformation,
      [e.target.name]: e.target.value,
    });
  };

  const handelStoreInformation = () => {
    if (
      thesisInformation.Title_Persian === "" ||
      thesisInformation.Title_English === "" ||
      thesisInformation.Abstract === "" ||
      listPersianVocabulary.length === 0 ||
      listEnglishVocabulary.length === 0 ||
      Object.keys(thesisInformation).length === 0
    ) {
      notify();
    } else {
      sessionStorage.setItem(
        "thesisInformation",
        JSON.stringify(thesisInformation)
      );
      sessionStorage.setItem(
        "KeyWords_English",
        JSON.stringify(listEnglishVocabulary)
      );
      sessionStorage.setItem(
        "KeyWords_Persian",
        JSON.stringify(listPersianVocabulary)
      );
      stepForwardHandler();
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
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
          <div className="flex flex-col">
            <span className="sm:text-base font-medium text-sm">
              عنوان پایان‌نامه(فارسی){" "}
            </span>
            <input
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
              placeholder="عنوان پایان‌نامه را وارد کنید"
              name="Title_Persian"
              onChange={updateData}
              value={thesisInformation.Title_Persian || ""}
              type={"text"}
            />
          </div>
          <div className="flex flex-col">
            <span className="sm:text-base font-medium text-sm">
              عنوان پایان‌نامه(انگلیسی){" "}
            </span>
            <input
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
              placeholder="عنوان پایان‌نامه را وارد کنید"
              name="Title_English"
              value={thesisInformation.Title_English || ""}
              onChange={updateData}
              type={"text"}
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <span className="sm:text-base font-medium text-sm">چکیده</span>
            <textarea
              className="border-2  focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-20 resize-none h-16 p-1 sm:text-base text-sm "
              name="Abstract"
              value={thesisInformation.Abstract || ""}
              onChange={updateData}
              rows={4}
            />
          </div>
          <div className="sm:h-28 flex flex-col gap-2 lg:col-span-1 md:col-span-2">
            <div className="flex sm:flex-row sm:items-center flex-col items-start gap-1">
              <span className="sm:text-base font-medium text-sm">
                واژگان(فارسی):{" "}
              </span>
              <div className="flex gap-1">
                <input
                  onChange={(event) => setPersianVocabulary(event.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, "persian")}
                  value={persianVocabulary}
                  className="border-2 border-[#9B9B9B] p-1 rounded-md h-9"
                />
                <div
                  onClick={() => addCliclHandler("persian")}
                  className="flex p-1 rounded-md items-center bg-[#003B7E] text-white stroke-white cursor-pointer"
                >
                  <span>اضافه کردن</span>
                  <Add />
                </div>
              </div>
            </div>
            {listPersianVocabulary.length !== 0 ? (
              <div className="flex flex-wrap gap-4 overflow-y-scroll h-full border-2 border-[#9B9B9B] rounded-md">
                {listPersianVocabulary.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-[2px] text-[#b62323]"
                  >
                    <Close
                      onClick={(e) => deletHandler(e, index, "persian")}
                      className="w-3 h-3 cursor-pointer"
                    />
                    <span className="text-[#000]">{item}</span>
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="sm:h-28 flex flex-col gap-2 lg:col-span-1 md:col-span-2">
            <div className="flex sm:flex-row sm:items-center flex-col items-start  gap-1">
              <span className="sm:text-base font-medium text-sm">
                واژگان(انگلیسی):{" "}
              </span>
              <div className="flex gap-1">
                <input
                  pattern="[A-Za-z]"
                  onChange={(event) =>
                    setEnglishVocabulary(
                      event.target.value.replace(/[^A-Za-z]/gi, "")
                    )
                  }
                  onKeyDown={(e) => handleKeyDown(e, "english")}
                  value={englishVocabulary}
                  className="border-2 border-[#9B9B9B] p-1 rounded-md h-9"
                />
                <div
                  onClick={() => addCliclHandler("english")}
                  className="flex p-1 rounded-md items-center bg-[#003B7E] text-white stroke-white cursor-pointer"
                >
                  <span>اضافه کردن</span>
                  <Add />
                </div>
              </div>
            </div>
            {listEnglishVocabulary.length !== 0 ? (
              <div className="flex flex-wrap gap-4 overflow-y-scroll h-20 border-2 border-[#9B9B9B] rounded-md">
                {listEnglishVocabulary.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-[2px] text-[#b62323]"
                  >
                    <Close
                      onClick={(e) => deletHandler(e, index, "english")}
                      className="w-3 h-3 cursor-pointer"
                    />
                    <span className="text-[#000]">{item}</span>
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between">
          <button
            onClick={handelStoreInformation}
            className="bg-[#003b7e29] sm:px-4 self-end p-2 mt-4 rounded-md text-lg text-[#003B7E]"
          >
            مرحله بعدی
          </button>
        </div>
        <ToastContainer bodyClassName="toast-message" />
      </div>
    </div>
  );
};

export default ThesisInformation;
