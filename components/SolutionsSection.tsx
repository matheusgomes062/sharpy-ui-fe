import { FunctionComponent, useState } from "react";
import SolutionsCard from "./SolutionsCard";
import SectionTitle from "./SectionTitle";
import CarouselPagination from "./CarouselPagination";
import ISolutionsSectionProps from "types/SolutionsSectionProps";
import useTouchEvent from "../hooks/useTouchEvent";

const SolutionsSection: FunctionComponent<ISolutionsSectionProps> = ({ ...props }) => {
  const [selectedPage, setSelectedPage] = useState(0);

  const handleSelectedPage = (index: number) => setSelectedPage(index);

  const { handleTouchStart, handleTouchEnd } = useTouchEvent(handleSelectedPage, selectedPage, props.solutions.length);

  return (
    <div className="w-full bg-primary-purple" data-cy="solutionSection">
      <div
        className="flex justify-center w-full p-4 overflow-hidden"
        {...props}
      >
        <div className="flex flex-col justify-center w-full max-w-6xl">
          <div className="my-14">
            <SectionTitle
              sectionTitle={props.sectionTitle}
              description={props.description}
              mode={props.mode}
            />
          </div>
          <div className="hidden lg:flex">
            <div className="flex justify-between w-full mb-10">
              {props.solutions.map((solution, index) => (
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
                  {props.solutions.map((solution, index) => (
                    <div key={index} className="flex-shrink-0 w-full">
                      <SolutionsCard {...solution} />
                    </div>
                  ))}
                </div>
              </div>
              <CarouselPagination
                selectedPage={selectedPage}
                numberOfPages={props.solutions.length}
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
