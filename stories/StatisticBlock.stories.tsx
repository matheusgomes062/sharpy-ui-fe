import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import StatisticBlock from "../components/StatisticBlock";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Statistic/StatisticBlock",
  component: StatisticBlock,
} as ComponentMeta<typeof StatisticBlock>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StatisticBlock> = (args) => (
  <StatisticBlock {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  statistic: [
    [78, "Lorem ipsum"],
    [91, "Lorem ipsum"],
    [57, "Lorem ipsum"],
  ]
};
