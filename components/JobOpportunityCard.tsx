import { FunctionComponent, useState } from 'react';
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
  const primaryOrange = "#FF4800";

  const primaryPurple = "#660066";

  const [iconColor, setIconColor] = useState(primaryOrange);

  const changeIconColorToOrange = () => setIconColor(primaryOrange);

  const changeIconColorToPurple = () => setIconColor(primaryPurple);

  const goToVacancyPage = () => {
    //TODO: When Jobs page is built finish this function. Should redirect to Jobs page
  };

  return (
    <div
      className="flex p-4 mt-4 mr-4 border-2 border-solid cursor-pointer h-36 w-80 border-primary-purple hover:border-primary-orange hover:outline-primary-orange hover:outline hover:outline-1"
      onMouseOver={changeIconColorToPurple}
      onMouseOut={changeIconColorToOrange}
      onClick={goToVacancyPage}
    >
      <div className="flex flex-col w-full space-y-5">
        <div className="flex">
          <Icon
            path={mdiMapMarkerOutline}
            size={1}
            color={primaryOrange}
            className="pr-1"
          />
          <p>
            {vacancyCardProps.modality}, {vacancyCardProps.country}
          </p>
        </div>
        <p className="text-lg font-bold">{vacancyCardProps.title}</p>
      </div>
      <div className="grid place-items-end">
        <Icon path={mdiArrowRight} size={1} color={iconColor} />
      </div>
    </div>
  );
};

export default JobOpportunityCard;