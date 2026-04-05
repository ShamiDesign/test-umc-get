import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import { assets } from "../assets";

const About = () => {
  const { t, i18n } = useTranslation();
  const data = t("about", { returnObjects: true });

  // ==================== page Animation =============
  useEffect(() => {
    Aos.init({
      duration: 800, // مدة الأنيميشن
      once: true, // يحصل مرة واحدة بس
    });
  }, []);
  return (
    <>
      <section
        id="about"
        data-aos="fade-up"
        className="flex flex-col items-center px-5 md:px-12 lg:px-20 my-10 md:my-20"
      >
          <div className="header flex items-center justify-center [direction:ltr] [unicode-bidi:isolate] mb-3">
                  <img
                    src={assets.rightLine}
                    alt=""
                    className="w-20 block object-contain !scale-x-100"
                  />
                  <h1 className=" mx-2 text-[22px] md:text-[32px] tracking-widest font-semibold text-[var(--main-color)]">
                    {data.header}
                  </h1>
                  <img
                    src={assets.leftLine}
                    alt=""
                    className="w-20 block object-contain !scale-x-100"
                  />
                </div>
        
        <div className="">
          <p
            data-aos="fade-up"
            className="flex text-center text-[15px] md:text-[18px]  leading-loose"
          >
            {data.aboutBody}
          </p>

          {/* <div className="relative mx-3">
            <iframe
              className="w-full h-[350px]"
              src="https://www.youtube.com/embed/1ZamIIkVG9o?si=YMa16XumeUKxwf1g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div> */}
        </div>
      </section>

     
    </>
  );
};

export default About;
