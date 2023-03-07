import { FunctionComponent, useState, useEffect } from "react";
import GenericTitle from "./GenericTitle";
import IOurTeamProps from "types/OurTeamProps";
import Pagination from "./Pagination";
import useTouchEvent from "../hooks/useTouchEvent";

const CreateGroupOfPerson = (ourTeam: Array<{src: string; name: string; position: string;}>) => {
  const newOurTeam = [];
  const numSubArrays = Math.ceil(ourTeam.length / 6);

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
  
  const [selectedPageLargeScreen, setSelectedPageLargeScreen] = useState(0);
  const [selectedPageSmallScreen, setSelectedPageSmallScreen] = useState(0);

  const handleSelectedPageLargeScreen = (index: number) => setSelectedPageLargeScreen(index);
  const handleSelectedPageSmallScreen = (index: number) => setSelectedPageSmallScreen(index);

  const [groupOfPerson, setGroupOfPerson] = useState(Array<{src: string; name: string; position: string;}>);

  const { handleTouchStart, handleTouchEnd } = useTouchEvent(handleSelectedPageSmallScreen, selectedPageSmallScreen, ourTeam.length);
  
  useEffect(() => {
    const groupOfPerson = CreateGroupOfPerson(ourTeam);
    setGroupOfPerson(groupOfPerson[selectedPageLargeScreen]);
  }, [ourTeam, selectedPageLargeScreen]);
  
  return (
    <div className="flex justify-center w-full" data-cy="ourTeam">
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
          <Pagination
            numberOfPages={CreateGroupOfPerson(ourTeam).length}
            selectedPage={selectedPageLargeScreen}
            handleCallback={handleSelectedPageLargeScreen}
          />
        </div>

        <div
          className="flex flex-col mb-10 md:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          <div className="w-full h-full mt-8 overflow-hidden md:hidden">
            <div
              className="flex items-center w-full h-full transition-transform delay-200 text-start"
              style={{
                transform: `translateX(${-selectedPageSmallScreen * 100}%)`,
              }}
            >
              {ourTeam.map((person, index) => {
                return (
                  <div key={index} className="flex items-center flex-shrink-0 w-full h-full">
                    <div className={`${person.src} bg-no-repeat bg-center bg-cover rounded-full w-[126px] h-[126px] flex-shrink-0`} /> 
                    <div className="ml-5">
                      <div className="font-semibold text-mobbase">{person.name}</div>
                      <div className="font-normal text-mobxs">{person.position}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Pagination
            numberOfPages={ourTeam.length}
            selectedPage={selectedPageSmallScreen}
            handleCallback={handleSelectedPageSmallScreen}
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
