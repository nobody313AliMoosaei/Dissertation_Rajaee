import React from "react";

//SVG
import { ReactComponent as Reply } from "./../../../assets/svg/undo.svg";

//PNG
import Ellipse from "./../../../assets/image/Ellipse 1.png";

const Comment = ({ styl, name, role, date, time, text, link }) => {
  return (
    <div className={`mt-5 ${styl}`}>
      <div className="border-2 p-2 border-[#EAECEF] rounded-md">
        <div className="flex flex-row items-center justify-between border-b-2  p-2  border-[#B0B9BE]">
          <div className="flex items-center gap-2 sm:gap-4 text-sm sm:text-md">
            <img className="w-16 h-16 sm:w-fit sm:h-fit" src={Ellipse} />
            <div className="flex flex-col">
              <div className="flex sm:flex-row flex-col gap-2">
                <span className="text-[#475466]">{name}</span>
                <span className="text-[#475466]">({role})</span>
              </div>
              <div className="flex sm:flex-row flex-col gap-2">
                <span className="text-[#B0B9BE]">{date}</span>
                <span className="text-[#B0B9BE]">{time}</span>
              </div>
            </div>
          </div>
          <div className="bg-[#EBEEF2] text-[#475466] rounded-md py-1 px-3 gap-1 text ">
            <a
              className="flex items-center flex-row-reverse"
              onClick={link}
              href="#sendcomment"
            >
              <Reply />
              <span>پاسخ</span>
            </a>
          </div>
        </div>
        <div className="my-7 sm:mx-5 mx-2 text-sm md:text-md">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;