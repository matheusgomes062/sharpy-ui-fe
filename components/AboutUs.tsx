import { FunctionComponent } from "react";
import Link from "next/link";

import SectionTitle from "./SectionTitle";
import Button from "./Button";
import GenericTitle from "./GenericTitle";
import AboutUsProps from "types/AboutUsProps";

const AboutUs: FunctionComponent<AboutUsProps> = (props) => {
  const {
    sectionTitle,
    darkMode,
    showPrimaryButton,
    primaryButtonLabel,
    genericTitle,
    shortDescription,
    showIcon
  } = props;

  return (
    <section
      role="region"
      aria-label="About Us"
      className="flex justify-center w-full mt-10 mb-10 md:p-4 md:mt-24 md:mb-24"
      {...props}
    >
      <div
        data-cy="aboutUs"
        className="flex flex-col justify-center w-full max-w-6xl"
      >
        <header className="pb-0 p-7 md:p-0">
          <SectionTitle sectionTitle={sectionTitle} darkMode={darkMode} data-cy="section-title"/>
        </header>
        <div className="grid grid-cols-1 gap-x-11 md:grid-cols-2">
          <div
            aria-hidden="true"
            className={`w-full h-56 md:h-[350px] bg-aboutUs bg-no-repeat bg-center bg-cover relative`}
          />
          <div className="flex-row w-full pt-0 p-7 place-self-center md:p-0">
            <p className="mt-8 lg:mt-0 mb-7" data-cy="short-description">{shortDescription}</p>
            <div className="mb-12 lg:mb-20">
              <Link href="/about#about-us">
                <Button label={primaryButtonLabel} showPrimaryButton={showPrimaryButton} data-cy="about-us-button"/>
              </Link>
            </div>
            <Link href="/about#our-team">
              <GenericTitle genericTitle={genericTitle} showIcon={showIcon} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
