import { FunctionComponent, useState } from "react";
import SolutionsCard from "./SolutionsCard";
import SectionTitle from "./SectionTitle";
import SolutionsCardProps from "../types/SolutionsCardProps";
import CarouselPagination from "./CarouselPagination";
import ISolutionsSectionProps from "types/SolutionsSectionProps";

const SolutionsSection: FunctionComponent<ISolutionsSectionProps> = ({ ...props }) => {
  const [selectedPage, setSelectedPage] = useState(0);

  const handleSelectedPage = (index: number) => setSelectedPage(index);

  return (
    <div className="w-full bg-primary-purple" data-cy="solutionSection">
      <div
        className="max-w-6xl p-8 m-auto md:max-xl:w-9/12 md:max-lg:w-11/12"
        {...props}
      >
        <div className="my-14">
          <SectionTitle
            sectionTitle={props.sectionTitle}
            description={props.description}
            mode={props.mode}
          />
        </div>
        <div className="hidden lg:flex">
          <div className="flex flex-wrap justify-between w-full mb-10">
            {props.solutions.map((solution, index) => (
              <div className="mb-12" key={index}>
                <SolutionsCard {...solution} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mb-14 lg:hidden">
          <div className="flex-col w-full">
            <SolutionsCard {...props.solutions[selectedPage]} />
            <CarouselPagination
              selectedPage={selectedPage}
              numberOfPages={props.solutions.length}
              handleCallback={handleSelectedPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
