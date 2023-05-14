import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Markdown from "../components/Markdown";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "General/Markdown",
  component: Markdown,
} as ComponentMeta<typeof Markdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Markdown> = (args) => (
  <Markdown {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  content: "# Hello, World!",
};
