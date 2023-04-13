import React, { FunctionComponent } from "react";
import ICareersSectionProps from "types/CareersSectionProps";
import JobOpportunityCard from "./JobOpportunityCard";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import IJobOpportunityCardProps from "types/JobOpportunityCardProps";

/**
 * Button component for user interaction
 */
const CareersSection: FunctionComponent<ICareersSectionProps> = ({
  label,
  mode,
  sectionTitle,
  description,
  onClick,
  primary,
  ...props
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

  return (
    <div
      className="flex justify-center w-full p-4 mt-10 mb-10 md:mt-24 md:mb-24"
      {...props}
      data-cy="careersSection"
    >
      <div className="flex flex-col justify-center max-w-6xl">
        <SectionTitle
          sectionTitle={sectionTitle}
          description={description}
          mode={mode}
        />

        <div className="flex flex-wrap w-full mt-8 mb-10 lg:justify-start lg:flex-nowrap">
          {jobs !== null && jobs.slice(0, 3).map((job) => (
            <JobOpportunityCard key={job.id} {...job} />
          ))}
        </div>
        <div>
          <Link href="/careers/all-jobs">
            <Button
              label={label}
              primary={primary}
              onClick={onClick}
              key={label}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareersSection;
