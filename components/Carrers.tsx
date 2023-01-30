import React, { FunctionComponent } from "react";
import ICarrersProps from "types/CarrersProps";
import JobOpportunityCard from "./JobOpportunityCard";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import MockJobOpportunities from "../mocks/JobOpportunities";

/**
 * Button component for user interaction
 */
const Carrers: FunctionComponent<ICarrersProps> = ({ ...props }) => {
  return (
    <div className="relative max-w-6xl p-4 m-auto md:max-xl:w-9/12 md:max-lg:w-11/12" {...props}>
      <SectionTitle sectionTitle={props.sectionTitle} description={props.description} mode={props.mode} />

      <div className="flex flex-wrap w-full mt-8 mb-10">
        {MockJobOpportunities.slice(0, 3).map((vacancy) => (
          <JobOpportunityCard key={vacancy.jobOpportunityCardTitle} {...vacancy} />
        ))}
      </div>
      <Button label={props.label} primary={props.primary} size={props.size} onClick={props.onClick} key={props.label} />
    </div>
  )
};

export default Carrers;
