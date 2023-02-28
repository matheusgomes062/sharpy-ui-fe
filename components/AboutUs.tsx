import { FunctionComponent } from "react";
import SectionTitle from "./SectionTitle";
import IAboutUs from "types/AboutUsProps";
import Button from "./Button";
import GenericTitle from "./GenericTitle";

const AboutUs: FunctionComponent<IAboutUs> = ({ ...props }) => {
  return (
    <div
      className="max-w-6xl p-8 m-auto md:max-xl:w-9/12 md:max-lg:w-11/12"
      {...props}
    >
      <div data-cy="aboutUs">
        <SectionTitle sectionTitle={props.sectionTitle} description="" mode={props.mode} />
        <div className="grid grid-cols-1 gap-x-11 md:grid-cols-2">
          <div>
            <img src={props.aboutUsImagePath} />
          </div>
          <div className="flex-row place-self-center">
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
