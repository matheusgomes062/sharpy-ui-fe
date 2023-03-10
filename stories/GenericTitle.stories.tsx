import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GenericTitle from "../components/GenericTitle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "General/GenericTitle",
  component: GenericTitle,
} as ComponentMeta<typeof GenericTitle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GenericTitle> = (args) => <GenericTitle {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  genericTitle: "Lorem Ipsum",
  fontStyle: "font-bold",
  hasIcon: true
};
