import { FunctionComponent } from "react";
import Icon from "@mdi/react";
import { mdiMapMarkerOutline, mdiArrowRight } from "@mdi/js";
import IJobOpportunityCardProps from "types/JobOpportunityCardProps";

const JobOpportunityCard: FunctionComponent<IJobOpportunityCardProps> = (
  vacancyCardProps
) => {
  const goToVacancyPage = () => {
    //TODO: When Jobs page is built finish this function. Should redirect to Jobs page
  };

  return (
    <div
      className="flex h-auto p-4 mt-4 mr-4 border-2 border-solid cursor-pointer max-h-44 sm:max-md:w-full sm:max-md:mr-0 group w-80 border-primary-purple hover:border-primary-orange hover:outline-primary-orange hover:outline hover:outline-1"
      onClick={goToVacancyPage}
      data-cy="jobOpportunityCard"
    >
      <div className="flex flex-col w-full space-y-5">
        <div className="flex">
          <Icon
            path={mdiMapMarkerOutline}
            size={1}
            color="disabled"
            className="pr-1 fill-primary-orange"
          />
          <p>
            {vacancyCardProps.modality}, {vacancyCardProps.country}
          </p>
        </div>
        <p className="text-lg font-bold md:text-base text-mobh3">
          {vacancyCardProps.title}
        </p>
      </div>
      <div className="grid place-items-end">
        <Icon
          path={mdiArrowRight}
          size={1}
          color="disabled"
          className="fill-primary-orange group-hover:fill-primary-purple"
        />
      </div>
    </div>
  );
};

export default JobOpportunityCard;
