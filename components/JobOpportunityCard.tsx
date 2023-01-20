import { FunctionComponent } from 'react';
import Icon from '@mdi/react';
import { mdiMapMarkerOutline, mdiArrowRight  } from '@mdi/js';

interface JobOpportunityCardProps {
  /**
   * Title of the vacancy
   */
  title: string;
  /**
   * Country of job
   */
  country: string;
  /**
   * Modality of job
   */
  modality: "Remoto" | "Presencial" | "Híbrido";
}

const JobOpportunityCard: FunctionComponent<JobOpportunityCardProps> = (
  vacancyCardProps
) => {
  const goToVacancyPage = () => {
    //TODO: When Jobs page is built finish this function. Should redirect to Jobs page
  };

  return (
    <div
      className="flex p-4 mt-4 mr-4 border-2 border-solid cursor-pointer sm:max-md:w-full sm:max-md:mr-0 group h-36 w-80 border-primary-purple hover:border-primary-orange hover:outline-primary-orange hover:outline hover:outline-1"
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
        <p className="text-lg font-bold">{vacancyCardProps.title}</p>
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