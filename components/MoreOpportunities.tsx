import { FunctionComponent } from 'react';
import Button from './Button';
import MockJobOpportunities from '../mocks/JobOpportunities';
import JobOpportunityCard from "./JobOpportunityCard";
import Input from './Input'
import Dropdown from './Dropdown'
import countryList from '../mocks/Countries';

const MoreOpportunities: FunctionComponent = () => {
  return (
    <div className="container">
      <h1 className="text-lg font-bold">Mais Oportunidades</h1>
      <div className="h-3 mt-4 w-14 bg-primary-orange" />
      <div className="flex flex-wrap mt-8 mb-10">
        {MockJobOpportunities.slice(0, 3).map((vacancy) => (
          <JobOpportunityCard key={vacancy.title} {...vacancy} />
        ))}
      </div>
      <Button primary={true} label={"Ver Mais"} size="sm" />
      <div className="flex flex-wrap mt-10">
        <Input placeholder="Buscar Oportunidade" type="Text" />
        <div className="mt-0 sm:max-md:mt-4 md:max-xl:ml-8">
          <Dropdown placeholder="Filtrar por Área" options={countryList} />
        </div>
      </div>
    </div>
  );
}

export default MoreOpportunities;