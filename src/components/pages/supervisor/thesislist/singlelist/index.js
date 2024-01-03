import { Link } from "react-router-dom";

const SingleList = ({ id, singleDissertation }) => {
  return (
    <div className="grid grid-cols-12 p-3 border-b-2 rounded-sm">
      <span className="col-span-1">{id + 1}</span>
      {/* <span className="hidden lg:block">{name}</span>
      <span className="hidden md:block"> {family}</span> */}
      <span className="col-span-3 text-center truncate">
        {singleDissertation.displayStatusDissertation}
      </span>
      <span className="truncate col-span-4 text-center">
        {singleDissertation.titlePersian}
      </span>
      <span className="truncate col-span-2 text-center">
        {singleDissertation.termNumber}
      </span>
      <Link to={`/employees/detail/${singleDissertation.studentId}`}>
        <button className="bg-[#2080F6] w-fit justify-self-end px-2 py-1 rounded-sm text-white col-span-2 sm:col-span-1">
          جزئیات
        </button>
      </Link>
    </div>
  );
};

export default SingleList;
