//TODO: extend from button, input and dropdown interfaces
import IJobOpportunityCardProps from "./JobOpportunityCardProps";

export default interface IMoreOpportunitiesProps {
  /**
   * Input placeholder
   */
  inputPlaceholder: string;
  /**
   * Dropdown placeholder
   */
  dropDownPlaceholder: string;
  /**
   * Label of Button component
   */
  buttonLabel: string;
  /**
   * List of jobOpportunities
   */
  jobOpportunities: IJobOpportunityCardProps[];
}