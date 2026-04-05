import * as React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { ourServices } from "../assets";
import { useTranslation } from "react-i18next";

const Servicess = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="pt-20 mx-5 md:mx-20 space-y-4">
      {ourServices.map((service, index) => {
        const panelId = `panel-${index}`;

        return (
          <Accordion
          
            key={service.id}
            expanded={expanded === panelId}
            onChange={handleChange(panelId)}
            // 🔥 التحكم الكامل
            className="!border !border-gray-200 !rounded-xl !shadow-sm hover:!shadow-md !overflow-hidden !bg-gray-50"
            // 🔥 إزالة ستايل MUI الافتراضي
            sx={{
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
            
              expandIcon={
                <ArrowForwardIosSharpIcon className="!text-sm !text-[var(---color)] transition-transform duration-300" />
              }
              // 🔥 override MUI styles
              className="!bg-gray-100 hover:!bg-[var(--sec-color)] hover:!text-white transition !min-h-[60px]"
              sx={{
                "& .MuiAccordionSummary-content": {
                  margin: 0,
                },
              }}
            >
              <span className="text-lg font-medium">{t(service.titleKey)}</span>
            </AccordionSummary>

            <AccordionDetails className="!border-t !border-gray-200 !p-4">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <p className="flex-grow text-gray-600 leading-relaxed">
                  {t(service.bodyKey)}
                </p>

                <img
                  src={service.imageKey}
                  alt=""
                  className="w-full sm:w-1/3  object-cover rounded-xl shrink-0"
                />
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default Servicess;
