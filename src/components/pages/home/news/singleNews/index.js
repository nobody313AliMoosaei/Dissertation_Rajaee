//png
import { Link } from "react-router-dom";
import ImageNews from "../../../../../assets/image/news.png";

//SVG
import { ReactComponent as Calendar } from "../../../../../assets/svg/calendar.svg";

const SingleNews = ({ id, title, date, text }) => {
  return (
    <div className="flex justify-center">
      <div className="p-4 bg-[#fff] w-[22rem]  flex items-center flex-col rounded-md">
        <div className="w-full h-[190px] bg-black rounded-sm  ">
          <img className="w-full h-full" src={ImageNews} alt="imageNews" />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-end my-2">
            <span className=" mx-2 text-lg">{date}</span>
            <Calendar />
          </div>
          <span className="text-center text-lg font-bold mb-2">{title}</span>
          <span className=" text-base h-12 overflow-hidden  overflow-ellipsis ">
            {text}
          </span>
          <Link className="w-full" to={`/news/detail/${id}`}>
            <button className="my-2 w-full border-2 border-[#003B7E] p-2">
              بیشتر بخوانید
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
