import ISectionTitleProps from "./SectionTitleProps";
import IButtonProps from "./ButtonProps";
import IJobOpportunityCardProps from "./JobOpportunityCardProps";

export default interface ICareersSectionProps extends ISectionTitleProps, IButtonProps {
  /**
   * List of jobOpportunities
   */
  jobOpportunities: IJobOpportunityCardProps[];
}