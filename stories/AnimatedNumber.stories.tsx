import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AnimatedNumber from "../components/AnimatedNumber";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Animated/AnimatedNumber",
  component: AnimatedNumber,
} as ComponentMeta<typeof AnimatedNumber>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AnimatedNumber> = (args) => (
  <AnimatedNumber {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  value: 100
};
