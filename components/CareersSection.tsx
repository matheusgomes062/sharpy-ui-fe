import React, { FunctionComponent } from "react";
import ICareersProps from "types/CareersProps";
import JobOpportunityCard from "./JobOpportunityCard";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

/**
 * Button component for user interaction
 */
const CareersSection: FunctionComponent<ICareersProps> = ({ jobOpportunities, label, mode, sectionTitle, description, onClick, primary, ...props}) => {
  return (
    <div
      className="flex justify-center w-full p-4 mt-10 mb-10 md:mt-24 md:mb-24"
      {...props}
      data-cy="careers"
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
          <Button
            label={label}
            primary={primary}
            onClick={onClick}
            key={label}
          />
        </div>
      </div>
    </div>
  );
};

export default CareersSection;
