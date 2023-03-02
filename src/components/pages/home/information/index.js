import { useState, useEffect } from "react";
//SVG
import { ReactComponent as Book } from "../../../../assets/svg/book.svg";
import { ReactComponent as Student } from "../../../../assets/svg/student.svg";

const Information = () => {
  const [scrollPosition, setScrollPosition] = useState();
  const [isStartCounter, setIsStartCounters] = useState(false);

  const Supervisor = 100;
  const masterJudge = 200;
  const educationUnit = 20;
  const graduation = 1200;

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    setScrollPosition(winScroll);
    if (
      winScroll >= 100 &&
      !isStartCounter &&
      window.location.pathname === "/"
    ) {
      setIsStartCounters(true);
      /// counter graduation
      setInterval(() => {
        if (
          Number(document.getElementById("graduation").innerHTML) < graduation
        ) {
          document.getElementById("graduation").innerHTML =
            Number(document.getElementById("graduation").innerHTML) + 50;
        }
      }, 100);
      // counter masterJudge
      setInterval(() => {
        if (
          Number(document.getElementById("masterJudge").innerHTML) < masterJudge
        ) {
          document.getElementById("masterJudge").innerHTML =
            Number(document.getElementById("masterJudge").innerHTML) + 10;
        }
      }, 100);
      // counter educationUnit
      setInterval(() => {
        if (
          Number(document.getElementById("educationUnit").innerHTML) <
          educationUnit
        ) {
          document.getElementById("educationUnit").innerHTML =
            Number(document.getElementById("educationUnit").innerHTML) + 1;
        }
      }, 100);
      // counter Supervisor
      setInterval(() => {
        if (
          Number(document.getElementById("supervisor").innerHTML) < Supervisor
        ) {
          document.getElementById("supervisor").innerHTML =
            Number(document.getElementById("supervisor").innerHTML) + 5;
        }
      }, 100);
    }
  };
  return (
    <div className="w-10/12 flex flex-col items-center justify-center md:my-7">
      <div className="flex flex-col justify-center items-center">
        <span className="lg:text-4xl md::text-2xl text-xl text-center font-bold">
          سامانه ثبت پایان نامه دانشگاه تربیت دبیر شهید رجایی
        </span>
        <span className="text-center lg:w-3/4 md:text-xl text-base my-5 font-medium text-[#3c414e] ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </span>
      </div>
      <div className="sm:mt-72 mt-60 grid sm:grid-cols-4 grid-cols-2 gap-12 bg-[#fff] py-5 px-12 rounded-md">
        <div className="flex flex-col items-center gap-2 ">
          <Book />
          <span className="text-xl font-medium text-[#003B7E]" id="graduation">
            0
          </span>
          <span className="text-xl font-medium">مقالات</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Student />
          <span
            className="text-xl font-medium text-[#003B7E]"
            id="educationUnit"
          >
            0
          </span>
          <span className="text-xl font-medium">واحد اموزشی</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Student />
          <span className="text-xl font-medium text-[#003B7E]" id="supervisor">
            0
          </span>
          <span className="text-xl font-medium">استاد راهنما</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Student />
          <span className="text-xl font-medium text-[#003B7E]" id="masterJudge">
            0
          </span>
          <span className="text-xl font-medium">استاد داور</span>
        </div>
      </div>
    </div>
  );
};

export default Information;
