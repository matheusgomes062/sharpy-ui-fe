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
  sectionTitle: "Carreiras",
  description: "Somos uma Software House com propósitos que vão além da tecnologia. Por isso, nosso time é multidisciplinar.",
  mode: "dark",
  primary: true,
  size: "base",
  label: "Ver Mais",
};
