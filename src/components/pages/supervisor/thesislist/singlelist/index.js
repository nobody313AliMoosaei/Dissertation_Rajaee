import { Link } from "react-router-dom";

const SingleList = ({ id, name, family, number, title }) => {
  return (
    <div className="grid md:grid-cols-7 sm:grid-cols-6 grid-cols-5 p-3 rounded-sm">
      <span className="col-span-1">{id}</span>
      <span className="hidden lg:block">{name}</span>
      <span className="hidden md:block"> {family}</span>
      <span className="col-span-2 lg:col-span-1">{number}</span>
      <span className="hidden sm:block truncate  sm:col-span-2">{title}</span>
      <Link to={`/supervisor/detail/${id}`}>
        <button className="bg-[#2080F6] w-fit justify-self-end px-2 py-1 rounded-sm text-white col-span-2 sm:col-span-1">
          جزئیات
        </button>
      </Link>
    </div>
  );
};

export default SingleList;
