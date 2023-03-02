import { FunctionComponent } from 'react';
import Button from './Button';
import JobOpportunityCard from "./JobOpportunityCard";
import Input from './Input'
import Dropdown from './Dropdown'
import countryList from '../mocks/Countries';
import IMoreOpportunitiesProps from 'types/MoreOpportunitiesProps';

const MoreOpportunities: FunctionComponent<IMoreOpportunitiesProps> = ({ ...props }) => {
  return (
    <div className="flex justify-center w-full p-4" {...props}>
      <div className="flex flex-col justify-center w-full max-w-6xl">
        <h1 className="text-lg font-bold">Mais Oportunidades</h1>
        <div className="h-3 mt-4 w-14 bg-primary-orange" />
        <div className="flex flex-wrap w-full mt-8 mb-10">
          {props.jobOpportunities.slice(0, 3).map((vacancy) => (
            <JobOpportunityCard
              key={vacancy.jobOpportunityCardTitle}
              {...vacancy}
            />
          ))}
        </div>
        <div>
          <Button primary={true} label={props.buttonLabel} />
        </div>
        <div className="flex flex-wrap mt-10">
          <Input
            placeholder={props.inputPlaceholder}
            type="text"
            icon="magnify"
          />
          <div className="sm:max-md:mt-4 sm:max-md:ml-0 md:max-4k:ml-4 sm:max-md:w-full">
            <Dropdown
              placeholder={props.dropDownPlaceholder}
              options={countryList}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreOpportunities;
