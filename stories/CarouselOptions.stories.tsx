import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Solutions from "../data/Solutions";
import CarouselOption from "../components/CarouselOptions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "General/CarouselOption",
  component: CarouselOption,
} as ComponentMeta<typeof CarouselOption>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CarouselOption> = (args) => (
  <CarouselOption {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  allOptions: Solutions,
  selectedOption: {
    icon: "Devices",
    title: "Aplicações personalizadas",
    shortDescription:
      "Nesta solução, cuidamos de todo processo de desenvolvimento de soluções.",
  },
  handleCallback: () => true
};
