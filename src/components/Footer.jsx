import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { assets } from "../assets";
import { IoMdCall } from "react-icons/io";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="bg-[var(--main-color)] w-full min-h-[200px]  py-5 px-5 md:px-8  text-white ">
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-5">
          <div className="contact flex flex-col items-center gap-5">
            <div className="flex flex-col mb-5 ">
              <h2 className="font-semibold tracking-widert text-center uppercase pb-5">
               {t("footer.contant")}
              </h2>
              <h3 className={`flex items-center [direction:ltr] [unicode-bidi:isolate] text-left tabular-nums`} >
                <IoMdCall className="text-2xl p-1 mx-1 rounded-full bg-[var(--sec-color)]" />
                : +966 55 726 7666
              </h3>
            </div>
            <div className="flex flex-col  ">
              <h2 className="font-semibold tracking-wider uppercase pb-5">
               {t("footer.social")}
              </h2>
              <div className="flex items-center justify-between">
                <a
                  href="mailto:sales@umcgc.com"
                  className="inline-flex items-center gap-2"
                  aria-label="إرسال بريد إلى sales@umcgc.com"
                >
                  <MdOutlineEmail className=" w-8 h-8 p-1 rounded-full hover:bg-[var(--sec-color)] transition-all duration-300" />
                </a>
                <a
                  href="https://www.instagram.com/umcc_group/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit instagram profile umcc_group"
                >
                  <FaInstagram className="w-8 h-8 p-1 rounded-full hover:bg-[var(--sec-color)] transition-all duration-300" />
                </a>
                <a
                  href="https://x.com/CompanyMovement"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit X profile CompanyMovement"
                >
                  <FaXTwitter className=" w-8 h-8 p-1 rounded-full hover:bg-[var(--sec-color)] transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
          <div className="logo flex flex-col items-center  ">
            <h2 className="font-semibold mb-16">
              {t("footer.coName")}
            </h2>
            <img src={assets.CLogo} alt="" className="w-[300px]" />
          </div>
          <div className="map flex flex-col items-center  ">
            <h2 className="font-semibold tracking-wider uppercase pb-3">
              {t("footer.location")}
            </h2>
            <div className="max-w-[250px]">
              <a href="https://maps.app.goo.gl/6hLVFopJBH4TBtQ36">
                <img src={assets.map} alt="" className="rounded-2xl" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
