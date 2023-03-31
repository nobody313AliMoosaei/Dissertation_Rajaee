import Newletter from "./newletter";

const Correspondence = () => {
  return (
    <div>
      <div>
        <div className="px-5 py-3 bg-[#fff] flex gap-10 rounded-md">
          <span className="px-4 py-2 bg-[#003B7E] rounded-md">
            ارسال نامه جدید
          </span>
          <span className="px-4  py-2 bg-[#003B7E] rounded-md">
            نامه های دریافتی
          </span>
          <span className="px-4  py-2 bg-[#003B7E] rounded-md">
            نامه های ارسالی
          </span>
        </div>
      </div>
      <Newletter />
    </div>
  );
};

export default Correspondence;
