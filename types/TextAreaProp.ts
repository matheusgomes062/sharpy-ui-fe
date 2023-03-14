export default interface ITextAreaProp {
  /**
   * Function to handle data
   */
  onChange: (data: string) => void;
  /**
   * which is the placeholder of text area?
   */
  textAreaPlaceholder: string;
}
