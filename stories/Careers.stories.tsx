import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Careers from "../components/Careers";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Careers/Careers",
  component: Careers,
} as ComponentMeta<typeof Careers>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Careers> = (args) => (
  <Careers {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  jobOpportunities: [
    {
      id: 0,
      jobOpportunityCardTitle: "Desenvolvedor(a) de aplicações Frontend",
      country: "Brasil",
      modality: "Remoto",
    },
    {
      id: 1,
      jobOpportunityCardTitle: "Desenvolvedor(a) de aplicações FullStack",
      country: "Brasil",
      modality: "Remoto",
    },
    {
      id: 2,
      jobOpportunityCardTitle: "Gerente de Produto",
      country: "Brasil",
      modality: "Remoto",
    },
    {
      id: 2,
      jobOpportunityCardTitle: "Analista de dados",
      country: "Brasil",
      modality: "Remoto",
    },
    {
      id: 3,
      jobOpportunityCardTitle: "Desenvolvedor(a) de aplicações FullStack",
      country: "Brasil",
      modality: "Remoto",
    },
    {
      id: 4,
      jobOpportunityCardTitle: "Desenvolvedor(a) de aplicações Frontend",
      country: "Brasil",
      modality: "Remoto",
    },
    {
      id: 5,
      jobOpportunityCardTitle: "Desenvolvedor(a) de aplicações FullStack",
      country: "Brasil",
      modality: "Remoto",
    },
    {
      id: 6,
      jobOpportunityCardTitle: "Gerente de Produto",
      country: "Brasil",
      modality: "Remoto",
    },
    {
      id: 7,
      jobOpportunityCardTitle: "Analista de dados",
      country: "Brasil",
      modality: "Remoto",
    },
    {
      id: 8,
      jobOpportunityCardTitle: "Desenvolvedor(a) de aplicações FullStack",
      country: "Brasil",
      modality: "Remoto",
    },
    {
      id: 8,
      jobOpportunityCardTitle: "Desenvolvedor(a) de aplicações Frontend",
      country: "Brasil",
      modality: "Remoto",
    },
    {
      id: 9,
      jobOpportunityCardTitle: "Desenvolvedor(a) de aplicações FullStack",
      country: "Brasil",
      modality: "Remoto",
    },
    {
      id: 10,
      jobOpportunityCardTitle: "Gerente de Produto",
      country: "Brasil",
      modality: "Remoto",
    },
    {
      id: 11,
      jobOpportunityCardTitle: "Analista de dados",
      country: "Brasil",
      modality: "Remoto",
    },
    {
      id: 12,
      jobOpportunityCardTitle: "Desenvolvedor(a) de aplicações FullStack",
      country: "Brasil",
      modality: "Remoto",
    },
  ],
  dropDownPlaceholder: "Filtrar por Área",
  inputPlaceholder: "Buscar Oportunidade",
};
