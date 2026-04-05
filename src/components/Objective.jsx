import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { assets, Objectives } from "../assets";
import { FaCheck } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
const Objective = () => {
  const { t } = useTranslation();
  const data = t("objective", { returnObjects: true });
 useEffect(() => {
      Aos.init({
        duration: 800, // مدة الأنيميشن
        once: true, // يحصل مرة واحدة بس
      });
    }, [])
  return (
    <>
      <section data-aos="fade-up" className="  flex flex-col   ">
      

        <div className="flex flex-col  md:flex-row justify-between  px-10 md:px-12 lg:px-20 gap-5 ">
          

         
            <div className="flex  flex-col gap-3 ">
                <h1 className=" text-[22px] lg:text-[32px]  tracking-widest font-semibold text-[var(--main-color)]  pb-5 ">
          {data.header}
        </h1>
              {Objectives.map((item, i) => (
                <div key={i} className="flex items-center py-2 px-2 rounded  hover:bg-gray-300 transition duration-300 cursor-pointer ">
                 
                    <FaCheck className="w-10 h-10 text-xl p-2 me-2 text-[#0c6c38]" />
                  
                  <div>
                    <h3 className="text-[16px] lg:text-[20px] font-semibold">{t(item.titleKey)}</h3>
                    <p className="text-[15px] lg:text-[18px] text-gray-600"> {t(item.bodyKey)}</p>
                  </div>
                </div>
              ))}
             
           
          </div>
          <div className=" rounded-lg overflow-hidden ">
            <img src={assets.visionImg} className="w-full md:w-[350px] lg:w-[450px]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Objective;
