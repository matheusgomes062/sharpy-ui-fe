import { FunctionComponent, useState, useEffect } from "react";
import ICareersProps from "types/CareersProps";
import CarouselPagination from "./CarouselPagination";
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
  jobOpportunities,
  inputPlaceholder,
  dropDownPlaceholder
}) => {
  
  const [selectedPage, setSelectedPage] = useState(0);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const handleSelectedPage = (index: number) => setSelectedPage(index);

  const [groupOfJobs, setGroupOfJobs] = useState(Array<IJobOpportunityCardProps>);

  const { handleTouchStart, handleTouchEnd } = useTouchEvent(handleSelectedPage, selectedPage, groupOfJobs.length);

  const getMaxJobsPerPage = window.innerWidth <= 768 ? 6 : 9;
  
  useEffect(() => {
    const groupOfJobs = CreateGroupOfJobs(jobOpportunities, getMaxJobsPerPage);
    setGroupOfJobs(groupOfJobs[selectedPage]);
  }, [getMaxJobsPerPage, jobOpportunities, selectedPage, isSmallScreen]);
  
  useEffect(() => {
    const updateWindowWidth = () => {
      setIsSmallScreen(window.innerWidth <= 768);
      setSelectedPage(0);
    }

    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);
  
  return (
    <div className="flex justify-center w-full mt-7 md:mt-20" data-cy="careers">
      <div className="flex flex-col justify-center w-full max-w-6xl p-4">
        <div className="flex flex-wrap">
          <Input
            placeholder={inputPlaceholder}
            type="text"
            icon="magnify"
          />
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
          <div className="flex flex-wrap w-full mt-8 mb-10">
            {groupOfJobs.map((job, index) => (
              <JobOpportunityCard
                key={index}
                {...job}
              />
            ))}
          </div>
          <CarouselPagination
            numberOfPages={CreateGroupOfJobs(jobOpportunities, getMaxJobsPerPage).length}
            selectedPage={selectedPage}
            handleCallback={handleSelectedPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Careers;
