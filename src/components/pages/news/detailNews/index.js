//SVG
import { ReactComponent as Home } from "../../../../assets/svg/home-2.svg";
import { ReactComponent as Left } from "../../../../assets/svg/arrow-left.svg";
import Newsimage from "../../../../assets/image/graduation.png";
const DetailNews = () => {
  return (
    <div className="mt-36 flex justify-center">
      <div className="w-10/12">
        <div className="flex items-center gap-x-2">
          <Home />
          <Left />
          <span>اخبار</span>
          <Left />
          <span className="text-[#B0B9BE]">عنوان خبر</span>
        </div>
        <div className="my-4">
          <span className="text-xl font-bold">عنوان خبر</span>
        </div>
        <div>
          <span>19 آبان 1402</span>
          <span className="mx-1">-</span>
          <span>14:19</span>
        </div>
        <div className=" mt-5 bg-white shadow-xl rounded-md">
          <img
            src={Newsimage}
            alt="aaa"
            className="w-full max-h-[20rem] rounded-t-md"
          />
          <div className="px-5 py-8">
            <span className="leading-8">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailNews;
