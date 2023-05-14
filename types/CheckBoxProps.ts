export default interface ICheckBoxProps {
  /**
   * Value of the checkbox
   */
  value: string;
  /**
   * Name of the checkbox
   */
  name?: string;
  /**
   * Click handler
   */
  onChange?: (value: any) => void;
}