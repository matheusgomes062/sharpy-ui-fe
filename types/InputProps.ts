export default interface IInputProps {
  /**
   * Input Placeholder
   */
  placeholder: string;
  /**
   * Input type
   */
  type: 'text' | 'file';
  /**
   * Input type
   */
  icon: 'magnify' | 'trayArrowUp' | 'none';
  /**
   * Click handler
   */
  onChange?: () => void;
}