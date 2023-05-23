import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
//SVG
import { ReactComponent as Backward } from "../../../../assets/svg/backward.svg";
import { ReactComponent as Coment } from "../../../../assets/svg/coment.svg";
//Component
import Comment from "../../../common/comment";

const ThesisDetails = ({}) => {
  const information = [
    {
      name: "علی",
      role: "علی",
      family: "محجوب",
      studentNumber: "3981231095",
      college: "کامپیوتر",
      supervisor: "استاد صفخانی",
      term: "3",
      Email: "ali@gamil.com",
    },
  ];
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
    <div className="container mx-auto w-10/12">
      <div className="flex items-center justify-between">
        <div className="my-14 flex gap-2 text-lg">
          <span>داشبورد</span>
          <span>/</span>
          <span>پایان‌نامه ها</span>
          <span> /</span>
          <span className="text-[#B0B9BE]">نام</span>
          <span className="text-[#B0B9BE]">نام خانوادگی</span>
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
        <Link to={"/supervisor"}>
          <div className="flex flex-row border-solid border-2 rounded-md w-fit stroke-white bg-[#3B5DE7] mb-4 px-2 py-1 items-center">
            <Backward />
            <button className="text-white pr-2 text-lg">بازگشت</button>
          </div>
        </Link>
        <div className="text-[#B0B9BE] flex gap-2 text-lg">
          <span className="text-black">آخرین ویرایش :</span>
          <span>1402/1/1</span>
          <span className="text-[#B0B9BE]">00:00:00</span>
        </div>
      </div>
      <div className="bg-[#fff] flex flex-col justify-start mt-10 p-8 gap-0 rounded-md">
        <div className="mb-3 text-[#003B7E] font-medium">
          <span className="border-b-2 border-[#003B7E]">اطلاعات دانشجو</span>
        </div>
        <div className="grid lg:grid-cols-3 lg:gap-y-8 lg:gap-x-3 md:grid-cols-2 gap-y-8 gap-x-6 sm:grid-cols-1 ">
          <div>
            <span className="font-medium">نام :</span>
            <span className="text-[#B0B9BE] text-lg">
              {information[0].name}
            </span>
          </div>
          <div>
            <span className="font-medium">نام خانوادگی :</span>
            <span className="text-[#B0B9BE] text-lg">
              {information[0].family}
            </span>
          </div>
          <div>
            <span className="font-medium">شماره دانشجویی :</span>
            <span className="text-[#B0B9BE] text-lg">
              {information[0].studentNumber}
            </span>
          </div>
          <div>
            <span className="font-medium">دانشکده :</span>
            <span className="text-[#B0B9BE] text-lg">
              {information[0].college}
            </span>
          </div>
          <div>
            <span className="font-medium">استاد راهنما :</span>
            <span className="text-[#B0B9BE] text-lg">
              {information[0].supervisor}
            </span>
          </div>
          <div>
            <span className="font-medium">ترم :</span>
            <span className="text-[#B0B9BE] text-lg">
              {information[0].term}
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
              عنوان پایان‌نامه
            </span>
          </div>
          <div className="flex gap-2">
            <span className="sm:text-base font-medium text-sm">
              عنوان پایان‌نامه(انگلیسی):{" "}
            </span>
            <span className="sm:text-base font-medium text-[#B0B9BE] text-sm">
              عنوان پایان‌نامه
            </span>
          </div>
          <div className="flex flex-col">
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
          </div>
          <div className="flex flex-col md:col-span-2">
            <span className="sm:text-base font-medium text-sm">چکیده</span>
            <span className="border-2 h-32   p-2 rounded-md">چکیده</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-5">
          <div className="flex flex-col md:flex-row  md:gap-5">
            <button className="border-[#2080F6] self-start border-2 sm:px-4 p-2 md:mt-6 my-3 rounded-md text-lg text-[#2080F6] ">
              دانلود پایان‌نامه
            </button>
            <button className="border-[#2080F6] border-2 sm:px-4 self-start p-2 md:mt-6 rounded-md text-lg text-[#2080F6] ">
              دانلود صورت جلسه
            </button>
          </div>
          <div className="flex md:flex-row md:gap-5 flex-col">
            <button className="text-[#2080F6] border-2 sm:px-4 self-start p-2 mt-6 rounded-md text-lg border-[#2080f6] ">
              عدم تایید پایان‌نامه
            </button>
            <button className="bg-[#2080F6] border-2 sm:px-4 self-start p-2 mt-6 rounded-md text-lg text-[#fff]">
              تایید پایان‌نامه
            </button>
          </div>
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
          {/* <span className="text-[#475466]">آدرس ایمیل شما منتشر نخواهد شد</span> */}
        </div>
        <div className="flex flex-col items-center my-3 gap-5 py-3 px-5 w-full">
          <textarea
            id="inputComment"
            // ref={ref}
            rows="10"
            placeholder="نظر شما..."
            className="border-2 p-2 border-[#B0B9BE]  rounded-md w-full"
          />
          {/* <div className="flex flex-col gap-8 lg:gap-24 lg:flex-row w-full">
            <input
              type={"text"}
              placeholder="نام و نام خانوادگی خود را وارد کنید"
              className="border-2 border-[#B0B9BE]  rounded-md h-10 w-full "
            />
            <input
              type={"text"}
              placeholder="ایمیل خود را وارد کنید"
              className="border-2 border-[#B0B9BE]  rounded-md h-10 w-full "
            />
          </div> */}
          <button className="self-end w-full text-[#FFF] lg:w-fit bg-[#3B5DE7] p-2 rounded-md">
            ارسال نظر
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThesisDetails;
