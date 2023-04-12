import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import JobDescription from "../components/JobDescription";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Jobs/JobDescription",
  component: JobDescription,
} as ComponentMeta<typeof JobDescription>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof JobDescription> = (args) => <JobDescription {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  sectionTitleDescription: "Analista de dados",
  companyDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod in at eros, aliquam quis ornare faucibus. Metus volutpat, semper et sit volutpat iaculis. Non, penatibus quis eros cursus sit diam facilisi pellentesque. Vitae pharetra est nulla laoreet. Diam diam pulvinar ornare felis, dignissim praese",
  label: "Aplicar",
  primary: true,
};
