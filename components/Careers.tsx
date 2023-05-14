import { FunctionComponent, useState, useEffect, useRef } from "react";
import ICareersProps from "types/CareersProps";
import Pagination from "./Pagination";
import useTouchEvent from "../hooks/useTouchEvent";
import Input from './Input'
import Dropdown from './Dropdown'
import countryList from '../mocks/Countries';
import JobOpportunityCard from "./JobOpportunityCard";
import IJobOpportunityCardProps from "types/JobOpportunityCardProps";

const CreateGroupOfJobs = (jobOpportunities: IJobOpportunityCardProps[], maxJobsPerPage: number) => {
  const newJobOpportunities = [];
  const numSubArrays = Math.ceil(jobOpportunities.length / maxJobsPerPage);

  for (let i = 0; i < numSubArrays; i++) {
    const startIndex = i * maxJobsPerPage;
    const subArray = jobOpportunities.slice(startIndex, startIndex + maxJobsPerPage);
    newJobOpportunities.push(subArray);
  }

  return newJobOpportunities;
};

const Careers: FunctionComponent<ICareersProps> = ({
  inputPlaceholder,
  dropDownPlaceholder
}) => {
  const [jobs, setJobs] = useState<IJobOpportunityCardProps[]>([]);

  useEffect(() => {
    async function fetchJobs() {
      const res = await fetch("/api/get-all-roles");
      const json = await res.json();
      setJobs(json);
    }
    fetchJobs();
  }, [])

  const windowWidth = typeof window !== "undefined" && window.innerWidth;

  const [selectedPage, setSelectedPage] = useState(0);

  const handleSelectedPage = (index: number) => setSelectedPage(index);

  const [groupOfJobs, setGroupOfJobs] = useState(Array<IJobOpportunityCardProps>);
  
  const getMaxJobsPerPage = !!windowWidth && windowWidth <= 768 ? 6 : 9;

  const totalPages = () => { return CreateGroupOfJobs(jobs, getMaxJobsPerPage).length; }

  const { handleTouchStart, handleTouchEnd } = useTouchEvent(handleSelectedPage, selectedPage, totalPages());

  useEffect(() => {
    if (jobs) {
      const groupOfJobs = CreateGroupOfJobs(jobs, getMaxJobsPerPage);
      setGroupOfJobs(groupOfJobs[selectedPage]);
    }
  }, [getMaxJobsPerPage, jobs, selectedPage]);
  
  useEffect(() => {
    const updateWindowWidth = () => {
      setSelectedPage(0);
    }
    
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);
  
  return (
    <div className="flex justify-center w-full" data-cy="careers">
      <div className="flex flex-col justify-center w-full max-w-6xl p-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-80 max-h-80">
            <Input
              placeholder={inputPlaceholder}
              type="text"
              icon="magnify"
            />
          </div>
          <div className="sm:max-md:mt-4 sm:max-md:ml-0 md:max-4k:ml-4 sm:max-md:w-full">
            <Dropdown
              placeholder={dropDownPlaceholder}
              options={countryList}
            />
          </div>
        </div>

        <div
          className="flex flex-col"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex flex-wrap w-full mt-8 mb-5 md:mb-10">
            {groupOfJobs != undefined &&  groupOfJobs.map((job, index) => (
              <JobOpportunityCard
                key={index}
                {...job}
              />
            ))}
          </div>
          <Pagination
            numberOfPages={CreateGroupOfJobs(jobs, getMaxJobsPerPage).length}
            selectedPage={selectedPage}
            handleCallback={handleSelectedPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Careers;
