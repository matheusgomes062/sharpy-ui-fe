import { FunctionComponent, Key } from "react";

interface CarouselPaginationProps {
  allOptions: any[];
  selectedOption: any;
  handleCallback: Function;
}

const CarouselPagination: FunctionComponent<CarouselPaginationProps> = (props: any) => {

  const colorElement = (option: any) => JSON.stringify(props.selectedOption) === JSON.stringify(option) ? "orange" : "gray";


  const emitSelectedOption = (option: any) => {
    props.handleCallback(option);
  }

  return (
    <div className="flex justify-start mt-8 props" data-cy="carouselOptions">
      {props.allOptions.map((option: any, index: Key | null | undefined) => (
        <span
          key={index}
          className={`w-5 h-5 mr-4 cursor-pointer bg-primary-${colorElement(
            option
          )}`}
          onClick={() => emitSelectedOption(option)}
        ></span>
      ))}
    </div>
  );
};

export default CarouselPagination;
