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
  fontStyle: "font-bold md:text-sm",
  genericTitle: "Nosso Time",
  hasIcon: false,
  ourTeam: [
    {
      name: "Mateus Siqueira Carneiro",
      position: "Backend Developer",
      src: "bg-[url('/siqueirao.jpeg')]",
    },
    {
      name: "Matheus Gomes de Paula",
      position: "Frontend Developer",
      src: "bg-[url('/gomes.jpg')]",
    },
    {
      name: "Jhonatan Lourenço Rambo",
      position: "Frontend Developer",
      src: "bg-[url('/rambo.jpeg')] ",
    },
    {
      name: "João",
      position: "Front end Developer",
      src: "bg-[url('/carousel-img-2.jpg')]",
    },
    {
      name: "Pedro",
      position: "Front end Developer",
      src: "bg-[url('/carousel-img-2.jpg')]",
    },
    {
      name: "Vitor",
      position: "Front end Developer",
      src: "bg-[url('/carousel-img-2.jpg')]",
    },
    {
      name: "Pedro",
      position: "Front end Developer",
      src: "bg-[url('/carousel-img-2.jpg')]",
    },
    {
      name: "Vitor",
      position: "Front end Developer",
      src: "bg-[url('/carousel-img-2.jpg')]",
    },
  ],
};
