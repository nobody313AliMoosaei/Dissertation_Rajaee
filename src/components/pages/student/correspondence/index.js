import { useState } from "react";
import Newletter from "./newletter";
import ReceivedLetter from "./receivedletter";

const Correspondence = () => {
  const [page, setPage] = useState(2);
  return (
    <div className="w-full flex flex-col items-center justify-center p-5 ">
      <div className="flex flex-col sm:flex-row px-4 w-fit py-3 bg-[#fff] gap-6 rounded-md">
        <span
          onClick={() => setPage(1)}
          className={`px-4 cursor-pointer py-2  rounded-md ${
            page === 1 ? "text-white bg-[#003B7E]" : ""
          }`}
        >
          ارسال نامه جدید
        </span>
        <span
          onClick={() => setPage(2)}
          className={`px-4 cursor-pointer py-2  rounded-md ${
            page === 2 ? "text-white bg-[#003B7E]" : ""
          }`}
        >
          نامه های دریافتی
        </span>
        <span
          onClick={() => setPage(3)}
          className={`px-4 cursor-pointer py-2  rounded-md ${
            page === 3 ? "text-white bg-[#003B7E]" : ""
          }`}
        >
          نامه های ارسالی
        </span>
      </div>
      {page === 1 ? (
        <Newletter showMassage={0} />
      ) : page === 2 ? (
        <ReceivedLetter status={2} />
      ) : page === 3 ? (
        <ReceivedLetter status={3} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Correspondence;
