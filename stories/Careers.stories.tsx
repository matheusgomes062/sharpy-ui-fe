import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Careers from "../components/Careers";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Careers/Careers",
  component: Careers,
} as ComponentMeta<typeof Careers>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Careers> = (args) => (
  <Careers {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  dropDownPlaceholder: "Filtrar por Área",
  inputPlaceholder: "Buscar Oportunidade",
};
