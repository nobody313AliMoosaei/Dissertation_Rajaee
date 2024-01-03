import { useState, useEffect } from "react";
//SVG
import { ReactComponent as Book } from "../../../../assets/svg/book.svg";
import { ReactComponent as Student } from "../../../../assets/svg/student.svg";
import { ReactComponent as EducationUnit } from "../../../../assets/svg/educationUnit.svg";
import { PostGetData } from "../../../../services/home";

const Information = () => {
  // const [scrollPosition, setScrollPosition] = useState();
  // const [isStartCounter, setIsStartCounters] = useState(false);

  // const Supervisor = 100;
  // const masterJudge = 200;
  // const educationUnit = 20;
  // const graduation = 1200;

  // useEffect(() => {
  //   window.addEventListener("scroll", listenToScroll);
  // }, []);

  // const listenToScroll = () => {
  //   const winScroll =
  //     document.body.scrollTop || document.documentElement.scrollTop;
  //   setScrollPosition(winScroll);
  // };
  // if (
  //   scrollPosition >= 100 &&
  //   !isStartCounter &&
  //   window.location.pathname !== "login"
  // ) {
  //   setIsStartCounters(true);
  //   /// counter graduation
  //   setInterval(() => {
  //     if (
  //       Number(document.getElementById("graduation").innerHTML) < graduation
  //     ) {
  //       document.getElementById("graduation").innerHTML =
  //         Number(document.getElementById("graduation").innerHTML) + 50;
  //     }
  //   }, 100);
  //   // counter masterJudge
  //   setInterval(() => {
  //     if (
  //       Number(document.getElementById("masterJudge").innerHTML) < masterJudge
  //     ) {
  //       document.getElementById("masterJudge").innerHTML =
  //         Number(document.getElementById("masterJudge").innerHTML) + 10;
  //     }
  //   }, 100);
  //   // counter educationUnit
  //   setInterval(() => {
  //     if (
  //       Number(document.getElementById("educationUnit").innerHTML) <
  //       educationUnit
  //     ) {
  //       document.getElementById("educationUnit").innerHTML =
  //         Number(document.getElementById("educationUnit").innerHTML) + 1;
  //     }
  //   }, 100);
  //   // counter Supervisor
  //   setInterval(() => {
  //     if (
  //       Number(document.getElementById("supervisor").innerHTML) < Supervisor
  //     ) {
  //       document.getElementById("supervisor").innerHTML =
  //         Number(document.getElementById("supervisor").innerHTML) + 5;
  //     }
  //   }, 100);
  // }
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncGetData();
  }, []);

  const asyncGetData = async () => {
    setIsLoading(true);
    setError({});
    const response = await PostGetData();

    // console.log("response : ", response.status);

    if (response.status === 200) {
      setData(response.data);
    } else {
      //error occurre
      console.log("response : ", response);
    }

    setIsLoading(false);
  };

  return (
    <div className="md:w-10/12  flex flex-col items-center justify-center md:my-7">
      <div className="sm:-mt-28 -mt-32 grid sm:grid-cols-4 grid-cols-2 sm:gap-12 gap-x-8 gap-y-4 bg-[#fff] py-5 sm:px-12 px-8 rounded-md">
        <div className="flex flex-col items-center gap-2 text-center ">
          <Book />
          <span className="text-xl font-medium text-[#003B7E]" id="graduation">
            {data.dissertationCount}
          </span>
          <span className="text-lg text-center font-medium">مقالات</span>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <Student />
          <span
            className="text-xl font-medium text-[#003B7E]"
            id="educationUnit"
          >
            {data.collegeCount}
          </span>
          <span className="text-lg font-medium">واحد اموزشی</span>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <EducationUnit />
          <span className="text-xl font-medium text-[#003B7E]" id="supervisor">
            {data.teachersCount}
          </span>
          <span className="text-lg font-medium">استاد راهنما</span>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <Student />
          <span className="text-xl font-medium text-[#003B7E]" id="masterJudge">
            {data.studentCount}
          </span>
          <span className="text-lg font-medium"> دانشجویان</span>
        </div>
      </div>
    </div>
  );
};

export default Information;
