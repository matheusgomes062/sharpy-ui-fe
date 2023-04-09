import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AboutUs from "../components/AboutUs";
import AboutUsProps from "types/AboutUsProps";

interface AboutUsStoryProps extends AboutUsProps {}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Pages/AboutUs",
  component: AboutUs,
} as ComponentMeta<typeof AboutUs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AboutUs> = (args: AboutUsStoryProps) => (
  <AboutUs {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  sectionTitle: "Quem Somos",
  darkMode: true,
  showPrimaryButton: true,
  primaryButtonLabel: "Saiba Mais",
  genericTitle: "Nosso Time",
  shortDescription:
    "Somos uma Software House com propósitos que vão além da tecnologia.",
  showIcon: true,
};
