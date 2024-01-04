//SVG
import { ReactComponent as Home } from "../../assets/svg/home-2.svg";
import { ReactComponent as Left } from "../../assets/svg/arrow-left.svg";

//JPG
import Login from "./../../assets/image/Screenshot 2024-01-03 211425.jpg";
import pre1 from "./../../assets/image/pre.jpg";
import pre2 from "./../../assets/image/pre2.jpg";
import pre3 from "./../../assets/image/pre3.jpg";

const Help = () => {
  return (
    <div className="flex justify-center items-center w-full mt-36">
      <div className="w-10/12 ">
        <div className="flex items-center gap-x-2 mb-8">
          <Home />
          <Left />
          <span className="text-[#B0B9BE]">راهنمای دانشجو</span>
        </div>
        <div className="flex flex-col bg-white px-8 py-5 rounded-md">
          <span>
            دو نوع روش برای ثبت‌نام اولیه در سامانه وجود دارد. روش اول اینکه
            مسئول بخش آموزش که دسترسی ادمین به سایت دارد لیست دانشجویان را از
            دانشکده دریافت کرده و خود به‌صورت دستی آنها را ثبت‌نام کند. روش دوم
            هم این است که از طریق خود سامانه وارد بخش ورود یا ثبت‌نام شده و از
            آنجا اطلاعات خود را ثبت کنند. در روش ثبت‌نام توسط خود کاربر ابتدا
            فقط اطلاعات اولیه مهم دریافت میشود و در مرحله بعدی پس از ورود کاربر
            اطلاعات تکمیلی از جمله استاد راهنما و نام دانشکده و شماره ترم و
            اطلاعات تکمیلی مربوط به پایان‌نامه دریافت میشود.
          </span>
          <img
            className="md:w-8/12 w-11/12 self-center mt-5 border-2 rounded-md shadow-sm"
            src={Login}
            alt="pictur"
          />
          <span className="self-center mb-5 text-[#B0B9BE]">
            صفحه ثبت‌نام اولیه دانشجو قبل از ورود
          </span>
          <span>
            در ادامه پس از ورود کاربر با همچنین صفحه ای روبرو خواهید شد.
          </span>
          <img
            className="md:w-8/12 w-11/12 self-center mt-5 border-2 rounded-md shadow-sm"
            src={pre1}
            alt="pictur"
          />
          <span className="my-5">
            برای ادامه کار نیاز است تا پیش ثبت نام انجام داده و اطلاعات کاربری
            را تکمیل کنید . بعد از مرحله تکمیل مشخصات شخصی نیاز است تا مشخصات
            پایان نامه تکمیل شود.
          </span>
          <img
            className="md:w-8/12 w-11/12 self-center mb-5 border-2 rounded-md shadow-sm"
            src={pre2}
            alt="pictur"
          />
          <span>
            در این مرحله اطلاعات مروبط به پایان نامه را اضافه می کنیم. در ادامه
            نیاز است تا فایل پایان نامه و صورت جلسه را آپلود کنیم.
          </span>
          <img
            className="md:w-8/12 w-11/12 self-center my-5 border-2 rounded-md shadow-sm"
            src={pre3}
            alt="pictur"
          />
          <span>
            و در پایان می توان از بخش وضعیت پایان نامه ، مراحل تایید پایان نامه
            خود را چک کرد و همچنین در صورت نیاز برای مکاتبه با استاد راهنما می
            توان از بخش مکاتبات استفاده کرد.
          </span>
        </div>
      </div>
    </div>
  );
};
export default Help;
