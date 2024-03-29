import { FunctionComponent } from "react";
import SectionTitle from "./SectionTitle";
import IAboutUs from "types/AboutUsProps";
import Button from "./Button";
import GenericTitle from "./GenericTitle";
import Link from "next/link";

const AboutUs: FunctionComponent<IAboutUs> = ({
  sectionTitle,
  mode,
  primary,
  label,
  genericTitle,
  shortDescription,
  hasIcon,
  ...props
}) => {
  return (
    <div
      className="flex justify-center w-full mt-10 mb-10 md:p-4 md:mt-24 md:mb-24"
      {...props}
    >
      <div
        data-cy="aboutUs"
        className="flex flex-col justify-center w-full max-w-6xl"
      >
        <div className="pb-0 p-7 md:p-0">
          <SectionTitle sectionTitle={sectionTitle} mode={mode} />
        </div>
        <div className="grid grid-cols-1 gap-x-11 md:grid-cols-2">
          <div
            className={`w-full h-56 md:h-[350px] bg-aboutUs bg-no-repeat bg-center bg-cover relative`}
          />
          <div className="flex-row w-full pt-0 p-7 place-self-center md:p-0">
            <p className="mt-8 lg:mt-0 mb-7">{shortDescription}</p>
            <div className="mb-12 lg:mb-20">
              <Link href="/about#about-us">
                <Button label={label} primary={primary} />
              </Link>
            </div>
            <Link href="/about#our-team">
              <GenericTitle genericTitle={genericTitle} hasIcon={hasIcon} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
