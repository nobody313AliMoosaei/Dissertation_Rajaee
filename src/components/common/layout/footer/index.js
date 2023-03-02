//SVG
import { ReactComponent as Location } from "./../../../../assets/svg/location.svg";
import { ReactComponent as Phone } from "./../../../../assets/svg/phone.svg";
import { ReactComponent as Email } from "./../../../../assets/svg/message.svg";
import { ReactComponent as Time } from "./../../../../assets/svg/time.svg";

const Footer = () => {
  return (
    <div className=" text-right bg-white flex lg:justify-around mt-10 sm:mx-0 ">
      <div className="grid bg-[#003B7E] text-[#fff] md:grid-cols-2 grid-cols-1 lg:flex-row lg:mr-0 w-full">
        <div className="text-center pt-10 lg:pt-5 lg:pr-10 lg:text-right ">
          <span className="font-bold text-base md:text-lg lg:text-xl">
            راه‌های ارتباطی
          </span>
          <div className="flex flex-col items-center pt-5 pb-16 text-xs md:text-sm lg:text-base lg:pt-10 lg:pb-0 lg:py-5 lg:items-start">
            <span className="flex items-start justify-center lg:justify-start">
              <Location className="mx-1 lg:ml-2 lg:mx-0 lg:mt-1" />
              <span className="w-[80%] lg:w-[80%] xl:w-full">
                آدرس: تهران ، لویزان ، خیابان شهید شعبانلو ، دانشگاه تربیت دبیر
                شهید رجایی
              </span>
            </span>
            <span className="flex items-center py-5">
              <Phone className="ml-2" />
              تلفن:۹-۲۲۹۷۰۰۶۰
            </span>
            <span className="flex items-center py-5">
              <Phone className="ml-2" />
              نمابر:۲۲۹۷۰۰۳۳
            </span>
            <span className="flex items-center py-5">
              <Email className="ml-2" />
              پست الکترونیک: sru@sru.ac.ir
            </span>
          </div>
        </div>
        <div className="text-center lg:text-right lg:pt-5 md:pt-10 ">
          <span className="font-bold text-base md:text-lg lg:text-xl">
            بخش های سایت
          </span>
          <ul className="flex flex-col items-center justify-between p-5 text-xs md:text-sm lg:text-base lg:pt-10 lg:pl-0 lg:pr-5 lg:items-start lg:list-disc">
            <li className="pb-5">صفحه اصلی</li>
            <li className="py-5">اخبار و اطلاعیه ها</li>
            <li className="py-5">راهنمای دانشجو</li>
            <li className="py-5">نمونه پایان نامه</li>
          </ul>
        </div>
        <div className="md:col-span-2 justify-center">
          <p className="text-[#ffa500] text-center md:text-sm lg:text-base text-sm p-4 bg-[#002652]">
            کلیه حقوق و اطلاعات مربوط به وب‌سایت متعلق به دانشگاه تربیت دبیر
            شهید رجایی تهران می‌باشد.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
