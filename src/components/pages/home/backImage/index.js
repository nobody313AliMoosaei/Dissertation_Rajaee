//PNG
import BackgroungImage from "../../../../assets/image/graduation.png";

const BackImage = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroungImage})` }}
    >
      {/* <img className="w-full h-screen contrast-75 " src={BackgroungImage} /> */}
      <div className="flex flex-col justify-center items-center pt-36">
        <span className="lg:text-4xl text-2xl text-center font-bold">
          سامانه ثبت پایان نامه دانشگاه تربیت دبیر شهید رجایی
        </span>
        <span className="text-center lg:w-3/4 md:text-lg text-base my-5 font-medium text-[#3c414e] ">
          سامانه مدیریت پایان‌نامه‌های تحصیلات تکمیلی یکی از ضروری‌ترین و
          اساسی‌ترین نیازهای دانشگاه‌ها است. قبل از همه‌گیری ویروس کرونا خلأ این
          سامانه برای دانشجویان تحصیلات تکمیلی محسوس نبود اما پس از آن به‌دلیل
          عدم امکان حضور دانشجو در دانشگاه کمبود این سامانه احساس شد. این سامانه
          موجب سرعت بخشیدن به روند مدیریتی پایان‌نامه‌ها و خاتمه رفت‌وآمد مکرر
          دانشجو به دانشگاه می‌شود.
        </span>
      </div>
    </div>
  );
};

export default BackImage;
