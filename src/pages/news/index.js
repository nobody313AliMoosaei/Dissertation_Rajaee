import SingleNews from "../../components/pages/home/news/singleNews";

const News = () => {
  const newsList = [
    {
      id: 1,
      title: " عنوان خبر",
      text: " از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      date: "1 / 2 / 1401",
    },
    {
      id: 2,
      title: " عنوان خبر",
      text: " از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      date: "2 / 2 / 1401",
    },
    {
      id: 3,
      title: " عنوان خبر",
      text: " از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      date: "3 / 2 / 1401",
    },
    {
      id: 4,
      title: " عنوان خبر",
      text: " از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      date: "4 / 2 / 1401",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full mt-36">
      <div className="w-10/12">
        {newsList.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-5">
            {Array.isArray(newsList) &&
              newsList.map((item, index) => (
                <SingleNews
                  key={index}
                  title={item.title}
                  date={item.date}
                  text={item.text}
                />
              ))}
          </div>
        ) : (
          <span className="bg-slate-500 text-lx font-bold w-2/4 my-[3.8rem] text-center py-10  rounded-md">
            داده ای برای نمایش وجود ندارد !
          </span>
        )}
      </div>
    </div>
  );
};

export default News;
