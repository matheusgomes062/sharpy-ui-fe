import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SolutionsSection from "../components/SolutionsSection";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Solutions/SolutionSection",
  component: SolutionsSection,
} as ComponentMeta<typeof SolutionsSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SolutionsSection> = (args) => (
  <SolutionsSection {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  sectionTitle: "Soluções",
  description: "A Sharpy acredita que a tecnologia é uma ferramenta de melhoria contínua na vida e na rotina de pessoas e empresas.",
  mode: "light",
  solutions: [
    {
      icon: "Devices",
      title: "Aplicações personalizadas",
      solutionsCardDescription:
        "Nesta solução, cuidamos de todo processo de desenvolvimento de soluções.",
    },
    {
      icon: "Integration",
      title: "Consultoria em desenvolvimento",
      solutionsCardDescription:
        "Nesse modelo alocamos consultores sharpy dentro do seu negócio.",
    },
    {
      icon: "Screenshot",
      title: "Soluções Sharpy",
      solutionsCardDescription:
        "Nesta opção teremos soluções comuns a pronta entrega.",
    },
  ]
};
