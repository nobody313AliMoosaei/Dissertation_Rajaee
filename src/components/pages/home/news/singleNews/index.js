//png
import ImageNews from "../../../../../assets/image/news.png";

//SVG
import { ReactComponent as Calendar } from "../../../../../assets/svg/calendar.svg";

const SingleNews = ({ title, date, text }) => {
  return (
    <div className="flex justify-center">
      <div className="p-4 bg-[#fff] w-[22rem] flex items-center flex-col rounded-md">
        <div className="w-full">
          <img className="w-full h-[175px]" src={ImageNews} />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-end my-2">
            <span className=" mx-2 text-lg">{date}</span>
            <Calendar />
          </div>
          <span className="text-center text-xl font-bold mb-2">{title}</span>
          <span className=" text-lg h-14 overflow-hidden  overflow-ellipsis ">
            {text}
          </span>
          <button className="my-2 border-2 border-[#ffa500] p-2">
            بیشتر بخوانید
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
