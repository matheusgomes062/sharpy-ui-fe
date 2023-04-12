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
   * Is button primary?
   */
  primary: boolean;
  /**
   * which is the placeholder of text area?
   */
  textAreaPlaceholder: string;
}
