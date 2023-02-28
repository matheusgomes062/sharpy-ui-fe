import { useState } from "react";
import UseTouchEventReturnType from "types/UseTouchEventReturn";

const useTouchEvent = (handleSelectedPage: (selectedPage: number) => void, selectedPage: number, pageCount: number): UseTouchEventReturnType => {
  const [startTouchX, setStartTouchX] = useState(0);

  const handleTouchStart = (event: React.TouchEvent) => setStartTouchX(event.touches[0].clientX);

  const handleTouchEnd = (event: React.TouchEvent) => {
    const endTouchX = event.changedTouches[0].clientX;
    const touchDiff = endTouchX - startTouchX;

    // Define a threshold (in pixels) to trigger the change of selected statistic block
    const threshold = 50;

    const moveToRight = touchDiff > threshold && selectedPage > 0;
    const moveToLeft = touchDiff < -threshold && selectedPage < pageCount - 1;

    moveToRight && handleSelectedPage(selectedPage - 1);
    moveToLeft && handleSelectedPage(selectedPage + 1);
  };

  return { handleTouchStart, handleTouchEnd };
};

export default useTouchEvent;