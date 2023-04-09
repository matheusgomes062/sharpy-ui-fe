export default interface IButtonProps {
  /**
   * Optional css setter
   * 
   * true = purple | false = orange.
   */
  showPrimaryButton?: boolean;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}