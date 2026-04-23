import { useEffect } from "react";

import { useTranslation } from "react-i18next";
import { assets } from "../assets";
import AOS from "aos";
import "aos/dist/aos.css";

const CEOMessage = () => {
  const { t } = useTranslation();
  const body = t("ceoMessage.body", { returnObjects: true });

  // ==================== page Animation =============
  useEffect(() => {
    AOS.init({
      duration: 800, // مدة الأنيميشن
      once: true, // يحصل مرة واحدة بس
    });
  }, []);

  return (
    <section className=" flex flex-col md:flex-row  items-center gap-y-3 justify-between  bg-[var(--main-color)] px-5 md:px-12 lg:px-20 my-10 py-10  ">
      <div data-aos="fade-up" className="Text flex flex-col  w-full ">
        <h1 className="text-[22px] md:text-[32px] font-semibold text-[var(--sec-color)] mb-4 text-center">
          {t("ceoMessage.header")}
        </h1>
        <h2 className="text-white/55 font-light text-[12px] md:text-[14px] mb-5 text-center">
          {t("ceoMessage.subtitle")}
        </h2>
        <div className="flex flex-col gap-2 w-full text-justify">
          {body.map((item, index) => (
            <p className="text-[14px] text-white md:text-[16px] leading-7 text-center" key={index}>
              {item}
            </p>
          ))}
        </div>
        <h2 className=" text-end text-white font-semibold text-[15px] text-[18px] my-2">
          {t("ceoMessage.signature")}
        </h2>
      </div>

      {/* <div className="Image rounded-2xl overflow-hidden bg-gray-100 shadow-lg ">
        <img
          data-aos="fade-right"
          src={assets.CEO}
          alt=""
          className="w-[350px] md:w-[300px] lg:w-[400px]"
        />
      </div> */}
    </section>
  );
};

export default CEOMessage;
