//SVG
import { ReactComponent as Backward } from "../../../../../assets/svg/backward.svg";
const DetailLetter = ({ item, setShowMassage }) => {
  return (
    <div className={`flex flex-col gap-3 bg-white  rounded-md w-full`}>
      <div
        className="flex flex-row border-solid border-2 rounded-md w-fit border-[#003b7e73] mb-4 px-2 py-1 items-center"
        onClick={() => setShowMassage(0)}
      >
        <Backward />
        <button className=" pr-2 text-lg text-[#003B7E]">بازگشت</button>
      </div>
      <div className="flex gap-2 w-fit">
        <span className="sm:text-base font-medium text-sm">گیرنده :</span>
        <span>{item.receiver}</span>
      </div>
      <div className="flex gap-2 sm:w-3/4 md:w-full lg:w-3/4 w-full ">
        <span className="sm:text-base font-medium text-sm">عنوان :</span>
        <span>{item.title} </span>
      </div>
      <div className="flex flex-col gap-2 sm:w-3/4 md:w-full lg:w-11/12 w-full ">
        <div className="flex justify-between ">
          <span className="sm:text-base font-medium text-sm">متن :</span>
          <div className="flex gap-1">
            <span className="sm:text-base font-medium text-sm">تاریخ :</span>
            <span>1/1/1402</span>
          </div>
        </div>
        <span className="border-2 p-2 rounded-md max-h-60 overflow-y-scroll border-[#9B9B9B]">
          {" "}
          {item.text}
        </span>
      </div>
      <button className="bg-[#003b7e29] sm:px-4 self-end p-2 mt-4 rounded-md text-lg text-[#003B7E]">
        پاسخ
      </button>
    </div>
  );
};

export default DetailLetter;
