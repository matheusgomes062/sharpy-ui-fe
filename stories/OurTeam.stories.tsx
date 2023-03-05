import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import OurTeam from "../components/OurTeam";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "AboutUs/OurTeam",
  component: OurTeam,
} as ComponentMeta<typeof OurTeam>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OurTeam> = (args) => <OurTeam {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  fontStyle: "font-bold",
  genericTitle: "Nosso Time",
  hasIcon: false,
  ourTeam: [
    {
      name: "Siqueira",
      position: "Backend Developer",
      src: "bg-[url('/CarouselImg2.jpg')]",
    },
    {
      name: "Rambo",
      position: "Backend Developer",
      src: "bg-[url('/CarouselImg2.jpg')]",
    },
    {
      name: "Gomes",
      position: "Backend Developer",
      src: "bg-[url('/CarouselImg2.jpg')]",
    },
    {
      name: "João",
      position: "Front end Developer",
      src: "bg-[url('/CarouselImg2.jpg')]",
    },
    {
      name: "Pedro",
      position: "Front end Developer",
      src: "bg-[url('/CarouselImg2.jpg')]",
    },
    {
      name: "Vitor",
      position: "Front end Developer",
      src: "bg-[url('/CarouselImg2.jpg')]",
    },
  ],
};
