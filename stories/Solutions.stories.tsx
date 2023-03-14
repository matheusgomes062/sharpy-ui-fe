import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Solutions from "../components/Solutions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Solutions/Solutions",
  component: Solutions,
} as ComponentMeta<typeof Solutions>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Solutions> = (args) => (
  <Solutions {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  solutions: [
    {
      title: "Aplicações personalizadas",
      icon: "Devices",
      solutionsCardDescription:
        "Nesse modelo de serviço cuidamos de todo processo de desenvolvimento de soluções desde o ponto zero até a entrega em produção, nesse caso alocamos um time totalmente interno que atuarão nas frentes de agilidade, produto, design e desenvolvimento.",
    },
    {
      title: "Consultoria em desenvolvimento",
      icon: "Integration",
      solutionsCardDescription:
        "Nesse modelo alocamos consultores sharpy dentro dos clientes para atender demandas técnicas.",
    },
    {
      title: "Soluções Sharpy",
      icon: "Screenshot",
      solutionsCardDescription:
        "Aqui teremos soluções comuns a pronta entrega que podem ser provisionadas para utilização a critério do cliente",
    },
  ],
};
