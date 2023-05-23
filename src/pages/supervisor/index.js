import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import HeaderSupervisor from "../../components/pages/supervisor/headersupervisor";
import ThesisDetails from "../../components/pages/supervisor/thesisdetails";
import ThesisList from "../../components/pages/supervisor/thesislist";

const Supervisor = () => {
  return (
    <div className={`bg-[#F5F6FA] w-full pb-10 min-h-screen h-full `}>
      <HeaderSupervisor />
      <Outlet />
    </div>
  );
};

export default Supervisor;
