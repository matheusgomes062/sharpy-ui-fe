import { FunctionComponent } from "react";
import IJobDescription from "types/JobDescriptionProps";
import SectionTitle from "./SectionTitle";
import Icon from "@mdi/react";
import { mdiMapMarkerOutline, mdiBriefcaseOutline } from "@mdi/js";
import Button from "./Button";

const JobDescription: FunctionComponent<IJobDescription> = ({ ...props }) => {
  return (
    <div
      data-cy="job-description"
      className="relative max-w-6xl p-4 m-auto md:max-xl:w-9/12 md:max-lg:w-11/12"
    >
      <SectionTitle sectionTitle={props.title} mode={props.mode} />

      <div className="flex flex-col">
        <div className="flex mt-10 mb-8">
          <div className="w-6 h-6 md:h-10 md:w-10">
            <Icon
              path={mdiBriefcaseOutline}
              color="disabled"
              className="pr-1 fill-primary-orange"
            />
          </div>
          <p className="font-normal md:text-sm text-mobsm">{props.journey}</p>
        </div>
        <div className="flex mb-16">
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
        <div className="mb-16">
          <p className="font-semibold md:text-base text-mobh3">Sobre a Sharpy:</p>
          <p className="font-normal md:text-xs text-mobsm">{props.companyDescription}</p>
        </div>

        <div className="mb-16">
          <p className="font-semibold md:text-base text-mobh3">Responsabilidades:</p>
          <ul>
            {props.responsibilities.map((responsibility, index) => (
              <li key={index} className="font-normal md:text-xs text-mobsm">
                • {responsibility}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-16">
          <p className="font-semibold md:text-base text-mobh3">Qualificações:</p>
          <ul>
            {props.qualifications.map((qualification, index) => (
              <li key={index} className="font-normal md:text-xs text-mobsm">
                • {qualification}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-16">
          <p className="font-semibold md:text-base text-mobh3">Benefícios:</p>
          <ul>
            {props.benefits.map((benefit, index) => (
              <li key={index} className="font-normal md:text-xs text-mobsm">
                • {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Button label={props.label} size={props.size} primary={props.primary} />
    </div>
  );
};

export default JobDescription;
