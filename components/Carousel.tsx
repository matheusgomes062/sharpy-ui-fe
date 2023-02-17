import { FunctionComponent, useState } from "react";
import Button from "./Button";
import CarouselPagination from "./CarouselPagination";
import ICarousel from "types/CarouselProps";

const carouselContent = [
  ["/CarouselMessage1.svg", "/CarouselImg1.jpg"],
  ["/CarouselMessage2.svg", "/CarouselImg2.jpg"],
  ["/CarouselMessage3.svg", "/CarouselImg3.jpg"],
];

const Carousel: FunctionComponent<ICarousel> = (props) => {
  const [selectedPage, setSelectedPage] = useState(0);

  const handleSelectedPage = (index: number) => setSelectedPage(index);

  return (
    <div className="m-auto 4k:max-w-6xl" data-cy="carousel">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-black">
          <div className="flex flex-col max-w-[400px] h-[400px] p-7 m-auto justify-between">
            <img src={carouselContent[selectedPage][0]} className="h-[200px]" />
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
          <img
            src={carouselContent[selectedPage][1]}
            className="w-full h-auto lg:h-[400px]"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
