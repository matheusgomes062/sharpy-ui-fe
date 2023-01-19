import { FunctionComponent } from 'react';
import Button from './Button';
import MockJobOpportunities from '../mocks/JobOpportunities';
import JobOpportunityCard from "./JobOpportunityCard";
import Input from './Input'
import Dropdown from './Dropdown'
import countryList from '../mocks/Countries';

const MoreOpportunities: FunctionComponent = ({ ...props }) => {
  return (
    <div className="relative max-w-6xl p-4 m-auto md:max-xl:w-9/12 md:max-lg:w-11/12" {...props}>
      <h1 className="text-lg font-bold">Mais Oportunidades</h1>
      <div className="h-3 mt-4 w-14 bg-primary-orange" />
      <div className="flex flex-wrap w-full mt-8 mb-10">
        {MockJobOpportunities.slice(0, 3).map((vacancy) => (
          <JobOpportunityCard key={vacancy.title} {...vacancy} />
        ))}
      </div>
      <Button primary={true} label={"Ver Mais"} size="sm" />
      <div className="flex flex-wrap mt-10">
        <Input placeholder="Buscar Oportunidade" type="text" icon="magnify" />
        <div className="sm:max-md:mt-4 sm:max-md:ml-0 md:max-4k:ml-4 sm:max-md:w-full">
          <Dropdown placeholder="Filtrar por Área" options={countryList} />
        </div>
      </div>
    </div>
  );
};

export default MoreOpportunities;
