import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosCloseCircle, IoIosMenu } from "react-icons/io";
import { assets, navLinks } from "../assets/index";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        setIsScrolled(window.scrollY > 10);
      } else {
        setIsScrolled(true);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`nav flex flex-col md:flex-row justify-between fixed top-0 left-0 lg:h-[70px] ${
          isScrolled
            ? "bg-[var(--main-color)] md:py-4"
            : "bg-[var(--main-color)] md:bg-transparent py-4 md:py-6"
        } z-90 w-full items-center py-1 text-white px-8 shadow-xs`}
      >
        <div className="PC lg:flex md:flex-1 mx-10 my-2 justify-between items-center">
          <ul className=" menu hidden md:flex   flex-1 space-x-10">
            {navLinks.map((item, index) => (
              <Link to={item.pathKey}>
                <li
                  key={index}
                  className="group lg:text-lg md:text-base text-sm font-medium  tracking-wide relative"
                >
                  {t(item.nameKey)}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left origin-right transition duration-300 ${
                      isScrolled ? "bg-gray-100" : " bg-indigo-900"
                    }`}
                  ></span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="logo md:my-3 lg:ltr:mr-20 lg:rtl:ml-20">
          <img src={assets.wLogo} alt="" width={"180"} />
        </div>
        <div className="CTA hidden md:flex">
          <button
            onClick={toggleLang}
            className="bg-[#0c6c38] px-2 py-1 rounded cursor-pointer text-white"
          >
            {i18n.language === "en" ? "AR" : "En"}
          </button>
        </div>

        {/* ============================ Mobile ========================== */}

        <div className="mobile relative flex justify-center  w-full flex-1  md:hidden ">
          {!isOpenMenu ? (
            <IoIosMenu
              onClick={() => setIsOpenMenu(true)}
              className={`text-4xl -mt-12 absolute  right-2 ${
                isScrolled ? "text-gray-100" : " text-white"
              } `}
            />
          ) : (
            <IoIosCloseCircle
              onClick={() => setIsOpenMenu(false)}
              className={`text-4xl -mt-14 absolute  right-3 ${
                isScrolled ? "text-gray-100" : " text-indigo-900"
              } `}
            />
          )}
          {isOpenMenu && (
            <div className="md:hidden  items-center space-y-12 py-4 w-full px-10 menu flex flex-col">
              <ul className="  menu flex flex-col items-center space-y-8">
                {navLinks.map((item, index) => (
                  <li
                    key={index}
                    className="group lg:text-lg md:text-base px-4 text-sm font-medium  tracking-wide  relative"
                  >
                    <Link to={item.pathKey}> {t(item.nameKey)} </Link>
                    <span
                      className={`absolute -bottom-1/2 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left origin-right transition duration-300 ${
                        isScrolled ? "bg-gray-100" : " bg-indigo-900"
                      }`}
                    ></span>
                  </li>
                ))}
              </ul>
              <div className="CTA flex md:hidden">
                <button
                  onClick={toggleLang}
                  className="bg-indigo-900 px-2 py-1 rounded text-white"
                >
                  {i18n.language === "en" ? "AR" : "En"}
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
