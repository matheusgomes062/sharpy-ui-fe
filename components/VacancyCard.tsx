import { FunctionComponent, useState } from 'react';
import Icon from '@mdi/react';
import { mdiMapMarkerOutline, mdiArrowRight  } from '@mdi/js';

interface VacancyCardProps {
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
  modality: 'Remoto' | 'Presencial' | 'Híbrido',
}

const VacancyCard: FunctionComponent<VacancyCardProps> = (vacancyCardProps) => {
  const [iconColor, setIconColor] = useState('#FF4800');

  const changeIconColorToOrange = () => setIconColor('#FF4800');

  const changeIconColorToPurple = () => setIconColor('#660066');

  return (
    <div className="p-4 border-2 border-solid cursor-pointer h-28 w-80 border-primary-purple hover:border-primary-orange hover:outline-primary-orange hover:outline hover:outline-1"
      onMouseOver={changeIconColorToPurple}
      onMouseOut={changeIconColorToOrange}
    >
      <div className="flex mb-5">
        <Icon path={mdiMapMarkerOutline} size={1} color="#FF4800" className="pr-1"/>
        <p>{vacancyCardProps.modality}, {vacancyCardProps.country}</p>
      </div>
      <div className="flex justify-between">
        <p>{vacancyCardProps.title}</p>
        <Icon path={mdiArrowRight} size={1} color={iconColor}/>
      </div>
    </div>
  )
}

export default VacancyCard;