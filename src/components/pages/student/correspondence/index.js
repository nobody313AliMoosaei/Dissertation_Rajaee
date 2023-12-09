import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//SVG
import { ReactComponent as Backward } from "../../../../assets/svg/backward.svg";
import { ReactComponent as Coment } from "../../../../assets/svg/coment.svg";
//Component
import Comment from "../../../common/comment";
import Newletter from "./newletter";
import ReceivedLetter from "./receivedletter";
import { Cookies } from "react-cookie";
//Services
import {
  DownloadDissertation,
  GetDissertation,
} from "../../../../services/student";
import Loding from "../../../common/loding";

const Correspondence = () => {
  const [page, setPage] = useState(2);

  const [isLoading, setIsLoading] = useState(false);
  const [btnisLoading, setBtnIsLoading] = useState(false);
  const [data, setData] = useState({});
  const cookies = new Cookies();
  const [token, setCookie] = useState(cookies.get("token"));

  useEffect(() => {
    asyncGetDissertation();
  }, []);

  const asyncGetDissertation = async () => {
    setIsLoading(true);
    try {
      const response = await GetDissertation(token);

      //check repsonse status
      if (response.status === 200) {
        setData({ ...response.data });
        console.log(response.data);
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const asyncDownloadDissertation = async () => {
    setBtnIsLoading(true);
    try {
      const response = await DownloadDissertation(
        token,
        data.dissertationFileAddress
      );

      //check repsonse status
      if (response.status === 200) {
        // setData({ ...response.data });
        console.log(response.data);
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setBtnIsLoading(false);
  };
  const commentData = [
    {
      id: 1,
      name: "علی محجوب",
      role: "دانشجو",
      date: "1402/1/1",
      time: "00:00",
      text: " با سلام و احترام . نظر شما دریافت شد",
      reply: [
        {
          id: 3,
          name: "علی محجوب",
          role: "دانشجو ",
          date: "1402/1/1",
          time: "00:00",
          text: " با سلام و احترام . نظر شما دریافت شد",
        },
        {
          id: 4,
          name: "علی محجوب",
          role: " دانشجو",
          date: "1402/1/1",
          time: "00:00",
          text: " با سلام و احترام . نظر شما دریافت شد",
        },
      ],
    },
    {
      id: 2,
      name: "علی محجوب",
      role: "دانشجو ",
      date: "1402/1/1",
      time: "00:00",
      text: " با سلام و احترام . نظر شما دریافت شد",
      reply: [],
    },
  ];

  return (
    <>
      {isLoading ? (
        <Loding />
      ) : (
        <div className="container mt-5 mx-auto w-10/12">
          <div className="text-[#B0B9BE] flex gap-2 text-lg">
            <span className="text-black">آخرین ویرایش :</span>
            <span>{data.dateStr}</span>
            <span>-</span>
            <span className="text-[#B0B9BE]">{data.timeStr}</span>
          </div>
          <div className="mt-5 bg-white p-8 rounded-md">
            <div className="mb-3 text-[#003B7E] font-medium">
              <span className="border-b-2 border-[#9a9c9d]">
                اطلاعات پایان‌نامه
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-x-2 gap-y-4">
              <div className="flex gap-2">
                <span className="sm:text-base font-medium text-sm">
                  عنوان پایان‌نامه(فارسی):{" "}
                </span>
                <span className="sm:text-base font-medium text-[#B0B9BE] text-sm">
                  {data.titlePersian}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="sm:text-base font-medium text-sm">
                  عنوان پایان‌نامه(انگلیسی):{" "}
                </span>
                <span className="sm:text-base font-medium text-[#B0B9BE] text-sm">
                  {data.titleEnglish}
                </span>
              </div>
              <div className="flex flex-col lg:col-span-2">
                <span className="sm:text-base font-medium text-sm">چکیده</span>
                <span className="border-2 max-h-36 p-2 rounded-md">
                  {data.abstract}
                </span>
              </div>
              <button
                onClick={asyncDownloadDissertation}
                className="border-[#2080F6] w-fit lg:col-span-2 justify-self-end border-2 sm:px-4 p-2 md:mt-6 my-1 rounded-md text-lg text-[#2080F6] "
              >
                دانلود پایان‌نامه
              </button>
            </div>
          </div>
          <div className="bg-[#FFF] max-h-[70rem] overflow-y-scroll my-14 p-3 sm:p-7 rounded-md shadow-md ">
            <div className="flex flex-row border-b-2  p-2  border-[#B0B9BE]">
              <Coment className="text-[#B0B9BE] text-xl ml-2" />
              <span className="text-[#000]">نظرات</span>
            </div>

            {commentData.length === 0 ? (
              <span className="md:text-xl text-md text-center flex self-center justify-center text-[#475466] mt-5">
                هیچ نظری وجود ندارد!
              </span>
            ) : (
              commentData.map((comment, index) => (
                <>
                  <div
                    className={` ${
                      comment.reply.length !== 0
                        ? `border-2  mt-5 rounded-md p-2  border-[#B0B9BE]`
                        : ""
                    }`}
                    key={index}
                  >
                    <Comment
                      styl={""}
                      key={index}
                      id={comment.id}
                      name={comment.name}
                      role={comment.role}
                      date={comment.date}
                      time={comment.time}
                      text={comment.text}
                    />
                    {comment.reply.length === 0 ? (
                      <></>
                    ) : (
                      comment.reply.map((reply, index) => (
                        <Comment
                          styl={"sm:mr-10 mr-5"}
                          key={index}
                          id={reply.id}
                          name={reply.name}
                          role={reply.role}
                          date={reply.date}
                          time={reply.time}
                          text={reply.text}
                        />
                      ))
                    )}
                  </div>
                </>
              ))
            )}
          </div>
          <div
            id="sendcomment"
            className="bg-[#FFF] py-5 px-4 md:px-20 rounded-md shadow-md "
          >
            <div className="flex justify-center flex-col items-center">
              <span className="border-b-2 border-[#3B5DE7] w-full text-center py-2 mb-2 ">
                ارسال نظر
              </span>
            </div>
            <div className="flex flex-col items-center my-3 gap-5 py-3 px-5 w-full">
              <textarea
                id="inputComment"
                rows="10"
                placeholder="نظر شما..."
                className="border-2 p-2 border-[#B0B9BE]  rounded-md w-full"
              />
              <button className="self-end w-full text-[#FFF] lg:w-fit bg-[#3B5DE7] p-2 rounded-md">
                ارسال نظر
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );

  // return (
  //   <div className="w-full flex flex-col items-center justify-center p-5 ">
  //     <div className="flex flex-col sm:flex-row px-4 w-fit py-3 bg-[#fff] gap-6 rounded-md">
  //       <span
  //         onClick={() => setPage(1)}
  //         className={`px-4 cursor-pointer py-2  rounded-md ${
  //           page === 1 ? "text-white bg-[#003B7E]" : ""
  //         }`}
  //       >
  //         ارسال نامه جدید
  //       </span>
  //       <span
  //         onClick={() => setPage(2)}
  //         className={`px-4 cursor-pointer py-2  rounded-md ${
  //           page === 2 ? "text-white bg-[#003B7E]" : ""
  //         }`}
  //       >
  //         نامه های دریافتی
  //       </span>
  //       <span
  //         onClick={() => setPage(3)}
  //         className={`px-4 cursor-pointer py-2  rounded-md ${
  //           page === 3 ? "text-white bg-[#003B7E]" : ""
  //         }`}
  //       >
  //         نامه های ارسالی
  //       </span>
  //     </div>
  //     {page === 1 ? (
  //       <Newletter showMassage={0} />
  //     ) : page === 2 ? (
  //       <ReceivedLetter status={2} />
  //     ) : page === 3 ? (
  //       <ReceivedLetter status={3} />
  //     ) : (
  //       <></>
  //     )}
  //   </div>
  // );
};

export default Correspondence;
