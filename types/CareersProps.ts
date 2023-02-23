import ISectionTitleProps from "./SectionTitleProps";
import IButtonProps from "./ButtonProps";
import IJobOpportunityCardProps from "./JobOpportunityCardProps";

export default interface ICareersProps extends ISectionTitleProps, IButtonProps {
  /**
   * List of jobOpportunities
   */
  jobOpportunities: IJobOpportunityCardProps[];
}