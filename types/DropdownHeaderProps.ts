export default interface IDropdownHeaderProps {
  /**
   * Select if is mobile
   */
  mobile?: Boolean;
  /**
   * Action to when we click the x button to collapse the sidebar
   */
  onChildClick?: () => void;
}