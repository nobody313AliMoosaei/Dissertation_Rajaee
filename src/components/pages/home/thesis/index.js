// Swiper
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

//components
import SingleThesis from "./singleThesis";

const Thesis = () => {
  const newsList = [
    {
      id: 1,
      title: " عنوان خبر",
      text: " از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      date: "1 / 2 / 1401",
    },
    {
      id: 2,
      title: " عنوان خبر",
      text: " از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      date: "2 / 2 / 1401",
    },
    {
      id: 3,
      title: " عنوان خبر",
      text: " از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      date: "3 / 2 / 1401",
    },
    {
      id: 4,
      title: " عنوان خبر",
      text: " از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      date: "4 / 2 / 1401",
    },
  ];

  return (
    <div className="">
      <div className="mt-12 my-10 text-center">
        <span className="text-xl font-bold border-b-2 border-b-slate-900  ">
          نمونه پایان نامه ثبت شده
        </span>
      </div>
      <div>
        <SingleThesis />
      </div>
    </div>
  );
};

export default Thesis;
