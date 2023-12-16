//File
import Proceedings from "../../../../assets/file/Proceedings.pdf";
import Undertaking from "../../../../assets/file/24_5_22650.pdf";
import Regulation from "../../../../assets/file/24_4_22849.pdf";
//SVG
import { ReactComponent as Pdf } from "../../../../assets/svg/pdf-svgrepo-com.svg";
const file = [
  {
    href: Proceedings,
    text: "فرم_صورت_جلسه",
  },
  {
    href: Undertaking,
    text: "فرم_تعهد_اصالت_اثر",
  },
  {
    href: Regulation,
    text: "آیین_نامه_روش_نگارش_پایان‌نامه",
  },
];

const Forms = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col gap-y-10 w-10/12 mt-16">
        {file.map((item, index) => (
          <a
            key={index}
            className="flex w-fit items-center hover:text-[#3d7ebe]"
            href={item.href}
            rel="noreferrer"
          >
            <Pdf className="w-8 h-8" />
            {`pdf.${item.text}`}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Forms;
