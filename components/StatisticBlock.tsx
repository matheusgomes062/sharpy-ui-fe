import { useState, FunctionComponent, SetStateAction } from "react";
import IStatisticBlock from "types/StatisticBlock";
import AnimatedNumber from "./AnimatedNumber";

const StatisticBlock: FunctionComponent<IStatisticBlock> = ({ statistic, ...props }) => {
  
  const bgColorStatisticBlocks = [
    "bg-primary-purple",
    "bg-primary-orange",
    "bg-black",
  ];

  const [selectedStatistic, setSelectedStatistic] = useState(0);

  const changeSelectedStatistic = (index: number) => setSelectedStatistic(index);

  const [startTouchX, setStartTouchX] = useState(0);

  const handleTouchStart = (event: React.TouchEvent) => setStartTouchX(event.touches[0].clientX);


  const handleTouchEnd = (event: React.TouchEvent) => {
    const endTouchX = event.changedTouches[0].clientX;
    const touchDiff = endTouchX - startTouchX;

    // Define a threshold (in pixels) to trigger the change of selected statistic block
    const threshold = 50;

    const moveToRight = touchDiff > threshold && selectedStatistic > 0;
    const moveToLeft = touchDiff < -threshold && selectedStatistic < statistic.length - 1;

    moveToRight && changeSelectedStatistic(selectedStatistic - 1);
    moveToLeft && changeSelectedStatistic(selectedStatistic + 1);
    
  };
  
  return (
    <div data-cy="statisticBlock">
      <div
        className={`grid justify-center content-center text-white md:hidden h-36 ${bgColorStatisticBlocks[selectedStatistic]} mb-1`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex items-center gap-x-6">
          <p className="text-base font-bold">
            +<AnimatedNumber value={statistic[selectedStatistic][0]} />
          </p>
          <p className="flex font-medium text-xxs">
            {statistic[selectedStatistic][1]}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 m-auto max-w-7xl">
        {statistic.map((statisticInfo, index) => (
          <div
            className={`${bgColorStatisticBlocks[index]} text-white h-3 md:h-72 flex justify-center`}
            key={index}
            onClick={() => changeSelectedStatistic(index)}
          >
            <div className="flex-col justify-center hidden md:flex">
              <p className="text-base font-bold text-center lg:text-2xl">
                +<AnimatedNumber value={statisticInfo[0]} />
              </p>
              <p className="font-medium lg:text-xl text-xxs">
                {statisticInfo[1]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticBlock;