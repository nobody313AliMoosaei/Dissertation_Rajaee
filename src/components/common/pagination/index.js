import { useState, useEffect } from "react";
const Pagination = ({
  action,
  setPageNumber,
  pageNumber,
  isFinish,
  setIsFinish,
}) => {
  return (
    <div className="flex justify-around items-center ">
      <button
        disabled={isFinish}
        onClick={() => {
          setPageNumber(pageNumber + 1);
          action(pageNumber + 1);
        }}
        className={`bg-[#003b7e29] sm:px-4 p-2 rounded-md text-lg text-[#003B7E] disabled:cursor-not-allowed`}
      >
        بعدی
      </button>
      <div className="flex gap-2 text--lg">
        <span>صفحه</span>
        <span className="font-medium">{pageNumber}</span>
      </div>
      <button
        disabled={pageNumber === 1 ? true : false}
        onClick={() => {
          setPageNumber(pageNumber - 1);
          action(pageNumber - 1);
        }}
        className="bg-[#003b7e29] sm:px-4 p-2 rounded-md text-lg text-[#003B7E] disabled:cursor-not-allowed"
      >
        قبلی
      </button>
    </div>
  );
};

export default Pagination;
