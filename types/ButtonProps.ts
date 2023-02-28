export default interface IButtonProps {
  /**
   * Optional css setter
   * 
   * true = purple | false = orange.
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size: 'sm' | 'base' | 'lg' | 'xl' | 'xxs';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}