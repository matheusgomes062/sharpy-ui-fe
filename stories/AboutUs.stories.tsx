import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AboutUs from "../components/AboutUs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "AboutUs/AboutUs",
  component: AboutUs,
} as ComponentMeta<typeof AboutUs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AboutUs> = (args) => (
  <AboutUs {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  sectionTitle: "Quem Somos",
  mode: "dark",
  primary: true,
  label: "Saiba Mais",
  genericTitle: "Nosso Time",
  shortDescription: "Somos uma Software House com propósitos que vão além da tecnologia.",
  hasIcon: true,
};
