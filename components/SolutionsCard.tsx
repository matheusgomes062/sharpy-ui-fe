import { FunctionComponent, useState } from "react";
import Icon from "@mdi/react";
import Button from "./Button";
import SolutionsCardProps from "../types/SolutionsCardProps"
import { mdiCellphoneLink, mdiApplicationBracketsOutline, mdiMonitorScreenshot } from "@mdi/js";

const icons = {
  "Devices": mdiCellphoneLink,
  "Integration": mdiApplicationBracketsOutline,
  "Screenshot": mdiMonitorScreenshot
};

const SolutionsCard: FunctionComponent<SolutionsCardProps> = (props) => {
  const [borderStyle, setBorderStyle] = useState('border-primary-purple');

  const changeBorderStyle = (style: string) => setBorderStyle(style);

  const goToSolutionPage = () => {
    //TODO: When Jobs page is built finish this function. Should redirect to Jobs page
  };

  return (
    <div
      className={`lg:w-[350px] flex justify-center px-11 py-14 bg-white border-2 border-solid w-full h-[530px] ${borderStyle}`}
      data-cy="solutionsCard"
    >
      <div className="flex flex-col justify-between w-full">
        <Icon
          path={icons[props.icon]}
          size={3}
          color="disabled"
          className="fill-primary-orange"
        />
        <p className="text-xs font-bold md:text-lg">{props.title}</p>
        <p className="text-mobsm md:text-xs">
          {props.solutionsCardDescription}
        </p>
        <div
          onMouseEnter={() =>
            changeBorderStyle(
              "border-primary-orange outline-primary-orange outline outline-1"
            )
          }
          onMouseLeave={() => changeBorderStyle("border-primary-purple")}
        >
          <Button
            primary={true}
            label="Saiba mais"
            onClick={goToSolutionPage}
          />
        </div>
      </div>
    </div>
  );
};

export default SolutionsCard;
