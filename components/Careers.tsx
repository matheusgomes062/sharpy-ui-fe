import React, { FunctionComponent } from "react";
import ICareersProps from "types/CareersProps";
import JobOpportunityCard from "./JobOpportunityCard";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

/**
 * Button component for user interaction
 */
const Careers: FunctionComponent<ICareersProps> = ({ ...props }) => {
  return (
    <div
      className="flex justify-center w-full p-4 mt-10 mb-10 md:mt-24 md:mb-24"
      {...props}
      data-cy="careers"
    >
      <div className="flex flex-col justify-center max-w-6xl">
        <SectionTitle
          sectionTitle={props.sectionTitle}
          description={props.description}
          mode={props.mode}
        />

        <div className="flex flex-wrap w-full mt-8 mb-10 lg:justify-between lg:flex-nowrap">
          {props.jobOpportunities.slice(0, 3).map((vacancy) => (
            <JobOpportunityCard
              key={vacancy.jobOpportunityCardTitle}
              {...vacancy}
            />
          ))}
        </div>
        <div>
          <Button
            label={props.label}
            primary={props.primary}
            onClick={props.onClick}
            key={props.label}
          />
        </div>
      </div>
    </div>
  );
};

export default Careers;
