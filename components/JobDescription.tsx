import { FunctionComponent } from "react";
import IJobDescription from "types/JobDescriptionProps";
import SectionTitle from "./SectionTitle";
import Icon from "@mdi/react";
import { mdiMapMarkerOutline, mdiBriefcaseOutline } from "@mdi/js";
import Button from "./Button";
import SmartLink from "./SmartLink";

const JobDescription: FunctionComponent<IJobDescription> = ({ ...props }) => {
  return (
    <div data-cy="jobDescription" className="w-full max-w-6xl p-4 m-auto">
      <SectionTitle sectionTitle={props.title} mode={props.mode} />

      <div className="flex flex-col">
        <div className="flex mb-5 md:mt-10 md:mb-8">
          <div className="w-6 h-6 md:h-10 md:w-10">
            <Icon
              path={mdiBriefcaseOutline}
              color="disabled"
              className="pr-1 fill-primary-orange"
            />
          </div>
          <p className="font-normal md:text-sm text-mobsm">{props.journey}</p>
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
            {props.modality}, {props.country}
          </p>
        </div>
      </div>

      <div>
        <div className="mb-8 md:mb-11">
          <p className="font-semibold md:text-base text-mobh3">
            Sobre a Sharpy:
          </p>
          <p className="font-normal md:text-xs text-mobsm">
            {props.companyDescription}
          </p>
        </div>

        <div className="mb-8 md:mb-11">
          <p className="font-semibold md:text-base text-mobh3">
            Responsabilidades:
          </p>
          <ul className="pl-3">
            {props.responsibilities.map((responsibility, index) => (
              <li key={index} className="font-normal md:text-xs text-mobsm">
                • {responsibility}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8 md:mb-11">
          <p className="font-semibold md:text-base text-mobh3">
            Qualificações:
          </p>
          <ul className="pl-3">
            {props.qualifications.map((qualification, index) => (
              <li key={index} className="font-normal md:text-xs text-mobsm">
                • {qualification}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-11">
          <p className="font-semibold md:text-base text-mobh3">Benefícios:</p>
          <ul className="pl-3">
            {props.benefits.map((benefit, index) => (
              <li key={index} className="font-normal md:text-xs text-mobsm">
                • {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Button label={props.label} primary={props.primary} />
      <div className="mt-8 mb-12">
        <SmartLink
          href="/"
          label="Compartilhar oportunidade"
          mode="dark"
          type="url"
          underline={true}
        />
      </div>
    </div>
  );
};

export default JobDescription;
