import React from "react";
import { useTranslation } from "react-i18next";
import { assets } from "../assets";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const { t } = useTranslation();
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4685700d-698e-4f25-ad8d-555452b9b74a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <div id="ContactUs" className="body flex flex-col-reverse lg:flex-row gap-5 md:justify-between  mt-22 md:my-28 mx-4 md:mx-10">
        <dev className="flex justify-center items-start w-full">
          <img src={assets.contact} alt="" className="w-[400px]  shadow overflow-hidden rounded-2xl" />
        </dev>

        <div className="form flex flex-col w-full">
          <form
            onSubmit={onSubmit}
            className=" flex flex-col items-center bg-gray-50 w-full md:w-[550px] gap-4 border border-gray-500 px-5 py-2 md:py-8 rounded-xl"
          >
            <h3 className="text-[18px] md:text-[22px] font-semibold">
              {t("contactUs.header")}
            </h3>
            <div className="flex flex-col md:flex-row justify-between items-center w-full space-y-3 ">
              <div className="flex flex-col md:flex-row  w-full justify-between">
                <div className="flex flex-col space-y-[2px] w-full  mx-1">
                  <label className="text-[14px] md:text-[16px] text-[var(--sec-color)] font-semibold">
                    {t("contactUs.forms.name")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder={t("contactUs.forms.palsholderName")}
                    required
                    className="text-gray-900 border border-gray-400 shadow rounded ps-1.5 py-1 w-full outline-hidden placeholder:text-sm"
                  />
                </div>
                <div className="flex flex-col space-y-[2px]  w-full  mx-1">
                  <label className="text-[14px] md:text-[16px] text-[var(--sec-color)] font-semibold">
                    {t("contactUs.forms.email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder={t("contactUs.forms.palsholderEmail")}
                    required
                    className="text-gray-900 border border-gray-400 shadow rounded ps-1.5 py-1 w-full outline-hidden placeholder:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-[2px] w-full">
              <label className="text-[14px] md:text-[16px] text-[var(--sec-color)] font-semibold">
                {t("contactUs.forms.message")}
              </label>
              <textarea
                name="message"
                required
                rows={8}
                placeholder={t("contactUs.forms.palsholderMessage")}
                className="text-gray-900 border border-gray-400 shadow rounded ps-1.5 py-1 outline-hidden w-full placeholder:text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-5 py-1.5 bg-[var(--main-color)] text-white rounded-lg w-full cursor-pointer"
            >
              {t("contactUs.forms.CTA")}
            </button>
          </form>
          <span className="text-[14px] md:text-[18px] text-[var(--sec-color)] text-center pt-4">
            {result}
          </span>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
