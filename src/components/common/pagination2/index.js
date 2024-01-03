import { useState, useEffect } from "react";
import { ReactComponent as Next } from "./../../../assets/svg/arrow_forward_ios_FILL0_wght400_GRAD0_opsz24.svg";

const Pagination2 = ({ setPageNumber, isFinish, pageNumber, action }) => {
  return (
    <div className="flex justify-center gap-x-4 items-center ">
      <button
        disabled={isFinish}
        onClick={() => {
          setPageNumber(pageNumber + 1);
          action(pageNumber + 1);
        }}
        className={`bg-[#003b7e29] sm:px-4 p-2 rounded-md text-lg text-[#003B7E] disabled:cursor-not-allowed`}
      >
        <Next />
      </button>
      <div className="flex gap-2 text--lg">
        <span>{pageNumber}</span>
      </div>
      <button
        disabled={pageNumber === 1 ? true : false}
        onClick={() => {
          setPageNumber(pageNumber - 1);
          action(pageNumber - 1);
        }}
        className="bg-[#003b7e29] sm:px-4 p-2 rounded-md text-lg text-[#003B7E] disabled:cursor-not-allowed"
      >
        <Next className="rotate-180" />
      </button>
    </div>
  );
};

export default Pagination2;
