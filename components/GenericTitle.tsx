import { FunctionComponent } from "react";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import IGenericTitle from "types/GenericTitle";

const GenericTitle: FunctionComponent<IGenericTitle> = ({ ...props }) => {
  const redirect = () => {
    // TODO: redirect to about page
    return 
  }
  
  return (
    <div data-cy="generic-title">
      <div className="flex cursor-pointer group" onClick={redirect}>
        <h1 className={`${props.fontStyle} mr-3`}>{props.genericTitle}</h1>
        <Icon path={mdiArrowRight} size={1} color="disabled" className="fill-primary-purple group-hover:fill-primary-orange"/>
      </div>
      <div className="h-[7px] mt-4 w-14 bg-primary-orange" />
    </div>
  );
};

export default GenericTitle;
