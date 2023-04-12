export default interface ITextAreaProp {
  /**
   * Function to handle data
   */
  onChange?: (value: any) => void;
  /**
   * which is the placeholder of text area?
   */
  textAreaPlaceholder: string;
  /**
   * name of text area
   */
  name: string;
}
