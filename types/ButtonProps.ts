export default interface IButtonProps {
  /**
   * Optional css setter
   * 
   * true = purple | false = orange.
   */
  primary?: boolean;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}