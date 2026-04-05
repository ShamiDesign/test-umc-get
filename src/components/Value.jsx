import React, { useEffect } from "react";
import { values } from "../assets";
import { useTranslation } from "react-i18next";

import Aos from "aos";
import "aos/dist/aos.css";
const Value = () => {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init({
      duration: 800, // مدة الأنيميشن
      once: true, // يحصل مرة واحدة بس
    });
  }, []);
  return (
    <>
      <section
        data-aos="fade-up"
        className="flex flex-col justify-center my-10 "
      >
        <div className="header flex flex-col items-center px-5 md:px-12 lg:px-20 text-center">
          <div className="header flex items-center justify-center pb-2 [direction:ltr] [unicode-bidi:isolate] ">
            <h1 className=" text-[22px] lg:text-[32px]  tracking-widest font-semibold text-[var(--main-color)]  ">
              {t("values.header")}
            </h1>
          </div>
          <h3 className=" w-full lg:w-3/4 text-center text-gray-600 text-[14px] lg:text-[16px] leading-loose ">
            {t("values.subtitle")}
          </h3>
        </div>
        <div className="body grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  py-10 px-5 md:px-12 lg:px-20  gap-5">
          {values.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center shadow-sm rounded-2xl bg-gray-50 py-4 px-2 gap-2 hover:scale-105 transition duration-300 cursor-pointer"
            >
              <div className="iamge w-24 h-24 rounded-full p-5 bg-[var(--sec-color)] ">
                <img src={item.imageKey} className="" />
              </div>
              <h2 className="text-[12px] lg:text-[14px] font-semibold">
                {t(item.titleKey)}
              </h2>
              <p className="text-[12px] lg:text-[14px] leading-7 text-gray-700 text-center">
                {t(item.bodyKey)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Value;
