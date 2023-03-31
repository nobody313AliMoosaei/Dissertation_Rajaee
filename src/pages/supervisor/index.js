import { useState, useEffect } from "react";
import HeaderSupervisor from "../../components/pages/supervisor/headersupervisor";
import ThesisDetails from "../../components/pages/supervisor/thesisdetails";
import ThesisList from "../../components/pages/supervisor/thesislist";

const Supervisor = () => {
  const [showThesisDetail, setShowThesisDetail] = useState(false);
  const check = () => {
    setShowThesisDetail(!showThesisDetail);
  };
  return (
    <div
      className={`bg-[#F5F6FA] w-full pb-10 ${
        showThesisDetail ? "h-[100%]" : "h-[100vh]"
      }`}
    >
      <HeaderSupervisor />
      {showThesisDetail ? (
        <ThesisDetails check={check} />
      ) : (
        <ThesisList check={check} />
      )}
    </div>
  );
};

export default Supervisor;
