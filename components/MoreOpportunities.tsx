import { FunctionComponent } from 'react';
import Button from './Button';
import JobOpportunityCard from "./JobOpportunityCard";
import Input from './Input'
import Dropdown from './Dropdown'
import countryList from '../mocks/Countries';
import { useEffect, useState } from "react";
import IMoreOpportunitiesProps from 'types/MoreOpportunitiesProps';
import IJobOpportunityCardProps from "types/JobOpportunityCardProps";
import Link from "next/link";

const MoreOpportunities: FunctionComponent<IMoreOpportunitiesProps> = ({ ...props }) => {

  const [jobs, setJobs] = useState<IJobOpportunityCardProps[]>([]);

  useEffect(() => {
    async function fetchJobs() {
      const res = await fetch("/api/get-all-roles");

      const json = await res.json();

      const filteredJobs = json.filter((job: IJobOpportunityCardProps) => job.id !== props.selectedJobId);

      setJobs(filteredJobs);
    }
    fetchJobs();
  }, [props.selectedJobId]);
  
  return (
    <div className="flex justify-center w-full" {...props}>
      <div className="flex flex-col justify-center w-full max-w-6xl p-4 md:my-15">
        <h1 className="font-bold text-mobh3 md:text-lg">Mais Oportunidades</h1>
        <div className="h-3 mt-2 w-14 bg-primary-orange md:mt-4" />
        {jobs !== null && jobs.length > 0 ? (
          <div className="flex flex-wrap w-full my-5 md:my-10">
            {jobs.slice(0, 3).map((job) => (
              <JobOpportunityCard key={job.id} {...job} />
            ))}
          </div>
        ) : (
          <p className="w-full my-10 font-normal md:text-xs text-mobsm">
            Não há mais oportunidades no momento!
          </p>
        )}
        <div>
          <Link href="/careers/all-jobs">
            <Button primary={true} label={props.buttonLabel} />
          </Link>
        </div>
        <div className="flex flex-wrap mt-10">
          <div className="w-full md:w-80">
            <Input
              placeholder={props.inputPlaceholder}
              type="text"
              icon="magnify"
            />
          </div>
          <div className="w-full mt-4 md:ml-4 md:mt-0 md:w-80">
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
