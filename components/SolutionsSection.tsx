import { FunctionComponent, useState } from "react";
import SolutionsCard from "./SolutionsCard";
import SectionTitle from "./SectionTitle";
import Pagination from "./Pagination";
import ISolutionsSectionProps from "types/SolutionsSectionProps";
import useTouchEvent from "../hooks/useTouchEvent";

const SolutionsSection: FunctionComponent<ISolutionsSectionProps> = ({ mode, sectionTitle, solutions, description, ...props}) => {
  const [selectedPage, setSelectedPage] = useState(0);

  const handleSelectedPage = (index: number) => setSelectedPage(index);

  const { handleTouchStart, handleTouchEnd } = useTouchEvent(handleSelectedPage, selectedPage, solutions.length);

  return (
    <div className="w-full bg-primary-purple" data-cy="solutionSection">
      <div
        className="flex justify-center w-full p-4 overflow-hidden"
        {...props}
      >
        <div className="flex flex-col justify-center w-full max-w-6xl">
          <div className="my-14">
            <SectionTitle
              sectionTitle={sectionTitle}
              description={description}
              mode={mode}
            />
          </div>
          <div className="hidden lg:flex">
            <div className="flex justify-between w-full mb-10">
              {solutions.map((solution, index) => (
                <div key={index}>
                  <SolutionsCard {...solution} />
                </div>
              ))}
            </div>
          </div>
          <div
            className="justify-center mb-14 lg:hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="w-full">
              <div className="w-full overflow-hidden ">
                <div
                  className="flex transition-transform delay-200"
                  style={{
                    transform: `translateX(${-selectedPage * 100}%)`,
                  }}
                >
                  {solutions.map((solution, index) => (
                    <div key={index} className="flex-shrink-0 w-full">
                      <SolutionsCard {...solution} />
                    </div>
                  ))}
                </div>
              </div>
              <Pagination
                selectedPage={selectedPage}
                numberOfPages={solutions.length}
                handleCallback={handleSelectedPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
