export default interface UseTouchEventReturnType {
  /**
   * First return of useTouchEvent. Function that grab an update the starting point of touch event
   */
  handleTouchStart: (event: React.TouchEvent) => void;
  /**
 * Second return of useTouchEvent. Function that grab final point of touch and update selectedPage on father component
 */
  handleTouchEnd: (event: React.TouchEvent) => void;
}