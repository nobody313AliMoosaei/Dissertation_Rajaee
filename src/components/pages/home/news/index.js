// Swiper
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

//components
import SingleNews from "./singleNews";

const News = () => {
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
    <div className="block">
      <div className="my-8 text-center">
        <span className="text-xl font-bold border-b-2 border-b-slate-900  ">
          اخرین اخبار
        </span>
        <span>مشاهده همه</span>
      </div>
      <div className="w-[98vw] flex flex-row justify-center items-center">
        <div className="md:w-3/4 w-full self-center">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // speed = {2000}
            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: false,
            // }}
            breakpoints={{
              576: {
                // width: 576,
                slidesPerView: 1,
              },
              800: {
                // width: 768,
                slidesPerView: 2,
              },
            }}
          >
            {Array.isArray(newsList) &&
              newsList.map((item, index) => (
                <SwiperSlide key={index}>
                  <SingleNews
                    title={item.title}
                    date={item.date}
                    text={item.text}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default News;
