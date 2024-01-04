// SVG
import { ReactComponent as Pen } from "../../../../assets/svg/pen.svg";

const Guide = () => {
  return (
    <div className="">
      <div className="mt-12 my-10 text-center">
        <span
          title="دانلود فایل"
          className="text-xl font-bold border-b-2 border-b-slate-900 hover:text-blue-400 cursor-pointer "
        >
          فرایند ثبت پایان نامه
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        <div className="flex flex-col items-center gap-5 bg-[#fff] p-5 rounded-md w-60">
          <div className="p-4 bg-[#5e81d129] rounded-full">
            <Pen className="" />
          </div>
          <span>گام اول</span>
          <span className="text-lg font-bold">تکمیل اطلاعات شخصی</span>
        </div>
        <div className="flex flex-col items-center gap-5 bg-[#fff] p-5 rounded-md w-60">
          <div className="p-4 bg-[#5e81d129] rounded-full">
            <Pen className="" />
          </div>
          <span>گام دوم</span>
          <span className="text-lg font-bold">تکمیل مشخصات پایان نامه</span>
        </div>
        <div className="flex flex-col items-center gap-5 bg-[#fff] p-5 rounded-md w-60">
          <div className="p-4 bg-[#5e81d129] rounded-full">
            <Pen className="" />
          </div>
          <span>گام سوم</span>
          <span className="text-lg font-bold">آپلود فایل پایان نامه</span>
        </div>
        <div className="flex flex-col items-center gap-5 bg-[#fff] p-5 rounded-md w-60">
          <div className="p-4 bg-[#5e81d129] rounded-full">
            <Pen className="" />
          </div>
          <span>گام چهارم</span>
          <span className="text-lg font-bold">تایید استاد راهنما</span>
        </div>
        <div className="flex flex-col items-center gap-5 bg-[#fff] p-5 rounded-md w-60">
          <div className="p-4 bg-[#5e81d129] rounded-full">
            <Pen className="" />
          </div>
          <span>گام پنجم</span>
          <span className="text-lg text-center font-bold">
            تایید کارشناس امور پایان‌نامه
          </span>
        </div>
        <div className="flex flex-col items-center gap-5 bg-[#fff] p-5 rounded-md w-60">
          <div className="p-4 bg-[#5e81d129] rounded-full">
            <Pen className="" />
          </div>
          <span>گام ششم</span>
          <span className="text-lg text-center font-bold">
            تایید کار شناس تحصیلات تکمیلی
          </span>
        </div>
      </div>
    </div>
  );
};

export default Guide;
