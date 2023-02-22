export default interface ICarouselPaginationProps {
  /**
   * Parameter that informs the pagination component which index is selected.
   */
  selectedPage: number;
  /**
   * How many pages does the pagination have?
   */
  numberOfPages: number;
  /**
   * Function that must be passed by the parent component and get back an index of which page was selected.
   */
  handleCallback: (index: number) => void;
}