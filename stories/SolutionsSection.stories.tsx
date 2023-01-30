import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SolutionsSection from "../components/SolutionsSection";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Solutions/SolutionSection",
  component: SolutionsSection,
} as ComponentMeta<typeof SolutionsSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SolutionsSection> = (args) => (
  <SolutionsSection {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  // title: 'Analista de dados',
  icon: "Devices",
  title: "Aplicações personalizadas",
  shortDescription:
    "Nesta solução, cuidamos de todo processo de desenvolvimento de soluções.",
  buttonPlaceholder: "Saiba mais",
};
