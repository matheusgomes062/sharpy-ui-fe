import React, { FunctionComponent, useEffect, useState } from "react";
import ISectionTitleProps from "types/SectionTitleProps";


/**
 * Link component for user interaction
 */
const SectionTitle: FunctionComponent<ISectionTitleProps> = ({ ...SectionTitleProps }) => {

  const [mode, setMode] = useState<{color: string, svg: string}>({color: "", svg: ""});

  useEffect(() => {
    SectionTitleProps.mode === "light" ? setMode({ color: "white", svg: "white-logo.svg" }) : setMode({ color: "black", svg: "dark-logo.svg" });
  }, [SectionTitleProps.mode])

  return (
    <div className="flex flex-col mb-14">
      <div className="flex flex-row mb-6 w-100">
        {/* <span className={`material-icons-outlined absolute text-center text-primary-orange text-lg`}>cloud</span> */}
        <img src={mode.svg} alt="next" className="w-8 md:w-12" />
        <h2 className={`ml-6 font-medium text-mobh2 md:text-2xl text-${mode.color}`}>
          {SectionTitleProps.sectionTitle}
        </h2>
      </div>
      <span className={`text-mobbase md:text-base text-${mode.color}`}>
        {SectionTitleProps.description}
      </span>
    </div>
  );
}

export default SectionTitle;