import React, { FunctionComponent, useEffect, useState } from "react";
import ISectionTitleProps from "types/SectionTitleProps";
import Image from "next/image";

/**
 * Link component for user interaction
 */
const SectionTitle: FunctionComponent<ISectionTitleProps> = ({
  sectionTitle,
  darkMode,
  description
}) => {

  const [modeState, setModeState] = useState<{color: string, svg: string}>({color: "", svg: "/white-logo.svg"});

  useEffect(() => {
    darkMode === false
      ? setModeState({ color: "white", svg: "/white-logo.svg" })
      : setModeState({ color: "black", svg: "/dark-logo.svg" });
  }, [darkMode])

  return (
    <div className="flex flex-col" data-cy="section-title" >
      <div className="flex flex-row mb-6 w-100">
        <div className="relative w-8 md:w-12">
          <Image
            alt="logo"
            src={modeState.svg}
            fill
            sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
          />
        </div>
        <h2
          className={`ml-6 font-medium text-mobh2 md:text-2xl text-${modeState.color}`}
        >
          {sectionTitle}
        </h2>
      </div>
      <span className={`text-mobbase md:text-base text-${modeState.color}`}>
        {description}
      </span>
    </div>
  );
}

export default SectionTitle;