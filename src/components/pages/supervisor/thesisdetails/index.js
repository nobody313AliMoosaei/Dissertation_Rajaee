import { useRef, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
//SVG
import { ReactComponent as Backward } from "../../../../assets/svg/backward.svg";
import { ReactComponent as Coment } from "../../../../assets/svg/coment.svg";
//Component
import Comment from "../../../common/comment";
import {
  CahngeDissertationStatus,
  DownloadFile,
  GetAllComments,
  GetAllDissertationOfUesr,
  GetUserById,
  SendComment,
} from "../../../../services/employees";
import { Cookies, useCookies } from "react-cookie";
import Loding from "../../../common/loding";
import Pagination2 from "../../../common/pagination2";
import { toast } from "react-toastify";

// const information = [
//   {
//     name: "علی",
//     role: "علی",
//     family: "محجوب",
//     studentNumber: "3981231095",
//     college: "کامپیوتر",
//     supervisor: "استاد صفخانی",
//     term: "3",
//     Email: "ali@gamil.com",
//   },
// ];
// const commentData1 = [
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

const ThesisDetails = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [isLoadingSendComment, setIsLoadingSendComment] = useState(false);
  const [error, setError] = useState({});
  const [userData, setUserData] = useState([]);
  const [dissertationData, setDissertationData] = useState({});
  const [commentData, setCommentData] = useState([]);
  const [sendComment, setSendComment] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);
  const [cookies] = useCookies(["token", "role"]);
  const { id } = useParams();
  const updateData = (e) => {
    setSendComment({
      ...sendComment,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    asyncGetUserById();
    asyncGetAllDissertationOfUesr();
  }, []);
  const asyncGetUserById = async () => {
    setIsLoading(true);
    setError({});

    const response = await GetUserById(id);

    if (response.status === 200) {
      // console.log(response);
      setUserData(response.data);
    } else {
      //error occurre
      console.log("response : ", response);
    }

    setIsLoading(false);
  };
  const asyncGetAllDissertationOfUesr = async () => {
    setIsLoading(true);
    setError({});

    const response = await GetAllDissertationOfUesr(id);

    if (response.status === 200) {
      // console.log(response.data[0].dissertationId);
      setDissertationData({ ...response.data[response.data.length - 1] });
      // console.log(dissertationData);
    } else {
      //error occurre
      console.log("response : ", response);
    }

    setIsLoading(false);
    asyncGetAllComments(response.data[response.data.length - 1].dissertationId);
  };

  const asyncSendComment = async () => {
    setIsLoadingSendComment(true);
    const { title, dsr } = sendComment;
    try {
      const response = await SendComment(
        cookies.token,
        userData.userId,
        dissertationData.dissertationId,
        title,
        dsr
      );

      //check repsonse status
      if (response.status === 200) {
        // console.log(response.data);
        setSendComment({});
      } else {
        //error occure
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoadingSendComment(false);
    asyncGetAllComments(dissertationData.dissertationId);
  };
  const asyncGetAllComments = async (id, num = 1) => {
    setIsLoadingSendComment(true);
    const pageSize = 5;
    try {
      const response = await GetAllComments(id, num, pageSize);

      //check repsonse status
      if (response.status === 200) {
        console.log(response.data.length);
        if (response.data.length < 5) {
          setIsFinish(true);
        } else {
          setIsFinish(false);
        }
        setCommentData(response.data);
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
    setIsLoadingBtn(true);
    try {
      const response = await DownloadFile(addressFile);
      if (response.status === 200) {
        // console.log(response);
        const file = new Blob([response.data], {
          type: response.headers["content-type"],
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
    setIsLoadingBtn(false);
  };

  const asyncCahngeDissertationStatus = async (status) => {
    if (status === 0) {
      if (
        cookies.role === "GuideMaster" &&
        dissertationData.statusDissertation === 0
      ) {
        status = 13;
      } else if (
        cookies.role === "DissertationExpert" &&
        dissertationData.statusDissertation === 1
      ) {
        status = 18;
      } else if (
        cookies.role === "PostgraduateEducationExpert" &&
        dissertationData.statusDissertation === 6
      ) {
        status = 17;
      } else {
        status = -1;
      }
    } else {
      if (
        (cookies.role === "GuideMaster" &&
          dissertationData.statusDissertation === 0) ||
        (cookies.role === "DissertationExpert" &&
          dissertationData.statusDissertation === 1) ||
        (cookies.role === "PostgraduateEducationExpert" &&
          dissertationData.statusDissertation === 6)
      ) {
        status = 19;
      } else {
        status = -1;
      }
    }
    if (status !== -1) {
      console.log(status);
      setIsLoadingBtn(true);
      try {
        const response = await CahngeDissertationStatus(
          cookies.token,
          dissertationData.dissertationId,
          status
        );
        //check repsonse status
        if (response.status === 200) {
          console.log(response);
          toast.success("تغییر وضعیت با موفقیت انجام شد.");
        } else {
          //error occure
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoadingBtn(false);
    } else {
      toast.warning("در حال حاضر امکان تغییر وضعیت برای شما وجود ندارد");
    }
  };
  return (
    <>
      {isLoading ? (
        <Loding />
      ) : (
        <div className="container mx-auto w-10/12">
          <div className="flex items-center justify-between">
            <div className="my-14 flex gap-2 text-lg">
              <span>داشبورد</span>
              <span>/</span>
              <span>پایان‌نامه ها</span>
              <span> /</span>
              <span className="text-[#B0B9BE]">{userData.firsName}</span>
              <span className="text-[#B0B9BE]">{userData.lastName}</span>
            </div>
            {/* <div className="flex gap-5">
          <button className="bg-[#2080F6] flex flex-row-reverse h-10 justify-center items-center mt-3 px-6 gap-2 rounded-md text-white">
            پایان‌نامه های رد شده
          </button>
          <button className="bg-[#2080F6] flex flex-row-reverse h-10 justify-center items-center mt-3 px-6 gap-2 rounded-md text-white">
            پایان نامه های تایید شده
          </button>
        </div> */}
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            <Link to={"/employees"}>
              <div className="flex flex-row border-solid border-2 rounded-md w-fit stroke-white bg-[#3B5DE7] mb-4 px-2 py-1 items-center">
                <Backward />
                <button className="text-white pr-2 text-lg">بازگشت</button>
              </div>
            </Link>
            <div className="text-[#B0B9BE] flex gap-2 text-lg">
              <span className="text-black">آخرین ویرایش :</span>
              <span>{dissertationData.dateStr}</span>
              <span dir="ltr" className="text-[#B0B9BE]">
                {dissertationData.timeStr}
              </span>
            </div>
          </div>
          <div className="bg-[#fff] flex flex-col justify-start mt-10 p-8 gap-0 rounded-md">
            <div className="mb-3 text-[#003B7E] font-medium">
              <span className="border-b-2 border-[#003B7E]">
                اطلاعات دانشجو
              </span>
            </div>
            <div className="grid lg:grid-cols-3 lg:gap-y-8 lg:gap-x-3 md:grid-cols-2 gap-y-8 gap-x-6 sm:grid-cols-1 ">
              <div>
                <span className="font-medium">نام :</span>
                <span className="text-[#B0B9BE] text-lg">
                  {userData.firsName}
                </span>
              </div>
              <div>
                <span className="font-medium">نام خانوادگی :</span>
                <span className="text-[#B0B9BE] text-lg">
                  {userData.lastName}
                </span>
              </div>
              <div>
                <span className="font-medium">شماره دانشجویی :</span>
                <span className="text-[#B0B9BE] text-lg">
                  {userData.userName}
                </span>
              </div>
              <div>
                <span className="font-medium">دانشکده :</span>
                <span className="text-[#B0B9BE] text-lg">
                  {userData.collegeName}
                </span>
              </div>
              <div>
                <span className="font-medium">استاد راهنما :</span>
                <span className="text-[#B0B9BE] text-lg">
                  {userData.teachersName + ""}
                </span>
              </div>
              <div>
                <span className="font-medium">کد ملی :</span>
                <span className="text-[#B0B9BE] text-lg">
                  {userData.nationalCode}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-10 bg-white p-8 rounded-md">
            <div className="mb-3 text-[#003B7E] font-medium">
              <span className="border-b-2 border-[#003B7E]">
                اطلاعات پایان‌نامه
              </span>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:gap-x-8 gap-x-2 gap-y-6">
              <div className="flex gap-2">
                <span className="sm:text-base font-medium text-sm">
                  عنوان پایان‌نامه(فارسی):{" "}
                </span>
                <span className="sm:text-base font-medium text-[#B0B9BE] text-sm">
                  {dissertationData.titlePersian}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="sm:text-base font-medium text-sm">
                  عنوان پایان‌نامه(انگلیسی):{" "}
                </span>
                <span className="sm:text-base font-medium text-[#B0B9BE] text-sm">
                  {dissertationData.titleEnglish}
                </span>
              </div>
              {/* <div className="flex flex-col">
            <span className="sm:text-base font-medium text-sm">
              واژگان(فارسی){" "}
            </span>
            <span className="border-2 h-24 p-2 rounded-md">واژگان</span>
          </div>
          <div className="flex flex-col">
            <span className="sm:text-base font-medium text-sm">
              واژگان(انگلیسی){" "}
            </span>
            <span className="border-2 h-24 p-2 rounded-md">vocabulary</span>
          </div> */}
              <div className="flex flex-col md:col-span-2">
                <span className="sm:text-base font-medium text-sm">چکیده</span>
                <span className="border-2 h-32   p-2 rounded-md">
                  {dissertationData.abstract}
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-5">
              <div className="flex flex-col md:flex-row  md:gap-5">
                <button
                  disabled={isLoadingBtn}
                  onClick={() =>
                    asyncDownloadFile(
                      dissertationData.dissertationFileAddress,
                      "application/zip",
                      "پایان نامه"
                    )
                  }
                  className="border-[#2080F6] self-start border-2 sm:px-4 p-2 md:mt-6 my-3 rounded-md text-lg text-[#2080F6] "
                >
                  دانلود پایان‌نامه
                </button>
                <button
                  onClick={() =>
                    asyncDownloadFile(
                      dissertationData.proceedingsFileAddress,
                      "image/png",
                      "صورت جلسه"
                    )
                  }
                  className="border-[#2080F6] border-2 sm:px-4 self-start p-2 md:mt-6 rounded-md text-lg text-[#2080F6] "
                >
                  دانلود صورت جلسه
                </button>
              </div>
              <div className="flex md:flex-row md:gap-5 gap-2 flex-col">
                <button
                  disabled={
                    isLoadingBtn ||
                    dissertationData.statusDissertation === -3333
                      ? true
                      : false
                  }
                  onClick={() => asyncCahngeDissertationStatus(-3333)}
                  className="text-[#f62020] border-2 sm:px-4 self-start p-2 md:mt-6 mt-3 rounded-md text-lg border-[#f62020] "
                >
                  عدم تایید پایان‌نامه
                </button>
                <button
                  disabled={
                    isLoadingBtn ||
                    dissertationData.statusDissertation === -3333
                      ? true
                      : false
                  }
                  onClick={() => asyncCahngeDissertationStatus(0)}
                  className="bg-[#2080F6] border-2 sm:px-4 self-start w-40 p-2 md:mt-6 rounded-md text-lg text-[#fff]"
                >
                  {isLoadingBtn ? (
                    <Loding className2={"hidden"} />
                  ) : (
                    "تایید پایان‌نامه"
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#FFF] max-h-[50rem] overflow-y-scroll mt-14 mb-2 p-3 sm:p-7 rounded-md shadow-md ">
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
          </div>
          <Pagination2
            setPageNumber={setPageNumber}
            isFinish={isFinish}
            setIsFinish={() => setIsFinish(true)}
            pageNumber={pageNumber}
            action={(num) =>
              asyncGetAllComments(dissertationData.dissertationId, num)
            }
          />
          {/* <div className="bg-[#FFF] max-h-[70rem] overflow-y-scroll my-14 p-3 sm:p-7 rounded-md shadow-md ">
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
      </div> */}
          <div
            id="sendcomment"
            className="bg-[#FFF] py-5 px-4 mt-5 md:px-20 rounded-md shadow-md "
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
      )}
    </>
  );
};

export default ThesisDetails;
