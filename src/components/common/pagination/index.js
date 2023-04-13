import { useState, useEffect } from "react";
const Pagination = ({ count, setIndexList, pageNumber }) => {
  const pageCount = Math.ceil(count / 4);
  const setPage = (number) => {
    if (number <= pageCount && number > 0) {
      setIndexList(number);
    }
  };
  return (
    <div className="flex justify-around items-center ">
      <button
        onClick={() => setPage(pageNumber + 1)}
        className="bg-[#003b7e29] sm:px-4 p-2 rounded-md text-lg text-[#003B7E]"
      >
        بعدی
      </button>
      <div className="flex gap-2 text--lg">
        <span>صفحه</span>
        <span className="font-medium">{pageNumber}</span>
        <span>از</span>
        <span className="font-medium">{pageCount}</span>
      </div>
      <button
        onClick={() => setPage(pageNumber - 1)}
        className="bg-[#003b7e29] sm:px-4 p-2 rounded-md text-lg text-[#003B7E]"
      >
        قبلی
      </button>
    </div>
  );
};

export default Pagination;
