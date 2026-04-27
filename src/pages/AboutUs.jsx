import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { assets,  } from "../assets";
import Objective from "../components/Objective";
import Vision from "../components/Vision";
import Value from "../components/Value";
import QHSE from "../components/QHSE";

import Aos from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {

  const { t } = useTranslation();
  
  useEffect(() => {
      Aos.init({
        duration: 800, // مدة الأنيميشن
        once: true, // يحصل مرة واحدة بس
      });
    }, []);
  return (
    <>
      <section id="AboutUs" className="mt-28">
        <div className="Header flex flex-col px-4 md:px-20">
          <div className="flex flex-col items-center md:flex-row gap-4 md:gap-10 ">
            <div className="body mt-3  ">
              <h1 
               data-aos="fade-up"
              className="text-[26px] lg:text-[40px] text-[var(--sec-color)] font-semibold ">
                {t("aboutUs.header")}
              </h1>
              <p 
               data-aos="fade-up"
              className="text-[15px] lg:text-[18px] leading-loose text-justify md:text-start py-4 w-full ">
                {t("aboutUs.body")}
              </p>
            </div>
            <div className="image overflow-hidden rounded-2xl shadow-sm  ">
              <img
              data-aos="fade-right"
              src={assets.aboutUs} alt="" className="w-full "/>
            </div>
          </div>
        </div>


        <Vision />
        <Value />

        <Objective />
        <QHSE />
      </section>
    </>
  );
};

export default AboutUs;
