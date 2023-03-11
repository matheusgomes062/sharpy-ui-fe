import { FunctionComponent } from "react";
import IJobFormProps from "types/JobFormProps";
import SectionTitle from "./SectionTitle";
import Icon from "@mdi/react";
import { mdiMapMarkerOutline, mdiBriefcaseOutline } from "@mdi/js";
import Input from "./Input";
import TextArea from "./TextArea";
import CheckBox from "./CheckBox";
import SmartLink from "./SmartLink";
import Button from "./Button";

const jobForm: FunctionComponent<IJobFormProps> = ({
  href,
  textAreaPlaceholder,
  inputEmailPlaceholder,
  inputNamePlaceholder,
  inputSurnamePlaceholder,
  label,
  mode,
  policyAcceptanceText,
  type,
  underline,
  jobCountry,
  jobJourney,
  jobModality,
  jobTitle,
  primary,
}) => {
  return (
    <div data-cy="job-form" className="w-full max-w-6xl p-4 m-auto">
      <SectionTitle sectionTitle={jobTitle} mode={mode} />
      <div className="flex flex-col">
        <div className="flex mb-5 md:mt-10 md:mb-8">
          <div className="w-6 h-6 md:h-10 md:w-10">
            <Icon
              path={mdiBriefcaseOutline}
              color="disabled"
              className="pr-1 fill-primary-orange"
            />
          </div>
          <p className="font-normal md:text-sm text-mobsm">{jobJourney}</p>
        </div>
        <div className="flex md:mb-16 mb-7">
          <div className="w-6 h-6 md:h-10 md:w-10">
            <Icon
              path={mdiMapMarkerOutline}
              color="disabled"
              className="pr-1 fill-primary-orange"
            />
          </div>
          <p className="font-normal md:text-sm text-mobsm">
            {jobModality}, {jobCountry}
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-wrap justify-between md:space-x-8 md:flex-nowrap">
          <div className="w-full mb-4 md:mb-8">
            <Input placeholder={inputNamePlaceholder} type="text" icon="none" />
          </div>
          <div className="w-full mb-4 md:mb-8">
            <Input
              placeholder={inputSurnamePlaceholder}
              type="text"
              icon="none"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between md:space-x-8 md:flex-nowrap">
          <div className="w-full mb-4 md:mb-8">
            <Input
              placeholder={inputEmailPlaceholder}
              type="text"
              icon="none"
            />
          </div>
          <div className="w-full mb-4 md:mb-8">
            <Input placeholder="CV" type="file" icon="trayArrowUp" />
          </div>
        </div>
        <TextArea
          onChange={() => {
            return;
          }}
          textAreaPlaceholder={textAreaPlaceholder}
        />
        <div className="flex my-8 space-x-3 md:my-12">
          <CheckBox value="" />
          <div className="flex space-x-1">
            <span className="md:text-[20px] sm:text-[15px] my-auto">
              {policyAcceptanceText}
            </span>
            <SmartLink
              href={href}
              label={label}
              mode={mode}
              type={type}
              underline={underline}
            />
          </div>
        </div>
        <div>
          <Button label="Aplicar" primary={primary} />
        </div>
      </div>
    </div>
  );
};

export default jobForm;
