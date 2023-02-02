import { FunctionComponent } from "react";
import IGenericTitle from "types/GenericTitle";

const GenericTitle: FunctionComponent<IGenericTitle> = ({ ...props }) => {
  return (
    <div data-cy="generic-title">
      <h1 className={`${props.fontStyle}`}>{props.genericTitle}</h1>
      <div className="h-3 mt-4 w-14 bg-primary-orange" />
    </div>
  );
};

export default GenericTitle;
