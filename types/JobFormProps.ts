import IButtonProps from "./ButtonProps";
import ISectionTitleProps from "./SectionTitleProps";
import ISmartLinkProps from "./SmartLinkProps";

export default interface IJobFormProps extends ISectionTitleProps, ISmartLinkProps {
  /**
   * Placeholder for input name field
   */
  inputNamePlaceholder: string;
  /**
   * Placeholder for input surname field
   */
  inputSurnamePlaceholder: string;
  /**
   * Placeholder for input email field
   */
  inputEmailPlaceholder: string;
  /**
   * Placeholder for the text that will be displayed asking for the user confirm policy example: "I accept the"
   */
  policyAcceptanceText: string;
  /**
   * Title of the job
   */
  jobTitle: string;
  /**
   * Country of job
   */
  jobCountry: string;
  /**
   * Modality of job
   */
  jobModality: string;
  /**
   * What is the journey of the job? full time, part time, freelance?
   */
  jobJourney: string;
  /**
   * Is button primary?
   */
  primary: boolean;
    /**
   * which is the placeholder of text area?
   */
  textAreaPlaceholder: string;
}
