import React, { useEffect } from "react";
import { Qhse } from "../assets";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
const QHSE = () => {
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
      className="flex flex-col justify-center mt-10 pt-5 pb-10 bg-gray-100 ">
         <h1  className=" text-[22px] lg:text-[32px]  tracking-widest font-semibold  text-[var(--main-color)] text-center py-3 md:py-10">
            {t("Qhse.header")}
          </h1>
        
        <div className="body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 md:px-12 lg:px-20">
          {Qhse.map((item, i) => (
            <div key={i} className="flex flex-col p-3 items-center  shadow bg-white rounded-2xl hover:scale-105 transition duration-300 cursor-pointer">
              <img src={item.imageKey} alt="" className="w-20" />
              <h3 className="font-semibold py-3 tracking-wider text-xl">{t(item.titleKey)}</h3>
              <p className="text-gray-700 leading-loose text-center text-sm">{t(item.bodyKey)}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default QHSE;
