import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CareersSection from "../components/CareersSection";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Careers/CareersSection",
  component: CareersSection,
} as ComponentMeta<typeof CareersSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CareersSection> = (args) => <CareersSection {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  sectionTitle: "Carreiras",
  description:
    "Somos uma Software House com propósitos que vão além da tecnologia. Por isso, nosso time é multidisciplinar.",
  mode: "dark",
  primary: true,
  label: "Ver Mais",
};
