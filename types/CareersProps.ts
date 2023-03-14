import IJobOpportunityCardProps from "./JobOpportunityCardProps";


export default interface ICareersProps {
  /**
   * List of jobOpportunities
   */
  jobOpportunities: IJobOpportunityCardProps[];
  /**
   * Input placeholder
   */
  inputPlaceholder: string;
  /**
   * Dropdown placeholder
   */
  dropDownPlaceholder: string;
}
