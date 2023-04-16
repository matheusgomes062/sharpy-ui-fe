import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AnimatedNumber from "../components/AnimatedNumber";

export default {
  title: "Animated/AnimatedNumber",
  component: AnimatedNumber,
} as ComponentMeta<typeof AnimatedNumber>;

const Template: ComponentStory<typeof AnimatedNumber> = (args) => (
  <AnimatedNumber {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 0,
};

export const SmallValue = Template.bind({});
SmallValue.args = {
  value: 5,
};

export const LargeValue = Template.bind({});
LargeValue.args = {
  value: 1000,
};

export const StepValue = Template.bind({});
StepValue.args = {
  value: 100,
  step: 5,
};
