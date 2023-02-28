import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SolutionsCard from "../components/SolutionsCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Cards/SolutionsCard",
  component: SolutionsCard,
} as ComponentMeta<typeof SolutionsCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SolutionsCard> = (args) => (
  <SolutionsCard {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  icon: "Devices",
  title: "Aplicações personalizadas",
  solutionsCardDescription: "Nesta solução, cuidamos de todo processo de desenvolvimento de soluções."
};
