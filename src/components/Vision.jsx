import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Aos from "aos";
import "aos/dist/aos.css";

const Vision = () => {
  const { t} = useTranslation();
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
      className="  pt-5 pb-10 flex flex-col items-center bg-[var(--main-color)] text-white  px-4 lg:px-20 py-3 lg:py-12 my-10">
        <h1 className=" text-[22px] lg:text-[32px]  tracking-widest font-semibold text-white  ">
          {t("Vision.header")}
        </h1>
        {/* <div className="header flex items-center justify-center [direction:ltr] [unicode-bidi:isolate] ">
          <img
            src={assets.rightLine}
            alt=""
            className="w-20 block object-contain !scale-x-100"
          />
         
          <img
            src={assets.leftLine}
            alt=""
            className="w-20 block object-contain !scale-x-100"
          />
        </div> */}
       
          <p className="mt-3 lg:mt-4 w-full lg:w-3/4  text-gray-200 text-[14px] lg:text-[16px] leading-loose text-justify md:text-center">{t("Vision.body")}</p>
      
      </section>
    </>
  );
};

export default Vision;
