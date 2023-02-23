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
      className="relative max-w-6xl p-4 m-auto md:max-xl:w-9/12 md:max-lg:w-11/12"
      {...props}
      data-cy="careers"
    >
      <SectionTitle
        sectionTitle={props.sectionTitle}
        description={props.description}
        mode={props.mode}
      />

      <div className="flex flex-wrap w-full mt-8 mb-10">
        {props.jobOpportunities.slice(0, 3).map((vacancy) => (
          <JobOpportunityCard
            key={vacancy.jobOpportunityCardTitle}
            {...vacancy}
          />
        ))}
      </div>
      <Button
        label={props.label}
        primary={props.primary}
        size={props.size}
        onClick={props.onClick}
        key={props.label}
      />
    </div>
  );
};

export default Careers;
