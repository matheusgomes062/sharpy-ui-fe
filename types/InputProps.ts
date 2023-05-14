export default interface IInputProps {
  /**
   * Input Placeholder
   */
  placeholder: string;
  /**
   * Input type
   */
  type: "text" | "file" | "email";
  /**
   * Input type
   */
  icon: "magnify" | "trayArrowUp" | "none";
  /**
   * Name of the input
   */
  name?: string;
  /**
   * Click handler
   */
  onChange?: (value: any) => void;
}