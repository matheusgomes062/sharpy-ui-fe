import { FunctionComponent } from "react";
import IPaginationProps from "types/PaginationProps";

const Pagination: FunctionComponent<IPaginationProps> = (props) => {
  const colorElement = (index: number) => props.selectedPage === index ? "orange" : "gray";

  const emitSelectedPage = (index: number) => props.handleCallback(index);

  return (
    <div className="flex justify-start mt-8 props" data-cy="carouselOptions">
      {Array.from({ length: props.numberOfPages }, (_, i) => i).map((index) => (
        <span
          key={index}
          className={`w-5 h-5 mr-4 cursor-pointer bg-primary-${colorElement(
            index
          )}`}
          onClick={() => emitSelectedPage(index)}
        ></span>
      ))}
    </div>
  );
};

export default Pagination;
