import { useState } from "react";
//Components
import PersonalInformation from "./personalinformation";
import ThesisInformation from "./thesisinformation";
import UploadThesis from "./uploadthesis";

const PreRegistration = () => {
  const [step, setStep] = useState(0);

  const stepHandler = (reqCondition = "forward") => {
    if (reqCondition === "forward") {
      setStep(step + 1);
    } else {
      setStep(step - 1);
    }
  };

  return (
    <div className="flex justify-center bg-[#F5F6FA] h-full p-5 w-full">
      <div className="mt-10 mx-3 w-11/12">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
          <div className="">
            <span
              id="1"
              className={` px-2 ml-2 bg-[#fff]  rounded-full ${
                step <= 0 ? "bg-[#fff]" : "bg-green-600 text-[#fff]"
              }`}
            >
              1
            </span>
            <span className={` ${step <= 0 ? "text-black" : "text-green-600"}`}>
              مشخصات شخصی
            </span>
          </div>
          <div>
            <span
              id="2"
              className={` px-2 ml-2 bg-[#fff]  rounded-full ${
                step <= 1 ? "bg-[#fff]" : "bg-green-600 text-[#fff]"
              }`}
            >
              2
            </span>
            <span className={` ${step <= 1 ? "text-black" : "text-green-600"}`}>
              مشخصات پایان‌نامه
            </span>
          </div>
          <div>
            <span
              id="3"
              className={` px-2 ml-2 bg-[#fff]  rounded-full ${
                step <= 2 ? "bg-[#fff]" : "bg-green-600 text-[#fff]"
              }`}
            >
              3
            </span>
            <span className={` ${step <= 2 ? "text-black" : "text-green-600"}`}>
              {" "}
              بارگزاری پایان‌نامه
            </span>
          </div>
        </div>
        {step === 0 ? (
          <PersonalInformation
            stepForwardHandler={() => stepHandler("forward")}
          />
        ) : step === 1 ? (
          <ThesisInformation
            stepForwardHandler={() => stepHandler("forward")}
            stepBackwardHandler={() => stepHandler("backward")}
          />
        ) : step === 2 ? (
          <UploadThesis
            stepBackwardHandler={() => stepHandler("backward")}
            stepForwardHandler={() => stepHandler("forward")}
          />
        ) : (
          <div className="bg-[#fff] mt-10 p-5 rounded-md flex items-center flex-col">
            <p className="text-[#027B24] text-lg font-medium my-2">
              درخواست شما با موفقیت ارسال شد
            </p>
            <p>
              برای دیدن وضعیت درخواست خود میتوانید از طریق صفحه وضعیت پایان‌نامه
              وارد شوید.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreRegistration;
