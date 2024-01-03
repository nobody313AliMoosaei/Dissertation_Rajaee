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
  GetAllComments,
  GetDissertation,
  SendComment,
} from "../../../../services/student";
import Loding from "../../../common/loding";
import Pagination2 from "../../../common/pagination2";
import SingleList from "../../supervisor/thesislist/singlelist";
import { DownloadFile } from "../../../../services/employees";

const Correspondence = () => {
  const [page, setPage] = useState(2);
  const [pageNumber, setpageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSendComment, setIsLoadingSendComment] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [existDis, setExistDis] = useState(false);
  const [data, setData] = useState({});
  const [comment, setComment] = useState([]);
  const [sendComment, setSendComment] = useState({});
  const cookies = new Cookies();
  const [token, setCookie] = useState(cookies.get("token"));

  useEffect(() => {
    asyncGetDissertation();
  }, []);
  const updateData = (e) => {
    setSendComment({
      ...sendComment,
      [e.target.name]: e.target.value,
    });
  };
  const asyncGetDissertation = async () => {
    setIsLoading(true);
    const response = await GetDissertation(token);
    //check repsonse status
    if (response.status === 200) {
      if (response.data.length > 0) {
        setData(response.data[response.data.length - 1]);
        setExistDis(true);
        // console.log(response.data[response.data.length - 1]);
      }
    } else {
      //error occure
    }

    setIsLoading(false);
    if (response.data.length > 0) {
      asyncGetAllComments(
        response.data[response.data.length - 1].dissertationId
      );
    }
  };
  const asyncSendComment = async () => {
    setIsLoadingSendComment(true);
    const { title, dsr } = sendComment;
    try {
      const response = await SendComment(
        token,
        data.studentId,
        data.dissertationId,
        title,
        dsr
      );

      //check repsonse status
      if (response.status === 200) {
        console.log(response.data);
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoadingSendComment(false);
  };
  const asyncGetAllComments = async (id, num = 1) => {
    setIsLoadingSendComment(true);
    const pageSize = 5;
    try {
      const response = await GetAllComments(id, num, pageSize);

      //check repsonse status
      if (response.status === 200) {
        console.log(response.data);
        setComment(response.data);
        if (response.data.length < 5) {
          setIsFinish(true);
        }
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoadingSendComment(false);
  };

  const asyncDownloadFile = async (addressFile, fileType, fileName) => {
    console.log(addressFile);
    setIsLoading(true);
    try {
      const response = await DownloadFile(addressFile);
      if (response.status === 200) {
        // console.log(response);
        const file = new Blob([response.data], {
          type: fileType,
        });
        const url = window.URL.createObjectURL(file);
        console.log(url);
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  // const commentData = [
  //   {
  //     id: 1,
  //     name: "علی محجوب",
  //     role: "دانشجو",
  //     date: "1402/1/1",
  //     time: "00:00",
  //     text: " با سلام و احترام . نظر شما دریافت شد",
  //     reply: [
  //       {
  //         id: 3,
  //         name: "علی محجوب",
  //         role: "دانشجو ",
  //         date: "1402/1/1",
  //         time: "00:00",
  //         text: " با سلام و احترام . نظر شما دریافت شد",
  //       },
  //       {
  //         id: 4,
  //         name: "علی محجوب",
  //         role: " دانشجو",
  //         date: "1402/1/1",
  //         time: "00:00",
  //         text: " با سلام و احترام . نظر شما دریافت شد",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "علی محجوب",
  //     role: "دانشجو ",
  //     date: "1402/1/1",
  //     time: "00:00",
  //     text: " با سلام و احترام . نظر شما دریافت شد",
  //     reply: [],
  //   },
  // ];

  return (
    <>
      {existDis ? (
        isLoading ? (
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
                  <span className="sm:text-base font-medium text-sm">
                    چکیده
                  </span>
                  <span className="border-2 max-h-36 p-2 rounded-md">
                    {data.abstract}
                  </span>
                </div>
                <button
                  onClick={() =>
                    asyncDownloadFile(
                      data.dissertationFileAddress,
                      "application/zip",
                      "پایان نامه"
                    )
                  }
                  className="border-[#2080F6] w-fit lg:col-span-2 justify-self-end border-2 sm:px-4 p-2 md:mt-6 my-1 rounded-md text-lg text-[#2080F6] "
                >
                  دانلود پایان‌نامه
                </button>
              </div>
            </div>
            <div className="bg-[#FFF] max-h-[70rem] overflow-y-scroll mt-14 mb-2 p-3 sm:p-7 rounded-md shadow-md ">
              {isLoadingSendComment ? (
                <Loding />
              ) : (
                <>
                  <div className="flex flex-row border-b-2  p-2  border-[#B0B9BE]">
                    <Coment className="text-[#B0B9BE] text-xl ml-2" />
                    <span className="text-[#000]">نظرات</span>
                  </div>

                  {comment.length === 0 ? (
                    <span className="md:text-xl text-md text-center flex self-center justify-center text-[#475466] mt-5">
                      هیچ نظری وجود ندارد!
                    </span>
                  ) : (
                    comment.map((comment, index) => (
                      <>
                        <div className={` `} key={index}>
                          <Comment styl={""} key={index} comment={comment} />
                          {/* {comment.reply.length === 0 ? (
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
                    )} */}
                        </div>
                      </>
                    ))
                  )}
                </>
              )}
            </div>
            <Pagination2
              setPageNumber={setpageNumber}
              isFinish={isFinish}
              pageNumber={pageNumber}
              action={(num) => asyncGetAllComments(data.dissertationId, num)}
            />
            <div
              id="sendcomment"
              className="bg-[#FFF] mt-5 py-5 px-4 md:px-20 rounded-md shadow-md "
            >
              <div className="flex justify-center flex-col items-center">
                <span className="border-b-2 border-[#3B5DE7] w-full text-center py-2 mb-2 ">
                  ارسال نظر
                </span>
              </div>
              <div className="flex flex-col items-center my-3 gap-5 py-3 px-5 w-full">
                <label className="flex w-full items-center">
                  عنوان :{" "}
                  <input
                    name="title"
                    onChange={updateData}
                    className="border-2 p-2 mx-2 border-[#B0B9BE]  rounded-md w-3/4"
                  />
                </label>
                <textarea
                  id="inputComment"
                  rows="10"
                  name="dsr"
                  onChange={updateData}
                  placeholder="نظر شما..."
                  className="border-2 p-2 border-[#B0B9BE]  rounded-md w-full"
                />
                <button
                  onClick={asyncSendComment}
                  className="self-end w-full text-[#FFF] lg:w-fit bg-[#3B5DE7] p-2 rounded-md"
                >
                  {isLoadingSendComment ? (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  ) : (
                    "ارسال نظر"
                  )}
                </button>
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="text-center w-full mt-10 flex justify-center">
          <span className="bg-white text-xl font-bold px-8 py-4 text-[#cd2c2c]">
            شما هنوز پایان نامه‌ای ثبت نکرده‌اید
          </span>
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
