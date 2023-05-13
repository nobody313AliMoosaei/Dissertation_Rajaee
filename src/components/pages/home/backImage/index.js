//PNG
import BackgroungImage from "../../../../assets/image/graduation.png";

const BackImage = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroungImage})` }}
    >
      {/* <img className="w-full h-screen contrast-75 " src={BackgroungImage} /> */}
      <div className="flex flex-col justify-center items-center pt-36">
        <span className="lg:text-4xl text-2xl text-center font-bold">
          سامانه ثبت پایان نامه دانشگاه تربیت دبیر شهید رجایی
        </span>
        <span className="text-center lg:w-3/4 md:text-lg text-base my-5 font-medium text-[#3c414e] ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </span>
      </div>
    </div>
  );
};

export default BackImage;
