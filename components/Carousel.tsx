import { FunctionComponent, useState, useEffect } from "react";
import Button from "./Button";
import CarouselPagination from "./CarouselPagination";
import ICarousel from "types/CarouselProps";
import useTouchEvent from "../hooks/useTouchEvent";

const carouselContent = [
  ["/CarouselMessage1.svg", "/CarouselImg1.jpg"],
  ["/CarouselMessage2.svg", "/CarouselImg2.jpg"],
  ["/CarouselMessage3.svg", "/CarouselImg3.jpg"],
];

const Carousel: FunctionComponent<ICarousel> = (props) => {
  const [selectedPage, setSelectedPage] = useState(0);

  const handleSelectedPage = (index: number) => setSelectedPage(index);
  
  const { handleTouchStart, handleTouchEnd } = useTouchEvent(handleSelectedPage, selectedPage, carouselContent.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedPage((prevSelectedPage) => prevSelectedPage === carouselContent.length - 1 ? 0 : prevSelectedPage + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div
      className="m-auto 4k:max-w-6xl"
      data-cy="carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-black">
          <div className="flex flex-col max-w-[400px] h-[400px] p-7 m-auto justify-between">
            <div className="w-full overflow-hidden">
              <div
                className="flex transition-transform delay-200 w-full h-[200px] align-middle"
                style={{
                  transform: `translateX(${-selectedPage * 100}%)`,
                }}
              >
                {carouselContent.map((item, index) => {
                  return (
                    <img
                      key={index}
                      src={item[0]}
                      className={`h-full w-full flex-shrink-0`}
                    />
                  );
                })}
              </div>
            </div>

            <div className="max-w-md">
              <Button
                label={props.label}
                primary={props.primary}
                size={props.size}
              />
            </div>
            <CarouselPagination
              handleCallback={handleSelectedPage}
              selectedPage={selectedPage}
              numberOfPages={3}
            />
          </div>
        </div>
        <div className="hidden bg-primary-orange md:flex">
          <div className="w-full overflow-hidden">
            <div
              className="flex w-full h-full transition-transform delay-200"
              style={{
                transform: `translateX(${-selectedPage * 100}%)`,
              }}
            >
              {carouselContent.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item[1]}
                    className={`h-full lg:h-[400px] w-full flex-shrink-0 object-cover`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
