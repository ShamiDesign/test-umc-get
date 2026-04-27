import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { assets } from "../assets";
import Servicess from "../components/Servicess";
import Aos from "aos";
import "aos/dist/aos.css";
const Services = () => {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init({
      duration: 800, // مدة الأنيميشن
      once: true, // يحصل مرة واحدة بس
    });
  }, []);
  return (
    <>
      <section id="Services" className="mt-28">
        <div data-aos="fade-up" className="Header flex flex-col px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-20 ">
            <div className="body mt-3  ">
              <h1 className="text-[26px] lg:text-[40px] text-[var(--sec-color)] font-semibold ">
                {t("ourServices.header")}
              </h1>
              <p className="text-[15px] lg:text-[18px] leading-loose text-justify py-4 ">
                {t("ourServices.subtitle.p")}
                <span className="text-[var(--main-color)] font-semibold  text-[14px] md:text-[20px]">
                  {t("ourServices.subtitle.title")}
                </span>
                {t("ourServices.subtitle.body")}
              </p>
            </div>
            <div className="image overflow-hidden rounded-2xl shadow-sm   ">
              <img
                data-aos="fade-right"
                src={assets.sevHero}
                alt=""
                className="w-full h-full "
              />
            </div>
          </div>
        </div>

        {/* <div className="body  flex flex-col mt-30 px-5 md:px-12 lg:px-20 ">
          <div className="flex flex-col gap-20 ">
            {ourServices.map((item, i) => {
              const reversed = i % 2 === 1;
              return (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-2  gap-3 rounded-2xl overflow-hidden shadow-xl bg-gray-100"
                >
                  <div
                    className={`order-2 ${
                      reversed ? "md:order-1" : "md:order-2"
                    } flex flex-col  px-8 py-8`}
                  >
                    <h2 className="text-3xl uppercase text-[var(--sec-color)] pb-4 font-semibold tracking-wider">
                      {t(item.titleKey)} :-
                    </h2>
                    <p className="leading-loose">{t(item.bodyKey)}</p>
                  </div>
                  <img
                    src={item.imageLey}
                    alt=""
                    className={`order-1 min-h-[400px] ${
                      reversed ? "md:order-2" : "md:order-1"
                    } `}
                  />
                </div>
              );
            })}
          </div>
        </div> */}
        <div data-aos="fade-up" className="py-10">
          <Servicess />
        </div>
      </section>
    </>
  );
};

export default Services;
