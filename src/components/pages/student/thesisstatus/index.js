import { useEffect, useState } from "react";
//services
import {
  GetAllStatusDisertation,
  GetStatusDisertation,
} from "../../../../services/student";
//Cookies
import { Cookies } from "react-cookie";
import Loding from "../../../common/loding";

const ThesisStatus = () => {
  const [status, setStatus] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const cookies = new Cookies();
  const [token, setCookie] = useState(cookies.get("token"));

  useEffect(() => {
    asyncGetStatusDisertation();
  }, []);

  const asyncGetStatusDisertation = async () => {
    setIsLoading(true);
    try {
      const response = await GetStatusDisertation(token);

      //check repsonse status
      if (response.status === 200) {
        setStatus(response.data.statusDissertation);
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col gap-8 sm:px-8 py-4 w-full">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 px-2">
        <div className="felx flex-row">
          <span
            className={` ${
              status >= 0 ? "bg-[#037724]" : "bg-[#fff]"
            } px-2 ml-2 rounded-full
              `}
          >
            1
          </span>
          <span className={``}>بارگزاری پایان‌نامه</span>
        </div>
        <div>
          <span
            className={` ${
              status >= 1 ? "bg-[#037724]" : "bg-[#fff]"
            } px-2 ml-2 rounded-full
              `}
          >
            2
          </span>
          <span className={``}>تایید استاد راهنما</span>
        </div>
        <div>
          <span
            className={` ${
              status >= 4 ? "bg-[#037724]" : "bg-[#fff]"
            } px-2 ml-2 rounded-full
              `}
          >
            3
          </span>
          <span className={``}> تایید کارشناس اموزش</span>
        </div>
        <div>
          <span
            className={` ${
              status >= 5 ? "bg-[#037724]" : "bg-[#fff]"
            } px-2 ml-2 rounded-full
              `}
          >
            4
          </span>
          <span className={``}> تایید کارشناس تحصیلات تکمیلی</span>
        </div>
        <div>
          <span
            className={` ${
              status >= 6 ? "bg-[#037724]" : "bg-[#fff]"
            } px-2 ml-2 rounded-full
              `}
          >
            5
          </span>
          <span className={``}> تایید کارشناس امور پایان‌نامه</span>
        </div>
      </div>
      {isLoading ? (
        <Loding />
      ) : (
        <div className="flex flex-col self-center gap-5 my-5 sm:w-3/4 w-full px-2 ">
          <div className="flex flex-col bg-white text-center py-6 rounded-md shadow-md px-2">
            {status === 0 ? (
              <span className="text-[#037724] text-lg font-medium">
                پایان‌نامه شما با موفقیت ثبت شد.
              </span>
            ) : status === 1 ? (
              <span className="text-[#037724] text-lg font-medium">
                پایان‌نامه شما توسط استاد راهنما اول تایید شد.
              </span>
            ) : status === 2 ? (
              <span className="text-[#037724] text-lg font-medium">
                پایان‌نامه شما توسط استاد راهنما دوم تایید شد.
              </span>
            ) : status === 3 ? (
              <span className="text-[#037724] text-lg font-medium">
                پایان‌نامه شما توسط استاد راهنما سوم تایید شد.
              </span>
            ) : status === 4 ? (
              <span className="text-[#037724] text-lg font-medium">
                پایان‌نامه شما توسط کارشناس آموزش تایید شد.
              </span>
            ) : status === 5 ? (
              <span className="text-[#037724] text-lg font-medium">
                پایان‌نامه شما توسط کارشناس تحصیلات تکمیلی تایید شد.
              </span>
            ) : status === 6 ? (
              <span className="text-[#037724] text-lg font-medium">
                پایان‌نامه شما توسط کارشناس امور پایان‌نامه تایید شد.
              </span>
            ) : (
              <span className="text-yellow-400 text-lg font-medium">
                پایان‌نامه شما رد شد لطفا آن را اصلاح نموده و سپس ارسال نمایید.
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThesisStatus;
