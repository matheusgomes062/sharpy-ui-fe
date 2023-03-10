import IButtonProps from "./ButtonProps";
import ISectionTitleProps from "./SectionTitleProps";

export default interface IJobDescription extends ISectionTitleProps, IButtonProps {
  /**
   * Title of the job
   */
  title: string;
  /**
   * Country of job
   */
  country: string;
  /**
   * Short description about the company
   */
  companyDescription: string;
  /**
   * what is the mode of the job? remote, hybrid or face-to-face?
   */
  modality: string;
  /**
   * What is the journey of the job? full time, part time, freelance?
   */
  journey: string;
  /**
   * List of responsibilities of the job
   */
  responsibilities: string[];
  /**
   * List of qualifications of the job
   */
  qualifications: string[];
  /**
   * List of benefits of the job
   */
  benefits: string[];
}