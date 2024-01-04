import { useEffect, useState } from "react";
//Components
import PersonalInformation from "./personalinformation";
import ThesisInformation from "./thesisinformation";
import UploadThesis from "./uploadthesis";
//Cookies
import { Cookies } from "react-cookie";
//Services
import { GetDissertation } from "../../../../services/student";
import Loding from "../../../common/loding";
import { computeHeadingLevel } from "@testing-library/react";

const PreRegistration = () => {
  const [step, setStep] = useState(0);
  const [dissertationData, setDissertationData] = useState({});
  const [isLoading, setIsLoading] = useState(0);
  const cookies = new Cookies();
  const [token, setCookie] = useState(cookies.get("token"));

  useEffect(() => {
    asyncGetDissertation();
  }, []);

  const stepHandler = (reqCondition = "forward") => {
    if (reqCondition === "forward") {
      setStep(step + 1);
    } else {
      setStep(step - 1);
    }
  };

  const asyncGetDissertation = async () => {
    setIsLoading(true);
    try {
      const response = await GetDissertation(token);

      //check repsonse status
      if (response.status === 200) {
        if (response.data.length > 0) {
          setDissertationData(response.data[response.data.length - 1]);
          console.log(response.data[response.data.length - 1]);
          if (response.data[response.data.length - 1].statusDissertation > 0) {
            setStep(3);
          }
        }
        // console.log(dissertationData);
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex justify-center bg-[#F5F6FA] h-full p-5 w-full">
      <div className="mt-10 mx-3 w-11/12">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
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
        {isLoading ? (
          <Loding />
        ) : step === 0 ? (
          <PersonalInformation
            id={dissertationData.studentId}
            stepForwardHandler={() => stepHandler("forward")}
          />
        ) : step === 1 ? (
          <ThesisInformation
            stepForwardHandler={() => stepHandler("forward")}
            stepBackwardHandler={() => stepHandler("backward")}
          />
        ) : step === 2 ? (
          <UploadThesis
            dis_Id={dissertationData.dissertationId}
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
