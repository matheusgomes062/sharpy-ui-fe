import React, { FunctionComponent, useEffect, useState } from "react";
import ISectionTitleProps from "types/SectionTitleProps";
import Image from "next/image";

/**
 * Link component for user interaction
 */
const SectionTitle: FunctionComponent<ISectionTitleProps> = ({ ...sectionTitleProps }) => {

  const [mode, setMode] = useState<{color: string, svg: string}>({color: "", svg: "/white-logo.svg"});

  useEffect(() => {
    sectionTitleProps.mode === "light" ? setMode({ color: "white", svg: "/white-logo.svg" }) : setMode({ color: "black", svg: "/dark-logo.svg" });
  }, [sectionTitleProps.mode])

  return (
    <div className="flex flex-col">
      <div className="flex flex-row mb-6 w-100">
        <div className="relative w-8 md:w-12">
          <Image alt="logo" src={mode.svg} fill />
        </div>
        <h2
          className={`ml-6 font-medium text-mobh2 md:text-2xl text-${mode.color}`}
        >
          {sectionTitleProps.sectionTitle}
        </h2>
      </div>
      <span className={`text-mobbase md:text-base text-${mode.color}`}>
        {sectionTitleProps.description}
      </span>
    </div>
  );
}

export default SectionTitle;