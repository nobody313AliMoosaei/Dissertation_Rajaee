import { Outlet } from "react-router-dom";

//Components
import BackImage from "../../components/pages/home/backImage";
import Guide from "../../components/pages/home/guide";
import Information from "../../components/pages/home/information";
import News from "../../components/pages/home/news";
import Thesis from "../../components/pages/home/thesis";

const Home = () => {
  return (
    <div className="">
      <BackImage className="" />
      <div className="relative flex flex-col items-center justify-center">
        <Information />
        <News />
        <Guide />
      </div>
    </div>
  );
};

export default Home;
