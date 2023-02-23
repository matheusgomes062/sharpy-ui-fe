import ISectionTitleProps from "./SectionTitleProps";
import ISolutionsCardProps from "./SolutionsCardProps";

export default interface ISolutionsSectionProps extends ISectionTitleProps {
  solutions: ISolutionsCardProps[];
}
