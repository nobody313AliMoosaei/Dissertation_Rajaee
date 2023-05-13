import { useState, useEffect } from "react";

const FinalRegistration = ({ stepForwardHandler, stepBackwardHandler }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const personalInformation = sessionStorage.getItem("information");
    const thesisInformation = sessionStorage.getItem("thesisInformation");
    const listPersianVocabulary = sessionStorage.getItem(
      "listPersianVocabulary"
    );
    const listEnglishVocabulary = sessionStorage.getItem(
      "listEnglishVocabulary"
    );
    console.log(listEnglishVocabulary);
    console.log(listPersianVocabulary);
    if (
      personalInformation &&
      thesisInformation &&
      Object.keys(personalInformation).length > 0 &&
      Object.keys(personalInformation).length > 0
    ) {
      setData({
        ...JSON.parse(personalInformation),
        ...JSON.parse(thesisInformation),
      });
    }
  }, []);
  console.log(data);
  return (
    <div>
      <div className="bg-[#fff] flex flex-col justify-start mt-10 p-8 gap-0 rounded-md">
        <div className="mb-3 text-[#003B7E] font-medium">
          <span className="border-b-2 border-[#003B7E]">اطلاعات دانشجو</span>
        </div>
        <div className="grid lg:grid-cols-3 lg:gap-y-8 lg:gap-x-3 md:grid-cols-2 gap-y-8 gap-x-6 sm:grid-cols-1 ">
          <div>
            <span className="font-medium">نام :</span>
            <span className="text-[#B0B9BE] text-lg">{data.firstName}</span>
          </div>
          <div>
            <span className="font-medium">نام خانوادگی :</span>
            <span className="text-[#B0B9BE] text-lg">{data.lastName}</span>
          </div>
          <div>
            <span className="font-medium">ترم:</span>
            <span className="text-[#B0B9BE] text-lg">{data.term}</span>
          </div>
          <div>
            <span className="font-medium">دانشکده:</span>
            <span className="text-[#B0B9BE] text-lg">{data.faculty}</span>
          </div>
          <div>
            <span className="font-medium">استاد راهنما :</span>
            <span className="text-[#B0B9BE] text-lg">{data.supervisor}</span>
          </div>
          {data.supervisor2 ? (
            <div>
              <span className="font-medium">استاد راهنما دوم :</span>
              <span className="text-[#B0B9BE] text-lg">{data.supervisor2}</span>
            </div>
          ) : (
            <></>
          )}
          {data.supervisor3 ? (
            <div>
              <span className="font-medium">استاد راهنما سوم :</span>
              <span className="text-[#B0B9BE] text-lg">{data.supervisor3}</span>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="mt-10 bg-white p-8 rounded-md">
        <div className="mb-3 text-[#003B7E] font-medium">
          <span className="border-b-2 border-[#003B7E]">
            اطلاعات پایان‌نامه
          </span>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:gap-x-8 gap-x-2 gap-y-6">
          <div className="flex gap-2">
            <span className="sm:text-base font-medium text-sm">
              عنوان پایان‌نامه(فارسی):{" "}
            </span>
            <span className="sm:text-base font-medium text-[#B0B9BE] text-sm">
              {data.persianTitle}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="sm:text-base font-medium text-sm">
              عنوان پایان‌نامه(انگلیسی):{" "}
            </span>
            <span className="sm:text-base font-medium text-[#B0B9BE] text-sm">
              {data.englishTitle}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="sm:text-base font-medium text-sm">
              واژگان(فارسی){" "}
            </span>
            {data.listPersianVocabulary.map((item, index) => (
              <span key={index} className="border-2 h-24 p-2 rounded-md">
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col">
            <span className="sm:text-base font-medium text-sm">
              واژگان(انگلیسی){" "}
            </span>
            {data.listEnglishVocabulary.map((item, index) => (
              <span key={index} className="border-2 h-24 p-2 rounded-md">
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col md:col-span-2">
            <span className="sm:text-base font-medium text-sm">چکیده</span>
            <span className="border-2 h-32   p-2 rounded-md">
              {data.abstract}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalRegistration;
