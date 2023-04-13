//PNG
import BackgroungImage from "../../../../assets/image/graduation.png";

const BackImage = () => {
  return (
    <div
      className="absolute top-0 w-full h-[100vh] bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${BackgroungImage})` }}
    >
      {/* <img className="w-full h-screen contrast-75 " src={BackgroungImage} /> */}
    </div>
  );
};

export default BackImage;
