import { FunctionComponent } from "react";
import Icon from "@mdi/react";
import ISolutionsProps from "types/SolutionsProps";
import {
  mdiCellphoneLink,
  mdiApplicationBracketsOutline,
  mdiMonitorScreenshot,
} from "@mdi/js";

const icons = {
  Devices: mdiCellphoneLink,
  Integration: mdiApplicationBracketsOutline,
  Screenshot: mdiMonitorScreenshot,
};

const Solutions: FunctionComponent<ISolutionsProps> = ({
  solutions
}) => {

  return (
    <div
      className="flex justify-center w-full mt-10 md:mt-24"
      data-cy="solutions"
    >
      <div className="flex flex-col justify-center max-w-6xl space-y-9 md:space-y-16">
        {solutions.map((solution, index) => {
          return (
            <div
              key={index}
              className="md:h-[500px] min-h-[461px] flex flex-col w-full py-16 border-2 border-primary-purple md:px-11 px-7 space-y-6"
            >
              <Icon
                path={icons[solution.icon]}
                size={2}
                color="disabled"
                className="fill-primary-orange md:hidden"
              />
              <p className="font-bold md:text-lg text-mobh3">
                {solution.title}
                <div className="h-[7px] mt-1 w-14 bg-primary-orange md:hidden" />
              </p>
              <p className="md:text-sm text-mobbase">
                {solution.solutionsCardDescription}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Solutions;
