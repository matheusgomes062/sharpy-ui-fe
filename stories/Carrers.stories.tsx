import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Carrers from "../components/Carrers";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Carrers/Carrers",
  component: Carrers,
} as ComponentMeta<typeof Carrers>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Carrers> = (args) => <Carrers {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  size: "sm",
  label: "Lorem Ipsum",
  description: "Lorem Ipsum",
  mode: "dark",
};
