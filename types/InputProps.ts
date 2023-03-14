export default interface IInputProps {
  /**
   * Input Placeholder
   */
  placeholder: string;
  /**
   * Input type
   */
  type: 'text' | 'file' | 'email';
  /**
   * Input type
   */
  icon: 'magnify' | 'trayArrowUp' | 'none';
  /**
   * Click handler
   */
  onChange?: () => void;
}