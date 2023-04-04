import React, { FunctionComponent } from "react";
import ICareersSectionProps from "types/CareersSectionProps";
import JobOpportunityCard from "./JobOpportunityCard";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import Link from "next/link";

/**
 * Button component for user interaction
 */
const CareersSection: FunctionComponent<ICareersSectionProps> = ({
  jobOpportunities,
  label,
  mode,
  sectionTitle,
  description,
  onClick,
  primary,
  ...props
}) => {
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

        <div className="flex flex-wrap w-full mt-8 mb-10 lg:justify-between lg:flex-nowrap">
          {jobOpportunities.slice(0, 3).map((vacancy) => (
            <JobOpportunityCard
              key={vacancy.jobOpportunityCardTitle}
              {...vacancy}
            />
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
