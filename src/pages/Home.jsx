import React from "react";
import { useTranslation } from "react-i18next";
import { assets } from "../assets";

import About from "../components/About";
import CEOMessage from "../components/CEOMessage";
import Companies from "../components/Companies";

const Home = () => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
  };

  // const body = t("landing.body", { returnObjects: true });

  return (
    <section>
      <div className="bg relative h-screen">
        <img
          src={assets.hero}
          alt=""
          className={`h-screen w-full object-cover `}
        />
        <span className="absolute inset-0 bg-black/50"></span>

        <div
          className="hero absolute w-full md:w-[450px]  h-screen lg:w-[500px] md:h-auto top-0 md:top-1/2 md:-translate-y-1/2
  start-0 lg:start-20 px-4  lg:ps-10 flex flex-col justify-center  text-start p-3
"
        >
          <span className="absolute inset-0 bg-white/30 rounded-2xl backdrop-blur-sm block"></span>

          <div className="relative z-10">
            <h1 className="text-[var(--main-color)] tracking-wider leading-12 text-[26px] md:text-[34px] font-bold  mb-2">
              {t("landing.header")}
            </h1>
            <p className="text-white text-[15px] md:text-[16px] leading-6 md:leading-[2] md:pe-6 text-justify">
              {t("landing.body")}
            </p>

            <a href="#about" className="flex justify-center lg:justify-start">
              <button className="bg-[var(--sec-color)] text-[15px] rounded-2xl w-40 h-10 my-4 md:my-6 text-white cursor-pointer hover:bg-[#015909] transition duration-300">
                {t("landing.CTA")}
              </button>
            </a>
          </div>
        </div>
      </div>

      <About />
      <CEOMessage />
      <Companies />
    </section>
  );
};

export default Home;
