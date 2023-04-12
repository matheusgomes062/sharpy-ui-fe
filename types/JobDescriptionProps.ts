import IButtonProps from "./ButtonProps";
import IJobOpportunityCardProps from "./JobOpportunityCardProps";
import ISectionTitleProps from "./SectionTitleProps";

export default interface IJobDescription extends IButtonProps {
  /**
   * Id of the Job
   */
  id: string | string[] | undefined;
  /**
   * Description for the title
   */
  sectionTitleDescription?: string;
  /**
   * Mode
   */
  mode: "light" | "dark";
  /**
   * Short description about the company
   */
  companyDescription: string;
}