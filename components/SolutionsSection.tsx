import { FunctionComponent, useState } from "react";
import SolutionsCard from "./SolutionsCard";
import SectionTitle from "./SectionTitle";
import Solutions from "../data/Solutions";
import SolutionsCardProps from "../types/SolutionsCardProps";
import CarouselOptions from "./CarouselOptions";

const SolutionsSection: FunctionComponent = ({ ...props }) => {
  const [selectedSolution, setSelectedSolution] = useState<SolutionsCardProps>(Solutions[0]);

  const handleSelectedSolution = (section: SolutionsCardProps) => setSelectedSolution(section)

  return (
    <div className="w-full bg-primary-purple" data-cy="solutionSection">
      <div
        className="max-w-6xl p-8 m-auto md:max-xl:w-9/12 md:max-lg:w-11/12"
        {...props}
      >
        <div className="mt-14">
          <SectionTitle
            title="Soluções"
            description="A Sharpy acredita que a tecnologia é uma ferramenta de melhoria contínua na vida e na rotina de pessoas e empresas."
            mode="light"
          />
        </div>
        <div className="hidden lg:flex">
          <div className="flex flex-wrap justify-between w-full mb-10">
            {Solutions.map((solution, index) => (
              <div className="mb-12" key={index}>
                <SolutionsCard {...solution} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mb-14 lg:hidden">
          <div className="flex-col w-full">
            <SolutionsCard {...selectedSolution} />
            <CarouselOptions
              allOptions={Solutions}
              selectedOption={selectedSolution}
              handleCallback={handleSelectedSolution}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
