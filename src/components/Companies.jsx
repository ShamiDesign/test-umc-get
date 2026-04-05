import React from "react";
import { assets, comp } from "../assets";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Companies = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="px-5 md:px-10 lg:px-20 py-20 ">
        <div className="header flex items-center justify-center [direction:ltr] [unicode-bidi:isolate] ">
          <img
            src={assets.rightLine}
            alt=""
            className="w-20 block object-contain !scale-x-100"
          />
          <h1 className=" mx-2 text-3xl tracking-widest font-semibold text-[var(--main-color)]">
            {t("ourComp.name")}
          </h1>
          <img
            src={assets.leftLine}
            alt=""
            className="w-20 block object-contain !scale-x-100"
          />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-10  ">
          {comp.map((item, index) => (
            <div
              className="flex justify-center items-center h-[200px] md:max-w-[250px] md:max-h-[180px] p-4 rounded-2xl shadow overflow-hidden "
              key={index}
            >
              <Link to={item.path} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.image} 
                  alt=""
                  className="hover:scale-105 transition duration-300"
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Companies;
