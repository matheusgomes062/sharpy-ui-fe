import { FunctionComponent } from "react";
import SectionTitle from "./SectionTitle";
import IAboutUs from "types/AboutUsProps";
import Button from "./Button";
import GenericTitle from "./GenericTitle";

const AboutUs: FunctionComponent<IAboutUs> = ({ ...props }) => {
  return (
    <div
      className="max-w-6xl m-auto md:max-xl:w-9/12 md:max-lg:w-11/12"
      {...props}
    >
      <div data-cy="aboutUs">
        <div className="pb-0 p-7 md:p-0">
          <SectionTitle sectionTitle={props.sectionTitle} description="" mode={props.mode} />
        </div>
        <div className="grid grid-cols-1 gap-x-11 md:grid-cols-2">
          <div className={`w-full h-56 md:h-[350px] bg-aboutUs bg-no-repeat bg-center bg-cover relative`}/>
          <div className="flex-row pt-0 p-7 place-self-center md:p-0">
            <p className="mt-8 lg:mt-0 mb-7">{props.shortDescription}</p>
            <div className="mb-12 lg:mb-20">
              <Button
                label={props.label}
                size={props.size}
                primary={props.primary}
              />
            </div>
            <GenericTitle genericTitle={props.genericTitle}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
