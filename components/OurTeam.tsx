import { FunctionComponent, useState, useEffect } from "react";
import GenericTitle from "./GenericTitle";
import IOurTeamProps from "types/OurTeamProps";
import CarouselPagination from "./CarouselPagination";

const CreateNewOurTeam = (ourTeam: Array<{src: string; name: string; position: string;}>) => {
  console.log(ourTeam);
  const newOurTeam = [];
  const { length } = ourTeam;
  const numSubArrays = Math.ceil(length / 6);

  for (let i = 0; i < numSubArrays; i++) {
    const startIndex = i * 6;
    const subArray = ourTeam.slice(startIndex, startIndex + 6);
    newOurTeam.push(subArray);
  }

  return newOurTeam;
};

const OurTeam: FunctionComponent<IOurTeamProps> = ({
  genericTitle,
  hasIcon,
  ourTeam,
  fontStyle,
}) => {
  const [selectedLargeScreen, setSelectedLargeScreen] = useState(0);
  const [selectedSmallScreen, setSelectedSmallScreen] = useState(0);
  const [groupOfPerson, setGroupOfPerson] = useState(Array<{src: string; name: string; position: string;}>);

  const handleSelectedPageLargeScreen = (index: number) => setSelectedLargeScreen(index);

  const handleSelectedPageSmallScreen = (index: number) => setSelectedSmallScreen(index);

  useEffect(() => {
    const newOurTeam = CreateNewOurTeam(ourTeam);
    setGroupOfPerson(newOurTeam[selectedLargeScreen]);
  }, [ourTeam, selectedLargeScreen]);
  
  return (
    <div className="flex justify-center w-full" data-cy="our-team">
      <div className="flex flex-col justify-center w-full max-w-6xl p-4">
        <GenericTitle
          genericTitle={genericTitle}
          fontStyle={fontStyle}
          hasIcon={hasIcon}
        />

        <div className="hidden w-full mb-24 md:flex md:flex-col">
          <div className="grid content-center w-full grid-cols-3 justify-items-start">
            {groupOfPerson.map((person, index) => {
              return (
                <div key={index} className="flex flex-col items-center mt-16 text-center">
                  <div className={`${person.src} bg-no-repeat bg-center bg-cover rounded-full w-[210px] h-[210px]`} /> 
                  <div className="text-xs font-bold">{person.name}</div>
                  <div className="font-normal text-xxs">{person.position}</div>
                </div>
              )
            })}
          </div>
          <CarouselPagination
            numberOfPages={CreateNewOurTeam(ourTeam).length}
            selectedPage={selectedLargeScreen}
            handleCallback={handleSelectedPageLargeScreen}
          />
        </div>

        <div className="flex flex-col mb-10 md:hidden">
          <div className="grid grid-cols-1">
            <div className="flex items-center mt-16 text-start">
              <div className={`${ourTeam[selectedSmallScreen].src} bg-no-repeat bg-center bg-cover rounded-full w-[126px] h-[126px]`} /> 
              <div className="ml-5">
                <div className="font-semibold text-mobbase">{ourTeam[selectedSmallScreen].name}</div>
                <div className="font-normal text-mobxs">{ourTeam[selectedSmallScreen].position}</div>
              </div>
            </div>
          </div>
          <CarouselPagination
            numberOfPages={ourTeam.length}
            selectedPage={selectedSmallScreen}
            handleCallback={handleSelectedPageSmallScreen}
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
