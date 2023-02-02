import IButtonProps from "./ButtonProps";
import IGenericTitle from "./GenericTitle";
import ISectionTitleProps from "./SectionTitleProps";

export default interface IAboutUs extends IButtonProps, IGenericTitle, ISectionTitleProps {
  shortDescription: string;
}