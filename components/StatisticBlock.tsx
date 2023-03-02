import { useState, FunctionComponent } from "react";
import IStatisticBlock from "types/StatisticBlock";
import AnimatedNumber from "./AnimatedNumber";
import useTouchEvent from "../hooks/useTouchEvent";

const StatisticBlock: FunctionComponent<IStatisticBlock> = ({ statistic, ...props }) => {
  
  const bgColorStatisticBlocks = [
    "bg-primary-purple",
    "bg-primary-orange",
    "bg-black",
  ]; 

  const [selectedStatistic, setSelectedStatistic] = useState(0);

  const changeSelectedStatistic = (index: number) => setSelectedStatistic(index);

  const selectedStyle = (index: number) => index === selectedStatistic && "py-2";

  const { handleTouchStart, handleTouchEnd } = useTouchEvent(changeSelectedStatistic, selectedStatistic, statistic.length);
  
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

      <div className="grid items-center grid-cols-3 m-auto max-w-[1440px]">
        {statistic.map((statisticInfo, index) => (
          <div
            className={`${bgColorStatisticBlocks[index]} ${selectedStyle(index)} text-white md:h-72 h-3 flex justify-center`}
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